// Lingua Naija backend — Phase 1: accounts + server-saved progress.
// Requires two environment variables to be set on your hosting platform:
//   DATABASE_URL  — a PostgreSQL connection string (see README for a free option)
//   JWT_SECRET    — any long random string, used to sign login sessions
const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "dev-only-secret-change-me";
const DATABASE_URL = process.env.DATABASE_URL;

if (!process.env.JWT_SECRET) {
  console.warn("WARNING: JWT_SECRET is not set. Using an insecure default — set a real value in your environment variables before real users sign up.");
}

let pool = null;
if (DATABASE_URL) {
  try {
    pool = new Pool({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } });
  } catch (err) {
    console.warn("Could not create Postgres pool, falling back to in-memory store:", err.message);
  }
} else {
  console.log("DATABASE_URL is not set — running with in-memory database store.");
}

// In-memory fallback store
const inMemoryUsers = new Map();
const inMemoryUsersByUsername = new Map();
const inMemoryProgress = new Map();
let nextUserId = 1;

// Seed initial leaderboard entries in in-memory store
async function seedInMemoryData() {
  const seedUsers = [
    { username: "amaka_og", xp: 340 },
    { username: "tunde_lagos", xp: 280 },
    { username: "chidi_enugu", xp: 230 },
    { username: "aminu_k", xp: 190 },
    { username: "zainab_99", xp: 140 }
  ];
  const dummyHash = await bcrypt.hash("demo1234", 10);
  for (const s of seedUsers) {
    const id = nextUserId++;
    const user = { id, username: s.username, password_hash: dummyHash, created_at: new Date() };
    inMemoryUsers.set(id, user);
    inMemoryUsersByUsername.set(s.username, user);
    const prog = { ...DEFAULT_PROGRESS, xp: s.xp, streak: 3, dailyGoal: 20 };
    inMemoryProgress.set(id, prog);
  }
}
seedInMemoryData().catch(console.error);

const DEFAULT_PROGRESS = {
  xp: 0,
  streak: 0,
  lastPlayedDate: null,
  hearts: 5,
  maxHearts: 5,
  completed: { igbo: [], yoruba: [], hausa: [], edo: [], efik: [], urhobo: [], tiv: [], uvwie: [], isoko: [], ijaw: [] },
  earnedBadges: [],
  hasPerfect: false,
  practiceDates: [],
  lastActiveCourse: null,
  missedWords: [],
  dailyGoal: 20,
  todayXpEarned: 0,
  todayXpDate: null,
  practiceSessionsCompleted: 0,
  longestStreak: 0,
  cultureCompleted: { igbo: false, yoruba: false, hausa: false, edo: false, efik: false, urhobo: false, tiv: false, uvwie: false, isoko: false, ijaw: false }
};

async function initDb(){
  if (!pool) return;
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT now()
      );
    `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS progress (
        user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
        data JSONB NOT NULL DEFAULT '{}'::jsonb,
        updated_at TIMESTAMP DEFAULT now()
      );
    `);
    console.log("PostgreSQL Database ready.");
  } catch (err) {
    console.warn("Postgres init failed, using in-memory store fallback:", err.message);
    pool = null;
  }
}
initDb().catch(err => {
  console.warn("DB init failed, using in-memory store fallback:", err.message);
  pool = null;
});

function requireDb(req, res, next){
  next();
}

function authMiddleware(req, res, next){
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Not signed in." });
  try{
    const payload = jwt.verify(token, JWT_SECRET);
    req.userId = payload.userId;
    req.username = payload.username;
    next();
  }catch(e){
    return res.status(401).json({ error: "Your session expired. Please log in again." });
  }
}

