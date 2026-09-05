// Lingua Naija backend — Phase 1: accounts + server-saved progress.
// Requires two environment variables to be set on your hosting platform:
//   DATABASE_URL  — a PostgreSQL connection string (see README for a free option)
//   JWT_SECRET    — any long random string, used to sign login sessions
const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const { GoogleGenAI } = require("@google/genai");

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
  notificationsEnabled: true,
  lastActiveTime: Date.now(),
  lastNotifiedTime: 0,
  claimedChests: [],
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
        google_id TEXT,
        email TEXT,
        created_at TIMESTAMP DEFAULT now()
      );
    `);
    await pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS email TEXT;
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

/* ---- Google OAuth ---- */
app.get("/api/auth/google/url", (req, res) => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    return res.json({
      configured: false,
      message: "Google Sign-In is not configured yet. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your environment variables."
    });
  }
  const origin = req.query.origin || `${req.headers["x-forwarded-proto"] || req.protocol}://${req.headers["x-forwarded-host"] || req.get("host")}`;
  const redirectUri = `${origin}/auth/google/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "select_account"
  });

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  res.json({ configured: true, url: authUrl, redirectUri });
});

app.get(["/auth/google/callback", "/auth/google/callback/"], async (req, res) => {
  const { code, error } = req.query;
  if (error || !code) {
    return res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Google Authentication</title><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="font-family:sans-serif; background:#140e0a; color:#f4efe3; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; padding:20px; text-align:center;">
          <div>
            <h2 style="color:#ef4444; margin-bottom:8px;">Sign In Cancelled</h2>
            <p style="color:#cfc5b0;">${error ? String(error) : "No authorization code received."}</p>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'GOOGLE_AUTH_ERROR', error: ${JSON.stringify(error || "Sign in cancelled")} }, '*');
                setTimeout(() => window.close(), 1500);
              }
            </script>
          </div>
        </body>
      </html>
    `);
  }

  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const origin = `${req.headers["x-forwarded-proto"] || req.protocol}://${req.headers["x-forwarded-host"] || req.get("host")}`;
    const redirectUri = `${origin}/auth/google/callback`;

    // 1. Exchange code with Google
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code: String(code),
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code"
      })
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      throw new Error(tokenData.error_description || tokenData.error || "Failed to exchange authorization token with Google.");
    }

    // 2. Retrieve user profile info
    const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });
    const userData = await userRes.json();
    if (!userRes.ok || !userData.sub) {
      throw new Error("Failed to load user profile from Google.");
    }

    const googleId = userData.sub;
    const email = (userData.email || "").toLowerCase();
    const name = userData.name || userData.given_name || "Learner";

    // Generate clean username from email or name
    let cleanUsername = (email ? email.split("@")[0] : name)
      .toLowerCase()
      .replace(/[^a-z0-9_]/g, "_")
      .slice(0, 18);
    if (cleanUsername.length < 3) cleanUsername = "learner_" + cleanUsername;

    let userId;
    if (pool) {
      try {
        const existing = await pool.query(
          "SELECT id, username FROM users WHERE google_id = $1 OR (email IS NOT NULL AND email = $2)",
          [googleId, email]
        );
        if (existing.rows.length > 0) {
          userId = existing.rows[0].id;
          cleanUsername = existing.rows[0].username;
        } else {
          // Check username availability
          const nameCheck = await pool.query("SELECT id FROM users WHERE username = $1", [cleanUsername]);
          if (nameCheck.rows.length > 0) {
            cleanUsername = `${cleanUsername}_${Math.floor(100 + Math.random() * 900)}`;
          }
          const dummyHash = await bcrypt.hash(googleId + Math.random(), 10);
          const insertRes = await pool.query(
            "INSERT INTO users (username, password_hash, google_id, email) VALUES ($1, $2, $3, $4) RETURNING id, username",
            [cleanUsername, dummyHash, googleId, email]
          );
          userId = insertRes.rows[0].id;
          cleanUsername = insertRes.rows[0].username;
          await pool.query("INSERT INTO progress (user_id, data) VALUES ($1, $2)", [userId, JSON.stringify(DEFAULT_PROGRESS)]);
        }
      } catch (dbErr) {
        console.warn("Postgres Google auth failed, falling back to memory:", dbErr.message);
        pool = null;
      }
    }

    if (!pool) {
      let existingUser = null;
      for (const u of inMemoryUsers.values()) {
        if (u.google_id === googleId || (email && u.email === email)) {
          existingUser = u;
          break;
        }
      }
      if (existingUser) {
        userId = existingUser.id;
        cleanUsername = existingUser.username;
      } else {
        if (inMemoryUsersByUsername.has(cleanUsername)) {
          cleanUsername = `${cleanUsername}_${Math.floor(100 + Math.random() * 900)}`;
        }
        userId = nextUserId++;
        const dummyHash = await bcrypt.hash(googleId + Math.random(), 10);
        const newUser = { id: userId, username: cleanUsername, password_hash: dummyHash, google_id: googleId, email, created_at: new Date() };
        inMemoryUsers.set(userId, newUser);
        inMemoryUsersByUsername.set(cleanUsername, newUser);
        inMemoryProgress.set(userId, JSON.parse(JSON.stringify(DEFAULT_PROGRESS)));
      }
    }

    const sessionToken = jwt.sign({ userId, username: cleanUsername }, JWT_SECRET, { expiresIn: "90d" });

    res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Authentication Successful</title><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="font-family:sans-serif; background:#140e0a; color:#f4efe3; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; padding:20px; text-align:center;">
          <div>
            <h2 style="color:#20948b; margin-bottom:8px;">Welcome, ${cleanUsername}!</h2>
            <p style="color:#cfc5b0;">Signing you in to Lingua Naija...</p>
            <script>
              try {
                localStorage.setItem("lingua-token", ${JSON.stringify(sessionToken)});
                localStorage.setItem("lingua-username", ${JSON.stringify(cleanUsername)});
              } catch(e) {}
              if (window.opener) {
                window.opener.postMessage({
                  type: 'GOOGLE_AUTH_SUCCESS',
                  token: ${JSON.stringify(sessionToken)},
                  username: ${JSON.stringify(cleanUsername)}
                }, '*');
                setTimeout(() => window.close(), 300);
              } else {
                window.location.href = '/';
              }
            </script>
          </div>
        </body>
      </html>
    `);
  } catch (err) {
    console.error("Google OAuth error:", err);
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
        <head><title>Authentication Error</title><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="font-family:sans-serif; background:#140e0a; color:#f4efe3; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; padding:20px; text-align:center;">
          <div>
            <h2 style="color:#ef4444; margin-bottom:8px;">Google Sign-In Error</h2>
            <p style="color:#cfc5b0;">${err.message || "An unexpected error occurred."}</p>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'GOOGLE_AUTH_ERROR', error: ${JSON.stringify(err.message || "Authentication failed")} }, '*');
                setTimeout(() => window.close(), 2500);
              }
            </script>
          </div>
        </body>
      </html>
    `);
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

