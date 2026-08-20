/* ====================== PATTERNS ======================
   Small inline SVG textures nodding to each culture's craft
   tradition, used purely as abstract backdrop texture. */
const PATTERNS = {
  igbo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><g stroke='%233f9d6b' stroke-width='2' fill='none'><path d='M0 30 Q15 10 30 30 T60 30'/><path d='M0 45 Q15 25 30 45 T60 45'/><path d='M0 15 Q15 -5 30 15 T60 15'/></g></svg>`,
  yoruba: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><g fill='%23b23e78'><circle cx='8' cy='8' r='3'/><circle cx='24' cy='8' r='3'/><circle cx='40' cy='8' r='3'/><circle cx='16' cy='24' r='3'/><circle cx='32' cy='24' r='3'/><circle cx='8' cy='40' r='3'/><circle cx='24' cy='40' r='3'/><circle cx='40' cy='40' r='3'/></g></svg>`,
  hausa: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><g stroke='%23d1682f' stroke-width='2' fill='none'><rect x='8' y='8' width='40' height='40' transform='rotate(45 28 28)'/><rect x='18' y='18' width='20' height='20' transform='rotate(45 28 28)'/></g></svg>`
};

/* ====================== LESSON DATA ====================== */
const COURSES = {
  igbo: {
    name: "Igbo", native: "Asụsụ Igbo", color: "igbo", glyph: "Ị",
    lessons: [
      {
        title: "Greetings",
        questions: [
          { type: "mc", prompt: "How do you say \u201cHello\u201d in Igbo?", options: ["Ndewo", "Daalu", "Mba", "Ọzọ"], answer: "Ndewo" },
          { type: "mc", prompt: "\u201cKedu?\u201d is closest in meaning to:", options: ["Goodbye", "How are you?", "Thank you", "My name is"], answer: "How are you?" },
          { type: "mc", prompt: "How do you say \u201cThank you\u201d in Igbo?", options: ["Daalu", "Ndewo", "Ee", "Nna"], answer: "Daalu" },
          { type: "mc", prompt: "Which word means \u201cYes\u201d?", options: ["Ee", "Mba", "Kedu", "Nne"], answer: "Ee" },
          { type: "mc", prompt: "Which word means \u201cNo\u201d?", options: ["Mba", "Ee", "Daalu", "Ọzọ"], answer: "Mba" }
        ]
      },
      {
        title: "Numbers 1–5",
        questions: [
          { type: "mc", prompt: "What is \u201cOne\u201d in Igbo?", options: ["Otu", "Abụọ", "Atọ", "Ise"], answer: "Otu" },
          { type: "mc", prompt: "What is \u201cTwo\u201d in Igbo?", options: ["Abụọ", "Otu", "Anọ", "Atọ"], answer: "Abụọ" },
          { type: "mc", prompt: "What is \u201cThree\u201d in Igbo?", options: ["Atọ", "Ise", "Otu", "Abụọ"], answer: "Atọ" },
          { type: "mc", prompt: "What is \u201cFour\u201d in Igbo?", options: ["Anọ", "Ise", "Atọ", "Otu"], answer: "Anọ" },
          { type: "mc", prompt: "What is \u201cFive\u201d in Igbo?", options: ["Ise", "Anọ", "Abụọ", "Otu"], answer: "Ise" }
        ]
      },
      {
        title: "Family",
        questions: [
          { type: "mc", prompt: "\u201cNne\u201d means:", options: ["Mother", "Father", "Child", "Sibling"], answer: "Mother" },
          { type: "mc", prompt: "\u201cNna\u201d means:", options: ["Father", "Mother", "Sibling", "Friend"], answer: "Father" },
          { type: "mc", prompt: "\u201cNwa\u201d means:", options: ["Child", "Father", "Mother", "Elder"], answer: "Child" },
          { type: "mc", prompt: "\u201cNwanne\u201d means:", options: ["Sibling", "Child", "Father", "Mother"], answer: "Sibling" },
          { type: "mc", prompt: "Which word means \u201cFamily\u201d?", options: ["Ezinụlọ", "Nwanne", "Nna", "Nne"], answer: "Ezinụlọ" }
        ]
      }
    ]
  },
  yoruba: {
    name: "Yorùbá", native: "Èdè Yorùbá", color: "yoruba", glyph: "Ẹ",
    lessons: [
      {
        title: "Greetings",
        questions: [
          { type: "mc", prompt: "How do you say \u201cHello\u201d in Yorùbá?", options: ["Bawo ni", "E se", "Rara", "O daabo"], answer: "Bawo ni" },
          { type: "mc", prompt: "How do you say \u201cThank you\u201d in Yorùbá?", options: ["E se", "Bawo ni", "Beeni", "Iya"], answer: "E se" },
          { type: "mc", prompt: "Which word means \u201cYes\u201d?", options: ["Beeni", "Rara", "Bawo", "Baba"], answer: "Beeni" },
          { type: "mc", prompt: "Which word means \u201cNo\u201d?", options: ["Rara", "Beeni", "E se", "Kaabo"], answer: "Rara" },
          { type: "mc", prompt: "\u201cO daabo\u201d is used when:", options: ["Saying goodbye", "Asking a question", "Counting", "Greeting a stranger"], answer: "Saying goodbye" }
        ]
      },
      {
        title: "Numbers 1–5",
        questions: [
          { type: "mc", prompt: "What is \u201cOne\u201d in Yorùbá?", options: ["Ọkan", "Meji", "Mẹta", "Marun"], answer: "Ọkan" },
          { type: "mc", prompt: "What is \u201cTwo\u201d in Yorùbá?", options: ["Meji", "Ọkan", "Mẹrin", "Mẹta"], answer: "Meji" },
          { type: "mc", prompt: "What is \u201cThree\u201d in Yorùbá?", options: ["Mẹta", "Marun", "Ọkan", "Meji"], answer: "Mẹta" },
          { type: "mc", prompt: "What is \u201cFour\u201d in Yorùbá?", options: ["Mẹrin", "Marun", "Mẹta", "Ọkan"], answer: "Mẹrin" },
          { type: "mc", prompt: "What is \u201cFive\u201d in Yorùbá?", options: ["Marun", "Mẹrin", "Meji", "Ọkan"], answer: "Marun" }
        ]
      },
      {
        title: "Family",
        questions: [
          { type: "mc", prompt: "\u201cIya\u201d means:", options: ["Mother", "Father", "Sister", "Brother"], answer: "Mother" },
          { type: "mc", prompt: "\u201cBaba\u201d means:", options: ["Father", "Mother", "Sister", "Friend"], answer: "Father" },
          { type: "mc", prompt: "\u201cArakunrin\u201d means:", options: ["Brother", "Sister", "Mother", "Child"], answer: "Brother" },
          { type: "mc", prompt: "\u201cArabinrin\u201d means:", options: ["Sister", "Brother", "Father", "Elder"], answer: "Sister" },
          { type: "mc", prompt: "Which word means \u201cFamily\u201d?", options: ["Ẹbi", "Iya", "Baba", "Ọkan"], answer: "Ẹbi" }
        ]
      }
    ]
  },
  hausa: {
    name: "Hausa", native: "Harshen Hausa", color: "hausa", glyph: "H",
    lessons: [
      {
        title: "Greetings",
        questions: [
          { type: "mc", prompt: "How do you say \u201cHello\u201d in Hausa?", options: ["Sannu", "Na gode", "A'a", "Yauwa"], answer: "Sannu" },
          { type: "mc", prompt: "How do you say \u201cThank you\u201d in Hausa?", options: ["Na gode", "Sannu", "Ee", "Uba"], answer: "Na gode" },
          { type: "mc", prompt: "Which word means \u201cYes\u201d?", options: ["Ee", "A'a", "Sannu", "Uwa"], answer: "Ee" },
          { type: "mc", prompt: "Which word means \u201cNo\u201d?", options: ["A'a", "Ee", "Na gode", "Sannu"], answer: "A'a" },
          { type: "mc", prompt: "\u201cSannu da zuwa\u201d means:", options: ["Welcome", "Goodbye", "Excuse me", "Please"], answer: "Welcome" }
        ]
      },
      {
        title: "Numbers 1–5",
        questions: [
          { type: "mc", prompt: "What is \u201cOne\u201d in Hausa?", options: ["Daya", "Biyu", "Uku", "Biyar"], answer: "Daya" },
          { type: "mc", prompt: "What is \u201cTwo\u201d in Hausa?", options: ["Biyu", "Daya", "Hudu", "Uku"], answer: "Biyu" },
          { type: "mc", prompt: "What is \u201cThree\u201d in Hausa?", options: ["Uku", "Biyar", "Daya", "Biyu"], answer: "Uku" },
          { type: "mc", prompt: "What is \u201cFour\u201d in Hausa?", options: ["Hudu", "Biyar", "Uku", "Daya"], answer: "Hudu" },
          { type: "mc", prompt: "What is \u201cFive\u201d in Hausa?", options: ["Biyar", "Hudu", "Biyu", "Daya"], answer: "Biyar" }
        ]
      },
      {
        title: "Family",
        questions: [
          { type: "mc", prompt: "\u201cUwa\u201d means:", options: ["Mother", "Father", "Child", "Sibling"], answer: "Mother" },
          { type: "mc", prompt: "\u201cUba\u201d means:", options: ["Father", "Mother", "Sister", "Friend"], answer: "Father" },
          { type: "mc", prompt: "\u201cDa\u201d means:", options: ["Son", "Daughter", "Mother", "Elder"], answer: "Son" },
          { type: "mc", prompt: "\u201cYar\u201d means:", options: ["Daughter", "Son", "Father", "Sibling"], answer: "Daughter" },
          { type: "mc", prompt: "Which word means \u201cFamily\u201d?", options: ["Iyali", "Uwa", "Uba", "Daya"], answer: "Iyali" }
        ]
      }
    ]
  }
};

const BADGES = [
  { id: "first-lesson", name: "First steps", icon: "\u{1F476}", test: s => s.lessonsCompleted >= 1 },
  { id: "three-lessons", name: "Warming up", icon: "\u{1F525}", test: s => s.lessonsCompleted >= 3 },
  { id: "streak-3", name: "3-day streak", icon: "\u{26A1}", test: s => s.streak >= 3 },
  { id: "perfect", name: "Perfect lesson", icon: "\u{2B50}", test: s => s.hasPerfect },
  { id: "polyglot", name: "Polyglot", icon: "\u{1F30D}", test: s => s.languagesStarted >= 3 },
  { id: "xp-100", name: "Century club", icon: "\u{1F3C6}", test: s => s.xp >= 100 }
];

/* ====================== STATE ====================== */
const DEFAULT_STATE = {
  xp: 0,
  streak: 0,
  lastPlayedDate: null,
  hearts: 5,
  maxHearts: 5,
  completed: { igbo: [], yoruba: [], hausa: [] },
  earnedBadges: [],
  hasPerfect: false
};

function loadState(){
  try{
    const raw = localStorage.getItem("itan-state");
    if(!raw) return structuredClone(DEFAULT_STATE);
    return Object.assign(structuredClone(DEFAULT_STATE), JSON.parse(raw));
  }catch(e){ return structuredClone(DEFAULT_STATE); }
}
function saveState(){ localStorage.setItem("itan-state", JSON.stringify(state)); }

let state = loadState();
let session = null; // active lesson session

function todayStr(){ return new Date().toISOString().slice(0,10); }

function touchStreak(){
  const today = todayStr();
  if(state.lastPlayedDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
  state.streak = (state.lastPlayedDate === yesterday) ? state.streak + 1 : 1;
  state.lastPlayedDate = today;
}

function lessonsCompletedCount(){
  return Object.values(state.completed).reduce((a,b)=>a+b.length,0);
}
function languagesStartedCount(){
  return Object.values(state.completed).filter(arr => arr.length > 0).length;
}

function checkBadges(){
  const snap = {
    lessonsCompleted: lessonsCompletedCount(),
    streak: state.streak,
    hasPerfect: state.hasPerfect,
    languagesStarted: languagesStartedCount(),
    xp: state.xp
  };
  BADGES.forEach(b => {
    if(!state.earnedBadges.includes(b.id) && b.test(snap)){
      state.earnedBadges.push(b.id);
    }
  });
}

/* ====================== RENDER: HOME ====================== */
function renderHome(){
  document.getElementById("stat-streak").textContent = state.streak;
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-hearts").textContent = state.hearts;

  const trackSelect = document.getElementById("track-select");
  trackSelect.innerHTML = "";
  Object.keys(COURSES).forEach(key => {
    const course = COURSES[key];
    const done = state.completed[key].length;
    const total = course.lessons.length;
    const pct = Math.round((done/total)*100);
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

  renderLeaderboard();
}

function renderLeaderboard(){
  // Local, illustrative leaderboard: a handful of fixed names plus "You" placed by XP.
  const others = [
    { name: "Ada O.", xp: 180 },
    { name: "Tunde A.", xp: 140 },
    { name: "Amina B.", xp: 95 },
    { name: "Chiamaka N.", xp: 60 },
    { name: "Yusuf K.", xp: 25 }
  ];
  const rows = [...others, { name: "You", xp: state.xp, isYou: true }]
    .sort((a,b) => b.xp - a.xp);
  const list = document.getElementById("leaderboard");
  list.innerHTML = "";
  rows.forEach((r, i) => {
    const li = document.createElement("li");
    if(r.isYou) li.classList.add("is-you");
    li.innerHTML = `<span class="lb-rank">${i+1}</span><span class="lb-name">${r.name}</span><span class="lb-xp">${r.xp} XP</span>`;
    list.appendChild(li);
  });
}

/* ====================== RENDER: PATH ====================== */
let currentCourseKey = null;

function openPath(key){
  currentCourseKey = key;
  const course = COURSES[key];
  document.getElementById("path-lang-name").textContent = course.name;
  document.getElementById("path-lang-native").textContent = course.native;
  document.getElementById("path-hearts").textContent = state.hearts;
  const patternEl = document.getElementById("path-pattern");
  patternEl.style.backgroundImage = `url("${PATTERNS[key]}")`;
  patternEl.style.backgroundSize = "60px";

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
    node.innerHTML = locked
      ? `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`
      : `${i+1}`;
    if(!locked){
      node.addEventListener("click", () => startLesson(key, i));
    }
    const label = document.createElement("div");
    label.className = "lesson-node-label";
    label.textContent = lesson.title;
    node.style.position = "relative";
    node.appendChild(Object.assign(document.createElement("span")));
    pathEl.appendChild(node);
    node.appendChild(label);
  });

  showScreen("path");
}

/* ====================== LESSON SESSION ====================== */
function startLesson(courseKey, lessonIndex){
  if(state.hearts <= 0){
    alert("You're out of hearts. Come back after a short break, or refresh to reset this demo.");
    return;
  }
  const lesson = COURSES[courseKey].lessons[lessonIndex];
  session = {
    courseKey, lessonIndex,
    questions: [...lesson.questions],
    qi: 0,
    correctCount: 0,
    mistakes: 0,
    selected: null,
    answered: false
  };
  showScreen("lesson");
  renderQuestion();
}

function renderQuestion(){
  const q = session.questions[session.qi];
  document.getElementById("question-kicker").textContent = "Translate";
  document.getElementById("question-prompt").textContent = q.prompt;
  document.getElementById("lesson-hearts").textContent = state.hearts;
  document.getElementById("lesson-progress").style.width = `${(session.qi/session.questions.length)*100}%`;

  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectOption(btn, opt));
    grid.appendChild(btn);
  });

  session.selected = null;
  session.answered = false;
  document.getElementById("feedback").classList.add("hidden");
  const checkBtn = document.getElementById("check-btn");
  checkBtn.disabled = true;
  checkBtn.textContent = "Check";
}

function selectOption(btn, value){
  if(session.answered) return;
  [...document.getElementById("options-grid").children].forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  session.selected = value;
  document.getElementById("check-btn").disabled = false;
}

function checkAnswer(){
  if(!session.answered){
    if(session.selected == null) return;
    const q = session.questions[session.qi];
    const correct = session.selected === q.answer;
    session.answered = true;

    [...document.getElementById("options-grid").children].forEach(b => {
      if(b.textContent === q.answer) b.classList.add("correct");
      else if(b.classList.contains("selected") && !correct) b.classList.add("incorrect");
      b.disabled = true;
    });

    const fb = document.getElementById("feedback");
    const fbText = document.getElementById("feedback-text");
    fb.classList.remove("hidden");
    if(correct){
      fb.className = "feedback ok";
      fbText.textContent = "Correct!";
      session.correctCount++;
    }else{
      fb.className = "feedback bad";
      fbText.textContent = `Not quite — the answer is "${q.answer}".`;
      session.mistakes++;
      state.hearts = Math.max(0, state.hearts - 1);
      document.getElementById("lesson-hearts").textContent = state.hearts;
      saveState();
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
  if(session.qi >= session.questions.length){
    finishLesson();
  }else{
    renderQuestion();
  }
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
  window.scrollTo(0,0);
}

document.getElementById("path-back").addEventListener("click", () => { renderHome(); showScreen("home"); });
document.getElementById("lesson-quit").addEventListener("click", () => {
  if(confirm("Quit this lesson? Your progress on it won't be saved.")){
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
