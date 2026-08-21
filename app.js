/* ====================== PATTERNS ======================
   Small inline SVG textures nodding to each culture's craft
   tradition, used purely as abstract backdrop texture. */
const PATTERNS = {
  igbo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><g stroke='%233f9d6b' stroke-width='2' fill='none'><path d='M0 30 Q15 10 30 30 T60 30'/><path d='M0 45 Q15 25 30 45 T60 45'/><path d='M0 15 Q15 -5 30 15 T60 15'/></g></svg>`,
  yoruba: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><g fill='%23b23e78'><circle cx='8' cy='8' r='3'/><circle cx='24' cy='8' r='3'/><circle cx='40' cy='8' r='3'/><circle cx='16' cy='24' r='3'/><circle cx='32' cy='24' r='3'/><circle cx='8' cy='40' r='3'/><circle cx='24' cy='40' r='3'/><circle cx='40' cy='40' r='3'/></g></svg>`,
  hausa: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><g stroke='%23d1682f' stroke-width='2' fill='none'><rect x='8' y='8' width='40' height='40' transform='rotate(45 28 28)'/><rect x='18' y='18' width='20' height='20' transform='rotate(45 28 28)'/></g></svg>`
};

/* ====================== VOCAB DATA ======================
   Each course has 10 topical lessons. Question sets are
   generated from this vocab at runtime (see buildLessonQuestions). */
const COURSES = {
  igbo: {
    name: "Igbo", native: "Asụsụ Igbo", color: "igbo", glyph: "Ị", speechLang: "ig-NG",
    lessons: [
      { title: "Greetings", vocab: [
        { native: "Ndewo", en: "Hello" }, { native: "Kedu", en: "How are you" },
        { native: "Daalu", en: "Thank you" }, { native: "Ee", en: "Yes" },
        { native: "Mba", en: "No" }, { native: "Ọzọ", en: "See you again" }
      ]},
      { title: "Numbers 1–5", vocab: [
        { native: "Otu", en: "One" }, { native: "Abụọ", en: "Two" }, { native: "Atọ", en: "Three" },
        { native: "Anọ", en: "Four" }, { native: "Ise", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Isii", en: "Six" }, { native: "Asaa", en: "Seven" }, { native: "Asatọ", en: "Eight" },
        { native: "Itoolu", en: "Nine" }, { native: "Iri", en: "Ten" }
      ]},
      { title: "Family", vocab: [
        { native: "Nne", en: "Mother" }, { native: "Nna", en: "Father" }, { native: "Nwa", en: "Child" },
        { native: "Nwanne", en: "Sibling" }, { native: "Di", en: "Husband" }, { native: "Nwunye", en: "Wife" }
      ]},
      { title: "Colors", vocab: [
        { native: "Ọcha", en: "White" }, { native: "Oji", en: "Black" }, { native: "Uhie", en: "Red" },
        { native: "Odo", en: "Yellow" }, { native: "Anụnụ", en: "Blue" }
      ]},
      { title: "Time words", vocab: [
        { native: "Taa", en: "Today" }, { native: "Echi", en: "Tomorrow" }, { native: "Ụnyaahụ", en: "Yesterday" },
        { native: "Ụtụtụ", en: "Morning" }, { native: "Abalị", en: "Night" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "Biko", en: "Please" }, { native: "Ndo", en: "Sorry" }, { native: "Nnọọ", en: "Welcome" },
        { native: "Kedu aha gị", en: "What is your name" }, { native: "Daalu nke ukwuu", en: "Thank you very much" }
      ]},
      { title: "Food", vocab: [
        { native: "Nri", en: "Food" }, { native: "Mmiri", en: "Water" }, { native: "Ji", en: "Yam" },
        { native: "Ọka", en: "Corn" }, { native: "Anụ", en: "Meat" }, { native: "Akpu", en: "Cassava" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Isi", en: "Head" }, { native: "Aka", en: "Hand" }, { native: "Ụkwụ", en: "Leg" },
        { native: "Anya", en: "Eye" }, { native: "Ọnụ", en: "Mouth" }, { native: "Ntị", en: "Ear" }
      ]},
      { title: "Animals", vocab: [
        { native: "Nkịta", en: "Dog" }, { native: "Nwamba", en: "Cat" }, { native: "Ehi", en: "Cow" },
        { native: "Ọkụkọ", en: "Chicken" }, { native: "Aturu", en: "Sheep" }, { native: "Enyi", en: "Elephant" }
      ]}
    ]
  },
  yoruba: {
    name: "Yorùbá", native: "Èdè Yorùbá", color: "yoruba", glyph: "Ẹ", speechLang: "yo-NG",
    lessons: [
      { title: "Greetings", vocab: [
        { native: "Bawo ni", en: "Hello" }, { native: "E kaaro", en: "Good morning" },
        { native: "E se", en: "Thank you" }, { native: "Beeni", en: "Yes" },
        { native: "Rara", en: "No" }, { native: "O daabo", en: "Goodbye" }
      ]},
      { title: "Numbers 1–5", vocab: [
        { native: "Ọkan", en: "One" }, { native: "Meji", en: "Two" }, { native: "Mẹta", en: "Three" },
        { native: "Mẹrin", en: "Four" }, { native: "Marun", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Mẹfa", en: "Six" }, { native: "Meje", en: "Seven" }, { native: "Mẹjọ", en: "Eight" },
        { native: "Mẹsan", en: "Nine" }, { native: "Mẹwa", en: "Ten" }
      ]},
      { title: "Family", vocab: [
        { native: "Iya", en: "Mother" }, { native: "Baba", en: "Father" }, { native: "Ọmọ", en: "Child" },
        { native: "Arakunrin", en: "Brother" }, { native: "Arabinrin", en: "Sister" }, { native: "Ẹbi", en: "Family" }
      ]},
      { title: "Colors", vocab: [
        { native: "Funfun", en: "White" }, { native: "Dudu", en: "Black" }, { native: "Pupa", en: "Red" },
        { native: "Ofeefee", en: "Yellow" }, { native: "Alawọ ewe", en: "Green" }
      ]},
      { title: "Time words", vocab: [
        { native: "Oni", en: "Today" }, { native: "Ọla", en: "Tomorrow" }, { native: "Ana", en: "Yesterday" },
        { native: "Owuro", en: "Morning" }, { native: "Alẹ", en: "Night" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "Jọwọ", en: "Please" }, { native: "Ma binu", en: "Sorry" }, { native: "Ẹ kaabọ", en: "Welcome" },
        { native: "Kini oruko re", en: "What is your name" }, { native: "O se pupo", en: "Thank you very much" }
      ]},
      { title: "Food", vocab: [
        { native: "Ounje", en: "Food" }, { native: "Omi", en: "Water" }, { native: "Iṣu", en: "Yam" },
        { native: "Agbado", en: "Corn" }, { native: "Ẹran", en: "Meat" }, { native: "Ẹja", en: "Fish" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Ori", en: "Head" }, { native: "Ọwọ", en: "Hand" }, { native: "Ẹsẹ", en: "Leg" },
        { native: "Oju", en: "Eye" }, { native: "Ẹnu", en: "Mouth" }, { native: "Etí", en: "Ear" }
      ]},
      { title: "Animals", vocab: [
        { native: "Aja", en: "Dog" }, { native: "Ologbo", en: "Cat" }, { native: "Malu", en: "Cow" },
        { native: "Adiye", en: "Chicken" }, { native: "Agutan", en: "Sheep" }, { native: "Erin", en: "Elephant" }
      ]}
    ]
  },
  hausa: {
    name: "Hausa", native: "Harshen Hausa", color: "hausa", glyph: "H", speechLang: "ha-NG",
    lessons: [
      { title: "Greetings", vocab: [
        { native: "Sannu", en: "Hello" }, { native: "Ina kwana", en: "Good morning" },
        { native: "Na gode", en: "Thank you" }, { native: "Ee", en: "Yes" },
        { native: "A'a", en: "No" }, { native: "Sai anjima", en: "Goodbye" }
      ]},
      { title: "Numbers 1–5", vocab: [
        { native: "Daya", en: "One" }, { native: "Biyu", en: "Two" }, { native: "Uku", en: "Three" },
        { native: "Hudu", en: "Four" }, { native: "Biyar", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Shida", en: "Six" }, { native: "Bakwai", en: "Seven" }, { native: "Takwas", en: "Eight" },
        { native: "Tara", en: "Nine" }, { native: "Goma", en: "Ten" }
      ]},
      { title: "Family", vocab: [
        { native: "Uwa", en: "Mother" }, { native: "Uba", en: "Father" }, { native: "Da", en: "Son" },
        { native: "Diya", en: "Daughter" }, { native: "Yaya", en: "Sibling" }, { native: "Iyali", en: "Family" }
      ]},
      { title: "Colors", vocab: [
        { native: "Fari", en: "White" }, { native: "Baki", en: "Black" }, { native: "Ja", en: "Red" },
        { native: "Rawaya", en: "Yellow" }, { native: "Kore", en: "Green" }
      ]},
      { title: "Time words", vocab: [
        { native: "Yau", en: "Today" }, { native: "Gobe", en: "Tomorrow" }, { native: "Jiya", en: "Yesterday" },
        { native: "Safe", en: "Morning" }, { native: "Dare", en: "Night" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "Don Allah", en: "Please" }, { native: "Yi hakuri", en: "Sorry" }, { native: "Barka da zuwa", en: "Welcome" },
        { native: "Menene sunanka", en: "What is your name" }, { native: "Na gode sosai", en: "Thank you very much" }
      ]},
      { title: "Food", vocab: [
        { native: "Abinci", en: "Food" }, { native: "Ruwa", en: "Water" }, { native: "Doya", en: "Yam" },
        { native: "Masara", en: "Corn" }, { native: "Nama", en: "Meat" }, { native: "Kifi", en: "Fish" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Kai", en: "Head" }, { native: "Hannu", en: "Hand" }, { native: "Kafa", en: "Leg" },
        { native: "Ido", en: "Eye" }, { native: "Baki", en: "Mouth" }, { native: "Kunne", en: "Ear" }
      ]},
      { title: "Animals", vocab: [
        { native: "Kare", en: "Dog" }, { native: "Kyanwa", en: "Cat" }, { native: "Saniya", en: "Cow" },
        { native: "Kaza", en: "Chicken" }, { native: "Tunkiya", en: "Sheep" }, { native: "Giwa", en: "Elephant" }
      ]}
    ]
  }
};

const BADGES = [
  { id: "first-lesson", name: "First steps", icon: "\u{1F476}", test: s => s.lessonsCompleted >= 1, target: { type: "lessons", value: 1 } },
  { id: "three-lessons", name: "Warming up", icon: "\u{1F525}", test: s => s.lessonsCompleted >= 3, target: { type: "lessons", value: 3 } },
  { id: "ten-lessons", name: "Committed", icon: "\u{1F4DA}", test: s => s.lessonsCompleted >= 10, target: { type: "lessons", value: 10 } },
  { id: "streak-3", name: "3-day streak", icon: "\u{26A1}", test: s => s.streak >= 3, target: { type: "streak", value: 3 } },
  { id: "perfect", name: "Perfect lesson", icon: "\u{2B50}", test: s => s.hasPerfect },
  { id: "polyglot", name: "Polyglot", icon: "\u{1F30D}", test: s => s.languagesStarted >= 3 },
  { id: "course-clear", name: "Course cleared", icon: "\u{1F3C1}", test: s => s.courseCleared },
  { id: "xp-100", name: "Century club", icon: "\u{1F3C6}", test: s => s.xp >= 100, target: { type: "xp", value: 100 } },
  { id: "xp-300", name: "XP machine", icon: "\u{1F4AA}", test: s => s.xp >= 300, target: { type: "xp", value: 300 } }
];

/* ====================== HELPERS ====================== */
function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }
function normalizeStr(s){
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
}
function speak(text, lang){
  if(!("speechSynthesis" in window)) return;
  try{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }catch(e){ /* speech not available — fail silently */ }
}

/* ====================== QUESTION GENERATION ====================== */
function poolFor(course){ return course.lessons.flatMap(l => l.vocab); }

function makeMcQuestion(v, course){
  const distractors = shuffle(poolFor(course).filter(p => p.en !== v.en)).slice(0, 3).map(p => p.en);
  return {
    type: "mc",
    prompt: `What does "${v.native}" mean?`,
    speakText: v.native,
    options: shuffle([v.en, ...distractors]),
    answer: v.en,
    _vocab: v
  };
}
function makeTypeQuestion(v, course){
  return {
    type: "type",
    prompt: `Type the ${course.name} word for "${v.en}"`,
    answerDisplay: v.native,
    accept: [normalizeStr(v.native)],
    _vocab: v
  };
}
function makeListenQuestion(v, course){
  const distractors = shuffle(poolFor(course).filter(p => p.en !== v.en)).slice(0, 3).map(p => p.en);
  return {
    type: "listen",
    prompt: "Listen, then choose the meaning",
    speakText: v.native,
    options: shuffle([v.en, ...distractors]),
    answer: v.en,
    _vocab: v
  };
}
function makeMatchQuestion(pairs){
  return { type: "match", prompt: "Match each word to its meaning", pairs: pairs.map(p => ({ native: p.native, en: p.en })) };
}

/* Rebuilds a fresh version of a missed question (new distractor shuffle) for the retry queue. */
function requeueQuestion(q, course){
  let fresh;
  if(q.type === "mc") fresh = makeMcQuestion(q._vocab, course);
  else if(q.type === "type") fresh = makeTypeQuestion(q._vocab, course);
  else if(q.type === "listen") fresh = makeListenQuestion(q._vocab, course);
  else fresh = makeMatchQuestion(q.pairs);
  fresh.isRetry = true;
  return fresh;
}

function buildLessonQuestions(course, lessonIndex){
  const lesson = course.lessons[lessonIndex];
  const vocab = lesson.vocab;
  const order = shuffle(vocab.map((_, i) => i));
  const mcCount = Math.min(3, vocab.length);
  const mcIdx = order.slice(0, mcCount);
  const typeIdx = order[mcCount] ?? order[0];
  const listenIdx = order[mcCount + 1] ?? order[order.length - 1];

  const questions = [];
  mcIdx.forEach(i => questions.push(makeMcQuestion(vocab[i], course)));
  questions.push(makeTypeQuestion(vocab[typeIdx], course));
  questions.push(makeListenQuestion(vocab[listenIdx], course));
  questions.push(makeMatchQuestion(vocab));
  return questions;
}

/* ====================== STATE ====================== */
// TESTING_MODE keeps hearts effectively unlimited so lessons can be
// tested repeatedly without getting locked out. Set to false to restore
// the normal 5-heart limit before launch.
const TESTING_MODE = true;
const STARTING_HEARTS = TESTING_MODE ? 999 : 5;

const DEFAULT_STATE = {
  xp: 0,
  streak: 0,
  lastPlayedDate: null,
  hearts: STARTING_HEARTS,
  maxHearts: STARTING_HEARTS,
  completed: { igbo: [], yoruba: [], hausa: [] },
  earnedBadges: [],
  hasPerfect: false,
  practiceDates: [],
  lastActiveCourse: null
};

function loadState(){
  try{
    const raw = localStorage.getItem("itan-state");
    let merged;
    if(!raw) merged = structuredClone(DEFAULT_STATE);
    else merged = Object.assign(structuredClone(DEFAULT_STATE), JSON.parse(raw));
    if(TESTING_MODE) merged.hearts = STARTING_HEARTS; // ignore any low heart count saved before testing mode was on
    return merged;
  }catch(e){ return structuredClone(DEFAULT_STATE); }
}
function saveState(){ localStorage.setItem("itan-state", JSON.stringify(state)); }

let state = loadState();
let session = null;

function todayStr(){ return new Date().toISOString().slice(0, 10); }

function touchStreak(){
  const today = todayStr();
  if(state.lastPlayedDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = (state.lastPlayedDate === yesterday) ? state.streak + 1 : 1;
  state.lastPlayedDate = today;
  if(!state.practiceDates.includes(today)) state.practiceDates.push(today);
  if(state.practiceDates.length > 60) state.practiceDates = state.practiceDates.slice(-60);
}

function lessonsCompletedCount(){ return Object.values(state.completed).reduce((a, b) => a + b.length, 0); }
function languagesStartedCount(){ return Object.values(state.completed).filter(arr => arr.length > 0).length; }
function anyCourseCleared(){
  return Object.keys(COURSES).some(k => state.completed[k].length >= COURSES[k].lessons.length);
}

function checkBadges(){
  const snap = {
    lessonsCompleted: lessonsCompletedCount(),
    streak: state.streak,
    hasPerfect: state.hasPerfect,
    languagesStarted: languagesStartedCount(),
    courseCleared: anyCourseCleared(),
    xp: state.xp
  };
  BADGES.forEach(b => {
    if(!state.earnedBadges.includes(b.id) && b.test(snap)) state.earnedBadges.push(b.id);
  });
}

/* ====================== RENDER: HOME ====================== */
function renderHome(){
  document.getElementById("stat-streak").textContent = state.streak;
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-hearts").textContent = state.hearts;

  renderContinueCard();
  renderWeekCal();

  const trackSelect = document.getElementById("track-select");
  trackSelect.innerHTML = "";
  Object.keys(COURSES).forEach(key => {
    const course = COURSES[key];
    const done = state.completed[key].length;
    const total = course.lessons.length;
    const pct = Math.round((done / total) * 100);
    const card = document.createElement("button");
    card.className = `track-card ${course.color}`;
    card.innerHTML = `
      <div class="track-pattern" style="background-image:url(&quot;${PATTERNS[key]}&quot;); background-size:60px;"></div>
      <div class="track-glyph">${course.glyph}</div>
      <div class="track-body">
        <p class="track-name">${course.name}</p>
        <p class="track-native">${course.native}</p>
        <div class="track-progress-track"><div class="track-progress-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="track-meta">${done}/${total}<br>lessons</div>
    `;
    card.addEventListener("click", () => openPath(key));
    trackSelect.appendChild(card);
  });

  const badgesList = document.getElementById("badges-list");
  badgesList.innerHTML = "";
  BADGES.forEach(b => {
    const earned = state.earnedBadges.includes(b.id);
    const el = document.createElement("div");
    el.className = "badge" + (earned ? " earned" : "");
    el.innerHTML = `<div class="badge-icon">${b.icon}</div><div class="badge-name">${b.name}</div>`;
    badgesList.appendChild(el);
  });
  renderBadgeTeaser();

  renderLeaderboard();
}

function ordinal(n){
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function renderLeaderboard(){
  const others = [
    { name: "Ada O.", xp: 180 }, { name: "Tunde A.", xp: 140 }, { name: "Amina B.", xp: 95 },
    { name: "Chiamaka N.", xp: 60 }, { name: "Yusuf K.", xp: 25 }
  ];
  const rows = [...others, { name: "You", xp: state.xp, isYou: true }].sort((a, b) => b.xp - a.xp);
  const list = document.getElementById("leaderboard");
  list.innerHTML = "";
  rows.forEach((r, i) => {
    const li = document.createElement("li");
    if(r.isYou) li.classList.add("is-you");
    li.innerHTML = `<span class="lb-rank">${i + 1}</span><span class="lb-name">${r.name}</span><span class="lb-xp">${r.xp} XP</span>`;
    list.appendChild(li);
  });

  const youIndex = rows.findIndex(r => r.isYou);
  const gapEl = document.getElementById("lb-gap");
  if(youIndex === 0) gapEl.textContent = "You're in the lead this week!";
  else{
    const gap = rows[youIndex - 1].xp - state.xp;
    gapEl.textContent = `You're ${gap} XP from ${ordinal(youIndex)} place.`;
  }
}