/* ---- Text-to-Speech Engine with Audio Cache ---- */
let geminiAiClient = null;
function getGeminiAi() {
  if (!geminiAiClient && process.env.GEMINI_API_KEY) {
    try {
      geminiAiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: { headers: { "User-Agent": "aistudio-build" } }
      });
    } catch (e) {
      console.warn("Could not initialize GoogleGenAI for TTS:", e.message);
    }
  }
  return geminiAiClient;
}

const AUDIO_CACHE_DIR = path.join(__dirname, ".audio_cache");
if (!fs.existsSync(AUDIO_CACHE_DIR)) {
  try { fs.mkdirSync(AUDIO_CACHE_DIR, { recursive: true }); } catch (e) {}
}

const audioMemoryCache = new Map();

function pcmToWav(pcmBuffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16) {
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = pcmBuffer.length;
  const header = Buffer.alloc(44);

  header.write("RIFF", 0);
  header.writeUInt32LE(dataSize + 36, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

const COURSE_VOICE_MAP = {
  igbo: { voice: "Kore", label: "Igbo (Eastern Tonal Accent)" },
  yoruba: { voice: "Fenrir", label: "Yorùbá (Western Tonal Accent)" },
  hausa: { voice: "Zephyr", label: "Hausa (Northern Sahelian Accent)" },
  edo: { voice: "Kore", label: "Ẹ̀dó Bini (Midwestern Accent)" },
  efik: { voice: "Zephyr", label: "Efịk (Cross River Melody)" },
  urhobo: { voice: "Fenrir", label: "Urhobo (Delta Edoid Accent)" },
  tiv: { voice: "Charon", label: "Tiv (Benue Valley Bantoid Accent)" },
  uvwie: { voice: "Kore", label: "Uvwie (Delta Effurun Accent)" },
  isoko: { voice: "Zephyr", label: "Isoko (Delta Tonal Accent)" },
  ijaw: { voice: "Kore", label: "Ijaw (Niger Delta Izon Accent)" }
};

app.get("/api/tts", async (req, res) => {
  const rawText = (req.query.text || "").trim();
  if (!rawText) {
    return res.status(400).json({ error: "Missing text query parameter." });
  }

  const course = (req.query.course || "").toLowerCase().trim();
  const requestedVoice = (req.query.voice || "").trim();
  const voiceToUse = requestedVoice || (COURSE_VOICE_MAP[course] ? COURSE_VOICE_MAP[course].voice : "Kore");

  // Normalized cache key
  const normalizedKey = `${course}:${voiceToUse}:${rawText.toLowerCase()}`;
  const cacheKey = crypto.createHash("md5").update(normalizedKey).digest("hex") + ".wav";
  const diskPath = path.join(AUDIO_CACHE_DIR, cacheKey);

  // 1. In-memory cache hit
  if (audioMemoryCache.has(cacheKey)) {
    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.send(audioMemoryCache.get(cacheKey));
  }

  // 2. Disk cache hit
  if (fs.existsSync(diskPath)) {
    try {
      const diskBuffer = fs.readFileSync(diskPath);
      audioMemoryCache.set(cacheKey, diskBuffer);
      res.setHeader("Content-Type", "audio/wav");
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      return res.send(diskBuffer);
    } catch (e) {
      console.warn("Error reading cached audio disk file:", e.message);
    }
  }

  // 3. Synthesize via Gemini 3.1 TTS model
  const client = getGeminiAi();
  if (!client) {
    return res.json({ fallback: true, reason: "No GEMINI_API_KEY available" });
  }

  try {
    const ttsResponse = await client.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: rawText }] }],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceToUse }
          }
        }
      }
    });

    const inlineData = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData;
    if (!inlineData || !inlineData.data) {
      return res.json({ fallback: true, reason: "Empty audio payload from TTS" });
    }

    const rawPcm = Buffer.from(inlineData.data, "base64");
    const wavBuffer = pcmToWav(rawPcm, 24000, 1, 16);

    // Save to memory cache & disk cache
    audioMemoryCache.set(cacheKey, wavBuffer);
    try {
      fs.writeFileSync(diskPath, wavBuffer);
    } catch (saveErr) {
      console.warn("Could not write audio to disk cache:", saveErr.message);
    }

    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.send(wavBuffer);
  } catch (err) {
    const isQuota = err.status === 429 || (err.message && err.message.includes("quota"));
    console.warn(`TTS generation notice (${isQuota ? "rate quota reached, using client speech fallback" : err.message})`);
    return res.json({ fallback: true, reason: isQuota ? "quota_exhausted" : "tts_failed" });
  }
});