/* ---- auth ---- */
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password || username.trim().length < 3 || password.length < 4) {
    return res.status(400).json({ error: "Username needs 3+ characters and password needs 4+ characters." });
  }
  const cleanUsername = username.trim().toLowerCase();
  try{
    const hash = await bcrypt.hash(password, 10);
    let userId;
    if (pool) {
      try {
        const result = await pool.query(
          "INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id",
          [cleanUsername, hash]
        );
        userId = result.rows[0].id;
        await pool.query(
          "INSERT INTO progress (user_id, data) VALUES ($1, $2)",
          [userId, JSON.stringify(DEFAULT_PROGRESS)]
        );
      } catch (dbErr) {
        if (dbErr.code === "23505") return res.status(409).json({ error: "That username is already taken." });
        console.warn("Postgres insert failed, saving to in-memory store:", dbErr.message);
        pool = null;
      }
    }

    if (!pool) {
      if (inMemoryUsersByUsername.has(cleanUsername)) {
        return res.status(409).json({ error: "That username is already taken." });
      }
      userId = nextUserId++;
      const user = { id: userId, username: cleanUsername, password_hash: hash, created_at: new Date() };
      inMemoryUsers.set(userId, user);
      inMemoryUsersByUsername.set(cleanUsername, user);
      inMemoryProgress.set(userId, JSON.parse(JSON.stringify(DEFAULT_PROGRESS)));
    }

    const token = jwt.sign({ userId, username: cleanUsername }, JWT_SECRET, { expiresIn: "90d" });
    res.json({ token, username: cleanUsername });
  }catch(e){
    console.error(e);
    res.status(500).json({ error: "Signup failed. Please try again." });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "Username and password are required." });
  const cleanUsername = username.trim().toLowerCase();
  try{
    let user = null;
    if (pool) {
      try {
        const result = await pool.query("SELECT id, username, password_hash FROM users WHERE username = $1", [cleanUsername]);
        if (result.rows.length > 0) user = result.rows[0];
      } catch (dbErr) {
        console.warn("Postgres query failed, checking in-memory store:", dbErr.message);
        pool = null;
      }
    }

    if (!pool) {
      user = inMemoryUsersByUsername.get(cleanUsername) || null;
    }

    if (!user) return res.status(401).json({ error: "Incorrect username or password." });
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: "Incorrect username or password." });

    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: "90d" });
    res.json({ token, username: user.username });
  }catch(e){
    console.error(e);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
});

/* ---- progress ---- */
app.get("/api/progress", authMiddleware, async (req, res) => {
  try{
    if (pool) {
      try {
        const result = await pool.query("SELECT data FROM progress WHERE user_id = $1", [req.userId]);
        if (result.rows.length === 0) {
          await pool.query("INSERT INTO progress (user_id, data) VALUES ($1, $2)", [req.userId, JSON.stringify(DEFAULT_PROGRESS)]);
          return res.json(DEFAULT_PROGRESS);
        }
        return res.json(result.rows[0].data);
      } catch (dbErr) {
        console.warn("Postgres progress fetch failed, falling back to memory:", dbErr.message);
        pool = null;
      }
    }

    let prog = inMemoryProgress.get(req.userId);
    if (!prog) {
      prog = JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
      inMemoryProgress.set(req.userId, prog);
    }
    res.json(prog);
  }catch(e){
    console.error(e);
    res.status(500).json({ error: "Could not load your progress." });
  }
});

app.put("/api/progress", authMiddleware, async (req, res) => {
  try{
    const data = req.body || {};
    if (pool) {
      try {
        await pool.query(
          `INSERT INTO progress (user_id, data, updated_at) VALUES ($1, $2, now())
           ON CONFLICT (user_id) DO UPDATE SET data = $2, updated_at = now()`,
          [req.userId, JSON.stringify(data)]
        );
        return res.json({ ok: true });
      } catch (dbErr) {
        console.warn("Postgres progress save failed, falling back to memory:", dbErr.message);
        pool = null;
      }
    }

    inMemoryProgress.set(req.userId, data);
    res.json({ ok: true });
  }catch(e){
    console.error(e);
    res.status(500).json({ error: "Could not save your progress." });
  }
});

/* ---- leaderboard ---- */
app.get("/api/leaderboard", async (req, res) => {
  try{
    if (pool) {
      try {
        const result = await pool.query(
          `SELECT u.username, COALESCE((p.data->>'xp')::int, 0) AS xp
           FROM users u LEFT JOIN progress p ON p.user_id = u.id
           ORDER BY xp DESC NULLS LAST LIMIT 10`
        );
        return res.json(result.rows);
      } catch (dbErr) {
        console.warn("Postgres leaderboard fetch failed, falling back to memory:", dbErr.message);
        pool = null;
      }
    }

    const list = [];
    for (const [userId, user] of inMemoryUsers.entries()) {
      const prog = inMemoryProgress.get(userId) || {};
      list.push({ username: user.username, xp: Number(prog.xp) || 0 });
    }
    list.sort((a, b) => b.xp - a.xp);
    res.json(list.slice(0, 10));
  }catch(e){
    console.error(e);
    res.status(500).json({ error: "Could not load the leaderboard." });
  }
});

/* ---- static frontend ---- */
app.use(express.static(__dirname));
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => console.log(`Lingua Naija server running on port ${PORT}`));