/* ---- continue-your-path card ---- */
function pickContinueCourse(){
  if(state.lastActiveCourse && state.completed[state.lastActiveCourse].length < COURSES[state.lastActiveCourse].lessons.length){
    return state.lastActiveCourse;
  }
  const found = Object.keys(COURSES).find(k => state.completed[k].length < COURSES[k].lessons.length);
  return found || Object.keys(COURSES)[0];
}

function renderContinueCard(){
  const card = document.getElementById("continue-card");
  const key = pickContinueCourse();
  const course = COURSES[key];
  const doneCount = state.completed[key].length;

  if(doneCount >= course.lessons.length){
    card.className = "continue-card";
    card.innerHTML = `
      <p class="continue-kicker">All caught up</p>
      <h2 class="continue-title">Every lesson is complete \u{1F389}</h2>
      <p class="continue-sub" style="margin-bottom:0;">Revisit any language below to keep sharpening your skills.</p>
    `;
    return;
  }

  const lesson = course.lessons[doneCount];
  card.className = `continue-card ${course.color}`;
  card.innerHTML = `
    <p class="continue-kicker">Continue your path</p>
    <h2 class="continue-title">${course.name} \u00b7 ${lesson.title}</h2>
    <p class="continue-sub">Lesson ${doneCount + 1} of ${course.lessons.length}</p>
    <button class="continue-btn" id="continue-btn">Start lesson \u2192</button>
  `;
  document.getElementById("continue-btn").addEventListener("click", () => startLesson(key, doneCount));
}