/* ====================== AI TUTOR & LINGUISTIC ASSISTANT ====================== */

async function generateWithGeminiFallback(client, options) {
  // Use gemini-2.5-flash or gemini-3.8-flash with automatic resilience
  const candidateModels = ["gemini-2.5-flash", "gemini-3.8-flash"];
  let lastErr = null;
  for (const model of candidateModels) {
    try {
      const response = await client.models.generateContent({
        ...options,
        model
      });
      return response;
    } catch (err) {
      lastErr = err;
      console.warn(`Gemini model ${model} temporarily unavailable, trying fallback...`, err.message);
    }
  }
  throw lastErr;
}

// 1. Interactive AI Language Tutor & Roleplay Chat
app.post("/api/ai/chat", async (req, res) => {
  const { messages, language = "igbo", mode = "tutor" } = req.body || {};
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Missing or invalid messages array." });
  }

  const client = getGeminiAi();
  if (!client) {
    return res.status(503).json({
      error: "Gemini AI is not available. Please ensure GEMINI_API_KEY is configured in Settings."
    });
  }

  const langNames = {
    igbo: "Igbo (Asụsụ Igbo)",
    yoruba: "Yorùbá (Èdè Yorùbá)",
    hausa: "Hausa (Harshen Hausa)",
    edo: "Edo / Bini (Ẹ̀dó)",
    efik: "Efịk (Usem Efịk)",
    urhobo: "Urhobo (Ẹvwrẹn Urhobo)",
    tiv: "Tiv (Dzwa Tiv)",
    uvwie: "Uvwie (Ẹvwrẹn Uvwie)",
    isoko: "Isoko (Ẹvẹ Isoko)",
    ijaw: "Ijaw / Izon (Ịjọ)"
  };
  const targetLang = langNames[language.toLowerCase()] || "Nigerian Languages";

  const systemInstruction = `You are "Amina & Chidi", the premier AI Language Tutor and cultural guide for Lingua Naija, specialized in 10 Nigerian languages: Igbo, Yorùbá, Hausa, Edo, Efịk, Urhobo, Tiv, Uvwie, Isoko, and Ijaw.
The learner's current target language is: ${targetLang}.
Active mode: ${mode === "roleplay" ? "Conversational Roleplay & Speaking Practice" : "Grammar, Tones, Culture & Vocabulary Tutor"}.

Guidelines:
1. Orthography & Tone Accuracy: Always use precise diacritics and tone markings (e.g., Yorùbá á/à/a, ẹ, ọ; Igbo ị, ụ, ọ, ṅ; Edo ẹ, ọ; Ijaw ị, ụ).
2. Authenticity & Cultural Warmth: Incorporate authentic Nigerian cultural warmth, respectful addressing (such as elder honorifics like 'E don sir/ma', 'Ọmọba', 'Nna/Nne', 'Malam/Hajiya', 'Oga', 'Anty'), proverbs, and everyday life contexts (markets, family, food, weddings, travel).
3. Structure your response clearly:
   - When speaking in the target language (especially in roleplay):
     * Put the native speech at the top with proper diacritics.
     * Provide the accurate English translation right below.
     * Include a "Cultural & Tone Note" explaining why this phrasing is used, tone guidance (Do-Re-Mi or High/Low), or etiquette tips.
     * Provide 2 to 3 "Try Replying With" options (in native language + English) so the learner can continue the conversation effortlessly.
   - When answering grammar, vocabulary, or cultural questions:
     * Explain clearly, warmly, and concisely without academic jargon.
     * Give practical examples with pronunciation cues.
     * Include a memorable mnemonic or cultural fact.
4. Keep answers encouraging, friendly, and appropriately sized for mobile screens (clean markdown with bolding and bullet points).`;

  try {
    // Format message history for Gemini SDK
    const contents = messages.slice(-10).map(m => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    const response = await generateWithGeminiFallback(client, {
      contents,
      config: {
        systemInstruction
      }
    });

    const reply = response.text || "I am listening! How can I help you practice today?";
    res.json({ reply });
  } catch (err) {
    console.error("Gemini AI Chat Error:", err);
    res.status(500).json({
      error: "Could not generate AI response. Please try again in a moment.",
      details: err.message
    });
  }
});

