/* ====================== PATTERNS & DATA ====================== */
const PATTERNS = {
  igbo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><g stroke='%233f9d6b' stroke-width='2' fill='none'><path d='M0 30 Q15 10 30 30 T60 30'/></g></svg>`,
  yoruba: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><g fill='%23b23e78'><circle cx='8' cy='8' r='3'/></g></svg>`,
  hausa: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><g stroke='%23d1682f' stroke-width='2' fill='none'><rect x='8' y='8' width='40' height='40' transform='rotate(45 28 28)'/></g></svg>`
};

const COURSES = {
  igbo: {
    name: "Igbo", native: "Asụsụ Igbo", color: "igbo", glyph: "Ị", speechLang: "ig-NG",
    lessons: [
      { title: "Greetings", vocab: [{ native: "Ndewo", en: "Hello" }, { native: "Kedu", en: "How are you" }, { native: "Daalu", en: "Thank you" }] },
      { title: "Numbers", vocab: [{ native: "Otu", en: "One" }, { native: "Abụọ", en: "Two" }, { native: "Atọ", en: "Three" }] }
    ]
  },
  yoruba: {
    name: "Yorùbá", native: "Èdè Yorùbá", color: "yoruba", glyph: "Ẹ", speechLang: "yo-NG",
    lessons: [
      { title: "Greetings", vocab: [{ native: "Bawo ni", en: "Hello" }, { native: "E kaaro", en: "Good morning" }, { native: "E se", en: "Thank you" }] }
    ]
  },
  hausa: {
    name: "Hausa", native: "Harshen Hausa", color: "hausa", glyph: "H", speechLang: "ha-NG",
    lessons: [
      { title: "Greetings", vocab: [{ native: "Sannu", en: "Hello" }, { native: "Ina kwana", en: "Good morning" }, { native: "Na gode", en: "Thank you" }] }
    ]
  }
};

const DEFAULT_STATE = {
  xp: 0, streak: 0, hearts: 5, completed: { igbo: [], yoruba: [], hausa: [] }, missedWords: [], dailyGoal: 20, todayXpEarned: 0
};
let state = structuredClone(DEFAULT_STATE);

/* ====================== CORE LOGIC ====================== */

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(`screen-${name}`).classList.remove("hidden");
}

function resetQuestionUI() {
  document.getElementById("options-grid").classList.remove("hidden");
  document.getElementById("options-grid").innerHTML = "";
  document.getElementById("type-wrap").classList.add("hidden");
  document.getElementById("match-wrap").classList.add("hidden");
  document.getElementById("sentence-wrap").classList.add("hidden"); // FIXED
  document.getElementById("speaker-btn").classList.add("hidden");
  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("check-btn").disabled = true;
  document.getElementById("check-btn").textContent = "Check";
}

/* AUTH & INITIALIZATION */
const TOKEN_KEY = "lingua-token";
function getToken() { return localStorage.getItem(TOKEN_KEY); }

async function init() {
  const loader = document.getElementById("loading-overlay");
  
  if(!getToken()){ 
    showScreen("auth");
    if(loader) loader.style.display = "none";
    return; 
  }

  try {
    // Simulating progress fetch (In your real code, this calls your API)
    // await fetchProgress(); 
    renderHome();
    showScreen("home");
  } catch(e) {
    console.error("Init failed", e);
  } finally {
    if(loader) loader.style.display = "none"; // Hide loader when done
  }
}

function renderHome() {
  document.getElementById("stat-streak").textContent = state.streak;
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-hearts").textContent = state.hearts;
  // ... Rest of your renderHome logic ...
}

// Start the app
init();

/* Add your event listeners and other functions below... */