/* ---- weekly streak calendar ---- */
function renderWeekCal(){
  const container = document.getElementById("week-cal");
  container.innerHTML = "";
  const today = new Date();
  const dow = today.getDay(); // 0=Sun..6=Sat
  const mondayOffset = (dow === 0) ? -6 : 1 - dow;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const todayS = todayStr();

  for(let i = 0; i < 7; i++){
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const ds = d.toISOString().slice(0, 10);
    const practiced = state.practiceDates.includes(ds);
    const isToday = ds === todayS;
    const isFuture = ds > todayS;
    const chip = document.createElement("div");
    chip.className = "day-chip" + (practiced ? " done" : "") + (isToday ? " today" : "") + (isFuture ? " future" : "");
    chip.innerHTML = `<span class="day-label">${labels[i]}</span><span class="day-dot">${practiced ? "\u2713" : ""}</span>`;
    container.appendChild(chip);
  }
  document.getElementById("week-cal-streak-label").textContent = state.streak > 0 ? `\u{1F525} ${state.streak}-day streak` : "";
}

/* ---- badge progress teaser ---- */
function renderBadgeTeaser(){
  const el = document.getElementById("badge-teaser");
  const currentVals = { lessons: lessonsCompletedCount(), streak: state.streak, xp: state.xp };
  let best = null, bestGap = Infinity;
  BADGES.forEach(b => {
    if(state.earnedBadges.includes(b.id) || !b.target) return;
    const gap = b.target.value - currentVals[b.target.type];
    if(gap > 0 && gap < bestGap){ bestGap = gap; best = b; }
  });
  if(!best){ el.textContent = ""; return; }
  const unitLabel = { lessons: `lesson${bestGap === 1 ? "" : "s"}`, streak: `day${bestGap === 1 ? "" : "s"}`, xp: "XP" }[best.target.type];
  el.textContent = `${bestGap} more ${unitLabel} to earn "${best.name}" ${best.icon}`;
}