// 2. In-Lesson AI Question Explainer ("Explain with AI")
app.post("/api/ai/explain", async (req, res) => {
  const { questionText, expectedAnswer, userAnswer, language = "igbo", questionType = "translate" } = req.body || {};

  const client = getGeminiAi();
  if (!client) {
    return res.status(503).json({
      error: "Gemini AI is not available. Please ensure GEMINI_API_KEY is configured."
    });
  }

  const langNames = {
    igbo: "Igbo (Asụsụ Igbo)",
    yoruba: "Yorùbá (Èdè Yorùbá)",
    hausa: "Hausa (Harshen Hausa)",
    edo: "Edo / Bini (Ẹ̀dó)",
    efik: "Efịk (Usem Efịk)",
    urhobo: "Urhobo (Ẹvwrẹn Urhobo)",
    tiv: "Tiv (Dzwa Tiv)",
    uvwie: "Uvwie (Ẹvwrẹn Uvwie)",
    isoko: "Isoko (Ẹvẹ Isoko)",
    ijaw: "Ijaw / Izon (Ịjọ)"
  };
  const targetLang = langNames[language.toLowerCase()] || "Nigerian Language";

  const prompt = `You are the expert Nigerian linguist and pedagogical coach for Lingua Naija.
A learner encountered this exercise in ${targetLang}:
- Question/Prompt: "${questionText}"
- Correct Answer: "${expectedAnswer}"
${userAnswer ? `- Learner's Answer: "${userAnswer}"` : ""}
- Question Format: ${questionType}

Provide a crisp, illuminating explanation formatted as JSON with the following keys:
{
  "breakdown": "A concise word-by-word or root-morpheme breakdown explaining why this is the correct phrasing.",
  "toneAndPhonetics": "Tone guidance (e.g. High/Mid/Low, glides, vowel sub-dots) and pronunciation tip.",
  "culturalContext": "When and how this expression is used in everyday Nigerian life, etiquette, or cultural significance.",
  "mnemonic": "A short, memorable trick or association to remember this easily.",
  "relatedProverbOrPhrase": "A short related popular phrase or proverb in ${targetLang} with its English meaning."
}

Only return valid JSON without markdown wrapping if possible, or standard JSON.`;

  try {
    const response = await generateWithGeminiFallback(client, {
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json"
      }
    });

    let data;
    try {
      data = JSON.parse(response.text);
    } catch (parseErr) {
      // Clean possible backticks
      const clean = response.text.replace(/```json/g, "").replace(/```/g, "").trim();
      data = JSON.parse(clean);
    }
    res.json(data);
  } catch (err) {
    console.error("Gemini Explain Error:", err);
    res.status(500).json({
      error: "Could not generate AI explanation.",
      details: err.message
    });
  }
});

// 3. AI Smart Practice Generator (Sentence & Dialogue creator for Spaced Repetition)
app.post("/api/ai/practice-generator", async (req, res) => {
  const { language = "igbo", words = [], topic = "daily life" } = req.body || {};

  const client = getGeminiAi();
  if (!client) {
    return res.status(503).json({
      error: "Gemini AI is not available. Please ensure GEMINI_API_KEY is configured."
    });
  }

  const wordListStr = words.length > 0 ? words.join(", ") : "greetings, food, family";

  const prompt = `Create 3 authentic, everyday conversational sentences in ${language} incorporating these vocabulary items: [${wordListStr}] around the theme "${topic}".
Return a JSON array of objects:
[
  {
    "native": "Sentence in ${language} with proper diacritics and tone marks",
    "english": "Natural English translation",
    "literal": "Literal word-by-word translation",
    "context": "Short note on when to use it (e.g. greeting an elder, buying at market, morning routine)"
  }
]`;

  try {
    const response = await generateWithGeminiFallback(client, {
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json"
      }
    });

    let items;
    try {
      items = JSON.parse(response.text);
    } catch (pErr) {
      const clean = response.text.replace(/```json/g, "").replace(/```/g, "").trim();
      items = JSON.parse(clean);
    }
    res.json({ sentences: items });
  } catch (err) {
    console.error("Gemini Practice Generator Error:", err);
    res.status(500).json({
      error: "Could not generate practice sentences.",
      details: err.message
    });
  }
});

/* ---- static frontend ---- */
app.use(express.static(__dirname));
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => console.log(`Lingua Naija server running on port ${PORT}`));