/* ====================== RENDER: PATH ====================== */
let currentCourseKey = null;

function openPath(key){
  currentCourseKey = key;
  state.lastActiveCourse = key;
  saveState();
  const course = COURSES[key];
  document.getElementById("path-lang-name").textContent = course.name;
  document.getElementById("path-lang-native").textContent = course.native;
  document.getElementById("path-hearts").textContent = state.hearts;
  const patternEl = document.getElementById("path-pattern");
  patternEl.style.backgroundImage = `url("${PATTERNS[key]}")`;
  patternEl.style.backgroundSize = "60px";

  const tabsEl = document.getElementById("lang-tabs");
  tabsEl.innerHTML = "";
  Object.keys(COURSES).forEach(k => {
    const c = COURSES[k];
    const tab = document.createElement("button");
    tab.className = `lang-tab ${c.color}` + (k === key ? " active" : "");
    tab.innerHTML = `<span class="lang-tab-glyph">${c.glyph}</span><span class="lang-tab-label">${c.name}</span>`;
    tab.addEventListener("click", () => openPath(k));
    tabsEl.appendChild(tab);
  });

  const pathEl = document.getElementById("lesson-path");
  pathEl.innerHTML = "";
  const doneCount = state.completed[key].length;
  course.lessons.forEach((lesson, i) => {
    const isDone = i < doneCount;
    const isNext = i === doneCount;
    const locked = !isDone && !isNext;
    const node = document.createElement("button");
    node.className = "lesson-node" + (locked ? " locked" : "") + (isDone ? " complete" : "");
    node.style.background = locked ? "" : `var(--${course.color})`;
    node.style.position = "relative";
    node.innerHTML = locked
      ? `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`
      : `${i + 1}`;
    if(!locked) node.addEventListener("click", () => startLesson(key, i));
    const label = document.createElement("div");
    label.className = "lesson-node-label";
    label.textContent = lesson.title;
    node.appendChild(label);
    pathEl.appendChild(node);
  });

  showScreen("path");
}

/* ====================== LESSON SESSION ====================== */
function startLesson(courseKey, lessonIndex){
  if(state.hearts <= 0){
    alert("You're out of hearts. Come back after a short break, or refresh to reset this demo.");
    return;
  }
  state.lastActiveCourse = courseKey;
  saveState();
  session = {
    courseKey, lessonIndex,
    questions: buildLessonQuestions(COURSES[courseKey], lessonIndex),
    qi: 0,
    correctCount: 0,
    mistakes: 0,
    selected: null,
    answered: false,
    matchState: null
  };
  showScreen("lesson");
  renderQuestion();
}

function resetQuestionUI(){
  document.getElementById("options-grid").classList.remove("hidden");
  document.getElementById("options-grid").innerHTML = "";
  document.getElementById("type-wrap").classList.add("hidden");
  document.getElementById("match-wrap").classList.add("hidden");
  document.getElementById("speaker-btn").classList.add("hidden");
  const feedback = document.getElementById("feedback");
  feedback.classList.add("hidden");
  const checkBtn = document.getElementById("check-btn");
  checkBtn.disabled = true;
  checkBtn.textContent = "Check";
}

function renderQuestion(){
  const q = session.questions[session.qi];
  const course = COURSES[session.courseKey];
  session.selected = null;
  session.answered = false;
  session.matchState = null;
  session.mistakesAtQuestionStart = session.mistakes;

  document.getElementById("lesson-hearts").textContent = state.hearts;
  document.getElementById("lesson-progress").style.width = `${(session.qi / session.questions.length) * 100}%`;

  const kickers = { mc: "Translate", type: "Type it", listen: "Listen", match: "Match" };
  document.getElementById("question-kicker").textContent = (q.isRetry ? "Retry · " : "") + (kickers[q.type] || "Question");
  document.getElementById("question-prompt").textContent = q.prompt;

  resetQuestionUI();

  if(q.type === "mc"){
    const grid = document.getElementById("options-grid");
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => selectOption(btn, opt));
      grid.appendChild(btn);
    });
    if(q.speakText){
      const sBtn = document.getElementById("speaker-btn");
      sBtn.classList.remove("hidden");
      sBtn.onclick = () => speak(q.speakText, course.speechLang);
    }
  }else if(q.type === "listen"){
    const grid = document.getElementById("options-grid");
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => selectOption(btn, opt));
      grid.appendChild(btn);
    });
    const sBtn = document.getElementById("speaker-btn");
    sBtn.classList.remove("hidden");
    sBtn.onclick = () => speak(q.speakText, course.speechLang);
    setTimeout(() => speak(q.speakText, course.speechLang), 350);
  }else if(q.type === "type"){
    document.getElementById("options-grid").classList.add("hidden");
    document.getElementById("type-wrap").classList.remove("hidden");
    const input = document.getElementById("type-input");
    input.value = "";
    input.classList.remove("correct", "incorrect");
    input.disabled = false;
    input.oninput = () => { document.getElementById("check-btn").disabled = input.value.trim() === ""; };
    setTimeout(() => input.focus(), 50);
  }else if(q.type === "match"){
    document.getElementById("options-grid").classList.add("hidden");
    document.getElementById("match-wrap").classList.remove("hidden");
    renderMatch(q, course);
  }
}

function selectOption(btn, value){
  if(session.answered) return;
  [...document.getElementById("options-grid").children].forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  session.selected = value;
  document.getElementById("check-btn").disabled = false;
}

/* ---- match question ---- */
function renderMatch(q, course){
  session.matchState = { matchedCount: 0, total: q.pairs.length, selNativeBtn: null, selEnBtn: null, selNativeIdx: null, selEnIdx: null };
  const nativeCol = document.getElementById("match-native-col");
  const enCol = document.getElementById("match-en-col");
  nativeCol.innerHTML = "";
  enCol.innerHTML = "";
  shuffle(q.pairs.map((p, i) => ({ ...p, idx: i }))).forEach(p => {
    const btn = document.createElement("button");
    btn.className = "match-item";
    btn.textContent = p.native;
    btn.addEventListener("click", () => onMatchClick("native", btn, p.idx, q, course));
    nativeCol.appendChild(btn);
  });
  shuffle(q.pairs.map((p, i) => ({ ...p, idx: i }))).forEach(p => {
    const btn = document.createElement("button");
    btn.className = "match-item";
    btn.textContent = p.en;
    btn.addEventListener("click", () => onMatchClick("en", btn, p.idx, q, course));
    enCol.appendChild(btn);
  });
}

function onMatchClick(side, btn, idx, q, course){
  if(btn.classList.contains("matched")) return;
  const ms = session.matchState;
  if(side === "native"){
    if(ms.selNativeBtn) ms.selNativeBtn.classList.remove("selected");
    ms.selNativeBtn = btn; ms.selNativeIdx = idx; btn.classList.add("selected");
    speak(q.pairs[idx].native, course.speechLang);
  }else{
    if(ms.selEnBtn) ms.selEnBtn.classList.remove("selected");
    ms.selEnBtn = btn; ms.selEnIdx = idx; btn.classList.add("selected");
  }
  if(ms.selNativeBtn && ms.selEnBtn){
    if(ms.selNativeIdx === ms.selEnIdx){
      ms.selNativeBtn.classList.remove("selected"); ms.selNativeBtn.classList.add("matched");
      ms.selEnBtn.classList.remove("selected"); ms.selEnBtn.classList.add("matched");
      ms.matchedCount++;
      ms.selNativeBtn = null; ms.selEnBtn = null;
      if(ms.matchedCount === ms.total){
        session.answered = true;
        session.correctCount++;
        const hadMistake = session.mistakes > session.mistakesAtQuestionStart;
        if(hadMistake) session.questions.push(requeueQuestion(q, course));
        const fb = document.getElementById("feedback");
        fb.className = "feedback ok";
        fb.classList.remove("hidden");
        document.getElementById("feedback-text").textContent = hadMistake ? "All matched — this one will come back around." : "All matched!";
        const checkBtn = document.getElementById("check-btn");
        checkBtn.disabled = false;
        checkBtn.textContent = (session.qi === session.questions.length - 1) ? "Finish" : "Continue";
      }
    }else{
      ms.selNativeBtn.classList.add("wrong");
      ms.selEnBtn.classList.add("wrong");
      state.hearts = Math.max(0, state.hearts - 1);
      document.getElementById("lesson-hearts").textContent = state.hearts;
      session.mistakes++;
      saveState();
      const nBtn = ms.selNativeBtn, eBtn = ms.selEnBtn;
      setTimeout(() => {
        nBtn.classList.remove("selected", "wrong");
        eBtn.classList.remove("selected", "wrong");
      }, 500);
      ms.selNativeBtn = null; ms.selEnBtn = null;
    }
  }
}

/* ---- grading / advance ---- */
function checkAnswer(){
  const q = session.questions[session.qi];

  if(!session.answered){
    let correct = false;

    if(q.type === "mc" || q.type === "listen"){
      if(session.selected == null) return;
      correct = session.selected === q.answer;
      [...document.getElementById("options-grid").children].forEach(b => {
        if(b.textContent === q.answer) b.classList.add("correct");
        else if(b.classList.contains("selected") && !correct) b.classList.add("incorrect");
        b.disabled = true;
      });
    }else if(q.type === "type"){
      const input = document.getElementById("type-input");
      correct = q.accept.includes(normalizeStr(input.value));
      input.classList.add(correct ? "correct" : "incorrect");
      input.disabled = true;
    }else if(q.type === "match"){
      return; // graded via taps; check-btn only reachable once answered
    }

    session.answered = true;
    const fb = document.getElementById("feedback");
    const fbText = document.getElementById("feedback-text");
    fb.classList.remove("hidden");
    if(correct){
      fb.className = "feedback ok";
      fbText.textContent = "Correct!";
      session.correctCount++;
    }else{
      fb.className = "feedback bad";
      const answerText = q.type === "type" ? q.answerDisplay : q.answer;
      fbText.textContent = `Not quite — the answer is "${answerText}". It'll come back around later in the lesson.`;
      session.mistakes++;
      state.hearts = Math.max(0, state.hearts - 1);
      document.getElementById("lesson-hearts").textContent = state.hearts;
      saveState();
      session.questions.push(requeueQuestion(q, COURSES[session.courseKey]));
    }
    document.getElementById("check-btn").textContent = (session.qi === session.questions.length - 1) ? "Finish" : "Continue";
    return;
  }

  // advance
  if(state.hearts <= 0){
    showScreen("path");
    openPath(session.courseKey);
    return;
  }
  session.qi++;
  if(session.qi >= session.questions.length) finishLesson();
  else renderQuestion();
}

function finishLesson(){
  document.getElementById("lesson-progress").style.width = "100%";
  const accuracy = Math.round((session.correctCount / session.questions.length) * 100);
  const xpGain = 10 + (session.mistakes === 0 ? 5 : 0);

  touchStreak();
  state.xp += xpGain;
  if(!state.completed[session.courseKey].includes(session.lessonIndex)){
    state.completed[session.courseKey].push(session.lessonIndex);
  }
  if(session.mistakes === 0) state.hasPerfect = true;
  checkBadges();
  saveState();

  document.getElementById("complete-sub").textContent = `You earned ${xpGain} XP`;
  document.getElementById("complete-xp").textContent = `+${xpGain}`;
  document.getElementById("complete-streak").textContent = state.streak;
  document.getElementById("complete-accuracy").textContent = `${accuracy}%`;
  showScreen("complete");
}

/* ====================== NAV ====================== */
function showScreen(name){
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(`screen-${name}`).classList.remove("hidden");
  window.scrollTo(0, 0);
}

document.getElementById("path-back").addEventListener("click", () => { renderHome(); showScreen("home"); });
document.getElementById("lesson-quit").addEventListener("click", () => {
  if(confirm("Quit this lesson? Your progress on it won't be saved.")){
    if("speechSynthesis" in window) window.speechSynthesis.cancel();
    showScreen("path");
    openPath(session.courseKey);
  }
});
document.getElementById("check-btn").addEventListener("click", checkAnswer);
document.getElementById("complete-continue").addEventListener("click", () => {
  renderHome();
  showScreen("home");
});

/* ====================== INIT ====================== */
renderHome();
showScreen("home");
