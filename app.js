/* ====================== PATTERNS ======================
   Small inline SVG textures nodding to each culture's craft
   tradition, used purely as abstract backdrop texture. */
const PATTERNS = {
  igbo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><g stroke='%233f9d6b' stroke-width='2' fill='none'><path d='M0 30 Q15 10 30 30 T60 30'/><path d='M0 45 Q15 25 30 45 T60 45'/><path d='M0 15 Q15 -5 30 15 T60 15'/></g></svg>`,
  yoruba: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><g fill='%23b23e78'><circle cx='8' cy='8' r='3'/><circle cx='24' cy='8' r='3'/><circle cx='40' cy='8' r='3'/><circle cx='16' cy='24' r='3'/><circle cx='32' cy='24' r='3'/><circle cx='8' cy='40' r='3'/><circle cx='24' cy='40' r='3'/><circle cx='40' cy='40' r='3'/></g></svg>`,
  hausa: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><g stroke='%23d1682f' stroke-width='2' fill='none'><rect x='8' y='8' width='40' height='40' transform='rotate(45 28 28)'/><rect x='18' y='18' width='20' height='20' transform='rotate(45 28 28)'/></g></svg>`,
  edo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52'><g fill='%232f8f8a'><circle cx='6' cy='6' r='2.5'/><circle cx='18' cy='6' r='2.5'/><circle cx='30' cy='6' r='2.5'/><circle cx='42' cy='6' r='2.5'/><circle cx='12' cy='18' r='2.5'/><circle cx='24' cy='18' r='2.5'/><circle cx='36' cy='18' r='2.5'/><circle cx='6' cy='30' r='2.5'/><circle cx='18' cy='30' r='2.5'/><circle cx='30' cy='30' r='2.5'/><circle cx='42' cy='30' r='2.5'/></g></svg>`,
  efik: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='40'><g stroke='%233f6fa8' stroke-width='2' fill='none'><path d='M0 10 Q15 0 30 10 T60 10'/><path d='M0 22 Q15 12 30 22 T60 22'/><path d='M0 34 Q15 24 30 34 T60 34'/></g></svg>`,
  urhobo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><g stroke='%237a4fa0' stroke-width='2' fill='none'><path d='M25 5 L45 25 L25 45 L5 25 Z'/><path d='M25 15 L35 25 L25 35 L15 25 Z'/></g></svg>`,
  tiv: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><g stroke='%238a2f3f' stroke-width='4' fill='none'><path d='M-5 10 L15 -10'/><path d='M5 25 L25 5'/><path d='M15 40 L35 20'/><path d='M25 50 L45 30'/></g></svg>`,
  uvwie: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><g stroke='%23e06d53' stroke-width='2' fill='none'><polygon points='24,4 44,24 24,44 4,24'/><circle cx='24' cy='24' r='4' fill='%23e06d53'/></g></svg>`,
  isoko: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><g stroke='%2320948b' stroke-width='2' fill='none'><line x1='0' y1='25' x2='50' y2='25'/><line x1='25' y1='0' x2='25' y2='50'/><circle cx='25' cy='25' r='10'/></g></svg>`,
  ijaw: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='40'><g stroke='%23247ba0' stroke-width='2' fill='none'><path d='M0 12 C15 4, 30 20, 45 12 S60 4, 75 12'/><path d='M0 26 C15 18, 30 34, 45 26 S60 18, 75 26'/></g></svg>`
};

/* ====================== 3D TRIBE EMBLEMS & CULTURAL METADATA ======================
   Authentic cultural symbols and metadata for the 10 Nigerian tribes to power
   the tactile 3D physical stepping-stone tiles across all screens. */
const TRIBE_DETAILS = {
  igbo: {
    name: "Igbo",
    native: "Asụsụ Igbo",
    greeting: "Ndewo",
    region: "Southeast",
    symbolTitle: "Isiagu Lion & Cowrie",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M18 5 C11 5 7 10 7 17 C7 23 11 27 15 28 L15 31 L21 31 L21 28 C25 27 29 23 29 17 C29 10 25 5 18 5 Z" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.18)" stroke-linejoin="round"/><circle cx="13" cy="15" r="1.8" fill="white"/><circle cx="23" cy="15" r="1.8" fill="white"/><path d="M16 20 Q18 22 20 20" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="8" cy="8" r="2" fill="white" opacity="0.85"/><circle cx="28" cy="8" r="2" fill="white" opacity="0.85"/><circle cx="18" cy="3" r="2" fill="white" opacity="0.85"/></svg>`
  },
  yoruba: {
    name: "Yorùbá",
    native: "Èdè Yorùbá",
    greeting: "Bawo ni",
    region: "Southwest",
    symbolTitle: "Adé Beaded Crown & Okin Bird",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M10 24 L12 11 L18 16 L24 11 L26 24 Z" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.18)" stroke-linejoin="round"/><circle cx="18" cy="9" r="3" stroke="white" stroke-width="2" fill="white"/><path d="M18 6 L18 4" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M9 24 L27 24 L25 29 L11 29 Z" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.25)"/><line x1="12" y1="29" x2="12" y2="33" stroke="white" stroke-width="1.8" stroke-linecap="round"/><line x1="18" y1="29" x2="18" y2="34" stroke="white" stroke-width="1.8" stroke-linecap="round"/><line x1="24" y1="29" x2="24" y2="33" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>`
  },
  hausa: {
    name: "Hausa",
    native: "Harshen Hausa",
    greeting: "Sannu",
    region: "North",
    symbolTitle: "Dagin Arewa Northern Knot",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="11" y="11" width="14" height="14" transform="rotate(45 18 18)" stroke="white" stroke-width="2.2" fill="rgba(255,255,255,0.16)"/><circle cx="18" cy="6" r="3.5" stroke="white" stroke-width="2" fill="none"/><circle cx="30" cy="18" r="3.5" stroke="white" stroke-width="2" fill="none"/><circle cx="18" cy="30" r="3.5" stroke="white" stroke-width="2" fill="none"/><circle cx="6" cy="18" r="3.5" stroke="white" stroke-width="2" fill="none"/><circle cx="18" cy="18" r="2" fill="white"/></svg>`
  },
  edo: {
    name: "Edo",
    native: "Ẹ̀dó",
    greeting: "Kóyo",
    region: "Midwest",
    symbolTitle: "Queen Idia Bronze Mask",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M11 11 Q18 7 25 11 C26 18 24 25 18 29 C12 25 10 18 11 11 Z" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.18)" stroke-linejoin="round"/><path d="M9 9 Q18 4 27 9" stroke="white" stroke-width="2.2" stroke-linecap="round"/><line x1="14" y1="15" x2="16" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="20" y1="15" x2="22" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="16" x2="18" y2="21" stroke="white" stroke-width="1.8" stroke-linecap="round"/><path d="M16 23 Q18 24.5 20 23" stroke="white" stroke-width="1.8" stroke-linecap="round"/><circle cx="18" cy="32" r="1.5" fill="white"/><circle cx="13" cy="31" r="1.2" fill="white"/><circle cx="23" cy="31" r="1.2" fill="white"/></svg>`
  },
  efik: {
    name: "Efịk",
    native: "Usem Efịk",
    greeting: "Mọ́kọ́m",
    region: "Cross River",
    symbolTitle: "Ekpe Leopard Society & Nsibidi",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="12" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.15)"/><path d="M12 14 Q18 8 24 14 Q18 20 12 14 Z" stroke="white" stroke-width="1.8" fill="white" opacity="0.35"/><circle cx="18" cy="14" r="2" fill="white"/><path d="M18 19 L18 27" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M14 24 L22 24" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="10" cy="9" r="2" fill="white" opacity="0.85"/><circle cx="26" cy="9" r="2" fill="white" opacity="0.85"/></svg>`
  },
  urhobo: {
    name: "Urhobo",
    native: "Ẹvwrẹn Urhobo",
    greeting: "Migwo",
    region: "Niger Delta",
    symbolTitle: "Royal Ivie Beads & Ogbọrọ Fan",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M18 6 C13 6 9 11 9 17 C9 24 14 28 18 29 C22 28 27 24 27 17 C27 11 23 6 18 6 Z" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.15)"/><circle cx="18" cy="14" r="3" stroke="white" stroke-width="1.8" fill="white"/><circle cx="13" cy="19" r="2" fill="white"/><circle cx="23" cy="19" r="2" fill="white"/><circle cx="18" cy="24" r="2.2" fill="white"/><line x1="18" y1="29" x2="18" y2="34" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>`
  },
  tiv: {
    name: "Tiv",
    native: "Zwa Tiv",
    greeting: "M sugh u",
    region: "Benue Valley",
    symbolTitle: "A’nger Zebra Cloth & Horn",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="7" y="9" width="22" height="18" rx="4" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.15)"/><line x1="13" y1="9" x2="13" y2="27" stroke="white" stroke-width="2"/><line x1="18" y1="9" x2="18" y2="27" stroke="white" stroke-width="2"/><line x1="23" y1="9" x2="23" y2="27" stroke="white" stroke-width="2"/><path d="M6 31 Q18 26 30 31" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`
  },
  uvwie: {
    name: "Uvwie",
    native: "Ẹvwrẹn Uvwie",
    greeting: "Migwo",
    region: "Effurun Delta",
    symbolTitle: "Royal Agogo Bell & Staff",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M18 5 L12 25 L24 25 Z" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.2)" stroke-linejoin="round"/><ellipse cx="18" cy="25" rx="6" ry="2.5" stroke="white" stroke-width="1.8" fill="white"/><line x1="18" y1="27" x2="18" y2="31" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="32" r="2" fill="white"/><circle cx="18" cy="5" r="2.5" stroke="white" stroke-width="1.8" fill="white"/></svg>`
  },
  isoko: {
    name: "Isoko",
    native: "Ẹvẹ Isoko",
    greeting: "Do",
    region: "Isoko Delta",
    symbolTitle: "Okike Ivory Horn & Palm",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M11 28 C10 18 16 8 26 6 C24 14 20 24 11 28 Z" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.2)" stroke-linejoin="round"/><circle cx="26" cy="6" r="2" fill="white"/><path d="M8 29 L14 31" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="20" r="2" fill="white"/><circle cx="21" cy="14" r="1.6" fill="white"/></svg>`
  },
  ijaw: {
    name: "Ijaw",
    native: "Ịjọ (Izon)",
    greeting: "Tebidaba",
    region: "Maritime Delta",
    symbolTitle: "War Canoe & Sacred Paddle",
    svg: `<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M5 22 Q18 27 31 22 C27 20 9 20 5 22 Z" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.22)" stroke-linejoin="round"/><line x1="18" y1="6" x2="18" y2="28" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M14 10 L18 6 L22 10 Z" stroke="white" stroke-width="1.8" fill="white"/><path d="M7 29 Q18 33 29 29" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>`
  }
};

/**
 * Renders the high-fidelity 3D Real Tribe Tile DOM structure
 * (Ground shadow, extruded cushion plinth, gloss curve, minted ring, watermark texture, and cultural SVG emblem)
 */
function render3DTribeTile(key, options = {}) {
  const t = TRIBE_DETAILS[key] || TRIBE_DETAILS.igbo;
  const isDone = Boolean(options.isDone);
  const isActive = Boolean(options.isActive);
  const patternUrl = PATTERNS[key] || "";

  return `
    <div class="tribe-ground-shadow"></div>
    <div class="tribe-tile-plinth" aria-hidden="true">
      <div class="tribe-tile-gloss"></div>
      <div class="tribe-tile-ring"></div>
      <div class="tribe-tile-texture" style="background-image: url('${patternUrl}');"></div>
      <div class="tribe-tile-rim"></div>
      <div class="tribe-emblem">${t.svg}</div>
      ${isDone ? `<span class="tribe-done-badge" title="Tribe Mastered">✓</span>` : ""}
      ${isActive ? `<span class="tribe-active-badge">ACTIVE</span>` : ""}
    </div>
  `;
}

/* ====================== VOCAB DATA ======================
   Each course has rich topical lessons. Question sets are
   generated from this vocab at runtime (see buildLessonQuestions). */
const COURSES = {
  igbo: {
    name: "Igbo", native: "Asụsụ Igbo", color: "igbo", glyph: "Ị", speechLang: "ig-NG",
    voiceProfile: {
      accent: "Eastern Tonal Dialect (High, Low, Downstep)",
      persona: "Amaka & Chinedu",
      speechLang: "ig-NG",
      geminiVoice: "Kore",
      preferredTags: ["ig-NG", "ig", "en-NG", "pcm"],
      pitch: 1.08,
      rate: 0.84,
      sampleText: "Ndewo! Asụsụ Igbo na-atọ ụtọ."
    },
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
      ]},
      { title: "Market & Shopping", vocab: [
        { native: "Ahịa", en: "Market" }, { native: "Ego", en: "Money" }, { native: "Ọnụego", en: "Price" },
        { native: "Zụọ", en: "Buy" }, { native: "Ree", en: "Sell" }, { native: "Nnukwu", en: "Big" }, { native: "Obere", en: "Small" }
      ]},
      { title: "Places & Travel", vocab: [
        { native: "Ụlọ", en: "House" }, { native: "Ụzọ", en: "Road" }, { native: "Obodo", en: "Town" },
        { native: "Ụgbọala", en: "Car" }, { native: "Ọdụ ụgbọ", en: "Station" }, { native: "Ọdụ ụgbọelu", en: "Airport" }
      ]},
      { title: "Weather & Nature", vocab: [
        { native: "Anwụ", en: "Sun" }, { native: "Mmiri ozuzo", en: "Rain" }, { native: "Ikuku", en: "Wind" },
        { native: "Osimiri", en: "River" }, { native: "Ugwu", en: "Mountain" }, { native: "Ọhịa", en: "Forest" }
      ]},
      { title: "Feelings & Emotions", vocab: [
        { native: "Ọñụ", en: "Joy" }, { native: "Iwe", en: "Anger" }, { native: "Egwu", en: "Fear" },
        { native: "Udo", en: "Peace" }, { native: "Ike ọgwụgwụ", en: "Tiredness" }, { native: "Ịhụnanya", en: "Love" }
      ]},
      { title: "Home & Living", vocab: [
        { native: "Àkwa", en: "Bed" }, { native: "Oche", en: "Chair" }, { native: "Tebụl", en: "Table" },
        { native: "Efere", en: "Plate" }, { native: "Iko", en: "Cup" }, { native: "Ọkụ", en: "Light" }
      ]},
      { title: "Daily Verbs", vocab: [
        { native: "Rie", en: "Eat" }, { native: "Ñụọ", en: "Drink" }, { native: "Gaa", en: "Go" },
        { native: "Bia", en: "Come" }, { native: "Hụ", en: "See" }, { native: "Mee", en: "Do" }
      ]},
      { title: "Calendar & Seasons", vocab: [
        { native: "Ụtụtụ ọma", en: "Good morning" }, { native: "Ehihie", en: "Afternoon" }, { native: "Mgbede", en: "Evening" },
        { native: "Izù", en: "Week" }, { native: "Ọnwa", en: "Month" }, { native: "Afọ", en: "Year" }
      ]},
      { title: "Clothing & Style", vocab: [
        { native: "Uwe", en: "Clothes" }, { native: "Akpụkpọ ụkwụ", en: "Shoes" }, { native: "Okpu", en: "Hat" },
        { native: "Akwa", en: "Cloth" }, { native: "Ọlaedo", en: "Gold" }
      ]}
    ]
  },
  yoruba: {
    name: "Yorùbá", native: "Èdè Yorùbá", color: "yoruba", glyph: "Ẹ", speechLang: "yo-NG",
    voiceProfile: {
      accent: "Western Tonal Dialect (Do-Re-Mi Tones)",
      persona: "Folashade & Adebayo",
      speechLang: "yo-NG",
      geminiVoice: "Fenrir",
      preferredTags: ["yo-NG", "yo", "en-NG", "pcm"],
      pitch: 1.10,
      rate: 0.83,
      sampleText: "Bawo ni! Èdè Yorùbá dára púpọ̀."
    },
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
      ]},
      { title: "Market & Shopping", vocab: [
        { native: "Ọjà", en: "Market" }, { native: "Owó", en: "Money" }, { native: "Èlò ni", en: "How much" },
        { native: "Rà", en: "Buy" }, { native: "Tà", en: "Sell" }, { native: "Dínkù", en: "Discount" }, { native: "Wúrà", en: "Gold" }
      ]},
      { title: "Places & Travel", vocab: [
        { native: "Ilé", en: "House" }, { native: "Ọ̀nà", en: "Road" }, { native: "Ìlú", en: "Town" },
        { native: "Ọkọ̀", en: "Car" }, { native: "Òtún", en: "Right" }, { native: "Òsì", en: "Left" }
      ]},
      { title: "Weather & Nature", vocab: [
        { native: "Oòrùn", en: "Sun" }, { native: "Òjò", en: "Rain" }, { native: "Afẹ́fẹ́", en: "Wind" },
        { native: "Odò", en: "River" }, { native: "Òkè", en: "Mountain" }, { native: "Igbó", en: "Forest" }
      ]},
      { title: "Feelings & Emotions", vocab: [
        { native: "Ayọ̀", en: "Joy" }, { native: "Ìbànújẹ́", en: "Sadness" }, { native: "Ìbẹ̀rù", en: "Fear" },
        { native: "Àlàáfíà", en: "Peace" }, { native: "Ìfẹ́", en: "Love" }, { native: "Àárẹ̀", en: "Tiredness" }
      ]},
      { title: "Home & Living", vocab: [
        { native: "Àga", en: "Chair" }, { native: "Tábìlì", en: "Table" }, { native: "Ibùsùn", en: "Bed" },
        { native: "Àwo", en: "Plate" }, { native: "Ife", en: "Cup" }, { native: "Iná", en: "Light" }
      ]},
      { title: "Daily Verbs", vocab: [
        { native: "Jẹ", en: "Eat" }, { native: "Mu", en: "Drink" }, { native: "Lọ", en: "Go" },
        { native: "Wá", en: "Come" }, { native: "Rí", en: "See" }, { native: "Ṣe", en: "Do" }
      ]},
      { title: "Calendar & Seasons", vocab: [
        { native: "Òwúrọ̀", en: "Morning" }, { native: "Ọ̀sán", en: "Afternoon" }, { native: "Ìrọ̀lẹ́", en: "Evening" },
        { native: "Ọ̀sẹ̀", en: "Week" }, { native: "Oṣù", en: "Month" }, { native: "Ọdún", en: "Year" }
      ]},
      { title: "Clothing & Attire", vocab: [
        { native: "Aṣọ", en: "Clothes" }, { native: "Bàtà", en: "Shoes" }, { native: "Fìlà", en: "Cap" },
        { native: "Ẹ̀wù", en: "Shirt" }, { native: "Gèlè", en: "Head tie" }
      ]}
    ]
  },
  hausa: {
    name: "Hausa", native: "Harshen Hausa", color: "hausa", glyph: "H", speechLang: "ha-NG",
    voiceProfile: {
      accent: "Northern Sahelian Articulation",
      persona: "Fatima & Aminu",
      speechLang: "ha-NG",
      geminiVoice: "Zephyr",
      preferredTags: ["ha-NG", "ha", "en-NG", "pcm"],
      pitch: 1.03,
      rate: 0.85,
      sampleText: "Sannu! Harshen Hausa yana da daɗi sosai."
    },
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
      ]},
      { title: "Market & Commerce", vocab: [
        { native: "Kasuwa", en: "Market" }, { native: "Kudi", en: "Money" }, { native: "Nawa ne", en: "How much" },
        { native: "Saya", en: "Buy" }, { native: "Sayar", en: "Sell" }, { native: "Sauki", en: "Cheap" }, { native: "Tsada", en: "Expensive" }
      ]},
      { title: "Travel & Places", vocab: [
        { native: "Gida", en: "House" }, { native: "Hanya", en: "Road" }, { native: "Birni", en: "City" },
        { native: "Mota", en: "Car" }, { native: "Dama", en: "Right" }, { native: "Hagu", en: "Left" }
      ]},
      { title: "Weather & Nature", vocab: [
        { native: "Rana", en: "Sun" }, { native: "Ruwan sama", en: "Rain" }, { native: "Iska", en: "Wind" },
        { native: "Kogi", en: "River" }, { native: "Dutse", en: "Mountain" }, { native: "Daji", en: "Forest" }
      ]},
      { title: "Feelings & Wellbeing", vocab: [
        { native: "Farin ciki", en: "Happiness" }, { native: "Bakin ciki", en: "Sadness" }, { native: "Tsoro", en: "Fear" },
        { native: "Lafiya", en: "Health" }, { native: "Soyayya", en: "Love" }, { native: "Gajiya", en: "Tiredness" }
      ]},
      { title: "Home & Living", vocab: [
        { native: "Kujera", en: "Chair" }, { native: "Tebur", en: "Table" }, { native: "Gado", en: "Bed" },
        { native: "Kwano", en: "Plate" }, { native: "Kofin", en: "Cup" }, { native: "Fitila", en: "Lamp" }
      ]},
      { title: "Essential Verbs", vocab: [
        { native: "Ci", en: "Eat" }, { native: "Sha", en: "Drink" }, { native: "Je", en: "Go" },
        { native: "Zo", en: "Come" }, { native: "Gani", en: "See" }, { native: "Yi", en: "Do" }
      ]},
      { title: "Calendar & Seasons", vocab: [
        { native: "Safe", en: "Morning" }, { native: "Rana", en: "Afternoon" }, { native: "Yamma", en: "Evening" },
        { native: "Mako", en: "Week" }, { native: "Wata", en: "Month" }, { native: "Shekara", en: "Year" }
      ]},
      { title: "Clothing & Style", vocab: [
        { native: "Kaya", en: "Clothes" }, { native: "Takalmi", en: "Shoes" }, { native: "Hula", en: "Cap" },
        { native: "Riga", en: "Gown" }, { native: "Mayafi", en: "Scarf" }
      ]}
    ]
  },
  edo: {
    name: "Edo", native: "Ẹ̀dó (Bini)", color: "edo", glyph: "B", speechLang: "bin",
    voiceProfile: {
      accent: "Midwestern Benin Edoid Accent",
      persona: "Eki & Osagie",
      speechLang: "bin",
      geminiVoice: "Kore",
      preferredTags: ["en-NG", "bin", "pcm", "en-GH"],
      pitch: 1.06,
      rate: 0.82,
      sampleText: "Kọyọ! Ẹ̀dó vbe ẹmwẹ nọ gb'ẹsẹ."
    },
    lessons: [
      { title: "Greetings", vocab: [
        { native: "Kọyọ", en: "Hello" }, { native: "Ọbowiẹ", en: "Good morning" },
        { native: "Ọbavan", en: "Good afternoon" }, { native: "Ọbota", en: "Good evening" },
        { native: "Obiluu", en: "Thank you" }
      ]},
      { title: "Numbers 1–5", vocab: [
        { native: "Ọkpa", en: "One" }, { native: "Eva", en: "Two" }, { native: "Eha", en: "Three" },
        { native: "Enẹ", en: "Four" }, { native: "Isẹn", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Ehan", en: "Six" }, { native: "Ihinrọn", en: "Seven" }, { native: "Erẹnrẹn", en: "Eight" },
        { native: "Ihinrin", en: "Nine" }, { native: "Igbe", en: "Ten" }
      ]},
      { title: "Family", vocab: [
        { native: "Érhá", en: "Father" }, { native: "Iye", en: "Mother" }, { native: "Ovbi", en: "Child" },
        { native: "Erha nokhua", en: "Grandfather" }, { native: "Iye nokhua", en: "Grandmother" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "Vbèè óye hé", en: "How are you" }, { native: "Obo kia", en: "Welcome" },
        { native: "Uzébu", en: "Great" }, { native: "Òkhíen òwie", en: "Good night" },
        { native: "Ìsélógbé", en: "Season's greetings" }
      ]},
      { title: "Colors", vocab: [
        { native: "Ọfasẹ", en: "White" }, { native: "Nekhui", en: "Black" }, { native: "Ọlilẹ", en: "Red" },
        { native: "Ọmebe", en: "Green" }, { native: "Ọdane", en: "Blue" }, { native: "Ọnivọ", en: "Yellow" }
      ]},
      { title: "Food", vocab: [
        { native: "Ọka", en: "Corn" }, { native: "Izẹ", en: "Rice" }, { native: "Erere", en: "Beans" },
        { native: "Iyan", en: "Yam" }, { native: "Ọghẹdẹ", en: "Plantain" }, { native: "Akarha", en: "Coco yam" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Uhun", en: "Head" }, { native: "Ehor", en: "Ear" }, { native: "Aro", en: "Eye" },
        { native: "Ihue", en: "Nose" }, { native: "Unu", en: "Mouth" }, { native: "Atata owẹ", en: "Foot" }
      ]},
      { title: "Market & Trade", vocab: [
        { native: "Ẹki", en: "Market" }, { native: "Igho", en: "Money" }, { native: "Dẹ", en: "Buy" },
        { native: "Khiẹn", en: "Sell" }, { native: "Esen", en: "Gift" }
      ]},
      { title: "Time & Days", vocab: [
        { native: "Ẹdẹ", en: "Day" }, { native: "Akhuẹ", en: "Tomorrow" }, { native: "Ẹdẹrẹ", en: "Yesterday" },
        { native: "Owie", en: "Morning" }, { native: "Ason", en: "Night" }
      ]},
      { title: "Nature & Elements", vocab: [
        { native: "Amẹ", en: "Rain" }, { native: "Ovẹn", en: "Sun" }, { native: "Éhẹn", en: "Fish" },
        { native: "Erhan", en: "Tree" }, { native: "Okun", en: "Ocean" }
      ]},
      { title: "Daily Verbs", vocab: [
        { native: "Re", en: "Eat" }, { native: "Wọn", en: "Drink" }, { native: "Khian", en: "Go" },
        { native: "Gualọ", en: "Search" }, { native: "Guan", en: "Speak" }
      ]}
    ]
  },
  efik: {
    name: "Efik", native: "Usem Efịk", color: "efik", glyph: "C", speechLang: "efi",
    voiceProfile: {
      accent: "Calabar Cross River Tonal Melody",
      persona: "Arit & Edet",
      speechLang: "efi",
      geminiVoice: "Zephyr",
      preferredTags: ["en-NG", "efi", "pcm", "en-GH"],
      pitch: 1.08,
      rate: 0.84,
      sampleText: "Emedi! Usem Efịk enem eti-eti."
    },
    lessons: [
      { title: "Greetings", vocab: [
        { native: "Emedi", en: "Welcome" }, { native: "Emesiere", en: "Good morning" },
        { native: "Mokom", en: "Good afternoon" }, { native: "Esiere", en: "Good night" },
        { native: "Ka di", en: "Goodbye" }
      ]},
      { title: "Numbers 1–5", vocab: [
        { native: "Kiet", en: "One" }, { native: "Iba", en: "Two" }, { native: "Ita", en: "Three" },
        { native: "Inaŋ", en: "Four" }, { native: "Ition", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Itiokiet", en: "Six" }, { native: "Itiaba", en: "Seven" }, { native: "Itiaita", en: "Eight" },
        { native: "Usukkiet", en: "Nine" }, { native: "Duop", en: "Ten" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "Idem fo?", en: "How are you" }, { native: "Nso ke Ekot fi?", en: "What is your name" },
        { native: "Mbọk", en: "Please" }, { native: "Sosongo", en: "Thank you" },
        { native: "Nfana ibaga", en: "No problem" }
      ]},
      { title: "Family", vocab: [
        { native: "Ete", en: "Father" }, { native: "Eka", en: "Mother" }, { native: "Eyen", en: "Child" },
        { native: "Ndito", en: "Children" }, { native: "Ebe", en: "Husband" }, { native: "Nwan", en: "Wife" }
      ]},
      { title: "Food & Dining", vocab: [
        { native: "Udia", en: "Food" }, { native: "Mmong", en: "Water" }, { native: "Bia", en: "Yam" },
        { native: "Iyak", en: "Fish" }, { native: "Unam", en: "Meat" }
      ]},
      { title: "Colors & Nature", vocab: [
        { native: "Afia", en: "White" }, { native: "Obubit", en: "Black" }, { native: "Ndatndat", en: "Red" },
        { native: "Utin", en: "Sun" }, { native: "Edim", en: "Rain" }
      ]},
      { title: "Animals", vocab: [
        { native: "Ewa", en: "Dog" }, { native: "Anwa", en: "Cat" }, { native: "Enang", en: "Cow" },
        { native: "Unen", en: "Chicken" }, { native: "Erong", en: "Sheep" }
      ]},
      { title: "Market & Commerce", vocab: [
        { native: "Urua", en: "Market" }, { native: "Okuk", en: "Money" }, { native: "Dep", en: "Buy" },
        { native: "Nyam", en: "Sell" }, { native: "Idahaemi", en: "Now" }
      ]},
      { title: "Essential Verbs", vocab: [
        { native: "Dia", en: "Eat" }, { native: "Nwong", en: "Drink" }, { native: "Ka", en: "Go" },
        { native: "Di", en: "Come" }, { native: "Kut", en: "See" }
      ]}
    ]
  },
  urhobo: {
    name: "Urhobo", native: "Ẹdo Urhobo", color: "urhobo", glyph: "U", speechLang: "urh",
    voiceProfile: {
      accent: "Delta State Edoid Accent",
      persona: "Efe & Oghenekevwe",
      speechLang: "urh",
      geminiVoice: "Fenrir",
      preferredTags: ["en-NG", "urh", "pcm", "en-GH"],
      pitch: 1.06,
      rate: 0.83,
      sampleText: "Miguọ! Ẹvwrẹn Urhobo vwerhe mamọ."
    },
    lessons: [
      { title: "Numbers 1–5", vocab: [
        { native: "Ọvo", en: "One" }, { native: "Ívẹ", en: "Two" }, { native: "Érha", en: "Three" },
        { native: "Ẹ́ne", en: "Four" }, { native: "Íyorin", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Ésan", en: "Six" }, { native: "Íghwrẹ́", en: "Seven" }, { native: "Ẹréré", en: "Eight" },
        { native: "Írhirin", en: "Nine" }, { native: "Íhwe", en: "Ten" }
      ]},
      { title: "Greetings", vocab: [
        { native: "Do", en: "Thank you" }, { native: "Dede", en: "Welcome" }, { native: "Kédófa", en: "Goodbye" },
        { native: "Kódẹ", en: "Goodnight" }, { native: "Yéghwérẹ", en: "Safe journey" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "Biko", en: "Please" }, { native: "E", en: "Yes" }, { native: "Ẹjo", en: "No" },
        { native: "Omagáre", en: "How are you" }, { native: "Míguẹ", en: "Respectful greeting to an elder" }
      ]},
      { title: "Family", vocab: [
        { native: "Ósẹ", en: "Father" }, { native: "Óni", en: "Mother" }, { native: "Ibábode", en: "Grandfather" },
        { native: "Inénode", en: "Grandmother" }, { native: "Ómó", en: "Child" }, { native: "Óniọvo", en: "Sibling" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Uyovwi", en: "Head" }, { native: "Obọ", en: "Hand" }, { native: "Owọ", en: "Leg" },
        { native: "Ẹro", en: "Eye" }, { native: "Unu", en: "Mouth" }, { native: "Órhó", en: "Ear" }
      ]},
      { title: "Food", vocab: [
        { native: "Ame", en: "Water" }, { native: "Akara", en: "Bean-cake" }, { native: "Irósu", en: "Rice" },
        { native: "Ọné", en: "Yam" }, { native: "Óka", en: "Corn" }, { native: "Ọrhẹ", en: "Plantain" }
      ]},
      { title: "Animals", vocab: [
        { native: "Eráko", en: "Dog" }, { native: "Erhué", en: "Cow" }, { native: "Ogodẹ", en: "Sheep" },
        { native: "Óhọ", en: "Chicken" }, { native: "Ewéri", en: "Monkey" }, { native: "Eni", en: "Elephant" }
      ]},
      { title: "Time & Nature", vocab: [
        { native: "Nonẹ", en: "Today" }, { native: "Odrẹ", en: "Tomorrow" }, { native: "Ede", en: "Day" },
        { native: "Aso", en: "Night" }, { native: "Urhukpẹ", en: "Light" }
      ]},
      { title: "Market & Commerce", vocab: [
        { native: "Iki", en: "Market" }, { native: "Igho", en: "Money" }, { native: "Dẹ", en: "Buy" },
        { native: "Shẹ", en: "Sell" }, { native: "Oware", en: "Thing" }
      ]},
      { title: "Daily Verbs", vocab: [
        { native: "Re", en: "Eat" }, { native: "Da", en: "Drink" }, { native: "Kpo", en: "Go" },
        { native: "Cha", en: "Come" }, { native: "Ta", en: "Speak" }
      ]}
    ]
  },
  tiv: {
    name: "Tiv", native: "Dzwa Tiv", color: "tiv", glyph: "T", speechLang: "tiv",
    voiceProfile: {
      accent: "Benue Valley Bantoid Accent",
      persona: "Mnguember & Terver",
      speechLang: "tiv",
      geminiVoice: "Charon",
      preferredTags: ["en-NG", "tiv", "pcm", "en-GH"],
      pitch: 1.04,
      rate: 0.83,
      sampleText: "M sugh u! Zwa Tiv doo kpishi."
    },
    lessons: [
      { title: "Numbers 1–5", vocab: [
        { native: "Mom", en: "One" }, { native: "Uhar", en: "Two" }, { native: "Utar", en: "Three" },
        { native: "Unyiin", en: "Four" }, { native: "Utaan", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Ateratar", en: "Six" }, { native: "Utaan-kar-uhar", en: "Seven" }, { native: "Anigheni", en: "Eight" },
        { native: "Utan-kar-unyiin", en: "Nine" }, { native: "Pue", en: "Ten" }
      ]},
      { title: "Greetings", vocab: [
        { native: "M sugh", en: "Hello" }, { native: "M sugh u", en: "Thank you" }, { native: "Een", en: "Yes" },
        { native: "Ei", en: "No" }, { native: "Dedoo", en: "Good" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "Iti yo er nyi?", en: "What is your name" }, { native: "Iti yam er...", en: "My name is..." },
        { native: "Mzamber we", en: "Please" }, { native: "U nder ver", en: "Good morning" }, { native: "U pander ver", en: "Good afternoon" }
      ]},
      { title: "Family", vocab: [
        { native: "Ter", en: "Father" }, { native: "Ngo", en: "Mother" }, { native: "Wan", en: "Child" },
        { native: "Abgbian", en: "Sibling" }, { native: "Nom", en: "Husband" }, { native: "Kwase", en: "Wife" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Ishe", en: "Eye" }, { native: "Hinga", en: "Nose" }, { native: "Nyexe", en: "Tooth" },
        { native: "Nombor", en: "Tongue" }, { native: "Ave", en: "Hand" }
      ]},
      { title: "Nature", vocab: [
        { native: "Mngerem", en: "Water" }, { native: "Usu", en: "Fire" }, { native: "Iyange", en: "Sun" },
        { native: "Uwer", en: "Moon" }, { native: "Ishan", en: "Star" }, { native: "Ura", en: "Rain" }
      ]},
      { title: "Animals", vocab: [
        { native: "Iyou", en: "Dog" }, { native: "Anyam", en: "Cat" }, { native: "Ishu", en: "Fish" },
        { native: "Inyon", en: "Bird" }
      ]},
      { title: "Food & Dining", vocab: [
        { native: "Igyande", en: "Yam" }, { native: "Ruam", en: "Food" }, { native: "Mnger", en: "Water" },
        { native: "Nyinya", en: "Horse" }
      ]},
      { title: "Time & Days", vocab: [
        { native: "Nyian", en: "Today" }, { native: "Kper", en: "Tomorrow" }, { native: "Hegen", en: "Now" },
        { native: "Tugh", en: "Night" }, { native: "Tetan", en: "Afternoon" }
      ]},
      { title: "Market & Trade", vocab: [
        { native: "Kasuwa", en: "Market" }, { native: "Inyaregh", en: "Money" }, { native: "Yam", en: "Buy" },
        { native: "Te", en: "Sell" }, { native: "Gbenda", en: "Road" }
      ]},
      { title: "Essential Verbs", vocab: [
        { native: "Ya", en: "Eat" }, { native: "Ma", en: "Drink" }, { native: "Dza", en: "Go" },
        { native: "Va", en: "Come" }, { native: "Nenge", en: "See" }
      ]}
    ]
  },
  uvwie: {
    name: "Uvwie", native: "Ẹvwrẹn Uvwie", color: "uvwie", glyph: "U", speechLang: "en-NG",
    voiceProfile: {
      accent: "Effurun / Uvwie Delta Cadence",
      persona: "Onome & Ejiro",
      speechLang: "en-NG",
      geminiVoice: "Kore",
      preferredTags: ["en-NG", "urh", "pcm", "en-GH"],
      pitch: 1.07,
      rate: 0.83,
      sampleText: "Miguọ! Ẹvwrẹn Uvwie vwerhe mamọ."
    },
    lessons: [
      { title: "Greetings", vocab: [
        { native: "Miguọ", en: "Hello" }, { native: "Ovwiroro", en: "Good morning" },
        { native: "Meworhe", en: "Welcome" }, { native: "Obe", en: "Thank you" },
        { native: "Eyen", en: "Yes" }, { native: "Ẹjo", en: "No" }
      ]},
      { title: "Numbers 1–5", vocab: [
        { native: "Ọvo", en: "One" }, { native: "Iwe", en: "Two" }, { native: "Erha", en: "Three" },
        { native: "Ẹnẹ", en: "Four" }, { native: "Iri", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Ezan", en: "Six" }, { native: "Ighwrẹn", en: "Seven" }, { native: "Ẹrhọrọn", en: "Eight" },
        { native: "Izi", en: "Nine" }, { native: "Ikhwe", en: "Ten" }
      ]},
      { title: "Family", vocab: [
        { native: "Ọsẹ", en: "Father" }, { native: "Oni", en: "Mother" }, { native: "Ọmọ", en: "Child" },
        { native: "Ọmọte", en: "Daughter" }, { native: "Ọmọshare", en: "Son" }, { native: "Ọshare", en: "Husband" }, { native: "Aye", en: "Wife" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "K'odẹ rẹ?", en: "What is your name" }, { native: "Odẹ mẹ...", en: "My name is..." },
        { native: "K'oyoma?", en: "How are things" }, { native: "Oyoma", en: "It is good" }, { native: "Biko", en: "Please" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Urhukpe", en: "Head" }, { native: "Ẹro", en: "Eye" }, { native: "Unu", en: "Mouth" },
        { native: "Ẹrhọ", en: "Ear" }, { native: "Ọbọ", en: "Hand" }, { native: "Awọ", en: "Leg" }
      ]},
      { title: "Nature & Elements", vocab: [
        { native: "Ame", en: "Water" }, { native: "Ẹrhen", en: "Fire" }, { native: "Ọre", en: "Sun" },
        { native: "Ukie", en: "Moon" }, { native: "Oso", en: "Rain" }
      ]},
      { title: "Food & Dining", vocab: [
        { native: "Emu", en: "Food" }, { native: "Ole", en: "Yam" }, { native: "Iribo", en: "Soup" },
        { native: "Iriẹ", en: "Meat" }, { native: "Eri", en: "Fish" }
      ]},
      { title: "Market & Trade", vocab: [
        { native: "Ekia", en: "Market" }, { native: "Igho", en: "Money" }, { native: "Dẹ", en: "Buy" },
        { native: "Shia", en: "Sell" }, { native: "Idjerhe", en: "Road" }
      ]},
      { title: "Essential Verbs", vocab: [
        { native: "Re", en: "Eat" }, { native: "Da", en: "Drink" }, { native: "Kpo", en: "Go" },
        { native: "Rhe", en: "Come" }, { native: "Mrẹ", en: "See" }
      ]}
    ]
  },
  isoko: {
    name: "Isoko", native: "Ẹvẹ Isoko", color: "isoko", glyph: "S", speechLang: "en-NG",
    voiceProfile: {
      accent: "Isoko Delta Tonal Cadence",
      persona: "Oghenero & Elohor",
      speechLang: "en-NG",
      geminiVoice: "Zephyr",
      preferredTags: ["en-NG", "pcm", "en-GH"],
      pitch: 1.06,
      rate: 0.84,
      sampleText: "Do! Ẹvẹ Isoko were gaga."
    },
    lessons: [
      { title: "Greetings", vocab: [
        { native: "Do", en: "Hello" }, { native: "Koyo", en: "Greetings" },
        { native: "Wadoo", en: "Thank you" }, { native: "Ẹhẹ", en: "Yes" },
        { native: "Iye", en: "No" }, { native: "Owerewe", en: "Good morning" }
      ]},
      { title: "Numbers 1–5", vocab: [
        { native: "Ọvo", en: "One" }, { native: "Ive", en: "Two" }, { native: "Isa", en: "Three" },
        { native: "Ine", en: "Four" }, { native: "Isi", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Izi", en: "Six" }, { native: "Ihre", en: "Seven" }, { native: "Irie", en: "Eight" },
        { native: "Izii", en: "Nine" }, { native: "Ikpe", en: "Ten" }
      ]},
      { title: "Family", vocab: [
        { native: "Ọsẹ", en: "Father" }, { native: "Oni", en: "Mother" }, { native: "Ọmọ", en: "Child" },
        { native: "Ọmọtọ", en: "Daughter" }, { native: "Ọmọzae", en: "Son" }, { native: "Ọzae", en: "Husband" }, { native: "Aye", en: "Wife" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "K'odẹ ra?", en: "What is your name" }, { native: "Odẹ mẹ...", en: "My name is..." },
        { native: "K'abọ?", en: "How are things" }, { native: "Abọ r'oma", en: "Things are good" }, { native: "Biko", en: "Please" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Uzon", en: "Head" }, { native: "Ẹro", en: "Eye" }, { native: "Unu", en: "Mouth" },
        { native: "Ẹrhọ", en: "Ear" }, { native: "Ọbọ", en: "Hand" }, { native: "Awọ", en: "Leg" }
      ]},
      { title: "Nature & Weather", vocab: [
        { native: "Ame", en: "Water" }, { native: "Ẹrahe", en: "Fire" }, { native: "Ọre", en: "Sun" },
        { native: "Uki", en: "Moon" }, { native: "Oso", en: "Rain" }, { native: "Isi", en: "Star" }
      ]},
      { title: "Food & Crops", vocab: [
        { native: "Emu", en: "Food" }, { native: "Ole", en: "Yam" }, { native: "Ovi", en: "Soup" },
        { native: "Usi", en: "Starch" }, { native: "Eri", en: "Fish" }, { native: "Ẹra", en: "Meat" }
      ]},
      { title: "Market & Trade", vocab: [
        { native: "Ẹki", en: "Market" }, { native: "Igho", en: "Money" }, { native: "Dẹ", en: "Buy" },
        { native: "Zẹ", en: "Sell" }, { native: "Idhere", en: "Road" }
      ]},
      { title: "Essential Verbs", vocab: [
        { native: "Re", en: "Eat" }, { native: "Da", en: "Drink" }, { native: "Nya", en: "Go" },
        { native: "Tha", en: "Come" }, { native: "Ruẹ", en: "See" }
      ]}
    ]
  },
  ijaw: {
    name: "Ijaw", native: "Ịjọ (Izon)", color: "ijaw", glyph: "Ị", speechLang: "en-NG",
    voiceProfile: {
      accent: "Niger Delta Izon Tonal Melody",
      persona: "Ebi & Tari",
      speechLang: "en-NG",
      geminiVoice: "Kore",
      preferredTags: ["en-NG", "pcm", "en-GH"],
      pitch: 1.05,
      rate: 0.84,
      sampleText: "Dọọ! Ịjọ fia ẹnẹmị egberi."
    },
    lessons: [
      { title: "Greetings", vocab: [
        { native: "Dọọ", en: "Hello" }, { native: "Bọda ba", en: "Good morning" },
        { native: "Nua", en: "Thank you" }, { native: "Iniye", en: "Yes" },
        { native: "Kẹkẹ", en: "No" }, { native: "Alua", en: "Greetings" }
      ]},
      { title: "Numbers 1–5", vocab: [
        { native: "Kẹnị", en: "One" }, { native: "Mamụ", en: "Two" }, { native: "Tǎrụ", en: "Three" },
        { native: "Nêi", en: "Four" }, { native: "Sọnrọ", en: "Five" }
      ]},
      { title: "Numbers 6–10", vocab: [
        { native: "Sôndie", en: "Six" }, { native: "Sọnmẹma", en: "Seven" }, { native: "Nîngini", en: "Eight" },
        { native: "Isêi", en: "Nine" }, { native: "Oyí", en: "Ten" }
      ]},
      { title: "Family", vocab: [
        { native: "Dǎu", en: "Father" }, { native: "Yǐngi", en: "Mother" }, { native: "Tọbọụ", en: "Child" },
        { native: "Tọbọụ-ere", en: "Daughter" }, { native: "Tọbọụ-owei", en: "Son" }, { native: "Owei", en: "Husband" }, { native: "Ere", en: "Wife" }
      ]},
      { title: "Common Phrases", vocab: [
        { native: "I biri kẹnị?", en: "How are you" }, { native: "I biri bọbara", en: "I am fine" },
        { native: "I eri te ye?", en: "What is your name" }, { native: "Inia eri...", en: "My name is..." }, { native: "Biko", en: "Please" }
      ]},
      { title: "Body Parts", vocab: [
        { native: "Tịbị", en: "Head" }, { native: "Tọrọ", en: "Eye" }, { native: "Bịbị", en: "Mouth" },
        { native: "Bẹrẹ", en: "Ear" }, { native: "Bara", en: "Hand" }, { native: "Bụọ", en: "Leg" }
      ]},
      { title: "Waterways & Nature", vocab: [
        { native: "Beni", en: "Water" }, { native: "Fịrị", en: "River" }, { native: "Angala", en: "Mangrove" },
        { native: "Ẹkẹn", en: "Sun" }, { native: "Aki", en: "Moon" }, { native: "Osini", en: "Rain" }
      ]},
      { title: "Food & Fish", vocab: [
        { native: "Fịye", en: "Food" }, { native: "Indi", en: "Fish" }, { native: "Nama", en: "Meat" },
        { native: "Buru", en: "Yam" }, { native: "Oki", en: "Plantain" }
      ]},
      { title: "Market & Trade", vocab: [
        { native: "Kẹkẹrẹ", en: "Market" }, { native: "Ikịọ", en: "Money" }, { native: "Fẹ", en: "Buy" },
        { native: "Dẹrị", en: "Sell" }, { native: "Aru", en: "Boat" }
      ]},
      { title: "Essential Verbs", vocab: [
        { native: "Fị", en: "Eat" }, { native: "Bọụ", en: "Drink" }, { native: "Mu", en: "Go" },
        { native: "Bọ", en: "Come" }, { native: "Ẹrị", en: "See" }
      ]}
    ]
  }
};

/* Break each topic into two shorter sub-lessons (using the same vocab, just
   split across two shorter sessions) wherever there's enough vocab to do so
   meaningfully. This roughly doubles the apparent lesson count per language
   without requiring any new vocabulary — same idea as Duolingo splitting a
   topic into multiple bite-sized lessons instead of one long one. */
function splitIntoSubLessons(lessons){
  const expanded = [];
  lessons.forEach(lesson => {
    const vocab = lesson.vocab;
    if(vocab.length < 5){ expanded.push(lesson); return; }
    const mid = Math.ceil(vocab.length / 2);
    expanded.push({ title: `${lesson.title} · Part 1`, vocab: vocab.slice(0, mid) });
    expanded.push({ title: `${lesson.title} · Part 2`, vocab: vocab.slice(mid) });
  });
  return expanded;
}
Object.keys(COURSES).forEach(k => {
  COURSES[k].lessons = splitIntoSubLessons(COURSES[k].lessons);
});

const SURPRISE_FACTS = [
  "Nigeria is home to over 250 ethnic groups and more than 500 living languages — you're learning just a few of them!",
  "Nollywood, Nigeria's film industry, produces more movies per year than Hollywood — second in the world only to India's Bollywood by volume.",
  "Lagos is one of the fastest-growing megacities on Earth, with a metro population bigger than many entire countries.",
  "The name “Nigeria” was reportedly coined by journalist Flora Shaw in 1897, after the Niger River.",
  "Nigeria has three major river systems — the Niger, the Benue, and the Cross River — which shaped where many of its languages developed.",
  "Nigerian jollof rice has sparked a decades-long, good-natured rivalry with Ghana over whose version is better.",
  "Amina of Zazzau, a 16th-century Hausa warrior queen, is remembered for expanding her kingdom's territory and trade routes.",
  "Nigeria has more than one “official” greeting for almost every hour of the day — many languages have separate words for morning, afternoon, and evening greetings.",
  "The University of Ibadan, founded in 1948, is Nigeria's oldest university.",
  "Afrobeats, a genre with deep roots in Nigerian music, is now streamed by millions of people worldwide."
];

const CULTURE = {
  igbo: {
    intro: "A few pieces of everyday Igbo wisdom and custom — the kind of thing you'd pick up from elders, not textbooks.",
    proverbs: [
      { native: "Egbe belụ, ugo belụ, nke si ibe ya ebena, nku kwaa ya.", translation: "Let the hawk perch, let the eagle perch; whichever says the other should not perch, may its wing break.", meaning: "Live and let live — everyone deserves the chance to thrive." },
      { native: "Onye kwe, chi ya ekwe.", translation: "If a person agrees, their personal god agrees.", meaning: "Self-belief and determination pave the way to success." }
    ],
    etiquette: { title: "Greeting elders", text: "When greeting an elder, a slight bow shows respect, and it's customary to use both hands when giving or receiving something from them." },
    scenario: {
      prompt: "You meet your friend's mother for the first time. What's the respectful thing to do?",
      options: [
        { text: "Say “Ndewo” and offer a slight bow", correct: true, feedback: "That's the respectful way to greet an elder you're meeting for the first time." },
        { text: "Wave from a distance without speaking", correct: false, feedback: "A greeting is expected — a wave alone can come across as distant." },
        { text: "Ask for her phone number right away", correct: false, feedback: "Save the small talk for after a proper greeting!" }
      ]
    }
  },
  yoruba: {
    intro: "A few pieces of everyday Yorùbá wisdom and custom — the kind of thing you'd pick up from elders, not textbooks.",
    proverbs: [
      { native: "Ilé ọba tí ó jóná, ẹwà ló bù sí i.", translation: "A king's palace that gets burnt has only added more beauty.", meaning: "Make the best of hardship — necessity is the mother of invention." },
      { native: "Ìdí méjèèjì ló tó olúwa rẹ̀ jókòó.", translation: "The two buttocks are sufficient for their owner to sit on.", meaning: "Be content with what you have." }
    ],
    etiquette: { title: "Greeting elders", text: "Young men traditionally prostrate flat on the ground (ìdobalẹ̀) when greeting an elder, while young women kneel (kúnlẹ̀) — a sign of deep respect still practiced today." },
    scenario: {
      prompt: "You meet your friend's mother for the first time. What's the respectful thing to do?",
      options: [
        { text: "Say “Bawo ni” and kneel or prostrate briefly", correct: true, feedback: "That's the traditional, respectful way to greet an elder." },
        { text: "Wave from a distance without speaking", correct: false, feedback: "A greeting is expected — a wave alone can come across as distant." },
        { text: "Ask for her phone number right away", correct: false, feedback: "Save the small talk for after a proper greeting!" }
      ]
    }
  },
  hausa: {
    intro: "A few pieces of everyday Hausa wisdom and custom — the kind of thing you'd pick up from elders, not textbooks.",
    proverbs: [
      { native: "A yi, a gama, ta fi takama, gobe a koma.", translation: "To do and finish is better than ‘don't care, come back tomorrow.’", meaning: "Don't put off until tomorrow what you can do today." },
      { native: "Ruwa ba ta tsami banza.", translation: "Water does not get sour without a cause.", meaning: "Everything happens for a reason." }
    ],
    etiquette: { title: "Greeting elders", text: "A handshake is the customary greeting, and it's considered polite to ask after someone's family and health before getting to the point of a conversation." },
    scenario: {
      prompt: "You meet your friend's mother for the first time. What's the respectful thing to do?",
      options: [
        { text: "Say “Sannu” and ask after her health and family", correct: true, feedback: "That's the respectful, customary way to open a greeting." },
        { text: "Wave from a distance without speaking", correct: false, feedback: "A greeting is expected — a wave alone can come across as distant." },
        { text: "Ask for her phone number right away", correct: false, feedback: "Save the small talk for after a proper greeting!" }
      ]
    }
  },
  edo: {
    intro: "Everyday wisdom and rich cultural etiquette from the ancient Benin kingdom (Ẹ̀dó).",
    proverbs: [
      { native: "Aro n'ekhoe ẹkhoe, ọrọ vbe ẹro.", translation: "The eyes that look down see the path clearly.", meaning: "Humility and caution lead to peace and enduring honor." },
      { native: "Ai gbe ovbi ẹnwanre vb'unu.", translation: "One does not strike an elder on the mouth.", meaning: "Always respect the counsel and words of elders." }
    ],
    etiquette: { title: "Greeting elders and leaders", text: "When greeting elders, Edo men bow respectfully saying 'Kọyọ' or family morning greetings, and gifts are always presented or received with both hands as a sign of purity and gratitude." },
    scenario: {
      prompt: "You enter an Edo elder's parlor for a family visit. How should you greet them?",
      options: [
        { text: "Say “Kọyọ” or “Ọbowiẹ” with a polite bow", correct: true, feedback: "Perfect — this shows genuine honor and warmth in Edo culture." },
        { text: "Nod silently without addressing anyone", correct: false, feedback: "Speaking a clear, warm greeting is expected." },
        { text: "Walk directly to a chair and sit before speaking", correct: false, feedback: "Always greet before taking your seat!" }
      ]
    }
  },
  efik: {
    intro: "Heritage, coastal proverbs, and etiquette from Calabar and the Efịk culture.",
    proverbs: [
      { native: "Owo idaha ke mkpa owo ebiet mbuk.", translation: "You do not use another person's tragedy as casual gossip.", meaning: "Cultivate deep empathy and never celebrate other people's misfortune." },
      { native: "Ubok kiet isibọhọ ekpat.", translation: "One hand cannot easily lift a heavy sack.", meaning: "Unity and teamwork achieve what solitary effort cannot." }
    ],
    etiquette: { title: "Warm Calabar hospitality", text: "Efịk culture is renowned for lavish hospitality. Guests are warmly welcomed with water and refreshments, and visitors are expected to receive them with two hands saying 'Sosongo' (Thank you)." },
    scenario: {
      prompt: "Your Calabar host hands you a cup of water upon your arrival. What is polite?",
      options: [
        { text: "Receive it with both hands and say “Sosongo”", correct: true, feedback: "Spot on! That reflects the true grace of Efịk hospitality." },
        { text: "Push it aside and demand your favorite soda", correct: false, feedback: "Always receive the offered hospitality graciously first." },
        { text: "Grab it with left hand and turn away", correct: false, feedback: "Using both hands expresses deep gratitude." }
      ]
    }
  },
  urhobo: {
    intro: "Wisdom, pride, and heartfelt customs from the Urhobo people of the Niger Delta.",
    proverbs: [
      { native: "Oshare rẹ evwro kẹ oghwẹ.", translation: "A truthful man earns honor in the assembly.", meaning: "Integrity and honesty outlast deception every time." },
      { native: "Ọrhẹ ọvo cha sa vwo rhe.", translation: "One plantain tree begins a thriving plantation.", meaning: "Small beginnings with diligence grow into great prosperity." }
    ],
    etiquette: { title: "The 'Míguẹ' greeting", text: "Urhobo youth greet elders by kneeling slightly or touching the knee and saying 'Míguẹ' (I kneel), to which the elder responds with a blessing 'Vrendon' (Rise and live long)." },
    scenario: {
      prompt: "You meet an Urhobo elder at a community gathering. What is the traditional respectful greeting?",
      options: [
        { text: "Say “Míguẹ” with a slight knee touch/curtsey", correct: true, feedback: "Excellent! The elder will warmly bless you with 'Vrendon'." },
        { text: "Give a fist bump from afar", correct: false, feedback: "Traditional greetings are much warmer and more respectful." },
        { text: "Wait for the elder to stand and greet you first", correct: false, feedback: "Youth and newcomers always initiate respectful greetings." }
      ]
    }
  },
  tiv: {
    intro: "Rich traditions, unity, and agrarian proverbs from the Tiv people of the Benue Valley.",
    proverbs: [
      { native: "Ka wea lu a nombor dedoo, u kpe a mough.", translation: "A sweet and kind tongue builds enduring relationships.", meaning: "Kind words and diplomacy solve disputes better than anger." },
      { native: "Ior mba kpen er a nyam ga.", translation: "People do not perish when working together in fellowship.", meaning: "Mutual aid and community solidarity preserve the society." }
    ],
    etiquette: { title: "Sharing food & the compound welcome", text: "In Tiv compounds, visitors are welcomed with fresh water in a calabash and invited to share meals from the communal dish as brothers and sisters." },
    scenario: {
      prompt: "You visit a friend's Tiv family compound in Benue. How do you greet the household?",
      options: [
        { text: "Say “M sugh ne” (Greetings to you all) with a warm smile", correct: true, feedback: "Wonderful! You'll be warmly received into the circle." },
        { text: "Walk past everyone into a private room", correct: false, feedback: "Always greet the household together first." },
        { text: "Refuse to speak until spoken to", correct: false, feedback: "A cheerful greeting breaks any ice." }
      ]
    }
  },
  uvwie: {
    intro: "Heritage, royal traditions, and warm communal wisdom from the Uvwie kingdom in Delta State.",
    proverbs: [
      { native: "Ọmọ r'ẹkpeti ọvo ọ rha vwa.", translation: "A child from a united box cannot be scattered.", meaning: "Kinship, mutual support, and unity overcome every obstacle." },
      { native: "Uku k'emro ọ r'oma re.", translation: "Patience and soft words make hard matters pleasant.", meaning: "Patience and measured speech calm volatile disagreements." }
    ],
    etiquette: { title: "The respectful 'Miguọ' greeting", text: "In Uvwie culture, young people greet elders with a respectful bow or knee curtsy saying 'Miguọ' (I kneel), and elders respond with blessings of long life and peace." },
    scenario: {
      prompt: "You visit a senior relative in Effurun/Uvwie. How do you respectfully greet them?",
      options: [
        { text: "Say “Miguọ” with a respectful bow or knee curtsy", correct: true, feedback: "Spot on! The elder will warmly bless you with prayers for life and peace." },
        { text: "Give a quick wave and sit down silently", correct: false, feedback: "A respectful spoken greeting with posture is expected." },
        { text: "Demand refreshments before greeting", correct: false, feedback: "Always greet before anything else!" }
      ]
    }
  },
  isoko: {
    intro: "Rich proverbs, farming heritage, and hospitality from the Isoko land in the Niger Delta.",
    proverbs: [
      { native: "Ọvo ọ rẹ sa kporo emu vẹ abọ ọvo ho.", translation: "One cannot clap with a single hand.", meaning: "Teamwork and communal solidarity accomplish what solo effort cannot." },
      { native: "Ubi rẹ edhere ọ rẹ lẹliẹ ọzae jọ.", translation: "Patience on the pathway determines who finishes the journey.", meaning: "Steadfast perseverance always leads to honor." }
    ],
    etiquette: { title: "Warm 'Do' and 'Wadoo' reception", text: "Callers announce their arrival at an Isoko home with 'Do' or 'Koyo', and hosts respond with 'Wadoo' while extending hospitality as a sign of goodwill." },
    scenario: {
      prompt: "You arrive at an Isoko family home in Oleh or Ozoro. How do you greet the household?",
      options: [
        { text: "Say “Do” or “Koyo” and express warmth to the elders", correct: true, feedback: "Excellent! The hosts will warmly welcome you with 'Wadoo'." },
        { text: "Stand by the gate and say nothing", correct: false, feedback: "Call out a warm 'Do' to announce your presence." },
        { text: "Ignore everyone and walk right in", correct: false, feedback: "A respectful greeting is the hallmark of Isoko hospitality." }
      ]
    }
  },
  ijaw: {
    intro: "Riverine wisdom, waterway etiquette, and coastal proverbs from the Ịjọ (Izon) people of the Niger Delta.",
    proverbs: [
      { native: "Aru gbein-gbein pẹlẹmọ gba.", translation: "A steady paddle steers the canoe safely across the tide.", meaning: "Composure and steady discipline navigate life's turbulent moments." },
      { native: "Kẹnị bara sẹi indi kọnmọ gba.", translation: "One hand alone cannot secure a large slippery fish.", meaning: "Cooperation and unity overcome difficult tasks." }
    ],
    etiquette: { title: "The 'Dọọ' peace greeting & river hospitality", text: "In Ịjọ communities, greeting someone with 'Dọọ' literally wishes them peace and calm waters. Offering freshwater to incoming boat travelers is the fundamental welcome gesture." },
    scenario: {
      prompt: "You arrive at a waterfront community in Bayelsa or Delta. How do you address the gathering?",
      options: [
        { text: "Say “Dọọ” (Peace to you) with warmth and humility", correct: true, feedback: "Spot on! 'Dọọ' immediately establishes peace and warmth." },
        { text: "Walk past without acknowledging anyone", correct: false, feedback: "A cheerful greeting connects you with the community." },
        { text: "Refuse the offered drinking water immediately", correct: false, feedback: "Receiving water graciously is a sign of peace." }
      ]
    }
  }
};

const BADGES = [
  {
    id: "first-lesson",
    name: "First Steps",
    icon: "\u{1F476}",
    tier: "Bronze",
    category: "Milestones",
    desc: "Complete your very first lesson in any Nigerian language track.",
    rewardXp: 20,
    hint: "Complete 1 lesson in any language to unlock this honor.",
    test: s => s.lessonsCompleted >= 1,
    target: { type: "lessons", value: 1 }
  },
  {
    id: "three-lessons",
    name: "Warming Up",
    icon: "\u{1F525}",
    tier: "Bronze",
    category: "Milestones",
    desc: "Complete 3 language lessons and ignite your learning momentum.",
    rewardXp: 30,
    hint: "Finish 3 total lessons across the curriculum.",
    test: s => s.lessonsCompleted >= 3,
    target: { type: "lessons", value: 3 }
  },
  {
    id: "ten-lessons",
    name: "Committed Scholar",
    icon: "\u{1F4DA}",
    tier: "Silver",
    category: "Milestones",
    desc: "Conquer 10 full lessons across your Nigerian language paths.",
    rewardXp: 50,
    hint: "Reach double digits with 10 completed lessons.",
    test: s => s.lessonsCompleted >= 10,
    target: { type: "lessons", value: 10 }
  },
  {
    id: "streak-3",
    name: "3-Day Streak",
    icon: "\u{26A1}",
    tier: "Bronze",
    category: "Streaks",
    desc: "Practice consistently for 3 consecutive days without missing a beat.",
    rewardXp: 35,
    hint: "Keep the fire alive by learning for 3 straight days.",
    test: s => s.streak >= 3,
    target: { type: "streak", value: 3 }
  },
  {
    id: "perfect",
    name: "Flawless Learner",
    icon: "\u{2B50}",
    tier: "Silver",
    category: "Mastery",
    desc: "Score a 100% accuracy run on any lesson without losing a single heart.",
    rewardXp: 40,
    hint: "Complete any lesson with zero mistakes.",
    test: s => s.hasPerfect,
    target: { type: "hasPerfect", value: 1 }
  },
  {
    id: "polyglot",
    name: "Naija Polyglot",
    icon: "\u{1F30D}",
    tier: "Silver",
    category: "Milestones",
    desc: "Begin your linguistic journey across 3 different Nigerian heritage languages.",
    rewardXp: 50,
    hint: "Complete at least 1 lesson each in 3 separate languages.",
    test: s => s.languagesStarted >= 3,
    target: { type: "languages", value: 3 }
  },
  {
    id: "course-clear",
    name: "Path Pioneer",
    icon: "\u{1F3C1}",
    tier: "Gold",
    category: "Mastery",
    desc: "Clear every lesson in any full language curriculum track.",
    rewardXp: 100,
    hint: "Complete all lessons in any language course.",
    test: s => s.courseCleared,
    target: { type: "courseClear", value: 1 }
  },
  {
    id: "xp-100",
    name: "Century Club",
    icon: "\u{1F3C6}",
    tier: "Bronze",
    category: "Mastery",
    desc: "Accumulate 100 total Experience Points across your studies.",
    rewardXp: 25,
    hint: "Earn 100 XP from lessons, culture, and spaced practice.",
    test: s => s.xp >= 100,
    target: { type: "xp", value: 100 }
  },
  {
    id: "xp-300",
    name: "XP Machine",
    icon: "\u{1F4AA}",
    tier: "Silver",
    category: "Mastery",
    desc: "Accumulate 300 total Experience Points through dedicated study.",
    rewardXp: 50,
    hint: "Reach 300 XP to prove your consistency.",
    test: s => s.xp >= 300,
    target: { type: "xp", value: 300 }
  },
  {
    id: "xp-500",
    name: "XP Legend",
    icon: "\u{1F680}",
    tier: "Gold",
    category: "Mastery",
    desc: "Break past 500 total Experience Points into the master tier.",
    rewardXp: 75,
    hint: "Push your knowledge to achieve 500 XP.",
    test: s => s.xp >= 500,
    target: { type: "xp", value: 500 }
  },
  {
    id: "streak-7",
    name: "Week Warrior",
    icon: "\u{1F31F}",
    tier: "Silver",
    category: "Streaks",
    desc: "Maintain an unbroken 7-day daily practice streak.",
    rewardXp: 60,
    hint: "Practice for a full week straight without breaking the chain.",
    test: s => s.streak >= 7,
    target: { type: "streak", value: 7 }
  },
  {
    id: "streak-30",
    name: "Monthly Royalty",
    icon: "\u{1F451}",
    tier: "Diamond",
    category: "Streaks",
    desc: "Achieve the ultimate milestone: an unbroken 30-day learning streak.",
    rewardXp: 150,
    hint: "30 consecutive days of daily Nigerian language learning.",
    test: s => s.streak >= 30,
    target: { type: "streak", value: 30 }
  },
  {
    id: "practice-5",
    name: "Spaced Review Pro",
    icon: "\u{1F3AF}",
    tier: "Bronze",
    category: "Mastery",
    desc: "Complete 5 memory reinforcement sessions using the Ebbinghaus engine.",
    rewardXp: 40,
    hint: "Complete 5 spaced repetition sessions in Practice mode.",
    test: s => s.practiceSessionsCompleted >= 5,
    target: { type: "practice", value: 5 }
  },
  {
    id: "culture-keeper",
    name: "Culture Keeper",
    icon: "\u{1FAD8}",
    tier: "Silver",
    category: "Culture",
    desc: "Complete cultural immersion hubs for at least 3 heritage languages.",
    rewardXp: 50,
    hint: "Explore and finish cultural hubs across 3 languages.",
    test: s => s.cultureCompletedCount >= 3,
    target: { type: "culture", value: 3 }
  }
];

/* ====================== HELPERS ====================== */
function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }
function normalizeStr(s){
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
}
/* ====================== VOICE & AUDIO ENGINE ====================== */
const clientAudioCache = new Map();
let currentAudioPlayer = null;

let voiceSettings = {
  engine: "ai", // "ai" (Studio AI Voice) | "device" (Device Synthesizer)
  voicePersona: "auto", // "auto" | "female" | "male"
  speed: 0.85
};

try {
  const savedVoiceSettings = localStorage.getItem("lingua_voice_settings");
  if(savedVoiceSettings) {
    voiceSettings = { ...voiceSettings, ...JSON.parse(savedVoiceSettings) };
  }
} catch(e){}

function saveVoiceSettings(){
  try {
    localStorage.setItem("lingua_voice_settings", JSON.stringify(voiceSettings));
  } catch(e){}
  updateVoiceUIIndicators();
}

function updateVoiceUIIndicators(){
  const pillLabel = document.getElementById("voice-settings-pill-label");
  if(pillLabel){
    pillLabel.textContent = voiceSettings.engine === "ai" ? "AI Voice" : "Device";
  }
  const profTitle = document.getElementById("profile-voice-title");
  const profDesc = document.getElementById("profile-voice-desc");
  if(profTitle){
    profTitle.textContent = voiceSettings.engine === "ai" 
      ? `Studio AI Voice (${voiceSettings.speed}x)` 
      : `Device Synthesizer (${voiceSettings.speed}x)`;
  }
  if(profDesc){
    profDesc.textContent = voiceSettings.engine === "ai"
      ? "Authentic Nigerian regional accents, tonal cadence & open vowels."
      : "System speech synthesizer with language-tuned phonetics and cadence.";
  }
}

function getBestVoiceForLanguage(lang, courseKey){
  if(!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  if(!voices.length) return null;

  const profile = (courseKey && COURSES[courseKey]?.voiceProfile) ? COURSES[courseKey].voiceProfile : null;
  const preferredTags = profile?.preferredTags || [lang, "en-NG", "pcm", "en-GH", "en-ZA"];

  // 1. Exact match from preferredTags
  for(const tag of preferredTags){
    const found = voices.find(v => v.lang.toLowerCase() === tag.toLowerCase() || v.lang.toLowerCase().replace("_", "-") === tag.toLowerCase());
    if(found) return found;
  }

  // 2. Prefix match (e.g. "yo", "ig", "ha")
  for(const tag of preferredTags){
    const prefix = tag.split("-")[0].toLowerCase();
    const found = voices.find(v => v.lang.toLowerCase().startsWith(prefix));
    if(found) return found;
  }

  // 3. Search voice names for Nigeria, Naija, African, Pidgin
  const nigerianVoice = voices.find(v => {
    const name = v.name.toLowerCase();
    return name.includes("nigeria") || name.includes("naija") || name.includes("pidgin");
  });
  if(nigerianVoice) return nigerianVoice;

  const africanVoice = voices.find(v => {
    const name = v.name.toLowerCase();
    return name.includes("african") || v.lang.toLowerCase().includes("za") || v.lang.toLowerCase().includes("gh");
  });
  if(africanVoice) return africanVoice;

  // 4. Default voice
  return voices.find(v => v.default) || voices[0];
}

function getPhoneticUtterance(text, courseKey, voice){
  if(!text) return "";
  const isAfricanVoice = voice && (
    voice.lang.toLowerCase().includes("ng") || 
    voice.lang.toLowerCase().startsWith("yo") || 
    voice.lang.toLowerCase().startsWith("ig") || 
    voice.lang.toLowerCase().startsWith("ha") ||
    voice.name.toLowerCase().includes("nigeria") ||
    voice.name.toLowerCase().includes("naija")
  );
  if(isAfricanVoice) return text;

  // For generic voices that stumble on Nigerian sub-dot tone characters
  return text
    .replace(/[ọỌ]/g, "o")
    .replace(/[ẹẸ]/g, "e")
    .replace(/[ịỊ]/g, "i")
    .replace(/[ụỤ]/g, "u")
    .replace(/[ṅṄ]/g, "n");
}

async function speak(text, lang, courseKey, triggerBtn){
  if(!text) return;

  // Resolve courseKey if not provided
  if(!courseKey){
    if(typeof session !== "undefined" && session?.courseKey) {
      courseKey = session.courseKey;
    } else if(typeof currentCourse !== "undefined" && currentCourse) {
      courseKey = currentCourse;
    } else {
      const match = Object.keys(COURSES).find(k => COURSES[k].speechLang === lang);
      if(match) courseKey = match;
    }
  }

  const course = courseKey ? COURSES[courseKey] : null;
  const speechLang = lang || course?.speechLang || "en-NG";

  const sBtn = document.getElementById("speaker-btn");
  const animatedBtns = [sBtn, triggerBtn].filter(Boolean);
  animatedBtns.forEach(b => b.classList.add("playing"));

  const clearPlaying = () => {
    animatedBtns.forEach(b => b.classList.remove("playing"));
  };

  // Stop active audio or speech
  if(currentAudioPlayer){
    try { currentAudioPlayer.pause(); currentAudioPlayer.currentTime = 0; } catch(e){}
    currentAudioPlayer = null;
  }
  if("speechSynthesis" in window){
    try { window.speechSynthesis.cancel(); } catch(e){}
  }

  // 1. Studio AI Voice (Authentic Regional Accent)
  if(voiceSettings.engine !== "device"){
    const voiceName = (voiceSettings.voicePersona === "female") ? "Kore" :
                      (voiceSettings.voicePersona === "male") ? (courseKey === "yoruba" || courseKey === "urhobo" ? "Fenrir" : "Zephyr") :
                      (course?.voiceProfile?.geminiVoice || "Kore");

    const cacheKey = `${courseKey || "default"}_${voiceName}_${text.trim().toLowerCase()}`;

    // Check in-memory audio cache
    if(clientAudioCache.has(cacheKey)){
      try {
        const audioUrl = clientAudioCache.get(cacheKey);
        const player = new Audio(audioUrl);
        player.playbackRate = voiceSettings.speed || 0.85;
        currentAudioPlayer = player;
        player.onended = clearPlaying;
        player.onerror = () => {
          clearPlaying();
          playDeviceSpeech(text, speechLang, courseKey, clearPlaying);
        };
        await player.play();
        return;
      } catch(err){
        // Proceed to fetch or device fallback
      }
    }

    // Fetch audio from /api/tts
    try {
      const url = `/api/tts?text=${encodeURIComponent(text.trim())}&course=${encodeURIComponent(courseKey || "")}&voice=${encodeURIComponent(voiceName)}`;
      const resp = await fetch(url);
      const contentType = resp.headers.get("content-type") || "";

      if(resp.ok && contentType.includes("audio")){
        const blob = await resp.blob();
        const blobUrl = URL.createObjectURL(blob);
        clientAudioCache.set(cacheKey, blobUrl);

        const player = new Audio(blobUrl);
        player.playbackRate = voiceSettings.speed || 0.85;
        currentAudioPlayer = player;
        player.onended = clearPlaying;
        player.onerror = () => {
          clearPlaying();
          playDeviceSpeech(text, speechLang, courseKey, clearPlaying);
        };
        await player.play();
        return;
      }
    } catch(fetchErr){
      console.warn("Studio voice fetch error, using device fallback:", fetchErr);
    }
  }

  // 2. Tuned Device Synthesizer Fallback
  playDeviceSpeech(text, speechLang, courseKey, clearPlaying);
}

function playDeviceSpeech(text, lang, courseKey, onFinish){
  if(!("speechSynthesis" in window)){
    if(onFinish) onFinish();
    return;
  }
  try {
    const course = courseKey ? COURSES[courseKey] : null;
    const profile = course?.voiceProfile;
    const voice = getBestVoiceForLanguage(lang, courseKey);

    const spokenText = getPhoneticUtterance(text, courseKey, voice);
    const u = new SpeechSynthesisUtterance(spokenText);
    if(voice) u.voice = voice;
    u.lang = voice?.lang || lang || "en-NG";
    u.rate = voiceSettings.speed || profile?.rate || 0.84;
    u.pitch = profile?.pitch || 1.06;

    u.onend = () => { if(onFinish) onFinish(); };
    u.onerror = () => { if(onFinish) onFinish(); };

    window.speechSynthesis.speak(u);
  } catch(e){
    if(onFinish) onFinish();
  }
}

function prefetchLessonAudio(courseKey, lessonIndex){
  if(voiceSettings.engine === "device") return;
  const course = COURSES[courseKey];
  if(!course || !course.lessons || !course.lessons[lessonIndex]) return;
  const vocab = course.lessons[lessonIndex].vocab || [];
  const voiceName = (voiceSettings.voicePersona === "female") ? "Kore" :
                    (voiceSettings.voicePersona === "male") ? (courseKey === "yoruba" || courseKey === "urhobo" ? "Fenrir" : "Zephyr") :
                    (course.voiceProfile?.geminiVoice || "Kore");

  vocab.slice(0, 4).forEach((v, i) => {
    setTimeout(async () => {
      const cacheKey = `${courseKey}_${voiceName}_${v.native.trim().toLowerCase()}`;
      if(!clientAudioCache.has(cacheKey)){
        try {
          const resp = await fetch(`/api/tts?text=${encodeURIComponent(v.native.trim())}&course=${encodeURIComponent(courseKey)}&voice=${encodeURIComponent(voiceName)}`);
          if(resp.ok && (resp.headers.get("content-type") || "").includes("audio")){
            const blob = await resp.blob();
            clientAudioCache.set(cacheKey, URL.createObjectURL(blob));
          }
        } catch(e){}
      }
    }, i * 350);
  });
}

let activeVoiceModalCourse = "igbo";

function openVoiceSettingsModal(targetCourseKey){
  const modal = document.getElementById("voice-settings-modal");
  if(!modal) return;

  const currentActiveCourse = targetCourseKey || (typeof session !== "undefined" && session?.courseKey) || (typeof currentCourse !== "undefined" && currentCourse) || "igbo";
  activeVoiceModalCourse = currentActiveCourse;

  const course = COURSES[currentActiveCourse] || COURSES.igbo;
  const profile = course.voiceProfile || {};

  // Update highlight card
  const badge = document.getElementById("voice-lang-badge");
  const tag = document.getElementById("voice-accent-tag");
  const persona = document.getElementById("voice-persona-name");
  const note = document.getElementById("voice-tuning-note");
  const sub = document.getElementById("voice-modal-course-sub");

  if(badge) badge.textContent = `${course.name} Voice`;
  if(tag) tag.textContent = profile.accent || "Authentic Regional Accent";
  if(persona) persona.textContent = profile.persona || "Native Voice Cast";
  if(note) note.textContent = `Tuned for ${course.name} (${course.native}) phonetics, vowel registers and cadence.`;
  if(sub) sub.textContent = `Currently tuned for ${course.name} lessons`;

  // Set test button
  const testBtn = document.getElementById("btn-voice-test");
  if(testBtn){
    testBtn.onclick = () => {
      const sampleText = profile.sampleText || course.lessons?.[0]?.vocab?.[0]?.native || "Ndewo";
      speak(sampleText, course.speechLang, currentActiveCourse, testBtn);
    };
  }

  // Engine buttons state
  const aiBtn = document.getElementById("opt-engine-ai");
  const devBtn = document.getElementById("opt-engine-device");
  if(aiBtn && devBtn){
    aiBtn.classList.toggle("active", voiceSettings.engine !== "device");
    devBtn.classList.toggle("active", voiceSettings.engine === "device");
  }

  // Persona buttons state
  const personaTabs = document.getElementById("voice-persona-tabs");
  if(personaTabs){
    personaTabs.querySelectorAll(".voice-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.persona === voiceSettings.voicePersona);
    });
  }

  // Speed slider state
  const speedSlider = document.getElementById("voice-speed-slider");
  const speedVal = document.getElementById("voice-speed-val");
  if(speedSlider){
    speedSlider.value = voiceSettings.speed || 0.85;
  }
  if(speedVal){
    const paceLabel = voiceSettings.speed < 0.80 ? "(Slow)" : voiceSettings.speed > 0.95 ? "(Fast)" : "(Standard)";
    speedVal.textContent = `${Number(voiceSettings.speed).toFixed(2)}x ${paceLabel}`;
  }

  // Render all 10 languages list
  renderAllLanguagesVoiceList();

  if(typeof modal.showModal === "function"){
    modal.showModal();
  } else {
    modal.classList.remove("hidden");
  }
}

function renderAllLanguagesVoiceList(){
  const container = document.getElementById("voice-all-langs-list");
  if(!container) return;
  container.innerHTML = "";

  Object.entries(COURSES).forEach(([k, c]) => {
    const prof = c.voiceProfile || {};
    const row = document.createElement("div");
    row.className = "voice-lang-row-item";
    row.innerHTML = `
      <div>
        <div class="voice-lang-row-name">${c.name} <span style="font-size:11px; color:var(--gold); font-weight:normal;">(${c.native})</span></div>
        <div class="voice-lang-row-detail">${prof.accent || "Authentic Regional Dialect"} • ${prof.persona || "Regional Voice"}</div>
      </div>
      <button type="button" class="voice-lang-row-btn" data-lang-key="${k}" title="Play voice sample for ${c.name}">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        <span>Test</span>
      </button>
    `;

    const btn = row.querySelector(".voice-lang-row-btn");
    btn.onclick = (e) => {
      e.stopPropagation();
      const sample = prof.sampleText || c.lessons?.[0]?.vocab?.[0]?.native || "Hello";
      speak(sample, c.speechLang, k, btn);
    };

    container.appendChild(row);
  });
}

function initVoiceSettingsModal(){
  const modal = document.getElementById("voice-settings-modal");
  if(!modal) return;

  // Home pill trigger
  const homeBtn = document.getElementById("voice-settings-btn-home");
  if(homeBtn){
    homeBtn.onclick = () => openVoiceSettingsModal();
  }

  // Profile manage button trigger
  const profBtn = document.getElementById("profile-voice-adjust-btn");
  if(profBtn){
    profBtn.onclick = () => openVoiceSettingsModal();
  }

  // Close & Save buttons
  const closeBtn = document.getElementById("voice-settings-close");
  if(closeBtn){
    closeBtn.onclick = () => {
      saveVoiceSettings();
      if(typeof modal.close === "function") modal.close();
      else modal.classList.add("hidden");
    };
  }

  const doneBtn = document.getElementById("voice-settings-done-btn");
  if(doneBtn){
    doneBtn.onclick = () => {
      saveVoiceSettings();
      if(typeof modal.close === "function") modal.close();
      else modal.classList.add("hidden");
      showToast?.("Voice Preferences Saved", "Your authentic speech tuning has been updated.", "success");
    };
  }

  // Engine toggles
  const aiBtn = document.getElementById("opt-engine-ai");
  const devBtn = document.getElementById("opt-engine-device");
  if(aiBtn && devBtn){
    aiBtn.onclick = () => {
      voiceSettings.engine = "ai";
      aiBtn.classList.add("active");
      devBtn.classList.remove("active");
      saveVoiceSettings();
    };
    devBtn.onclick = () => {
      voiceSettings.engine = "device";
      devBtn.classList.add("active");
      aiBtn.classList.remove("active");
      saveVoiceSettings();
    };
  }

  // Persona tabs
  const personaTabs = document.getElementById("voice-persona-tabs");
  if(personaTabs){
    personaTabs.querySelectorAll(".voice-tab-btn").forEach(btn => {
      btn.onclick = () => {
        personaTabs.querySelectorAll(".voice-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        voiceSettings.voicePersona = btn.dataset.persona;
        saveVoiceSettings();
      };
    });
  }

  // Speed range
  const speedSlider = document.getElementById("voice-speed-slider");
  const speedVal = document.getElementById("voice-speed-val");
  if(speedSlider && speedVal){
    speedSlider.oninput = () => {
      const val = parseFloat(speedSlider.value);
      voiceSettings.speed = val;
      const paceLabel = val < 0.80 ? "(Slow)" : val > 0.95 ? "(Fast)" : "(Standard)";
      speedVal.textContent = `${val.toFixed(2)}x ${paceLabel}`;
      saveVoiceSettings();
    };
  }

  updateVoiceUIIndicators();
}


/* ---- record-yourself (self-practice, no automatic scoring) ---- */
let mediaRecorder = null;
let isRecording = false;
let recordedBlobUrl = null;

function setupSpeakingRow(){
  const row = document.getElementById("speaking-row");
  const micBtn = document.getElementById("mic-btn");
  const micLabel = document.getElementById("mic-btn-label");
  const playbackBtn = document.getElementById("playback-btn");

  if(!("mediaDevices" in navigator) || !window.MediaRecorder){
    row.classList.add("hidden");
    return;
  }
  row.classList.remove("hidden");
  micBtn.classList.remove("recording");
  micLabel.textContent = "Try saying it";
  playbackBtn.classList.add("hidden");
  if(recordedBlobUrl){ URL.revokeObjectURL(recordedBlobUrl); recordedBlobUrl = null; }

  micBtn.onclick = toggleRecording;
  playbackBtn.onclick = () => { if(recordedBlobUrl) new Audio(recordedBlobUrl).play(); };
}

async function toggleRecording(){
  const micBtn = document.getElementById("mic-btn");
  const micLabel = document.getElementById("mic-btn-label");
  const playbackBtn = document.getElementById("playback-btn");

  if(!isRecording){
    try{
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const chunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => { if(e.data.size > 0) chunks.push(e.data); };
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        if(recordedBlobUrl) URL.revokeObjectURL(recordedBlobUrl);
        recordedBlobUrl = URL.createObjectURL(blob);
        playbackBtn.classList.remove("hidden");
        stream.getTracks().forEach(t => t.stop());
      };
      mediaRecorder.start();
      isRecording = true;
      micBtn.classList.add("recording");
      micLabel.textContent = "Tap to stop";
    }catch(e){
      alert("Couldn't access your microphone. Check your browser's site permissions.");
    }
  }else{
    mediaRecorder.stop();
    isRecording = false;
    micBtn.classList.remove("recording");
    micLabel.textContent = "Try saying it";
  }
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

function makeBlankQuestion(v, course){
  const chars = v.native.split("");
  const candidates = chars.map((ch, i) => ({ ch, i })).filter(x => x.ch !== " " && x.i !== 0);
  const pick = candidates.length ? candidates[Math.floor(Math.random() * candidates.length)] : { ch: chars[0], i: 0 };
  const correctLetter = pick.ch;
  const masked = chars.map((ch, i) => (i === pick.i ? "_" : ch)).join("");

  const letterPool = [...new Set(poolFor(course).flatMap(p => p.native.split("")).filter(ch => ch !== " " && ch.toLowerCase() !== correctLetter.toLowerCase()))];
  const distractors = shuffle(letterPool).slice(0, 3);
  const fallbackLetters = "aeiou".split("").filter(l => l !== correctLetter.toLowerCase());
  while(distractors.length < 3) distractors.push(fallbackLetters[distractors.length] || "x");

  return {
    type: "blank",
    prompt: masked,
    meaningHint: v.en,
    options: shuffle([correctLetter, ...distractors]),
    answer: correctLetter,
    _vocab: v
  };
}

/* ==========================================================================
   DUOLINGO-STYLE TRANSLATE SENTENCE INFRASTRUCTURE (Mascot, Data, Generator)
   ========================================================================== */
const DUO_MASCOT_SVG = `<svg class="duo-mascot-svg" viewBox="0 0 130 165" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Ears -->
  <circle cx="34" cy="34" r="14" fill="#8c5332" stroke="#25160e" stroke-width="2.5"/>
  <circle cx="34" cy="34" r="7.5" fill="#d99368"/>
  <circle cx="96" cy="34" r="14" fill="#8c5332" stroke="#25160e" stroke-width="2.5"/>
  <circle cx="96" cy="34" r="7.5" fill="#d99368"/>
  
  <!-- Body / Torso -->
  <path d="M 28 92 C 22 122 26 148 42 155 C 56 160 74 160 88 155 C 104 148 108 122 102 92 Z" fill="#8c5332" stroke="#25160e" stroke-width="2.5"/>
  <!-- Belly -->
  <path d="M 44 112 C 44 140 86 140 86 112 Z" fill="#a46843" opacity="0.4"/>
  <!-- Paws / Feet -->
  <ellipse cx="46" cy="155" rx="12" ry="6" fill="#754225" stroke="#25160e" stroke-width="2"/>
  <ellipse cx="84" cy="155" rx="12" ry="6" fill="#754225" stroke="#25160e" stroke-width="2"/>
  
  <!-- Scarf Back Layer (Cyan/Teal like Duolingo) -->
  <path d="M 27 75 C 38 96 92 96 103 75 C 108 67 102 61 92 65 C 78 70 52 70 38 65 C 28 61 22 67 27 75 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="2.2"/>
  <!-- Scarf dangling tail on left -->
  <path d="M 30 78 C 22 86 21 104 32 112 C 38 116 41 104 38 92 Z" fill="#0ea5e9" stroke="#0284c7" stroke-width="2"/>
  
  <!-- Head Base -->
  <path d="M 30 52 C 30 25 100 25 100 52 C 104 70 101 83 89 87 C 77 91 53 91 41 87 C 29 83 26 70 30 52 Z" fill="#8c5332" stroke="#25160e" stroke-width="2.5"/>
  
  <!-- Folded Arms Across Chest (Determined Duolingo Bear Pose) -->
  <path d="M 27 92 C 27 118 64 122 78 112 C 84 107 80 98 70 100 C 56 102 42 97 38 90" fill="#754225" stroke="#25160e" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 103 92 C 103 118 66 122 52 112 C 46 107 50 98 60 100 C 74 102 88 97 92 90" fill="#834b2b" stroke="#25160e" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Snout / Muzzle -->
  <ellipse cx="65" cy="62" rx="16" ry="13" fill="#dfa27a" stroke="#25160e" stroke-width="2"/>
  <!-- Nose -->
  <path d="M 59 55 C 59 52 71 52 71 55 C 71 60 67 63 65 63 C 63 63 59 60 59 55 Z" fill="#25160e"/>
  <!-- Smile -->
  <path d="M 61 66 C 63 69 67 69 69 66" stroke="#25160e" stroke-width="2.2" stroke-linecap="round"/>
  
  <!-- Eyebrows with determined expression -->
  <path d="M 43 38 L 56 41" stroke="#25160e" stroke-width="3" stroke-linecap="round"/>
  <path d="M 74 41 L 87 38" stroke="#25160e" stroke-width="3" stroke-linecap="round"/>
  
  <!-- Eyes with blink animation -->
  <g class="mascot-eyes">
    <ellipse cx="50" cy="46" rx="4" ry="5" fill="#ffffff" stroke="#25160e" stroke-width="1.6"/>
    <circle cx="50" cy="46" r="2.5" fill="#25160e"/>
    <circle cx="51.2" cy="44.8" r="0.9" fill="#ffffff"/>
    <ellipse cx="80" cy="46" rx="4" ry="5" fill="#ffffff" stroke="#25160e" stroke-width="1.6"/>
    <circle cx="80" cy="46" r="2.5" fill="#25160e"/>
    <circle cx="81.2" cy="44.8" r="0.9" fill="#ffffff"/>
  </g>
</svg>`;

const CURATED_SENTENCES = {
  igbo: [
    {
      nativeSentence: "Kpachara anya, akpa m dị arọ nke ukwuu!",
      speakText: "Kpachara anya, akpa m dị arọ nke ukwuu",
      tokens: [
        { text: "Kpachara anya", hint: "Careful / Watch out", isNew: true },
        { text: ",", isPunct: true },
        { text: "akpa", hint: "bag / suitcase" },
        { text: "m", hint: "my" },
        { text: "dị", hint: "is" },
        { text: "arọ", hint: "heavy" },
        { text: "nke ukwuu", hint: "very / very much" },
        { text: "!", isPunct: true }
      ],
      answer: "Careful, my suitcase is very heavy!",
      answerTokens: ["Careful", "my", "suitcase", "is", "very", "heavy"],
      acceptAnswers: [
        "Careful my suitcase is very heavy",
        "Careful my bag is very heavy",
        "Watch out my bag is very heavy",
        "Watch out my suitcase is very heavy"
      ],
      distractors: ["in", "small", "food", "bag"]
    },
    {
      nativeSentence: "Ndewo, kedu aha gị?",
      speakText: "Ndewo, kedu aha gị",
      tokens: [
        { text: "Ndewo", hint: "Hello / Greetings" },
        { text: ",", isPunct: true },
        { text: "kedu", hint: "what / how" },
        { text: "aha", hint: "name", isNew: true },
        { text: "gị", hint: "your" },
        { text: "?", isPunct: true }
      ],
      answer: "Hello, what is your name?",
      answerTokens: ["Hello", "what", "is", "your", "name"],
      acceptAnswers: ["Hello what is your name", "Hi what is your name"],
      distractors: ["my", "where", "friend", "is"]
    },
    {
      nativeSentence: "Ụtụtụ ọma, nne m na nna m!",
      speakText: "Ụtụtụ ọma, nne m na nna m",
      tokens: [
        { text: "Ụtụtụ ọma", hint: "Good morning" },
        { text: ",", isPunct: true },
        { text: "nne", hint: "mother" },
        { text: "m", hint: "my" },
        { text: "na", hint: "and" },
        { text: "nna", hint: "father", isNew: true },
        { text: "m", hint: "my" },
        { text: "!", isPunct: true }
      ],
      answer: "Good morning, my mother and my father!",
      answerTokens: ["Good", "morning", "my", "mother", "and", "my", "father"],
      acceptAnswers: ["Good morning my mother and father", "Good morning my mother and my father"],
      distractors: ["night", "sister", "friend", "food"]
    },
    {
      nativeSentence: "Biko, wetara m mmiri oyi!",
      speakText: "Biko, wetara m mmiri oyi",
      tokens: [
        { text: "Biko", hint: "Please" },
        { text: ",", isPunct: true },
        { text: "wetara", hint: "bring", isNew: true },
        { text: "m", hint: "me" },
        { text: "mmiri", hint: "water" },
        { text: "oyi", hint: "cold" },
        { text: "!", isPunct: true }
      ],
      answer: "Please, bring me cold water!",
      answerTokens: ["Please", "bring", "me", "cold", "water"],
      acceptAnswers: ["Please bring me cold water"],
      distractors: ["hot", "drink", "food", "yam"]
    },
    {
      nativeSentence: "Rie nri a, ọ dị ụtọ nke ukwuu!",
      speakText: "Rie nri a, ọ dị ụtọ nke ukwuu",
      tokens: [
        { text: "Rie", hint: "Eat" },
        { text: "nri", hint: "food" },
        { text: "a", hint: "this" },
        { text: ",", isPunct: true },
        { text: "ọ", hint: "it" },
        { text: "dị ụtọ", hint: "is delicious / tasty", isNew: true },
        { text: "nke ukwuu", hint: "very much" },
        { text: "!", isPunct: true }
      ],
      answer: "Eat this food, it is very delicious!",
      answerTokens: ["Eat", "this", "food", "it", "is", "very", "delicious"],
      acceptAnswers: ["Eat this food it is very delicious", "Eat this food it is very tasty"],
      distractors: ["water", "cook", "cold", "sweet"]
    }
  ],
  yoruba: [
    {
      nativeSentence: "Akiyesi, apo mi wuwo pupo!",
      speakText: "Akiyesi, apo mi wuwo pupo",
      tokens: [
        { text: "Akiyesi", hint: "Careful / Attention", isNew: true },
        { text: ",", isPunct: true },
        { text: "apo", hint: "bag / suitcase" },
        { text: "mi", hint: "my" },
        { text: "wuwo", hint: "is heavy" },
        { text: "pupo", hint: "very / a lot" },
        { text: "!", isPunct: true }
      ],
      answer: "Careful, my suitcase is very heavy!",
      answerTokens: ["Careful", "my", "suitcase", "is", "very", "heavy"],
      acceptAnswers: [
        "Careful my suitcase is very heavy",
        "Careful my bag is very heavy",
        "Attention my bag is very heavy",
        "Attention my suitcase is very heavy"
      ],
      distractors: ["in", "bag", "small", "shirt"]
    },
    {
      nativeSentence: "Bawo ni, e kaaro gbogbo yin!",
      speakText: "Bawo ni, e kaaro gbogbo yin",
      tokens: [
        { text: "Bawo ni", hint: "Hello / How are you" },
        { text: ",", isPunct: true },
        { text: "e kaaro", hint: "good morning" },
        { text: "gbogbo", hint: "all", isNew: true },
        { text: "yin", hint: "you" },
        { text: "!", isPunct: true }
      ],
      answer: "Hello, good morning to you all!",
      answerTokens: ["Hello", "good", "morning", "to", "you", "all"],
      acceptAnswers: ["Hello good morning to you all", "Hi good morning to all of you"],
      distractors: ["night", "we", "tomorrow", "friend"]
    },
    {
      nativeSentence: "E se pupo fun iranlowo re!",
      speakText: "E se pupo fun iranlowo re",
      tokens: [
        { text: "E se", hint: "Thank you" },
        { text: "pupo", hint: "very much" },
        { text: "fun", hint: "for" },
        { text: "iranlowo", hint: "help / assistance", isNew: true },
        { text: "re", hint: "your" },
        { text: "!", isPunct: true }
      ],
      answer: "Thank you very much for your help!",
      answerTokens: ["Thank", "you", "very", "much", "for", "your", "help"],
      acceptAnswers: ["Thank you very much for your help", "Thanks a lot for your help"],
      distractors: ["welcome", "please", "kindness", "friend"]
    },
    {
      nativeSentence: "Iya mi ati baba mi wa nile.",
      speakText: "Iya mi ati baba mi wa nile",
      tokens: [
        { text: "Iya", hint: "Mother" },
        { text: "mi", hint: "my" },
        { text: "ati", hint: "and" },
        { text: "baba", hint: "father" },
        { text: "mi", hint: "my" },
        { text: "wa", hint: "are" },
        { text: "nile", hint: "at home", isNew: true },
        { text: ".", isPunct: true }
      ],
      answer: "My mother and my father are at home.",
      answerTokens: ["My", "mother", "and", "my", "father", "are", "at", "home"],
      acceptAnswers: ["My mother and father are at home", "My mother and my father are at home"],
      distractors: ["market", "going", "sister", "house"]
    },
    {
      nativeSentence: "Je onje re pelu omi tutu!",
      speakText: "Je onje re pelu omi tutu",
      tokens: [
        { text: "Je", hint: "Eat" },
        { text: "onje", hint: "food" },
        { text: "re", hint: "your" },
        { text: "pelu", hint: "with", isNew: true },
        { text: "omi", hint: "water" },
        { text: "tutu", hint: "cold" },
        { text: "!", isPunct: true }
      ],
      answer: "Eat your food with cold water!",
      answerTokens: ["Eat", "your", "food", "with", "cold", "water"],
      acceptAnswers: ["Eat your food with cold water"],
      distractors: ["hot", "drink", "yam", "tea"]
    }
  ],
  hausa: [
    {
      nativeSentence: "Hankali, jaka ta tana da nauyi sosai!",
      speakText: "Hankali, jaka ta tana da nauyi sosai",
      tokens: [
        { text: "Hankali", hint: "Careful / Attention", isNew: true },
        { text: ",", isPunct: true },
        { text: "jaka", hint: "bag / suitcase" },
        { text: "ta", hint: "my" },
        { text: "tana da", hint: "is / has" },
        { text: "nauyi", hint: "heavy" },
        { text: "sosai", hint: "very / a lot" },
        { text: "!", isPunct: true }
      ],
      answer: "Careful, my suitcase is very heavy!",
      answerTokens: ["Careful", "my", "suitcase", "is", "very", "heavy"],
      acceptAnswers: [
        "Careful my suitcase is very heavy",
        "Careful my bag is very heavy",
        "Attention my bag is very heavy",
        "Attention my suitcase is very heavy"
      ],
      distractors: ["in", "bag", "small", "book"]
    },
    {
      nativeSentence: "Sannu, ina kwana, yaya kake?",
      speakText: "Sannu, ina kwana, yaya kake",
      tokens: [
        { text: "Sannu", hint: "Hello" },
        { text: ",", isPunct: true },
        { text: "ina kwana", hint: "good morning" },
        { text: ",", isPunct: true },
        { text: "yaya", hint: "how" },
        { text: "kake", hint: "are you", isNew: true },
        { text: "?", isPunct: true }
      ],
      answer: "Hello, good morning, how are you?",
      answerTokens: ["Hello", "good", "morning", "how", "are", "you"],
      acceptAnswers: ["Hello good morning how are you"],
      distractors: ["fine", "we", "night", "good"]
    },
    {
      nativeSentence: "Na gode kwarai da taimakonka!",
      speakText: "Na gode kwarai da taimakonka",
      tokens: [
        { text: "Na gode", hint: "Thank you" },
        { text: "kwarai", hint: "very much" },
        { text: "da", hint: "for / with" },
        { text: "taimakonka", hint: "your help", isNew: true },
        { text: "!", isPunct: true }
      ],
      answer: "Thank you very much for your help!",
      answerTokens: ["Thank", "you", "very", "much", "for", "your", "help"],
      acceptAnswers: ["Thank you very much for your help", "Thanks very much for your help"],
      distractors: ["please", "friend", "welcome", "happy"]
    },
    {
      nativeSentence: "Uwa ta da uba na suna nan.",
      speakText: "Uwa ta da uba na suna nan",
      tokens: [
        { text: "Uwa", hint: "Mother" },
        { text: "ta", hint: "my" },
        { text: "da", hint: "and" },
        { text: "uba", hint: "father" },
        { text: "na", hint: "my" },
        { text: "suna nan", hint: "are here", isNew: true },
        { text: ".", isPunct: true }
      ],
      answer: "My mother and my father are here.",
      answerTokens: ["My", "mother", "and", "my", "father", "are", "here"],
      acceptAnswers: ["My mother and father are here", "My mother and my father are here"],
      distractors: ["house", "there", "sister", "market"]
    },
    {
      nativeSentence: "Ci abinci da ruwan sanyi!",
      speakText: "Ci abinci da ruwan sanyi",
      tokens: [
        { text: "Ci", hint: "Eat" },
        { text: "abinci", hint: "food" },
        { text: "da", hint: "with", isNew: true },
        { text: "ruwan", hint: "water" },
        { text: "sanyi", hint: "cold" },
        { text: "!", isPunct: true }
      ],
      answer: "Eat food with cold water!",
      answerTokens: ["Eat", "food", "with", "cold", "water"],
      acceptAnswers: ["Eat food with cold water"],
      distractors: ["hot", "drink", "meat", "tea"]
    }
  ],
  edo: [
    {
      nativeSentence: "Lẹkpa, ẹkpo mwẹ lọgbọ gbe!",
      speakText: "Lẹkpa, ẹkpo mwẹ lọgbọ gbe",
      tokens: [
        { text: "Lẹkpa", hint: "Careful / Watch out", isNew: true },
        { text: ",", isPunct: true },
        { text: "ẹkpo", hint: "bag / suitcase" },
        { text: "mwẹ", hint: "my" },
        { text: "lọgbọ", hint: "is heavy" },
        { text: "gbe", hint: "very / a lot" },
        { text: "!", isPunct: true }
      ],
      answer: "Careful, my suitcase is very heavy!",
      answerTokens: ["Careful", "my", "suitcase", "is", "very", "heavy"],
      acceptAnswers: ["Careful my suitcase is very heavy", "Careful my bag is very heavy"],
      distractors: ["in", "bag", "small", "food"]
    },
    {
      nativeSentence: "Kɔyo, vbẹẹ o re?",
      speakText: "Kɔyo, vbẹẹ o re",
      tokens: [
        { text: "Kɔyo", hint: "Hello / Greetings" },
        { text: ",", isPunct: true },
        { text: "vbẹẹ", hint: "how", isNew: true },
        { text: "o re", hint: "are things / is it" },
        { text: "?", isPunct: true }
      ],
      answer: "Hello, how are things?",
      answerTokens: ["Hello", "how", "are", "things"],
      acceptAnswers: ["Hello how are things", "Hi how are things", "Hello how is it"],
      distractors: ["you", "fine", "morning", "good"]
    }
  ],
  efik: [
    {
      nativeSentence: "Kpeme idem, ekpat mi odobi etieti!",
      speakText: "Kpeme idem, ekpat mi odobi etieti",
      tokens: [
        { text: "Kpeme idem", hint: "Careful / Watch out", isNew: true },
        { text: ",", isPunct: true },
        { text: "ekpat", hint: "bag / suitcase" },
        { text: "mi", hint: "my" },
        { text: "odobi", hint: "is heavy" },
        { text: "etieti", hint: "very / very much" },
        { text: "!", isPunct: true }
      ],
      answer: "Careful, my suitcase is very heavy!",
      answerTokens: ["Careful", "my", "suitcase", "is", "very", "heavy"],
      acceptAnswers: ["Careful my suitcase is very heavy", "Careful my bag is very heavy"],
      distractors: ["in", "bag", "small", "water"]
    },
    {
      nativeSentence: "Mọkọm, emesiere nte afo etiede?",
      speakText: "Mọkọm, emesiere nte afo etiede",
      tokens: [
        { text: "Mọkọm", hint: "Hello / Greetings" },
        { text: ",", isPunct: true },
        { text: "emesiere", hint: "good morning" },
        { text: "nte", hint: "how", isNew: true },
        { text: "afo", hint: "you" },
        { text: "etiede", hint: "are doing" },
        { text: "?", isPunct: true }
      ],
      answer: "Hello, good morning, how are you doing?",
      answerTokens: ["Hello", "good", "morning", "how", "are", "you", "doing"],
      acceptAnswers: ["Hello good morning how are you doing", "Hello good morning how are you"],
      distractors: ["fine", "we", "night", "good"]
    }
  ],
  urhobo: [
    {
      nativeSentence: "Jomaotọ, ekpeta mẹ ghanrẹ nọ gbe!",
      speakText: "Jomaotọ, ekpeta mẹ ghanrẹ nọ gbe",
      tokens: [
        { text: "Jomaotọ", hint: "Careful / Be watchful", isNew: true },
        { text: ",", isPunct: true },
        { text: "ekpeta", hint: "bag / suitcase" },
        { text: "mẹ", hint: "my" },
        { text: "ghanrẹ nọ", hint: "is heavy" },
        { text: "gbe", hint: "very" },
        { text: "!", isPunct: true }
      ],
      answer: "Careful, my suitcase is very heavy!",
      answerTokens: ["Careful", "my", "suitcase", "is", "very", "heavy"],
      acceptAnswers: ["Careful my suitcase is very heavy", "Careful my bag is very heavy"],
      distractors: ["in", "bag", "small", "food"]
    }
  ],
  tiv: [
    {
      nativeSentence: "Wanger, ikpa wam ka a zelu kpen kpen!",
      speakText: "Wanger, ikpa wam ka a zelu kpen kpen",
      tokens: [
        { text: "Wanger", hint: "Careful / Pay attention", isNew: true },
        { text: ",", isPunct: true },
        { text: "ikpa", hint: "bag / suitcase" },
        { text: "wam", hint: "my" },
        { text: "ka a zelu", hint: "is heavy" },
        { text: "kpen kpen", hint: "very much" },
        { text: "!", isPunct: true }
      ],
      answer: "Careful, my suitcase is very heavy!",
      answerTokens: ["Careful", "my", "suitcase", "is", "very", "heavy"],
      acceptAnswers: ["Careful my suitcase is very heavy", "Careful my bag is very heavy"],
      distractors: ["in", "bag", "small", "water"]
    }
  ]
};

function generateDynamicSentence(v, course){
  const cleanNative = (v.native || "").replace(/[.,!?;:]/g, "").trim();
  const cleanEn = (v.en || "").replace(/[.,!?;:]/g, "").trim();
  const isMultiWord = cleanNative.includes(" ");

  if(isMultiWord){
    const words = cleanNative.split(/\s+/);
    const enTokens = cleanEn.split(/\s+/);
    const pool = ["in", "very", "my", "good", "the", "and", "small"];
    const distractors = pool.filter(d => !enTokens.map(t => t.toLowerCase()).includes(d)).slice(0, 3);
    const bank = shuffle([...enTokens, ...distractors]);
    return {
      type: "sentence",
      prompt: "Translate this sentence",
      isNewWord: true,
      nativeSentence: v.native,
      speakText: v.native,
      tokens: words.map((w, idx) => ({
        text: w,
        hint: idx === 0 ? cleanEn : "phrase word",
        isNew: idx === 0
      })),
      answer: cleanEn,
      answerTokens: enTokens,
      acceptAnswers: [cleanEn],
      bank: bank,
      _vocab: v,
      _courseKey: course ? course.key : "igbo"
    };
  }

  const enTokens = cleanEn.split(/\s+/);
  const pool = ["my", "very", "small", "is", "the", "in", "good"];
  const distractors = pool.filter(d => !enTokens.map(t => t.toLowerCase()).includes(d)).slice(0, 4);
  const bank = shuffle([...enTokens, ...distractors]);
  return {
    type: "sentence",
    prompt: "Translate this sentence",
    isNewWord: true,
    nativeSentence: v.native,
    speakText: v.native,
    tokens: [
      { text: v.native, hint: cleanEn, isNew: true }
    ],
    answer: cleanEn,
    answerTokens: enTokens,
    acceptAnswers: [cleanEn],
    bank: bank,
    _vocab: v,
    _courseKey: course ? course.key : "igbo"
  };
}

function makeSentenceQuestion(v, course, lessonIndex){
  const courseKey = (course && course.key) ? course.key : (session && session.courseKey !== "all" ? session.courseKey : "igbo");
  const list = CURATED_SENTENCES[courseKey] || CURATED_SENTENCES.igbo;
  if(list && list.length){
    const idx = (typeof lessonIndex === "number" ? lessonIndex : Math.floor(Math.random() * list.length)) % list.length;
    const item = list[idx];
    const bank = shuffle([...item.answerTokens, ...item.distractors]);
    return {
      type: "sentence",
      prompt: "Translate this sentence",
      isNewWord: true,
      nativeSentence: item.nativeSentence,
      speakText: item.speakText,
      tokens: item.tokens,
      answer: item.answer,
      answerTokens: item.answerTokens,
      acceptAnswers: item.acceptAnswers || [item.answer],
      bank: bank,
      _vocab: v,
      _courseKey: courseKey
    };
  }
  return generateDynamicSentence(v, course);
}

/* Rebuilds a fresh version of a missed question (new distractor shuffle) for the retry queue. */
function requeueQuestion(q, course){
  let fresh;
  if(q.type === "mc") fresh = makeMcQuestion(q._vocab, course);
  else if(q.type === "type") fresh = makeTypeQuestion(q._vocab, course);
  else if(q.type === "listen") fresh = makeListenQuestion(q._vocab, course);
  else if(q.type === "blank") fresh = makeBlankQuestion(q._vocab, course);
  else fresh = makeMatchQuestion(q.pairs);
  fresh.isRetry = true;
  return fresh;
}

function buildLessonQuestions(course, lessonIndex){
  const lesson = course.lessons[lessonIndex];
  const vocab = lesson.vocab;
  const order = shuffle(vocab.map((_, i) => i));
  const used = [];
  function pickIdx(){
    const candidate = order.find(i => !used.includes(i));
    const idx = candidate ?? order[used.length % order.length];
    used.push(idx);
    return idx;
  }

  const mcCount = Math.min(2, vocab.length);
  const mcIdxs = Array.from({ length: mcCount }, pickIdx);
  const blankIdx = pickIdx();
  const typeIdx = pickIdx();
  const listenIdx = pickIdx();

  const questions = [];
  mcIdxs.forEach(i => questions.push(makeMcQuestion(vocab[i], course)));
  questions.push(makeBlankQuestion(vocab[blankIdx], course));
  questions.push(makeTypeQuestion(vocab[typeIdx], course));
  questions.push(makeListenQuestion(vocab[listenIdx], course));
  questions.push(makeMatchQuestion(vocab));

  return questions;
}

/* ====================== EBBINGHAUS SPACED REPETITION ENGINE ====================== */
/* Mathematical model: R = e^(-t / S)
   - R: Memory retention probability (0 to 1)
   - t: Elapsed time since last review / mistake (in hours)
   - S: Memory stability / strength (in hours)
   Words nearing the forgetting threshold (R decaying) are prioritized for active recall. */
function getEbbinghausStats(entry, now = Date.now()){
  const lastReviewed = entry.lastReviewedAt
    ? entry.lastReviewedAt
    : (entry.lastMissed ? new Date(entry.lastMissed).getTime() : (now - 3600000 * 2));
  const stability = Math.max(1, entry.stability || 4); // default 4 hours on first error
  const elapsedHours = Math.max(0, (now - lastReviewed) / (1000 * 60 * 60));
  const retention = Math.exp(-elapsedHours / stability);
  const retentionPct = Math.max(1, Math.min(100, Math.round(retention * 100)));
  const count = entry.count || 1;
  const consecutive = entry.consecutiveCorrect || 0;

  // Higher urgency = word is closer to being forgotten or repeatedly missed
  const urgency = (1 - retention) * (1 + 0.25 * Math.min(count, 5)) + (elapsedHours >= stability ? 0.4 : 0);

  const isDue = elapsedHours >= stability || retentionPct < 55;
  let status = "strengthening";
  let label = "Strengthening";
  let color = "gold";

  if(consecutive >= 3 && retentionPct >= 85){
    status = "mastered";
    label = "Mastered";
    color = "green";
  }else if(retentionPct < 45 || elapsedHours >= stability){
    status = "critical";
    label = "Critical";
    color = "danger";
  }else if(retentionPct < 75){
    status = "fading";
    label = "Fading";
    color = "hausa";
  }

  let dueInText = "Due now";
  if(!isDue){
    const remHours = stability - elapsedHours;
    if(remHours < 1) dueInText = "Due in <1h";
    else if(remHours < 24) dueInText = `Due in ${Math.round(remHours)}h`;
    else dueInText = `Solid for ${Math.round(remHours / 24)}d`;
  }

  return {
    retention,
    retentionPct,
    urgency,
    status,
    label,
    color,
    elapsedHours,
    stability,
    dueInText,
    isDue,
    consecutive,
    count
  };
}

/* ---- missed-word & spaced repetition tracking ---- */
function recordMiss(courseKey, vocabItem){
  if(!vocabItem) return;
  const key = `${courseKey}|${vocabItem.native}`;
  let entry = state.missedWords.find(m => m.key === key);
  const now = Date.now();
  if(!entry){
    entry = {
      key,
      courseKey,
      native: vocabItem.native,
      en: vocabItem.en,
      count: 0,
      consecutiveCorrect: 0,
      stability: 4, // 4 hours initial memory stability
      lastReviewedAt: now,
      lastMissed: todayStr()
    };
    state.missedWords.push(entry);
  }
  entry.count++;
  entry.consecutiveCorrect = 0; // reset active recall streak on error
  entry.stability = Math.max(2, (entry.stability || 4) * 0.45); // decay memory stability upon mistake
  entry.lastReviewedAt = now;
  entry.lastMissed = todayStr();
  if(state.missedWords.length > 120) state.missedWords = state.missedWords.slice(-120);
}

function recordPracticeSuccess(courseKey, vocabItem){
  if(!vocabItem) return;
  const key = `${courseKey}|${vocabItem.native}`;
  let entry = state.missedWords.find(m => m.key === key);
  if(!entry) return;
  entry.consecutiveCorrect = (entry.consecutiveCorrect || 0) + 1;
  entry.lastReviewedAt = Date.now();

  // Expand memory stability along the Ebbinghaus reinforcement curve
  if(entry.consecutiveCorrect === 1){
    entry.stability = 18; // ~18 hours
  }else if(entry.consecutiveCorrect === 2){
    entry.stability = 48; // 2 days
  }else if(entry.consecutiveCorrect === 3){
    entry.stability = 120; // 5 days
  }else{
    entry.stability = Math.min(2160, Math.round((entry.stability || 120) * 2.2 + 36)); // up to 90 days
  }
}

function clearMiss(courseKey, vocabItem){
  if(!vocabItem) return;
  const key = `${courseKey}|${vocabItem.native}`;
  state.missedWords = state.missedWords.filter(m => m.key !== key);
}

function buildPracticeQuestions(courseKey = "all", filterMode = "all"){
  let pool = state.missedWords;
  if(courseKey !== "all"){
    pool = pool.filter(m => m.courseKey === courseKey);
  }
  if(pool.length === 0) return [];

  // Calculate Ebbinghaus memory metrics for each item
  const withStats = pool.map(item => ({
    ...item,
    stats: getEbbinghausStats(item)
  }));

  let filtered = withStats;
  if(filterMode === "due"){
    const dueOnly = withStats.filter(x => x.stats.isDue);
    if(dueOnly.length > 0) filtered = dueOnly;
  }else if(filterMode === "critical"){
    const criticalOnly = withStats.filter(x => x.stats.status === "critical");
    if(criticalOnly.length > 0) filtered = criticalOnly;
  }

  // Prioritize strictly by Ebbinghaus Urgency (lowest retention / highest forgetting probability first)
  filtered.sort((a, b) => b.stats.urgency - a.stats.urgency);

  // Take the top priority batch for this session (up to 10 items)
  const batch = filtered.slice(0, 10);

  return batch.map(m => {
    const v = { native: m.native, en: m.en };
    const course = COURSES[m.courseKey] || COURSES[Object.keys(COURSES)[0]];
    const r = Math.random();
    let q;

    if(m.stats.consecutive >= 2 && r < 0.50){
      q = makeTypeQuestion(v, course);
    }else if(r < 0.40){
      q = makeMcQuestion(v, course);
    }else if(r < 0.70){
      q = makeListenQuestion(v, course);
    }else{
      q = makeBlankQuestion(v, course);
    }

    q._vocab = v;
    q._courseKey = m.courseKey;
    q._ebbinghausStats = m.stats;
    return q;
  });
}

/* ---- daily goal tracking ---- */
function addDailyXp(gain){
  const today = todayStr();
  if(state.todayXpDate !== today){ state.todayXpDate = today; state.todayXpEarned = 0; }
  state.todayXpEarned += gain;
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

/* ---- account session (token stored locally; everything else lives on the server) ---- */
const TOKEN_KEY = "lingua-token";
const USERNAME_KEY = "lingua-username";
function getToken(){ return localStorage.getItem(TOKEN_KEY); }
function getUsername(){ return localStorage.getItem(USERNAME_KEY); }
function setSession(token, username){
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USERNAME_KEY, username);
}
function clearSession(){
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USERNAME_KEY);
}

async function apiFetch(path, options = {}){
  const token = getToken();
  const headers = Object.assign({ "Content-Type": "application/json" }, options.headers || {});
  if(token) headers["Authorization"] = "Bearer " + token;
  const res = await fetch(path, Object.assign({}, options, { headers }));
  if(res.status === 401){
    clearSession();
    showAuthScreen("Your session expired — please log in again.");
    throw new Error("unauthorized");
  }
  return res;
}

async function fetchProgress(){
  const res = await apiFetch("/api/progress");
  const data = await res.json();
  state = Object.assign(structuredClone(DEFAULT_STATE), data);
  Object.keys(COURSES).forEach(k => {
    if(!Array.isArray(state.completed[k])) state.completed[k] = [];
  });
  Object.keys(CULTURE).forEach(k => {
    if(typeof state.cultureCompleted[k] !== "boolean") state.cultureCompleted[k] = false;
  });
  if(!Array.isArray(state.claimedChests)) state.claimedChests = [];
  if(TESTING_MODE) state.hearts = STARTING_HEARTS;
}

let saveTimer = null;
function saveState(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    apiFetch("/api/progress", { method: "PUT", body: JSON.stringify(state) }).catch(() => {});
  }, 300);
}

let state = structuredClone(DEFAULT_STATE);
let session = null;
let pendingSurprise = false;
let streakIncreasedPending = false;

function triggerStreakAnimation(){
  const streakPill = document.querySelector(".pill-streak");
  if(!streakPill) return;
  streakPill.classList.remove("streak-bump");
  void streakPill.offsetWidth;
  streakPill.classList.add("streak-bump");
  setTimeout(() => {
    streakPill.classList.remove("streak-bump");
  }, 1300);
}

function todayStr(){ return new Date().toISOString().slice(0, 10); }

const LEVEL_THRESHOLDS = [0, 100, 250, 450, 700, 1000, 1350, 1750, 2200, 2700, 3250, 3850, 4500, 5200, 5950];
function getLevelInfo(xp){
  let level = 1;
  for(let i = 1; i < LEVEL_THRESHOLDS.length; i++){
    if(xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
    else break;
  }
  const floor = LEVEL_THRESHOLDS[level - 1];
  const ceiling = LEVEL_THRESHOLDS[level] ?? (floor + 1000);
  const pct = Math.min(100, Math.round(((xp - floor) / (ceiling - floor)) * 100));
  return { level, floor, ceiling, pct };
}

function touchStreak(){
  const today = todayStr();
  const oldStreak = state.streak || 0;
  if(state.lastPlayedDate === today) return false;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = (state.lastPlayedDate === yesterday) ? oldStreak + 1 : 1;
  state.lastPlayedDate = today;
  if(state.streak > (state.longestStreak || 0)) state.longestStreak = state.streak;
  if(!state.practiceDates.includes(today)) state.practiceDates.push(today);
  if(state.practiceDates.length > 60) state.practiceDates = state.practiceDates.slice(-60);
  return state.streak > oldStreak || (oldStreak === 0 && state.streak > 0);
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
    xp: state.xp,
    practiceSessionsCompleted: state.practiceSessionsCompleted || 0,
    cultureCompletedCount: Object.values(state.cultureCompleted).filter(Boolean).length
  };
  const newlyUnlocked = [];
  BADGES.forEach(b => {
    if(!state.earnedBadges.includes(b.id) && b.test(snap)){
      state.earnedBadges.push(b.id);
      newlyUnlocked.push(b);
    }
  });
  if(newlyUnlocked.length > 0){
    newlyUnlocked.forEach(b => {
      if(typeof showAppToast === "function"){
        showAppToast(`\u{1F3C6} Achievement Unlocked: "${b.name}" (+${b.rewardXp} XP)!`);
      }
      playUiSound("chest_unlock");
    });
  }
}

/* ====================== RENDER: HOME ====================== */
function renderHome(){
  renderAccountRow();
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  document.getElementById("home-greeting").textContent = `${timeGreeting}, ${getUsername() || "there"}`;
  document.getElementById("stat-streak").textContent = state.streak;
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-hearts").textContent = state.hearts;

  if(streakIncreasedPending){
    streakIncreasedPending = false;
    setTimeout(() => {
      triggerStreakAnimation();
    }, 120);
  }

  const pillCourseKey = currentCourseKey || pickContinueCourse() || "igbo";
  const pillCourse = COURSES[pillCourseKey];
  const pillTribe = TRIBE_DETAILS[pillCourseKey] || TRIBE_DETAILS.igbo;
  const pillGlyph = document.getElementById("lang-pill-glyph");
  if(pillGlyph){
    pillGlyph.innerHTML = pillTribe.svg;
    pillGlyph.style.background = `var(--${pillCourse.color})`;
  }

  renderContinueCard();
  renderReminderCard();
  renderWeekCal();
  renderDailyGoal();
  renderPracticeEntry();
  renderCultureEntry();

  check24HourInactivityReminder();

  const trackSelect = document.getElementById("track-select");
  if(trackSelect){
    trackSelect.innerHTML = "";
    Object.keys(COURSES).forEach(key => {
      const course = COURSES[key];
      const done = state.completed[key]?.length || 0;
      const isDone = done >= course.lessons.length;
      const t = TRIBE_DETAILS[key] || TRIBE_DETAILS.igbo;

      const card = document.createElement("button");
      card.className = `track-card ${course.color}`;
      card.setAttribute("type", "button");
      card.setAttribute("aria-label", `Switch to ${course.name} language track`);
      card.dataset.tribe = key;

      card.innerHTML = `
        <div class="track-glyph">
          <span class="track-symbol">${t.svg}</span>
          ${isDone ? `<span class="track-done-badge">✓</span>` : ""}
        </div>
        <p class="track-name">${course.name}</p>
      `;
      card.addEventListener("click", () => {
        playUiSound("tap");
        openPath(key);
      });
      trackSelect.appendChild(card);
    });
  }

  renderBadges();
  const viewAllBtn = document.getElementById("dash-view-all-badges-btn");
  if(viewAllBtn){
    viewAllBtn.onclick = () => {
      playUiSound("tap");
      renderProfile();
      showScreen("profile");
      setTimeout(() => {
        document.getElementById("profile-badges-section")?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    };
  }

  renderLeaderboard();
}

function ordinal(n){
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

async function renderLeaderboard(){
  const list = document.getElementById("leaderboard");
  const gapEl = document.getElementById("lb-gap");
  const me = getUsername();
  let rows;
  try{
    const res = await apiFetch("/api/leaderboard");
    const data = await res.json();
    rows = data.map(r => ({ name: r.username === me ? "You" : r.username, xp: r.xp || 0, isYou: r.username === me }));
    if(!rows.some(r => r.isYou)) rows.push({ name: "You", xp: state.xp, isYou: true });
  }catch(e){
    rows = [{ name: "You", xp: state.xp, isYou: true }];
  }
  rows.sort((a, b) => b.xp - a.xp);
  rows = rows.slice(0, 10);

  list.innerHTML = "";
  rows.forEach((r, i) => {
    const li = document.createElement("li");
    if(r.isYou) li.classList.add("is-you");
    li.innerHTML = `<span class="lb-rank">${i + 1}</span><span class="lb-name">${r.name}</span><span class="lb-xp">${r.xp} XP</span>`;
    list.appendChild(li);
  });

  const youIndex = rows.findIndex(r => r.isYou);
  if(rows.length === 1 && youIndex === 0){
    gapEl.textContent = "You're first here \u2014 invite a friend to make it a real race.";
  }else if(youIndex === 0){
    gapEl.textContent = "You're in the lead this week!";
  }else if(youIndex > 0){
    const gap = rows[youIndex - 1].xp - state.xp;
    gapEl.textContent = `You're ${gap} XP from ${ordinal(youIndex)} place.`;
  }else{
    gapEl.textContent = "";
  }
}

function renderAccountRow(){
  const el = document.getElementById("account-row");
  if(!el) return;
  const username = getUsername() || "you";
  const lvl = getLevelInfo(state.xp);
  el.innerHTML = `
    <button type="button" class="account-row-btn" id="profile-link">
      <span class="account-row-avatar">${username.charAt(0).toUpperCase()}</span>
      <span class="account-row-text">${username}<span>Level ${lvl.level} · View profile</span></span>
      <svg class="account-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
    </button>
    <button type="button" class="account-row-logout" id="logout-link">Log out</button>
  `;
  document.getElementById("profile-link").addEventListener("click", () => {
    renderProfile();
    showScreen("profile");
  });
  document.getElementById("logout-link").addEventListener("click", () => {
    clearSession();
    showAuthScreen();
  });
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
  document.getElementById("week-cal-streak-label").textContent = state.streak > 0 ? `\u{1F525} ${state.streak}-day streak` : "Start today!";
}

/* ---- daily goal ---- */
function renderDailyGoal(){
  const today = todayStr();
  const earned = (state.todayXpDate === today) ? state.todayXpEarned : 0;
  const goal = state.dailyGoal || 20;
  const pct = Math.min(100, Math.round((earned / goal) * 100));
  document.getElementById("daily-goal-fill").style.width = `${pct}%`;
  document.getElementById("daily-goal-label").textContent = `${earned} / ${goal} XP`;
  document.querySelectorAll(".goal-option").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.goal) === goal);
  });
}
document.getElementById("goal-options").addEventListener("click", e => {
  const btn = e.target.closest(".goal-option");
  if(!btn) return;
  state.dailyGoal = Number(btn.dataset.goal);
  saveState();
  renderDailyGoal();
});

/* ---- practice entry card (home) ---- */
function renderPracticeEntry(){
  const el = document.getElementById("practice-entry");
  const total = state.missedWords.length;
  if(total === 0){
    el.innerHTML = `<div class="practice-entry-empty">No mistakes to review yet — keep learning \u{1F44D}</div>`;
    return;
  }
  const statsList = state.missedWords.map(m => getEbbinghausStats(m));
  const dueCount = statsList.filter(s => s.isDue).length;
  const criticalCount = statsList.filter(s => s.status === "critical").length;
  const avgRetention = Math.round(statsList.reduce((acc, s) => acc + s.retentionPct, 0) / (statsList.length || 1));

  const byLanguage = Object.keys(COURSES).map(k => {
    const langItems = state.missedWords.filter(m => m.courseKey === k);
    const langDue = langItems.filter(m => getEbbinghausStats(m).isDue).length;
    return { key: k, count: langItems.length, due: langDue };
  }).filter(x => x.count > 0);

  const summary = byLanguage.map(x => `${COURSES[x.key].name} (${x.due > 0 ? `${x.due} due` : `${x.count} words`})`).join(", ");
  const headline = dueCount > 0
    ? `${dueCount} word${dueCount === 1 ? "" : "s"} due for spaced review`
    : `${total} word${total === 1 ? "" : "s"} reinforcing (${avgRetention}% memory health)`;

  el.innerHTML = `
    <div class="practice-card">
      <div class="practice-card-head">
        <span class="practice-glyph" style="background:var(--gold);">\u{1F3AF}</span>
        <div>
          <p class="practice-name">Spaced Repetition Practice</p>
          <p class="practice-sub">${headline} \u2014 ${summary}</p>
        </div>
      </div>
      <button class="continue-btn" id="practice-entry-btn">Review with Spaced Repetition \u2192</button>
    </div>
  `;
  document.getElementById("practice-entry-btn").addEventListener("click", () => {
    renderPracticeScreen("all");
    showScreen("practice");
  });
}

/* ---- culture entry card (home) ---- */
function renderCultureEntry(){
  const el = document.getElementById("culture-entry");
  const doneCount = Object.values(state.cultureCompleted).filter(Boolean).length;
  const total = Object.keys(CULTURE).length;
  el.innerHTML = `
    <div class="practice-card">
      <div class="practice-card-head">
        <span class="practice-glyph" style="background:var(--gold);">\u{1FAD8}</span>
        <div>
          <p class="practice-name">Culture</p>
          <p class="practice-sub">Proverbs, etiquette &amp; real-life scenarios \u2014 ${doneCount}/${total} done</p>
        </div>
      </div>
      <button class="continue-btn" id="culture-entry-btn">Explore \u2192</button>
    </div>
  `;
  document.getElementById("culture-entry-btn").addEventListener("click", () => {
    renderCultureHub();
    showScreen("culture-hub");
  });
}

function renderCultureHub(){
  const container = document.getElementById("culture-hub-list");
  container.innerHTML = "";
  Object.keys(CULTURE).forEach(k => {
    const course = COURSES[k];
    const done = state.cultureCompleted[k];
    const card = document.createElement("div");
    card.className = `practice-card ${course.color}`;
    card.innerHTML = `
      <div class="practice-card-head">
        <span class="practice-glyph">${course.glyph}</span>
        <div><p class="practice-name">${course.name}</p><p class="practice-sub">${done ? "Completed \u2014 replay anytime" : "2 proverbs, an etiquette note, and a scenario"}</p></div>
      </div>
      <button class="continue-btn culture-start-btn" data-course="${k}">${done ? "Replay" : "Start"} \u2192</button>
    `;
    container.appendChild(card);
  });
  container.querySelectorAll(".culture-start-btn").forEach(btn => {
    btn.addEventListener("click", () => startCulture(btn.dataset.course));
  });
}

/* ---- culture lesson session ---- */
let cultureSession = null;

function startCulture(courseKey){
  const data = CULTURE[courseKey];
  const cards = [
    { type: "intro", text: data.intro },
    { type: "proverb", data: data.proverbs[0] },
    { type: "proverb", data: data.proverbs[1] },
    { type: "etiquette", data: data.etiquette },
    { type: "scenario", data: data.scenario }
  ];
  cultureSession = { courseKey, cards, index: 0, answered: false };
  showScreen("culture");
  renderCultureCard();
}

function renderCultureCard(){
  const card = cultureSession.cards[cultureSession.index];
  const course = COURSES[cultureSession.courseKey];
  document.getElementById("culture-progress").style.width = `${(cultureSession.index / cultureSession.cards.length) * 100}%`;
  cultureSession.answered = false;

  const el = document.getElementById("culture-card");
  const btn = document.getElementById("culture-continue-btn");
  btn.disabled = false;
  btn.textContent = (cultureSession.index === cultureSession.cards.length - 1) ? "Finish" : "Continue";

  if(card.type === "intro"){
    el.innerHTML = `<p class="culture-kicker">${course.name} Culture</p><p class="culture-body-text">${card.text}</p>`;
  }else if(card.type === "proverb"){
    el.innerHTML = `
      <p class="culture-kicker">Proverb</p>
      <p class="culture-proverb-native">${card.data.native}</p>
      <p class="culture-proverb-translation">"${card.data.translation}"</p>
      <p class="culture-proverb-meaning">${card.data.meaning}</p>
    `;
  }else if(card.type === "etiquette"){
    el.innerHTML = `<p class="culture-kicker">Etiquette \u2014 ${card.data.title}</p><p class="culture-body-text">${card.data.text}</p>`;
  }else if(card.type === "scenario"){
    btn.disabled = true;
    el.innerHTML = `
      <p class="culture-kicker">Real-life scenario</p>
      <p class="culture-body-text">${card.data.prompt}</p>
      <div class="culture-scenario-options" id="culture-scenario-options"></div>
      <p class="culture-feedback hidden" id="culture-feedback"></p>
    `;
    const optsEl = document.getElementById("culture-scenario-options");
    card.data.options.forEach(opt => {
      const optBtn = document.createElement("button");
      optBtn.className = "culture-option-btn";
      optBtn.textContent = opt.text;
      optBtn.addEventListener("click", () => {
        if(cultureSession.answered) return;
        cultureSession.answered = true;
        optBtn.classList.add(opt.correct ? "correct" : "incorrect");
        const fb = document.getElementById("culture-feedback");
        fb.textContent = opt.feedback;
        fb.classList.remove("hidden");
        document.getElementById("culture-continue-btn").disabled = false;
      });
      optsEl.appendChild(optBtn);
    });
  }
}

function finishCulture(){
  const key = cultureSession.courseKey;
  const firstTime = !state.cultureCompleted[key];
  state.cultureCompleted[key] = true;
  if(firstTime){
    state.xp += 15;
    addDailyXp(15);
  }
  if(touchStreak()){
    streakIncreasedPending = true;
  }
  checkBadges();
  saveState();
  renderCultureHub();
  showScreen("culture-hub");
}

document.getElementById("culture-continue-btn").addEventListener("click", () => {
  cultureSession.index++;
  if(cultureSession.index >= cultureSession.cards.length) finishCulture();
  else renderCultureCard();
});
document.getElementById("culture-quit").addEventListener("click", () => {
  renderCultureHub();
  showScreen("culture-hub");
});
document.getElementById("culture-hub-back").addEventListener("click", () => { renderHome(); showScreen("home"); });

/* ---- practice screen (full breakdown + start buttons) ---- */
let currentPracticeFilter = "all";

function renderPracticeScreen(filterMode = currentPracticeFilter){
  currentPracticeFilter = filterMode;
  const bannerEl = document.getElementById("ebbinghaus-summary-banner");
  const container = document.getElementById("practice-list");
  const filterBtns = document.querySelectorAll(".practice-filter-btn");

  filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === currentPracticeFilter);
  });

  const total = state.missedWords.length;
  const allStats = state.missedWords.map(m => ({ ...m, stats: getEbbinghausStats(m) }));
  const dueTotal = allStats.filter(x => x.stats.isDue).length;
  const criticalTotal = allStats.filter(x => x.stats.status === "critical").length;
  const avgRetention = total > 0 ? Math.round(allStats.reduce((acc, s) => acc + s.stats.retentionPct, 0) / total) : 100;

  if(bannerEl){
    if(total === 0){
      bannerEl.innerHTML = `
        <div class="ebbinghaus-banner-head">
          <span class="ebbinghaus-banner-title">\u26A1 Ebbinghaus Memory Model</span>
          <span class="ebbinghaus-badge-due" style="border-color:var(--igbo); color:#8fd6ac;">Memory 100% Solid</span>
        </div>
        <p class="ebbinghaus-info-text">You have no missed words needing review right now. As you complete lessons, any mistakes are automatically tracked along an Ebbinghaus retention curve (<em>R = e<sup>\u2212\u0394t / S</sup></em>) to prioritize review right before you forget.</p>
      `;
    }else{
      bannerEl.innerHTML = `
        <div class="ebbinghaus-banner-head">
          <span class="ebbinghaus-banner-title">\u26A1 Ebbinghaus Memory Retention</span>
          <span class="ebbinghaus-badge-due">${dueTotal > 0 ? `${dueTotal} Due for Recall` : "Memory on Schedule"}</span>
        </div>
        <div class="ebbinghaus-stats-grid">
          <div class="ebbinghaus-stat-item">
            <span class="ebbinghaus-stat-val gold">${total}</span>
            <span class="ebbinghaus-stat-label">Tracked Words</span>
          </div>
          <div class="ebbinghaus-stat-item">
            <span class="ebbinghaus-stat-val ${dueTotal > 0 ? "danger" : "green"}">${dueTotal}</span>
            <span class="ebbinghaus-stat-label">Due Now</span>
          </div>
          <div class="ebbinghaus-stat-item">
            <span class="ebbinghaus-stat-val ${avgRetention < 60 ? "danger" : "green"}">${avgRetention}%</span>
            <span class="ebbinghaus-stat-label">Avg Retention</span>
          </div>
        </div>
        <p class="ebbinghaus-info-text">Based on the Ebbinghaus forgetting curve, memory decays exponentially over time without recall. Spaced repetition strengthens stability with each successful retrieval.</p>
      `;
    }
  }

  // Hook up filter buttons
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      renderPracticeScreen(btn.dataset.filter);
    };
  });

  const smartAllBtn = document.getElementById("practice-smart-all-btn");
  if(smartAllBtn){
    smartAllBtn.onclick = () => {
      if(total === 0){
        alert("No words to review yet — complete some lessons first!");
        return;
      }
      startPractice("all", currentPracticeFilter);
    };
  }

  container.innerHTML = "";
  Object.keys(COURSES).forEach(k => {
    const course = COURSES[k];
    const rawItems = state.missedWords.filter(m => m.courseKey === k);
    const itemsWithStats = rawItems.map(m => ({ ...m, stats: getEbbinghausStats(m) }));

    let displayedItems = itemsWithStats;
    if(currentPracticeFilter === "due"){
      displayedItems = itemsWithStats.filter(x => x.stats.isDue);
    }else if(currentPracticeFilter === "critical"){
      displayedItems = itemsWithStats.filter(x => x.stats.status === "critical");
    }

    const card = document.createElement("div");
    card.className = `practice-card ${course.color}`;

    if(rawItems.length === 0){
      card.innerHTML = `
        <div class="practice-card-head">
          <span class="practice-glyph">${course.glyph}</span>
          <div><p class="practice-name">${course.name}</p><p class="practice-sub">No mistakes logged in this language yet.</p></div>
        </div>
      `;
    }else{
      const courseAvg = Math.round(itemsWithStats.reduce((a, b) => a + b.stats.retentionPct, 0) / itemsWithStats.length);
      const courseDue = itemsWithStats.filter(x => x.stats.isDue).length;
      const courseCritical = itemsWithStats.filter(x => x.stats.status === "critical").length;
      const courseMastered = itemsWithStats.filter(x => x.stats.status === "mastered").length;

      let meterColorClass = "green";
      if(courseAvg < 50) meterColorClass = "danger";
      else if(courseAvg < 75) meterColorClass = "hausa";

      const previewText = displayedItems.slice(0, 4).map(m => m.native).join(", ") + (displayedItems.length > 4 ? "\u2026" : "");

      card.innerHTML = `
        <div class="practice-card-head">
          <span class="practice-glyph">${course.glyph}</span>
          <div style="flex:1; min-width:0;">
            <p class="practice-name">${course.name}</p>
            <p class="practice-sub">${rawItems.length} word${rawItems.length === 1 ? "" : "s"} tracked (${courseDue} due)</p>
          </div>
        </div>

        <div class="practice-retention-wrap">
          <div class="practice-retention-head">
            <span>Memory Retention</span>
            <span class="practice-retention-pct">${courseAvg}%</span>
          </div>
          <div class="practice-retention-bar">
            <div class="practice-retention-fill ${meterColorClass}" style="width: ${courseAvg}%"></div>
          </div>
        </div>

        <div class="practice-pills-row">
          ${courseDue > 0 ? `<span class="practice-pill-tag due">\u26A0 ${courseDue} due</span>` : ""}
          ${courseCritical > 0 ? `<span class="practice-pill-tag due">\uD83D\uDD25 ${courseCritical} critical</span>` : ""}
          <span class="practice-pill-tag solid">\u2713 ${courseMastered} mastered</span>
          <span class="practice-pill-tag">${itemsWithStats.length - courseDue} solid</span>
        </div>

        <div class="practice-card-actions">
          <button class="continue-btn practice-start-btn" data-course="${k}">
            Practice ${course.name} (${displayedItems.length || rawItems.length}) \u2192
          </button>
          <button class="practice-breakdown-toggle" data-toggle="${k}">
            View Memory Breakdown \u25BC
          </button>
        </div>

        <div class="practice-breakdown-list hidden" id="breakdown-${k}">
          ${displayedItems.length === 0 ? `
            <div class="practice-entry-empty">No words match filter "${currentPracticeFilter}" in ${course.name}.</div>
          ` : displayedItems.map(item => `
            <div class="practice-word-row">
              <div class="practice-word-left">
                <button class="practice-word-speak-btn" data-speak="${encodeURIComponent(item.native)}" data-lang="${course.speechLang}" aria-label="Pronounce ${item.native}">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                </button>
                <div class="practice-word-text">
                  <span class="practice-word-native">${item.native}</span>
                  <span class="practice-word-en">${item.en}</span>
                </div>
              </div>
              <div class="practice-word-right">
                <span class="practice-word-status ${item.stats.status}">${item.stats.label} (${item.stats.retentionPct}%)</span>
                <span class="practice-word-due-meta">${item.stats.dueInText} \u00b7 \u00d7${item.count} miss${item.count === 1 ? "" : "es"}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }
    container.appendChild(card);
  });

  // Attach start buttons
  container.querySelectorAll(".practice-start-btn").forEach(btn => {
    btn.addEventListener("click", () => startPractice(btn.dataset.course, currentPracticeFilter));
  });

  // Attach breakdown toggle
  container.querySelectorAll(".practice-breakdown-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const listEl = document.getElementById(`breakdown-${btn.dataset.toggle}`);
      if(listEl){
        const isHidden = listEl.classList.toggle("hidden");
        btn.textContent = isHidden ? "View Memory Breakdown \u25BC" : "Hide Memory Breakdown \u25B2";
      }
    });
  });

  // Attach audio pronounce buttons
  container.querySelectorAll(".practice-word-speak-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const text = decodeURIComponent(btn.dataset.speak);
      const lang = btn.dataset.lang;
      const courseKey = btn.dataset.course || Object.keys(COURSES).find(k => COURSES[k].speechLang === lang);
      speak(text, lang, courseKey, btn);
    });
  });
}

/* ====================== BADGE PROGRESS & HELPERS ====================== */
function getBadgeProgress(badge){
  const snap = {
    lessons: lessonsCompletedCount(),
    streak: state.streak || 0,
    hasPerfect: state.hasPerfect ? 1 : 0,
    languages: languagesStartedCount(),
    courseClear: anyCourseCleared() ? 1 : 0,
    xp: state.xp || 0,
    practice: state.practiceSessionsCompleted || 0,
    culture: Object.values(state.cultureCompleted).filter(Boolean).length
  };

  const isUnlocked = state.earnedBadges.includes(badge.id);
  const targetType = badge.target?.type || "lessons";
  const targetVal = badge.target?.value || 1;
  const currentVal = snap[targetType] ?? 0;
  const pct = isUnlocked ? 100 : Math.min(100, Math.max(0, Math.round((currentVal / targetVal) * 100)));
  const gap = Math.max(0, targetVal - currentVal);

  const units = {
    lessons: gap === 1 ? "lesson" : "lessons",
    streak: gap === 1 ? "day" : "days",
    xp: "XP",
    practice: gap === 1 ? "session" : "sessions",
    culture: gap === 1 ? "culture" : "cultures",
    languages: gap === 1 ? "language" : "languages",
    hasPerfect: "flawless run",
    courseClear: "course completion"
  };

  return {
    isUnlocked,
    current: currentVal,
    target: targetVal,
    pct,
    gap,
    unit: units[targetType] || "steps",
    targetType
  };
}

/* ---- upcoming badge teaser (retention engine) ---- */
function renderUpcomingBadgeTeaser(){
  const teaserCard = document.getElementById("upcoming-badge-teaser-card");
  const oldTeaserText = document.getElementById("badge-teaser");

  // Find all locked badges and compute progress
  const lockedBadges = BADGES
    .filter(b => !state.earnedBadges.includes(b.id))
    .map(b => ({ badge: b, prog: getBadgeProgress(b) }))
    .sort((a, b) => {
      // Prioritize highest percentage completed, then smallest gap
      if(b.prog.pct !== a.prog.pct) return b.prog.pct - a.prog.pct;
      return a.prog.gap - b.prog.gap;
    });

  if(lockedBadges.length === 0){
    // User unlocked all badges!
    if(teaserCard){
      teaserCard.innerHTML = `
        <div class="teaser-card-all-done">
          <div class="teaser-all-done-icon">\u{1F451}</div>
          <div class="teaser-all-done-body">
            <span class="teaser-kicker">PRESTIGE STATUS</span>
            <h3 class="teaser-title">Grandmaster Naija Polyglot!</h3>
            <p class="teaser-sub">Incredible achievement! You have unlocked all ${BADGES.length} badges. Maintain your daily streak to preserve your legendary status.</p>
          </div>
        </div>
      `;
    }
    if(oldTeaserText) oldTeaserText.textContent = "All achievement badges unlocked! \u{1F3C6}";
    return;
  }

  const { badge, prog } = lockedBadges[0];

  // Tailor retention action button based on the target
  let actionBtnText = "Continue Path to Unlock \u2192";
  let actionHandler = () => {
    const key = pickContinueCourse();
    startLesson(key, state.completed[key].length);
  };

  if(prog.targetType === "practice"){
    actionBtnText = "Review Spaced Repetition \u2192";
    actionHandler = () => { renderPracticeScreen("all"); showScreen("practice"); };
  } else if(prog.targetType === "culture"){
    actionBtnText = "Explore Culture Hub \u2192";
    actionHandler = () => { renderCultureHub(); showScreen("culture-hub"); };
  } else if(prog.targetType === "languages"){
    actionBtnText = "Explore Languages \u2193";
    actionHandler = () => {
      const el = document.getElementById("track-select");
      if(el) el.scrollIntoView({ behavior: "smooth" });
    };
  } else {
    const continueKey = pickContinueCourse();
    const course = COURSES[continueKey];
    const doneCount = state.completed[continueKey].length;
    actionBtnText = `Continue ${course.name} Path \u2192`;
    actionHandler = () => startLesson(continueKey, doneCount);
  }

  const urgencyText = prog.gap === 1
    ? `Just <strong>1 more ${prog.unit}</strong> away from earning "${badge.name}" and claiming <strong>+${badge.rewardXp} XP</strong>!`
    : `Only <strong>${prog.gap} ${prog.unit}</strong> to unlock "${badge.name}" and claim <strong>+${badge.rewardXp} XP</strong>!`;

  if(teaserCard){
    teaserCard.innerHTML = `
      <div class="upcoming-teaser-inner" id="upcoming-teaser-click-target">
        <div class="upcoming-teaser-badge-col">
          <div class="upcoming-teaser-medallion tier-${badge.tier.toLowerCase()}">
            <span class="upcoming-teaser-icon">${badge.icon}</span>
            <span class="upcoming-teaser-lock">\u{1F512}</span>
          </div>
        </div>

        <div class="upcoming-teaser-content-col">
          <div class="upcoming-teaser-topline">
            <span class="upcoming-teaser-kicker">
              <span class="kicker-dot"></span> NEXT IN REACH \u00b7 ${badge.tier.toUpperCase()}
            </span>
            <span class="upcoming-teaser-reward">+${badge.rewardXp} XP</span>
          </div>

          <h3 class="upcoming-teaser-title">${badge.name}</h3>
          <p class="upcoming-teaser-desc">${badge.desc}</p>

          <div class="upcoming-teaser-progress-row">
            <div class="upcoming-teaser-bar-track">
              <div class="upcoming-teaser-bar-fill" style="width:${Math.max(6, prog.pct)}%;"></div>
            </div>
            <span class="upcoming-teaser-pct">${prog.current} / ${prog.target} (${prog.pct}%)</span>
          </div>

          <div class="upcoming-teaser-urgency">${urgencyText}</div>

          <div class="upcoming-teaser-action-row">
            <button type="button" class="btn-check upcoming-teaser-action-btn" id="upcoming-teaser-action-btn">
              ${actionBtnText}
            </button>
            <button type="button" class="upcoming-teaser-inspect-btn" id="upcoming-teaser-inspect-btn">
              Inspect badge \u2139\uFE0F
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("upcoming-teaser-action-btn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      playUiSound("tap");
      actionHandler();
    });

    document.getElementById("upcoming-teaser-inspect-btn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      openBadgeDetailModal(badge.id);
    });

    document.getElementById("upcoming-teaser-click-target")?.addEventListener("click", () => {
      openBadgeDetailModal(badge.id);
    });
  }

  if(oldTeaserText){
    oldTeaserText.textContent = `${prog.gap} more ${prog.unit} to earn "${badge.name}" ${badge.icon}`;
  }
}

/* ---- render badges ribbon on dashboard ---- */
function renderBadges(){
  const countEl = document.getElementById("dash-badges-count");
  if(countEl){
    countEl.textContent = `${state.earnedBadges.length} / ${BADGES.length} Unlocked`;
  }

  const listEl = document.getElementById("badges-list");
  if(listEl){
    listEl.innerHTML = "";
    BADGES.forEach(b => {
      const earned = state.earnedBadges.includes(b.id);
      const prog = getBadgeProgress(b);
      const badgeBtn = document.createElement("button");
      badgeBtn.type = "button";
      badgeBtn.className = "badge" + (earned ? " earned" : " locked") + ` tier-${b.tier.toLowerCase()}`;
      badgeBtn.title = `${b.name} (${earned ? "Unlocked \u2713" : `${prog.pct}% completed`})`;
      badgeBtn.innerHTML = `
        <div class="badge-icon-wrap">
          <span class="badge-icon">${b.icon}</span>
          ${earned ? `<span class="badge-check-icon">\u2713</span>` : `<span class="badge-lock-icon">\u{1F512}</span>`}
        </div>
        <span class="badge-name">${b.name}</span>
        <span class="badge-sub-meta">${earned ? "Unlocked" : `${prog.pct}%`}</span>
      `;
      badgeBtn.addEventListener("click", () => {
        openBadgeDetailModal(b.id);
      });
      listEl.appendChild(badgeBtn);
    });
  }

  renderUpcomingBadgeTeaser();
}

/* ---- profile screen & badges showcase ---- */
let currentProfileBadgeFilter = "all";

function renderProfile(){
  const username = getUsername() || "you";
  const lvl = getLevelInfo(state.xp);

  document.getElementById("profile-avatar").textContent = username.charAt(0).toUpperCase();
  document.getElementById("profile-username").textContent = username;
  document.getElementById("profile-level-label").textContent = `Level ${lvl.level} explorer`;
  document.getElementById("profile-xp-fill").style.width = `${lvl.pct}%`;
  document.getElementById("profile-xp-sub").textContent = `${state.xp - lvl.floor} / ${lvl.ceiling - lvl.floor} XP to Level ${lvl.level + 1}`;

  const stats = [
    { num: state.xp, label: "Total XP" },
    { num: state.streak, label: "Day streak" },
    { num: state.longestStreak || 0, label: "Best streak" },
    { num: lessonsCompletedCount(), label: "Lessons done" },
    { num: state.earnedBadges.length, label: "Badges" },
    { num: state.practiceSessionsCompleted || 0, label: "Practice runs" }
  ];
  document.getElementById("profile-stats-grid").innerHTML = stats.map(s => `
    <div class="profile-stat"><span class="profile-stat-num">${s.num}</span><span class="profile-stat-label">${s.label}</span></div>
  `).join("");

  const langsEl = document.getElementById("profile-languages");
  langsEl.innerHTML = Object.keys(COURSES).map(k => {
    const course = COURSES[k];
    const done = state.completed[k].length;
    const total = course.lessons.length;
    const pct = Math.round((done / total) * 100);
    return `
      <div class="profile-lang-row">
        <span class="profile-lang-glyph ${course.color}">${course.glyph}</span>
        <div class="profile-lang-body">
          <p class="profile-lang-name">${course.name}</p>
          <div class="profile-lang-track"><div class="profile-lang-fill" style="width:${pct}%; background:var(--${course.color});"></div></div>
        </div>
        <span class="profile-lang-meta">${done}/${total}</span>
      </div>
    `;
  }).join("");

  // BADGES SECTION IN PROFILE
  const unlockedCount = state.earnedBadges.length;
  const totalBadges = BADGES.length;
  const badgePct = Math.round((unlockedCount / totalBadges) * 100);

  const summaryEl = document.getElementById("profile-badges-unlocked-summary");
  if(summaryEl){
    summaryEl.textContent = `${unlockedCount} of ${totalBadges} Unlocked (${badgePct}%)`;
  }
  const fillEl = document.getElementById("profile-badges-bar-fill");
  if(fillEl){
    fillEl.style.width = `${badgePct}%`;
  }

  const tabUnlocked = document.getElementById("tab-unlocked-count");
  if(tabUnlocked) tabUnlocked.textContent = unlockedCount;
  const tabLocked = document.getElementById("tab-locked-count");
  if(tabLocked) tabLocked.textContent = totalBadges - unlockedCount;

  // Filter tabs click handlers
  const filterTabs = document.querySelectorAll(".profile-badge-tab");
  filterTabs.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.filter === currentProfileBadgeFilter);
    tab.onclick = () => {
      playUiSound("tap");
      currentProfileBadgeFilter = tab.dataset.filter;
      renderProfileBadgesGrid();
    };
  });

  renderProfileBadgesGrid();
  renderProfileReminderCard();
}

function renderProfileBadgesGrid(){
  const badgesEl = document.getElementById("profile-badges-grid");
  if(!badgesEl) return;

  // Update tabs active state
  document.querySelectorAll(".profile-badge-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.filter === currentProfileBadgeFilter);
  });

  let filtered = BADGES;
  if(currentProfileBadgeFilter === "unlocked"){
    filtered = BADGES.filter(b => state.earnedBadges.includes(b.id));
  } else if(currentProfileBadgeFilter === "locked"){
    filtered = BADGES.filter(b => !state.earnedBadges.includes(b.id));
  }

  if(filtered.length === 0){
    badgesEl.innerHTML = `
      <div class="profile-badges-empty">
        ${currentProfileBadgeFilter === "unlocked" 
          ? "No badges unlocked yet \u2014 complete lessons and daily streaks to earn your first achievement!" 
          : "\u{1F389} Congratulations! You have unlocked every single achievement badge!"}
      </div>
    `;
    return;
  }

  badgesEl.innerHTML = filtered.map(b => {
    const earned = state.earnedBadges.includes(b.id);
    const prog = getBadgeProgress(b);
    return `
      <div class="profile-badge-card ${earned ? "unlocked" : "locked"} tier-${b.tier.toLowerCase()}" data-badge-id="${b.id}" tabindex="0" role="button" aria-label="${b.name}">
        <div class="profile-badge-medallion-wrap">
          <div class="profile-badge-medallion">
            <span class="profile-badge-glyph">${b.icon}</span>
            ${earned ? `<span class="profile-badge-seal">\u2713</span>` : `<span class="profile-badge-lock-mark">\u{1F512}</span>`}
          </div>
        </div>

        <div class="profile-badge-info">
          <div class="profile-badge-meta-row">
            <span class="profile-badge-tier-tag ${b.tier.toLowerCase()}">${b.tier}</span>
            <span class="profile-badge-category">${b.category}</span>
          </div>
          <h4 class="profile-badge-title">${b.name}</h4>
          <p class="profile-badge-desc">${b.desc}</p>

          ${earned ? `
            <div class="profile-badge-unlocked-row">
              <span class="profile-badge-status-pill unlocked">\u2713 Unlocked</span>
              <span class="profile-badge-xp-reward">+${b.rewardXp} XP</span>
            </div>
          ` : `
            <div class="profile-badge-progress-wrap">
              <div class="profile-badge-track">
                <div class="profile-badge-fill" style="width:${Math.max(4, prog.pct)}%;"></div>
              </div>
              <div class="profile-badge-prog-label-row">
                <span class="profile-badge-prog-txt">${prog.current}/${prog.target} ${prog.unit}</span>
                <span class="profile-badge-gap-txt">${prog.gap} away</span>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  }).join("");

  // Attach click to open detail modal
  badgesEl.querySelectorAll(".profile-badge-card").forEach(card => {
    const id = card.dataset.badgeId;
    card.addEventListener("click", () => openBadgeDetailModal(id));
    card.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openBadgeDetailModal(id);
      }
    });
  });
}

/* ---- badge detail modal inspector ---- */
function openBadgeDetailModal(badgeId){
  const b = BADGES.find(x => x.id === badgeId);
  if(!b) return;

  const modal = document.getElementById("badge-detail-modal");
  if(!modal) return;

  const earned = state.earnedBadges.includes(b.id);
  const prog = getBadgeProgress(b);

  document.getElementById("badge-modal-icon").textContent = b.icon;
  document.getElementById("badge-modal-tier").textContent = `${b.tier.toUpperCase()} ACHIEVEMENT \u00b7 ${b.category.toUpperCase()}`;
  document.getElementById("badge-modal-title").textContent = b.name;
  document.getElementById("badge-modal-desc").textContent = b.desc;
  document.getElementById("badge-modal-reward-val").textContent = `+${b.rewardXp} XP`;

  const statusText = document.getElementById("badge-modal-status-text");
  const countText = document.getElementById("badge-modal-count-text");
  const fill = document.getElementById("badge-modal-fill");
  const hint = document.getElementById("badge-modal-hint");
  const iconWrap = document.getElementById("badge-modal-icon-wrap");

  if(earned){
    statusText.textContent = "\u2713 UNLOCKED ACHIEVEMENT";
    statusText.style.color = "var(--gold)";
    countText.textContent = "Mastered (100%)";
    fill.style.width = "100%";
    fill.style.background = "var(--gold)";
    hint.textContent = "You have proven your dedication and unlocked this achievement medallion! Keep pushing forward.";
    iconWrap.className = "badge-modal-icon-wrap is-unlocked";
    playUiSound("chest_unlock");
  } else {
    statusText.textContent = "IN PROGRESS";
    statusText.style.color = "#f0b088";
    countText.textContent = `${prog.current} / ${prog.target} ${prog.unit} (${prog.pct}%)`;
    fill.style.width = `${Math.max(5, prog.pct)}%`;
    fill.style.background = "var(--gold)";
    hint.textContent = b.hint || `Only ${prog.gap} more ${prog.unit} to unlock this badge and claim +${b.rewardXp} XP!`;
    iconWrap.className = "badge-modal-icon-wrap";
    playUiSound("tap");
  }

  modal.showModal();

  const closeBtn = document.getElementById("badge-modal-close");
  const actionBtn = document.getElementById("badge-modal-action-btn");

  const closeModal = () => {
    modal.close();
  };

  closeBtn.onclick = closeModal;
  actionBtn.onclick = closeModal;
}

/* ====================== UI AUDIO & PROVERBS ====================== */
let uiAudioCtx = null;
function playUiSound(type){
  try{
    if(!uiAudioCtx) uiAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if(uiAudioCtx.state === "suspended") uiAudioCtx.resume();
    const now = uiAudioCtx.currentTime;

    if(type === "tap"){
      const osc = uiAudioCtx.createOscillator();
      const gain = uiAudioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(uiAudioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    }else if(type === "pop"){
      const osc = uiAudioCtx.createOscillator();
      const gain = uiAudioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.05);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(uiAudioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }else if(type === "correct"){
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 major triad chime
      notes.forEach((freq, idx) => {
        const osc = uiAudioCtx.createOscillator();
        const gain = uiAudioCtx.createGain();
        osc.type = "triangle";
        const startT = now + idx * 0.07;
        osc.frequency.setValueAtTime(freq, startT);
        gain.gain.setValueAtTime(0.001, startT);
        gain.gain.linearRampToValueAtTime(0.24, startT + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, startT + 0.32);
        osc.connect(gain);
        gain.connect(uiAudioCtx.destination);
        osc.start(startT);
        osc.stop(startT + 0.32);
      });
    }else if(type === "incorrect"){
      const notes = [220, 160]; // gentle low downward chime
      notes.forEach((freq, idx) => {
        const osc = uiAudioCtx.createOscillator();
        const gain = uiAudioCtx.createGain();
        osc.type = "sawtooth";
        const startT = now + idx * 0.11;
        osc.frequency.setValueAtTime(freq, startT);
        gain.gain.setValueAtTime(0.001, startT);
        gain.gain.linearRampToValueAtTime(0.14, startT + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, startT + 0.22);
        osc.connect(gain);
        gain.connect(uiAudioCtx.destination);
        osc.start(startT);
        osc.stop(startT + 0.22);
      });
    }else if(type === "chest_unlock"){
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = uiAudioCtx.createOscillator();
        const gain = uiAudioCtx.createGain();
        osc.type = "triangle";
        const startT = now + idx * 0.09;
        osc.frequency.setValueAtTime(freq, startT);
        gain.gain.setValueAtTime(0.001, startT);
        gain.gain.linearRampToValueAtTime(0.28, startT + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startT + 0.38);
        osc.connect(gain);
        gain.connect(uiAudioCtx.destination);
        osc.start(startT);
        osc.stop(startT + 0.38);
      });
    }else if(type === "locked"){
      const osc = uiAudioCtx.createOscillator();
      const gain = uiAudioCtx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(170, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.connect(gain);
      gain.connect(uiAudioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    }
  }catch(e){}
}

const CULTURAL_PROVERBS = {
  igbo: [
    { text: "Onye fee eze, eze eruo ya aka.", translation: "He who respects the king will himself become king." },
    { text: "Nku di na mba na-eghere mba nri.", translation: "The firewood of a people is what cooks their meal." },
    { text: "Gidi gidi bụ ugwu eze.", translation: "Unity and collective strength are the glory of the people." }
  ],
  yoruba: [
    { text: "Àgbájọ ọwọ́ la fi ń sọ̀yà.", translation: "A single finger cannot lift a heavy load; unity brings triumph." },
    { text: "Bí ẹ̀mí bá wà, ìrètí ń bẹ.", translation: "As long as there is life and effort, there is bright hope." },
    { text: "Ilé la ti ń kọ́ ẹ̀ṣọ́ ròde.", translation: "Wisdom and character begin within the household." }
  ],
  hausa: [
    { text: "Gani ya kori ji.", translation: "Seeing is believing; true deeds surpass mere words." },
    { text: "Da hankali ake kama dila.", translation: "With patience and wisdom, one catches the fox." },
    { text: "Hannu daya ba ya daukar jinka.", translation: "One hand cannot lift the roof of a house alone." }
  ],
  edo: [
    { text: "Agho vbe okhuo, erhamwen.", translation: "Perseverance and steady patience conquer all hardship." },
    { text: "Ọta n'imwẹ ẹkikẹ, ọre ọ gbe okhuọ.", translation: "Words spoken with calm wisdom bring lasting victory." }
  ],
  efik: [
    { text: "Kpukpru owo enyene ubok ke ufok.", translation: "Every hand is treasured in building a great community." },
    { text: "Idem mfo odu ke ifiok.", translation: "Your true strength is rooted in understanding and knowledge." }
  ],
  urhobo: [
    { text: "Orovwori r'otọ ọye riẹn idjerhe.", translation: "The dweller of the land knows its cherished paths." },
    { text: "Ogbukpa ọvo gb'urhe ọvo-o.", translation: "One tree alone cannot make a forest." }
  ],
  tiv: [
    { text: "Kasev mba aondo sha kwaghfan.", translation: "Patience and understanding bring enduring peace." },
    { text: "Or môm gbe iyol ga.", translation: "No person can stand completely separated from community." }
  ],
  uvwie: [
    { text: "Urhuvwun r'omote ọye epha.", translation: "Patience and respect pave the honorable road to victory." }
  ],
  isoko: [
    { text: "Oghene ru emu kpobi re o ghale.", translation: "Every grand milestone begins with humble, steady steps." }
  ],
  ijaw: [
    { text: "Beni gba tubo kpobi.", translation: "Small steady streams join together to form the mighty ocean." }
  ]
};

/* Topic-Specific Lesson Tile Icons matching the Nigerian language curriculum */
function getTopicIconSvg(title, i){
  const t = (title || "").toLowerCase();

  if(t.includes("greet")){
    // Friendly greeting wave / hospitality
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v7"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.9-2.3L2.3 15.8a1.5 1.5 0 0 1 2.2-2L8 16"/></svg>`;
  }
  if(t.includes("number")){
    // Numbers / counting digits: clean vector 1 2 3 glyphs (NEVER a hash # sign)
    return `<svg viewBox="0 0 28 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-label="Numbers">
      <path d="M4 6.5l2.5-2v13.5"/>
      <path d="M11 7a2.5 2.5 0 0 1 4.5 1.5c0 2-2.5 3.5-4.5 5.5h5"/>
      <path d="M19.5 7a2.3 2.3 0 0 1 3.5 2c0 1.2-.8 1.9-1.8 1.9 1.1 0 1.9.8 1.9 2a2.3 2.3 0 0 1-4 1.8"/>
    </svg>`;
  }
  if(t.includes("fam") || t.includes("elder") || t.includes("compound")){
    // Family / community / elders
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
  }
  if(t.includes("color")){
    // Colors artist palette
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.1-.7-.4-1-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5-4.5-9-10-9z"/><circle cx="8" cy="8" r="1.3" fill="currentColor"/><circle cx="12" cy="6" r="1.3" fill="currentColor"/><circle cx="16" cy="8" r="1.3" fill="currentColor"/></svg>`;
  }
  if(t.includes("time") || t.includes("day") || t.includes("calendar") || t.includes("season")){
    // Time & calendar clock
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>`;
  }
  if(t.includes("phrase") || t.includes("dialogue") || t.includes("chat")){
    // Common phrases / speech dialogue
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
  }
  if(t.includes("food") || t.includes("dining") || t.includes("crop") || t.includes("fish")){
    // Food bowl / traditional dining
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20a10 10 0 0 1-20 0z"/><path d="M12 3v4"/><path d="M7 4v3"/><path d="M17 4v3"/><line x1="5" y1="21" x2="19" y2="21"/></svg>`;
  }
  if(t.includes("body")){
    // Body parts / silhouette
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/></svg>`;
  }
  if(t.includes("animal")){
    // Animals / paw print
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="15" r="3.5" fill="currentColor"/><circle cx="7" cy="11" r="2" fill="currentColor"/><circle cx="17" cy="11" r="2" fill="currentColor"/><circle cx="9.5" cy="6.5" r="1.8" fill="currentColor"/><circle cx="14.5" cy="6.5" r="1.8" fill="currentColor"/></svg>`;
  }
  if(t.includes("market") || t.includes("shop") || t.includes("trade") || t.includes("commerce")){
    // Market bag / trade basket
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
  }
  if(t.includes("place") || t.includes("travel") || t.includes("waterway")){
    // Places & travel navigation compass
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5"/></svg>`;
  }
  if(t.includes("weather") || t.includes("nature") || t.includes("element")){
    // Weather & nature sun
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>`;
  }
  if(t.includes("feel") || t.includes("emotion") || t.includes("wellbeing")){
    // Feelings & emotions smile
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2.5 4 2.5 4-2.5 4-2.5"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/></svg>`;
  }
  if(t.includes("home") || t.includes("living")){
    // Home & living
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20V9.5z"/><polyline points="9 21.5 9 12.5 15 12.5 15 21.5"/></svg>`;
  }
  if(t.includes("verb")){
    // Active verbs & action
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
  }
  if(t.includes("cloth") || t.includes("attire") || t.includes("style")){
    // Traditional clothing & style
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`;
  }

  // Fallback: Book / Reading study
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
}

/* Treasure Chest SVG matching the wooden chest with golden latch in screenshot */
function getChestSvg(status){
  if(status === "claimed"){
    return `<svg viewBox="0 0 100 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 16 32 L 25 8 Q 50 2 75 8 L 84 32 Z" fill="#6a3413" stroke="#e3a72b" stroke-width="3"/>
      <path d="M 28 8 L 34 32 M 72 8 L 66 32" stroke="#ffd700" stroke-width="2.5"/>
      <ellipse cx="50" cy="37" rx="33" ry="11" fill="#ffd700" opacity="0.95"/>
      <circle cx="43" cy="35" r="5" fill="#fff5b8"/>
      <circle cx="57" cy="35" r="4.5" fill="#fff5b8"/>
      <circle cx="50" cy="39" r="4" fill="#ffffff"/>
      <rect x="15" y="34" width="70" height="42" rx="7" fill="#8b4513" stroke="#e3a72b" stroke-width="3"/>
      <line x1="28" y1="34" x2="28" y2="76" stroke="#ffd700" stroke-width="3"/>
      <line x1="72" y1="34" x2="72" y2="76" stroke="#ffd700" stroke-width="3"/>
      <rect x="20" y="75" width="12" height="6" rx="2" fill="#4d240c"/>
      <rect x="68" y="75" width="12" height="6" rx="2" fill="#4d240c"/>
    </svg>`;
  }

  // Closed Chest (Locked or Ready to claim)
  return `<svg viewBox="0 0 100 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 14 36 Q 14 12 50 12 Q 86 12 86 36 Z" fill="#9c5427" stroke="#e3a72b" stroke-width="3"/>
    <path d="M 18 35 Q 22 17 50 17 Q 78 17 82 35" fill="none" stroke="#7d3d19" stroke-width="1.5"/>
    <path d="M 28 36 Q 30 14 32 12" stroke="#ffd700" stroke-width="3.5"/>
    <path d="M 72 36 Q 70 14 68 12" stroke="#ffd700" stroke-width="3.5"/>
    <rect x="14" y="34" width="72" height="42" rx="7" fill="#8b4513" stroke="#e3a72b" stroke-width="3"/>
    <line x1="16" y1="54" x2="84" y2="54" stroke="#683109" stroke-width="2"/>
    <line x1="28" y1="34" x2="28" y2="76" stroke="#ffd700" stroke-width="3.5"/>
    <line x1="72" y1="34" x2="72" y2="76" stroke="#ffd700" stroke-width="3.5"/>
    <path d="M 14 42 L 20 42 L 20 34" stroke="#ffd700" stroke-width="2.5" fill="none"/>
    <path d="M 86 42 L 80 42 L 80 34" stroke="#ffd700" stroke-width="2.5" fill="none"/>
    <path d="M 14 68 L 20 68 L 20 76" stroke="#ffd700" stroke-width="2.5" fill="none"/>
    <path d="M 86 68 L 80 68 L 80 76" stroke="#ffd700" stroke-width="2.5" fill="none"/>
    <circle cx="50" cy="38" r="9.5" fill="#ffd700" stroke="#b9840f" stroke-width="2"/>
    <circle cx="50" cy="38" r="5" fill="#fff2a3"/>
    <circle cx="50" cy="38" r="2.2" fill="#42210b"/>
    <path d="M 48 38 L 47 43 L 53 43 L 52 38 Z" fill="#42210b"/>
    <rect x="18" y="75" width="13" height="6" rx="2" fill="#4d240c"/>
    <rect x="69" y="75" width="13" height="6" rx="2" fill="#4d240c"/>
  </svg>`;
}

/* ====================== RENDER: PATH ====================== */
let currentCourseKey = null;
let activePendingChestInfo = null;

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

  // Language Track Switcher Tabs (Icon tile style with authentic cultural symbols)
  const tabsEl = document.getElementById("lang-tabs");
  if(tabsEl){
    tabsEl.innerHTML = "";
    Object.keys(COURSES).forEach(k => {
      const c = COURSES[k];
      const done = state.completed[k]?.length || 0;
      const isDone = done >= c.lessons.length;
      const isActive = (k === key);
      const t = TRIBE_DETAILS[k] || TRIBE_DETAILS.igbo;

      const tab = document.createElement("button");
      tab.className = `lang-tab ${c.color}` + (isActive ? " active" : "");
      tab.setAttribute("type", "button");
      tab.setAttribute("role", "button");
      tab.setAttribute("aria-label", `Switch to ${c.name} track`);
      tab.dataset.tribe = k;

      tab.innerHTML = `
        <span class="lang-tab-glyph">
          <span class="track-symbol">${t.svg}</span>
          ${isDone ? `<span class="track-done-badge">✓</span>` : ""}
        </span>
        <span class="lang-tab-label">${c.name}</span>
      `;
      tab.addEventListener("click", () => {
        playUiSound("tap");
        openPath(k);
      });
      tabsEl.appendChild(tab);
    });
  }

  // Calculate Unit & Progress
  const doneCount = state.completed[key].length;
  const currentUnitIndex = Math.min(3, Math.floor(doneCount / 4) + 1);

  // Update Unit Header Banner (matching pink card in Duolingo screenshot)
  const unitBanner = document.getElementById("unit-banner");
  if(unitBanner){
    unitBanner.className = `unit-banner ${course.color}`;
    const unitKicker = document.getElementById("unit-banner-kicker");
    const unitTitle = document.getElementById("unit-banner-title");
    if(unitKicker) unitKicker.textContent = `SECTION 1, UNIT ${currentUnitIndex}`;

    // Topical Titles by unit
    const unitTitles = {
      1: "Greetings, Numbers & Everyday Words",
      2: "Family, Food & Cultural Expressions",
      3: "Mastery, Wisdom & Fluency"
    };
    if(unitTitle) unitTitle.textContent = unitTitles[currentUnitIndex] || `${course.name} Core Foundations`;

    // Guidebook button handler
    const guidebookBtn = document.getElementById("unit-guidebook-btn");
    if(guidebookBtn){
      guidebookBtn.onclick = () => openGuidebookModal(key, currentUnitIndex);
    }
  }

  // Winding serpentine path offsets (smooth wave)
  const PATH_OFFSETS = [0, -50, -75, -45, 0, 45, 75, 50];

  const pathEl = document.getElementById("lesson-path");
  pathEl.className = "lesson-path " + course.color;
  pathEl.innerHTML = "";

  let currentNodeEl = null;
  let layoutItemIndex = 0;

  course.lessons.forEach((lesson, i) => {
    const isDone = i < doneCount;
    const isNext = i === doneCount;
    const locked = !isDone && !isNext;

    // Outer tile wrapper with serpentine winding offset
    const tileWrap = document.createElement("div");
    const currentOffset = PATH_OFFSETS[layoutItemIndex % PATH_OFFSETS.length];
    layoutItemIndex++;

    tileWrap.className = "lesson-tile " + course.color + (locked ? " locked" : "") + (isDone ? " complete" : "") + (isNext ? " active" : "");
    tileWrap.style.marginLeft = `${currentOffset}px`;

    // Lesson Button
    const btn = document.createElement("button");
    btn.className = "tile-button " + course.color + (locked ? " locked" : "");
    btn.setAttribute("aria-label", `${lesson.title} - ${isDone ? "Completed" : isNext ? "Current" : "Locked"}`);
    btn.style.setProperty("--tile-bg", locked ? "#202b3b" : `var(--${course.color})`);
    btn.style.setProperty("--tile-depth", locked ? "#131b26" : `var(--${course.color}-deep)`);

    // If active (current) node, add "START" tooltip pill
    if(isNext){
      const tooltip = document.createElement("div");
      tooltip.className = "tile-tooltip";
      tooltip.textContent = "START";
      tileWrap.appendChild(tooltip);
      currentNodeEl = tileWrap;
    }

    tileWrap.appendChild(btn);

    // Inside the button: Icon or Number
    const iconContainer = document.createElement("div");
    iconContainer.className = "tile-icon";

    if(locked){
      iconContainer.innerHTML = `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`;
      btn.appendChild(iconContainer);
    }else if(isNext){
      // Show lesson number inside active disc
      const numSpan = document.createElement("span");
      numSpan.className = "tile-number" + (i + 1 >= 10 ? " double-digit" : "");
      numSpan.textContent = `${i + 1}`;
      btn.appendChild(numSpan);
    }else{
      // Completed lesson: for numbers topic, display the actual lesson number (1, 2, 3...) instead of #
      const isNumberTopic = (lesson.title || "").toLowerCase().includes("number");
      if(isNumberTopic){
        const numSpan = document.createElement("span");
        numSpan.className = "tile-number" + (i + 1 >= 10 ? " double-digit" : "");
        numSpan.textContent = `${i + 1}`;
        btn.appendChild(numSpan);
      }else{
        // Show topic-specific icon matching lesson curriculum (Greetings, Family, Food, etc.)
        iconContainer.innerHTML = getTopicIconSvg(lesson.title, i);
        btn.appendChild(iconContainer);
      }
    }

    // Completed node badge: clean gold checkmark
    if(isDone){
      const checkBadge = document.createElement("div");
      checkBadge.className = "tile-check-badge";
      checkBadge.textContent = "✓";
      btn.appendChild(checkBadge);
    }

    // Click handler for tile
    btn.addEventListener("click", () => {
      if(locked){
        playUiSound("locked");
        showAppToast("Complete previous lessons to unlock this topic!");
        return;
      }
      playUiSound("tap");
      startLesson(key, i);
    });

    // Subtitle label below tile: includes lesson number and topic
    const label = document.createElement("div");
    label.className = "tile-label";
    label.textContent = `${i + 1}. ${lesson.title}`;
    tileWrap.appendChild(label);

    pathEl.appendChild(tileWrap);

    // 3D Connecting Stepping Pebbles along the winding path between lessons
    const lessonNumber = i + 1;
    if(lessonNumber % 4 !== 0 && i < course.lessons.length - 1){
      const nextOffset = PATH_OFFSETS[(layoutItemIndex) % PATH_OFFSETS.length];
      const trailRow = document.createElement("div");
      trailRow.className = "path-trail-row" + (isDone ? " lit" : "");
      const p1 = Math.round(currentOffset * 0.75 + nextOffset * 0.25);
      const p2 = Math.round(currentOffset * 0.5 + nextOffset * 0.5);
      const p3 = Math.round(currentOffset * 0.25 + nextOffset * 0.75);
      trailRow.innerHTML = `
        <span class="path-pebble" style="margin-left:${p1}px"></span>
        <span class="path-pebble" style="margin-left:${p2}px"></span>
        <span class="path-pebble" style="margin-left:${p3}px"></span>
      `;
      pathEl.appendChild(trailRow);
    }

    // ==========================================
    // REWARD CHEST AFTER EVERY 4 GAMES (LESSONS)
    // ==========================================
    if(lessonNumber % 4 === 0){
      const chestNum = lessonNumber / 4;
      const chestId = `${key}-chest-${chestNum}`;
      const requiredGames = chestNum * 4;

      const isClaimed = Array.isArray(state.claimedChests) && state.claimedChests.includes(chestId);
      const isReady = !isClaimed && doneCount >= requiredGames;
      const isLocked = !isClaimed && !isReady;

      const chestNode = document.createElement("div");
      chestNode.className = "path-reward-chest " + (isClaimed ? "claimed" : isReady ? "ready" : "locked");
      // Align chest centered on the path for clean rhythm
      chestNode.style.marginLeft = "0px";

      // Chest SVG container
      const svgBox = document.createElement("div");
      svgBox.className = "chest-svg-box";
      svgBox.innerHTML = getChestSvg(isClaimed ? "claimed" : "closed");

      if(isReady){
        const aura = document.createElement("div");
        aura.className = "chest-aura";
        svgBox.appendChild(aura);

        const badgeTag = document.createElement("div");
        badgeTag.className = "chest-badge-tag";
        badgeTag.textContent = "CLAIM REWARD!";
        chestNode.appendChild(badgeTag);
      }else if(isClaimed){
        const claimedTag = document.createElement("div");
        claimedTag.className = "chest-claimed-tag";
        claimedTag.textContent = "✓ CLAIMED";
        chestNode.appendChild(claimedTag);
      }

      chestNode.appendChild(svgBox);

      // Chest Labels
      const chestLabel = document.createElement("div");
      chestLabel.className = "chest-label";
      chestLabel.textContent = `Reward Chest #${chestNum}`;
      chestNode.appendChild(chestLabel);

      const chestSub = document.createElement("div");
      chestSub.className = "chest-sub";
      if(isClaimed){
        chestSub.textContent = "+35 XP Collected";
      }else if(isReady){
        chestSub.textContent = "Tap to open & claim!";
      }else{
        chestSub.textContent = `${doneCount}/${requiredGames} games finished`;
      }
      chestNode.appendChild(chestSub);

      // Chest Click Handler
      chestNode.addEventListener("click", () => {
        if(isReady){
          openRewardChestModal(key, chestId, chestNum, doneCount, requiredGames);
        }else if(isLocked){
          playUiSound("locked");
          const remaining = requiredGames - doneCount;
          showAppToast(`Complete ${remaining} more lesson${remaining > 1 ? 's' : ''} to unlock Reward Chest #${chestNum}! 🎁`);
        }else if(isClaimed){
          playUiSound("tap");
          showAppToast(`Reward Chest #${chestNum} already claimed! +35 XP collected. Keep going! ✨`);
        }
      });

      pathEl.appendChild(chestNode);
    }
  });

  setupJumpToCurrentButton(currentNodeEl);
  showScreen("path");
}

/* ====================== REWARD CHEST MODAL LOGIC ====================== */
function openRewardChestModal(courseKey, chestId, chestNum, doneCount, reqCount){
  activePendingChestInfo = { courseKey, chestId, chestNum };
  playUiSound("chest_unlock");

  const modal = document.getElementById("reward-chest-modal");
  if(!modal) return;

  const title = document.getElementById("reward-modal-title");
  const sub = document.getElementById("reward-modal-sub");
  const kicker = document.getElementById("reward-modal-kicker");
  const proverbText = document.getElementById("reward-proverb-text");
  const proverbAuthor = document.getElementById("reward-proverb-author");
  const confettiWrap = document.getElementById("reward-confetti-wrap");

  if(kicker) kicker.textContent = `${reqCount}-GAME MILESTONE`;
  if(title) title.textContent = `Reward Chest #${chestNum} Unlocked!`;
  if(sub) sub.textContent = `Outstanding! You conquered ${reqCount} lessons in ${COURSES[courseKey].name}. Here are your rewards!`;

  // Select cultural proverb for this course
  const proverbs = CULTURAL_PROVERBS[courseKey] || CULTURAL_PROVERBS.igbo;
  const selectedProverb = proverbs[(chestNum - 1) % proverbs.length] || proverbs[0];
  if(proverbText) proverbText.textContent = `"${selectedProverb.text}" — ${selectedProverb.translation}`;
  if(proverbAuthor) proverbAuthor.textContent = `${COURSES[courseKey].name} Cultural Wisdom`;

  // Confetti particles
  if(confettiWrap){
    confettiWrap.innerHTML = "";
    for(let i = 0; i < 24; i++){
      const piece = document.createElement("span");
      piece.style.position = "absolute";
      piece.style.width = `${Math.floor(Math.random() * 8 + 6)}px`;
      piece.style.height = `${Math.floor(Math.random() * 10 + 6)}px`;
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.top = `${Math.random() * 30}%`;
      piece.style.backgroundColor = ["#ffd700", "#e3a72b", "#3f9d6b", "#b23e78", "#247ba0"][Math.floor(Math.random() * 5)];
      piece.style.borderRadius = "3px";
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      piece.style.animation = `confettiFall ${1.5 + Math.random()}s ease-out forwards`;
      confettiWrap.appendChild(piece);
    }
  }

  if(typeof modal.showModal === "function"){
    modal.showModal();
  }else{
    modal.classList.remove("hidden");
  }
}

// Reward Claim Button Event Listener
const claimConfirmBtn = document.getElementById("reward-claim-confirm-btn");
if(claimConfirmBtn){
  claimConfirmBtn.onclick = () => {
    if(activePendingChestInfo){
      const { courseKey, chestId, chestNum } = activePendingChestInfo;
      if(!Array.isArray(state.claimedChests)) state.claimedChests = [];
      if(!state.claimedChests.includes(chestId)){
        state.claimedChests.push(chestId);
        state.xp += 35;
        addDailyXp(35);
        state.hearts = 5; // Refill hearts to maximum!
        saveState();
        showAppToast(`Claimed +35 XP and full hearts refilled! 🎁✨`);
      }
      activePendingChestInfo = null;
    }
    const modal = document.getElementById("reward-chest-modal");
    if(modal){
      if(typeof modal.close === "function") modal.close();
      else modal.classList.add("hidden");
    }
    if(currentCourseKey) openPath(currentCourseKey);
  };
}

const rewardCloseBtn = document.getElementById("reward-modal-close");
if(rewardCloseBtn){
  rewardCloseBtn.onclick = () => {
    const modal = document.getElementById("reward-chest-modal");
    if(modal){
      if(typeof modal.close === "function") modal.close();
      else modal.classList.add("hidden");
    }
  };
}

/* ====================== GUIDEBOOK MODAL LOGIC ====================== */
function openGuidebookModal(courseKey, unitNum){
  playUiSound("tap");
  const modal = document.getElementById("guidebook-modal");
  if(!modal) return;

  const course = COURSES[courseKey];
  const kicker = document.getElementById("guidebook-kicker");
  const title = document.getElementById("guidebook-title");
  const vocabList = document.getElementById("guidebook-vocab-list");

  if(kicker) kicker.textContent = `${course.name.toUpperCase()} • UNIT ${unitNum} GUIDEBOOK`;
  if(title) title.textContent = "Key Vocabulary & Phrases";

  if(vocabList){
    vocabList.innerHTML = "";
    // Gather words from lessons in this unit (each unit has 4 lessons)
    const startIdx = (unitNum - 1) * 4;
    const endIdx = startIdx + 4;
    const unitLessons = course.lessons.slice(startIdx, endIdx);

    unitLessons.forEach(l => {
      l.vocab.forEach(v => {
        const item = document.createElement("div");
        item.className = "guidebook-item";
        item.innerHTML = `
          <div>
            <div class="guidebook-native">${v.native}</div>
            <div class="guidebook-en">${v.en}</div>
          </div>
          <button type="button" class="speaker-btn" style="width:34px; height:34px;" title="Listen">
            <svg viewBox="0 0 24 24" style="width:16px; height:16px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        `;
        const speakBtn = item.querySelector(".speaker-btn");
        if(speakBtn){
          speakBtn.onclick = (e) => {
            e.stopPropagation();
            speak(v.native, course.speechLang, courseKey, speakBtn);
          };
        }
        vocabList.appendChild(item);
      });
    });
  }

  if(typeof modal.showModal === "function"){
    modal.showModal();
  }else{
    modal.classList.remove("hidden");
  }
}

const guidebookCloseBtn = document.getElementById("guidebook-close-btn");
if(guidebookCloseBtn){
  guidebookCloseBtn.onclick = () => {
    const modal = document.getElementById("guidebook-modal");
    if(modal){
      if(typeof modal.close === "function") modal.close();
      else modal.classList.add("hidden");
    }
  };
}
const guidebookGotItBtn = document.getElementById("guidebook-gotit-btn");
if(guidebookGotItBtn){
  guidebookGotItBtn.onclick = () => {
    const modal = document.getElementById("guidebook-modal");
    if(modal){
      if(typeof modal.close === "function") modal.close();
      else modal.classList.add("hidden");
    }
  };
}

let jumpButtonObserver = null;
function setupJumpToCurrentButton(currentNodeEl){
  const btn = document.getElementById("jump-to-current-btn");
  if(jumpButtonObserver){ jumpButtonObserver.disconnect(); jumpButtonObserver = null; }

  if(!currentNodeEl){ btn.classList.add("hidden"); return; }

  btn.onclick = () => currentNodeEl.scrollIntoView({ behavior: "smooth", block: "center" });

  jumpButtonObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => btn.classList.toggle("hidden", entry.isIntersecting));
  }, { threshold: 0.4 });
  jumpButtonObserver.observe(currentNodeEl);
}

/* ====================== LESSON SESSION ====================== */
function startLesson(courseKey, lessonIndex){
  if(state.hearts <= 0){
    alert("You're out of hearts. Come back after a short break, or refresh to reset this demo.");
    return;
  }
  state.lastActiveCourse = courseKey;
  recordActivity();
  saveState();
  prefetchLessonAudio(courseKey, lessonIndex);
  session = {
    courseKey, lessonIndex,
    questions: buildLessonQuestions(COURSES[courseKey], lessonIndex),
    qi: 0,
    correctCount: 0,
    mistakes: 0,
    selected: null,
    answered: false,
    matchState: null,
    isPractice: false
  };
  showScreen("lesson");
  renderQuestion();
}

function startPractice(courseKey = "all", filterMode = "all"){
  if(state.hearts <= 0){
    alert("You're out of hearts. Come back after a short break, or refresh to reset this demo.");
    return;
  }
  const questions = buildPracticeQuestions(courseKey, filterMode);
  if(questions.length === 0){
    alert("No words match the selected practice filter! Switch filter or complete lessons to log words.");
    return;
  }
  if(courseKey !== "all") state.lastActiveCourse = courseKey;
  saveState();
  session = {
    courseKey,
    lessonIndex: null,
    questions,
    qi: 0,
    correctCount: 0,
    mistakes: 0,
    selected: null,
    answered: false,
    matchState: null,
    isPractice: true,
    filterMode
  };
  showScreen("lesson");
  renderQuestion();
}

function resetQuestionUI(){
  document.getElementById("options-grid").classList.remove("hidden");
  document.getElementById("options-grid").innerHTML = "";
  document.getElementById("type-wrap").classList.add("hidden");
  document.getElementById("match-wrap").classList.add("hidden");
  const sentenceWrap = document.getElementById("sentence-wrap");
  if(sentenceWrap) sentenceWrap.classList.add("hidden");
  document.getElementById("speaker-btn").classList.add("hidden");
  const setBtn = document.getElementById("speaker-settings-btn");
  if(setBtn) setBtn.classList.add("hidden");
  document.getElementById("speaking-row").classList.add("hidden");
  document.getElementById("audio-hint").classList.add("hidden");

  const newWordPill = document.getElementById("new-word-pill");
  if(newWordPill) newWordPill.classList.add("hidden");
  const pop = document.getElementById("word-hint-popover");
  if(pop) pop.classList.add("hidden");
  const stdPrompt = document.getElementById("standard-prompt-row");
  if(stdPrompt) stdPrompt.classList.remove("hidden");
  const mascot = document.getElementById("sentence-mascot");
  if(mascot) mascot.className = "sentence-mascot";
  const answerEl = document.getElementById("sentence-answer-row");
  if(answerEl) answerEl.className = "sentence-answer-row";

  const feedback = document.getElementById("feedback");
  feedback.classList.add("hidden");
  const fbTitle = document.getElementById("feedback-title");
  if(fbTitle) fbTitle.textContent = "";
  const fbText = document.getElementById("feedback-text");
  if(fbText) fbText.textContent = "";
  const fbIcon = document.getElementById("feedback-icon-box");
  if(fbIcon) fbIcon.textContent = "";

  const checkBtn = document.getElementById("check-btn");
  checkBtn.disabled = true;
  checkBtn.textContent = "Check";
}

function renderQuestion(){
  const q = session.questions[session.qi];
  const activeCourseKey = q._courseKey || (session.courseKey !== "all" ? session.courseKey : Object.keys(COURSES)[0]);
  const course = COURSES[activeCourseKey] || COURSES[Object.keys(COURSES)[0]];
  session.selected = null;
  session.answered = false;
  session.matchState = null;
  session.mistakesAtQuestionStart = session.mistakes;

  document.getElementById("lesson-hearts").textContent = state.hearts;
  document.getElementById("lesson-progress").style.width = `${(session.qi / session.questions.length) * 100}%`;

  const kickers = { mc: "Translate", type: "Type it", listen: "Listen", match: "Match", blank: "Fill the blank", sentence: "Build it" };
  const prefix = q.isRetry ? "Retry \u00b7 " : (session.isPractice ? "Spaced Recall \u00b7 " : "");
  document.getElementById("question-kicker").textContent = prefix + (kickers[q.type] || "Question");
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
      sBtn.onclick = () => speak(q.speakText, course.speechLang, activeCourseKey, sBtn);
      const setBtn = document.getElementById("speaker-settings-btn");
      if(setBtn){
        setBtn.classList.remove("hidden");
        setBtn.onclick = () => openVoiceSettingsModal(activeCourseKey);
      }
      setupSpeakingRow();
    }
  }else if(q.type === "blank"){
    const grid = document.getElementById("options-grid");
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => selectOption(btn, opt));
      grid.appendChild(btn);
    });
    const hint = document.getElementById("audio-hint");
    hint.textContent = `Means "${q.meaningHint}"`;
    hint.classList.remove("hidden");
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
    sBtn.onclick = () => speak(q.speakText, course.speechLang, activeCourseKey, sBtn);
    const setBtn = document.getElementById("speaker-settings-btn");
    if(setBtn){
      setBtn.classList.remove("hidden");
      setBtn.onclick = () => openVoiceSettingsModal(activeCourseKey);
    }
    document.getElementById("audio-hint").classList.remove("hidden");
    setTimeout(() => speak(q.speakText, course.speechLang, activeCourseKey, sBtn), 350);
    setupSpeakingRow();
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
  }else if(q.type === "sentence"){
    document.getElementById("options-grid").classList.add("hidden");
    document.getElementById("sentence-wrap").classList.remove("hidden");
    renderSentence(q, course);
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
    const activeCourseKey = q._courseKey || (session.courseKey !== "all" ? session.courseKey : "igbo");
    speak(q.pairs[idx].native, course.speechLang, activeCourseKey, btn);
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
        if(session.isPractice) q.pairs.forEach(p => recordPracticeSuccess(q._courseKey || session.courseKey, p));
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
      const targetCourseKey = q._courseKey || (session.courseKey !== "all" ? session.courseKey : Object.keys(COURSES)[0]);
      recordMiss(targetCourseKey, q.pairs[ms.selNativeIdx]);
      recordMiss(targetCourseKey, q.pairs[ms.selEnIdx]);
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

/* ---- Duolingo-style sentence translation with Bear Mascot & Interactive Word Bank ---- */
function showWordHintPopover(targetEl, term, hint){
  const pop = document.getElementById("word-hint-popover");
  if(!pop) return;
  if(!hint){
    pop.classList.add("hidden");
    return;
  }
  const termEl = document.getElementById("popover-term");
  const hintEl = document.getElementById("popover-hint");
  if(termEl) termEl.textContent = term;
  if(hintEl) hintEl.textContent = hint;

  const rect = targetEl.getBoundingClientRect();
  const wrap = document.querySelector(".question-wrap");
  const wrapRect = wrap ? wrap.getBoundingClientRect() : { left: 0, top: 0 };

  const left = rect.left - wrapRect.left + (rect.width / 2);
  const top = rect.top - wrapRect.top - 8;

  pop.style.left = `${Math.max(12, left)}px`;
  pop.style.top = `${top}px`;
  pop.classList.remove("hidden");
}

function renderSentence(q, course){
  // 1. New word indicator badge
  const newWordPill = document.getElementById("new-word-pill");
  if(newWordPill){
    newWordPill.classList.toggle("hidden", !q.isNewWord);
  }

  // 2. Prompt headers
  const kicker = document.getElementById("question-kicker");
  if(kicker) kicker.textContent = q.isRetry ? "Retry \u00b7 Translate" : "Translate";
  const promptEl = document.getElementById("question-prompt");
  if(promptEl) promptEl.textContent = q.prompt || "Translate this sentence";

  // 3. Duolingo Bear Mascot
  const mascotEl = document.getElementById("sentence-mascot");
  if(mascotEl){
    mascotEl.innerHTML = DUO_MASCOT_SVG;
    mascotEl.className = "sentence-mascot";
    mascotEl.onclick = () => {
      mascotEl.classList.remove("celebrate");
      void mascotEl.offsetWidth;
      mascotEl.classList.add("celebrate");
      playUiSound("tap");
    };
  }

  // 4. Speech Bubble Words with Interactive Hints
  const bubbleWordsEl = document.getElementById("bubble-words");
  bubbleWordsEl.innerHTML = "";
  (q.tokens || []).forEach(token => {
    if(token.isPunct){
      const punct = document.createElement("span");
      punct.className = "bubble-punct";
      punct.textContent = token.text;
      bubbleWordsEl.appendChild(punct);
    }else{
      const wordSpan = document.createElement("span");
      wordSpan.className = "bubble-word" + (token.isNew ? " is-new" : "");
      wordSpan.textContent = token.text;
      wordSpan.setAttribute("role", "button");
      wordSpan.setAttribute("tabindex", "0");
      wordSpan.addEventListener("click", (e) => {
        e.stopPropagation();
        showWordHintPopover(wordSpan, token.text, token.hint || token.meaning);
        playUiSound("tap");
      });
      bubbleWordsEl.appendChild(wordSpan);
    }
  });

  // 5. Audio playback button in speech bubble
  const bubbleSpeaker = document.getElementById("bubble-speaker-btn");
  if(bubbleSpeaker){
    bubbleSpeaker.onclick = (e) => {
      e.stopPropagation();
      bubbleSpeaker.classList.add("playing");
      const speechLang = (course && course.speechLang) ? course.speechLang : "en";
      speak(q.speakText || q.nativeSentence, speechLang);
      setTimeout(() => bubbleSpeaker.classList.remove("playing"), 1200);
    };

    // Auto-play sentence pronunciation once on load
    setTimeout(() => {
      if(!session.answered && session.questions[session.qi] === q){
        bubbleSpeaker.classList.add("playing");
        const speechLang = (course && course.speechLang) ? course.speechLang : "en";
        speak(q.speakText || q.nativeSentence, speechLang);
        setTimeout(() => bubbleSpeaker.classList.remove("playing"), 1200);
      }
    }, 380);
  }

  // 6. Sentence construction notebook lines and word bank
  const bankEl = document.getElementById("sentence-bank");
  const answerEl = document.getElementById("sentence-answer-row");
  bankEl.innerHTML = "";
  answerEl.innerHTML = "";
  answerEl.className = "sentence-answer-row";

  const checkBtn = document.getElementById("check-btn");
  checkBtn.disabled = true;
  checkBtn.textContent = "CHECK";

  // Build Word Bank tiles
  const bankTokens = q.bank || (q.shuffled ? q.shuffled.map(s => s.w) : []);
  bankTokens.forEach((wordText, bankIdx) => {
    const tile = document.createElement("button");
    tile.className = "sentence-tile";
    tile.textContent = wordText;
    tile.dataset.bankIdx = bankIdx;
    tile.dataset.text = wordText;
    tile.type = "button";

    tile.addEventListener("click", () => {
      if(session.answered) return;
      playUiSound("tap");

      // Hide bank tile and insert a ghost placeholder to keep alignment
      tile.classList.add("is-placed");
      const ghost = document.createElement("div");
      ghost.className = "sentence-ghost-placeholder";
      ghost.dataset.bankIdx = bankIdx;
      ghost.textContent = wordText;
      tile.parentElement.insertBefore(ghost, tile);

      // Create placed tile on the guidelines
      const placed = document.createElement("button");
      placed.className = "sentence-placed-tile";
      placed.textContent = wordText;
      placed.dataset.bankIdx = bankIdx;
      placed.dataset.text = wordText;
      placed.type = "button";

      // Clicking placed tile sends it back to the bank
      placed.addEventListener("click", () => {
        if(session.answered) return;
        playUiSound("pop");
        placed.remove();
        tile.classList.remove("is-placed");
        const gh = bankEl.querySelector(`.sentence-ghost-placeholder[data-bank-idx="${bankIdx}"]`);
        if(gh) gh.remove();
        checkBtn.disabled = answerEl.children.length === 0;
      });

      answerEl.appendChild(placed);
      checkBtn.disabled = false;
    });

    bankEl.appendChild(tile);
  });
}

// Global click dismisses word hint popover
document.addEventListener("click", (e) => {
  if(!e.target.closest(".bubble-word") && !e.target.closest("#word-hint-popover")){
    const pop = document.getElementById("word-hint-popover");
    if(pop) pop.classList.add("hidden");
  }
});

/* ---- grading / advance ---- */
function checkAnswer(){
  const q = session.questions[session.qi];
  const activeCourseKey = q._courseKey || (session.courseKey !== "all" ? session.courseKey : Object.keys(COURSES)[0]);

  if(!session.answered){
    let correct = false;

    if(q.type === "mc" || q.type === "listen" || q.type === "blank"){
      if(session.selected == null) return;
      correct = session.selected === q.answer;
      [...document.getElementById("options-grid").children].forEach(b => {
        if(b.textContent === q.answer) b.classList.add("correct");
        else if(b.classList.contains("selected") && !correct) b.classList.add("incorrect");
        b.disabled = true;
      });
      playUiSound(correct ? "correct" : "incorrect");
    }else if(q.type === "type"){
      const input = document.getElementById("type-input");
      correct = q.accept.includes(normalizeStr(input.value));
      input.classList.add(correct ? "correct" : "incorrect");
      input.disabled = true;
      playUiSound(correct ? "correct" : "incorrect");
    }else if(q.type === "match"){
      return; // graded via taps; check-btn only reachable once answered
    }else if(q.type === "sentence"){
      const answerEl = document.getElementById("sentence-answer-row");
      const attemptTokens = [...answerEl.children].map(c => (c.dataset.text || c.textContent).trim());
      const attemptStr = attemptTokens.join(" ");

      const clean = (s) => (s || "").replace(/[.,!?;:'"״]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
      const normAttempt = clean(attemptStr);
      const normAnswer = clean(q.answer);

      correct = (attemptStr === q.answer) ||
                (normAttempt === normAnswer) ||
                (q.acceptAnswers && q.acceptAnswers.some(a => normAttempt === clean(a)));

      if(correct){
        playUiSound("correct");
        answerEl.classList.add("correct");
        const mascot = document.getElementById("sentence-mascot");
        if(mascot) mascot.classList.add("celebrate");
      }else{
        playUiSound("incorrect");
        answerEl.classList.add("incorrect");
        const mascot = document.getElementById("sentence-mascot");
        if(mascot) mascot.classList.add("retry");
      }
      [...answerEl.children, ...document.getElementById("sentence-bank").children].forEach(c => { c.disabled = true; });
    }

    session.answered = true;
    const fb = document.getElementById("feedback");
    const fbTitle = document.getElementById("feedback-title");
    const fbText = document.getElementById("feedback-text");
    const fbIcon = document.getElementById("feedback-icon-box");
    fb.classList.remove("hidden");

    if(correct){
      fb.className = "feedback ok";
      if(fbIcon) fbIcon.textContent = "✓";
      if(fbTitle) fbTitle.textContent = "Nicely done!";
      if(fbText) fbText.textContent = "You got it right.";
      session.correctCount++;
      if(session.isPractice && q._vocab) recordPracticeSuccess(activeCourseKey, q._vocab);
    }else{
      fb.className = "feedback bad";
      if(fbIcon) fbIcon.textContent = "✕";
      if(fbTitle) fbTitle.textContent = "Correct solution:";
      const answerText = q.type === "type" ? q.answerDisplay : q.answer;
      if(fbText) fbText.textContent = answerText;
      session.mistakes++;
      state.hearts = Math.max(0, state.hearts - 1);
      document.getElementById("lesson-hearts").textContent = state.hearts;
      recordMiss(activeCourseKey, q._vocab);
      saveState();
      session.questions.push(requeueQuestion(q, COURSES[activeCourseKey]));
    }
    document.getElementById("check-btn").textContent = (session.qi === session.questions.length - 1) ? "FINISH" : "CONTINUE";
    return;
  }

  // advance
  if(state.hearts <= 0){
    if(session.isPractice){
      renderPracticeScreen(session.filterMode || "all");
      showScreen("practice");
    }else{
      showScreen("path");
      openPath(session.courseKey);
    }
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

  if(touchStreak()){
    streakIncreasedPending = true;
  }
  addDailyXp(xpGain);
  state.xp += xpGain;
  if(session.isPractice){
    state.practiceSessionsCompleted = (state.practiceSessionsCompleted || 0) + 1;
  }else if(!state.completed[session.courseKey].includes(session.lessonIndex)){
    state.completed[session.courseKey].push(session.lessonIndex);
  }
  if(session.mistakes === 0) state.hasPerfect = true;
  checkBadges();
  recordActivity();

  const totalActivities = lessonsCompletedCount() + (state.practiceSessionsCompleted || 0);
  pendingSurprise = totalActivities > 0 && totalActivities % 3 === 0;

  saveState();

  document.getElementById("complete-title").textContent = session.isPractice ? "Practice complete" : "Lesson complete";
  document.getElementById("complete-sub").textContent = `You earned ${xpGain} XP`;
  document.getElementById("complete-streak").textContent = state.streak;
  document.getElementById("complete-accuracy").textContent = `${accuracy}%`;
  document.getElementById("complete-perfect").classList.toggle("hidden", session.mistakes !== 0);
  animateCompleteXp(xpGain);
  showScreen("complete");
}

function animateCompleteXp(target){
  const el = document.getElementById("complete-xp");
  const start = performance.now();
  const duration = 550;
  function tick(now){
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `+${Math.round(eased * target)}`;
    if(progress < 1) requestAnimationFrame(tick);
    else el.textContent = `+${target}`;
  }
  requestAnimationFrame(tick);
}

/* ====================== NAV ====================== */
function showScreen(name){
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(`screen-${name}`).classList.remove("hidden");
  window.scrollTo(0, 0);
}

document.getElementById("lang-pill-toggle").addEventListener("click", () => {
  playUiSound("tap");
  const trackSelect = document.getElementById("track-select");
  const pill = document.getElementById("lang-pill-toggle");
  const homeScreen = document.getElementById("screen-home");

  if(homeScreen && homeScreen.classList.contains("hidden")){
    renderHome();
    showScreen("home");
  }

  if(trackSelect){
    trackSelect.classList.toggle("hidden");
    pill.classList.toggle("open", !trackSelect.classList.contains("hidden"));
    if(!trackSelect.classList.contains("hidden")){
      trackSelect.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
});
document.getElementById("path-back").addEventListener("click", () => { renderHome(); showScreen("home"); });
document.getElementById("practice-back").addEventListener("click", () => { renderHome(); showScreen("home"); });
document.getElementById("profile-back").addEventListener("click", () => { renderHome(); showScreen("home"); });
document.getElementById("profile-logout-btn").addEventListener("click", () => {
  clearSession();
  showAuthScreen();
});
document.getElementById("lesson-quit").addEventListener("click", () => {
  if(confirm("Quit this lesson? Your progress on it won't be saved.")){
    if("speechSynthesis" in window) window.speechSynthesis.cancel();
    if(isRecording && mediaRecorder){ mediaRecorder.stop(); isRecording = false; }
    if(session.isPractice){
      renderPracticeScreen();
      showScreen("practice");
    }else{
      showScreen("path");
      openPath(session.courseKey);
    }
  }
});
document.getElementById("check-btn").addEventListener("click", checkAnswer);
document.getElementById("complete-continue").addEventListener("click", () => {
  if(pendingSurprise){
    pendingSurprise = false;
    showSurpriseChest();
  }else if(session && session.isPractice){
    renderPracticeScreen();
    showScreen("practice");
  }else{
    renderHome();
    showScreen("home");
  }
});

function showSurpriseChest(){
  const fact = SURPRISE_FACTS[Math.floor(Math.random() * SURPRISE_FACTS.length)];
  document.getElementById("surprise-fact").textContent = fact;
  state.xp += 10;
  addDailyXp(10);
  saveState();
  showScreen("surprise");
}
document.getElementById("surprise-continue").addEventListener("click", () => {
  renderHome();
  showScreen("home");
});

/* ====================== AUTH ====================== */
let authMode = "login";

const EYE_OPEN_SVG = `<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>`;
const EYE_CLOSED_SVG = `<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>`;

function showAuthScreen(message){
  showScreen("auth");
  const err = document.getElementById("auth-error");
  if(message){ err.textContent = message; err.classList.remove("hidden"); }
  else{ err.classList.add("hidden"); err.textContent = ""; }
}

function setAuthMode(mode){
  authMode = mode;
  const isLogin = mode === "login";

  document.getElementById("auth-tab-login").classList.toggle("active", isLogin);
  document.getElementById("auth-tab-login").setAttribute("aria-selected", isLogin ? "true" : "false");
  document.getElementById("auth-tab-signup").classList.toggle("active", !isLogin);
  document.getElementById("auth-tab-signup").setAttribute("aria-selected", !isLogin ? "true" : "false");

  document.getElementById("auth-card-title").textContent = isLogin ? "Welcome back" : "Create your account";
  document.getElementById("auth-card-sub").textContent = isLogin ? "Log in to continue your streak and lessons." : "Join thousands of learners mastering Nigerian languages.";

  document.getElementById("auth-btn-text").textContent = isLogin ? "Log In" : "Create Free Account";
  const googleText = document.getElementById("auth-google-text");
  if(googleText) googleText.textContent = isLogin ? "Sign in with Google" : "Sign up with Google";
  document.getElementById("landing-nav-switch-btn").textContent = isLogin ? "Create account" : "Log in";

  document.getElementById("auth-confirm-group").classList.toggle("hidden", isLogin);
  document.getElementById("auth-remember-row").classList.toggle("hidden", !isLogin);

  document.getElementById("auth-password").autocomplete = isLogin ? "current-password" : "new-password";
  document.getElementById("auth-error").classList.add("hidden");
}

function setupPasswordToggles(){
  const pwInput = document.getElementById("auth-password");
  const pwToggle = document.getElementById("auth-pw-toggle");
  const confirmInput = document.getElementById("auth-confirm-password");
  const confirmToggle = document.getElementById("auth-confirm-pw-toggle");

  pwToggle.addEventListener("click", () => {
    const isPw = pwInput.type === "password";
    pwInput.type = isPw ? "text" : "password";
    pwToggle.querySelector("svg").innerHTML = isPw ? EYE_CLOSED_SVG : EYE_OPEN_SVG;
    pwToggle.setAttribute("title", isPw ? "Hide password" : "Show password");
  });

  confirmToggle.addEventListener("click", () => {
    const isPw = confirmInput.type === "password";
    confirmInput.type = isPw ? "text" : "password";
    confirmToggle.querySelector("svg").innerHTML = isPw ? EYE_CLOSED_SVG : EYE_OPEN_SVG;
    confirmToggle.setAttribute("title", isPw ? "Hide password" : "Show password");
  });
}

function setupHelpModal(){
  const helpModal = document.getElementById("auth-help-modal");
  const forgotBtn = document.getElementById("auth-forgot-btn");
  const closeBtn = document.getElementById("auth-modal-close-btn");
  const okBtn = document.getElementById("auth-modal-ok-btn");

  forgotBtn.addEventListener("click", () => {
    if(helpModal.showModal) helpModal.showModal();
  });
  closeBtn.addEventListener("click", () => {
    if(helpModal.close) helpModal.close();
  });
  okBtn.addEventListener("click", () => {
    if(helpModal.close) helpModal.close();
  });
  helpModal.addEventListener("click", (e) => {
    if(e.target === helpModal && helpModal.close) helpModal.close();
  });
}

function setupGoogleAuth(){
  const googleBtn = document.getElementById("auth-google-btn");
  if(!googleBtn) return;
  const errEl = document.getElementById("auth-error");
  const guideModal = document.getElementById("auth-google-guide-modal");
  const guideClose = document.getElementById("auth-google-guide-close");
  const guideOk = document.getElementById("auth-google-guide-ok");
  const copyBtn = document.getElementById("btn-copy-redirect-uri");
  const uriDisplay = document.getElementById("auth-redirect-uri-display");

  const expectedRedirectUri = `${window.location.origin}/auth/google/callback`;
  if(uriDisplay) uriDisplay.textContent = expectedRedirectUri;

  if(copyBtn){
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(expectedRedirectUri);
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy", 2000);
      } catch(e) {
        copyBtn.textContent = "Copied!";
      }
    });
  }

  if(guideClose) guideClose.addEventListener("click", () => guideModal.close && guideModal.close());
  if(guideOk) guideOk.addEventListener("click", () => guideModal.close && guideModal.close());
  if(guideModal) guideModal.addEventListener("click", (e) => {
    if(e.target === guideModal && guideModal.close) guideModal.close();
  });

  googleBtn.addEventListener("click", async () => {
    errEl.classList.add("hidden");
    try{
      const origin = window.location.origin;
      const res = await fetch(`/api/auth/google/url?origin=${encodeURIComponent(origin)}`);
      const data = await res.json();

      if(!data.configured || !data.url){
        errEl.innerHTML = `Google Sign-In needs OAuth credentials. <button type="button" class="auth-error-guide-btn" id="open-google-guide-btn">View 2-step setup</button>`;
        errEl.classList.remove("hidden");
        const guideTrigger = document.getElementById("open-google-guide-btn");
        if(guideTrigger){
          guideTrigger.addEventListener("click", () => {
            if(guideModal.showModal) guideModal.showModal();
          });
        }
        if(guideModal.showModal) guideModal.showModal();
        return;
      }

      // Open Google OAuth Provider authorization URL directly in popup
      const popup = window.open(
        data.url,
        "google_oauth_popup",
        "width=560,height=680,menubar=no,status=no,toolbar=no,location=yes"
      );

      if(!popup || popup.closed || typeof popup.closed === "undefined"){
        // If popup blocked on mobile, navigate directly
        window.location.href = data.url;
      }
    }catch(err){
      errEl.textContent = "Could not start Google Sign-In: " + err.message;
      errEl.classList.remove("hidden");
    }
  });

  // Listen for callback postMessage from popup window
  window.addEventListener("message", async (event) => {
    if(event.data?.type === "GOOGLE_AUTH_SUCCESS"){
      const { token, username } = event.data;
      setSession(token, username);
      await fetchProgress();
      renderHome();
      showScreen("home");
    }else if(event.data?.type === "GOOGLE_AUTH_ERROR"){
      errEl.textContent = event.data.error || "Google authentication failed. Please try again.";
      errEl.classList.remove("hidden");
    }
  });
}

document.getElementById("auth-tab-login").addEventListener("click", () => setAuthMode("login"));
document.getElementById("auth-tab-signup").addEventListener("click", () => setAuthMode("signup"));

document.getElementById("landing-nav-switch-btn").addEventListener("click", () => {
  setAuthMode(authMode === "login" ? "signup" : "login");
  document.getElementById("auth-form-wrap").scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => document.getElementById("auth-username").focus(), 400);
});

document.getElementById("landing-cta-btn").addEventListener("click", () => {
  setAuthMode("signup");
  document.getElementById("auth-form-wrap").scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => document.getElementById("auth-username").focus(), 400);
});

// Interactive 3D Tribe Cards on Landing Screen
document.querySelectorAll(".landing-lang-card").forEach(card => {
  card.addEventListener("click", () => {
    playUiSound("tap");
    const tribe = card.dataset.tribe;
    if(tribe && COURSES[tribe]){
      state.lastActiveCourse = tribe;
      currentCourseKey = tribe;
      saveState();
    }
    setAuthMode("signup");
    const authWrap = document.getElementById("auth-form-wrap");
    if(authWrap){
      authWrap.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => document.getElementById("auth-username")?.focus(), 400);
    }
  });
  card.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " "){
      e.preventDefault();
      card.click();
    }
  });
});

// Landing page search bar to quickly filter the 10 language cards by name or native name
(function initLandingLanguageSearch(){
  const searchInput = document.getElementById("landing-lang-search");
  if(!searchInput) return;

  const clearBtn = document.getElementById("landing-search-clear");
  const countEl = document.getElementById("landing-search-count");
  const resetLink = document.getElementById("landing-search-reset-link");
  const langSection = document.getElementById("landing-languages");
  const noMatchEl = document.getElementById("landing-lang-no-match");
  const noMatchQuery = document.getElementById("no-match-query");
  const noMatchResetBtn = document.getElementById("no-match-reset-btn");
  const cards = Array.from(document.querySelectorAll(".landing-lang-card"));

  function stripDiacritics(str){
    return (str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function filterCards(rawQuery){
    const query = (rawQuery || "").trim();
    const normQuery = stripDiacritics(query);
    const tokens = normQuery.split(/\s+/).filter(Boolean);

    let matchCount = 0;
    let firstMatch = null;

    cards.forEach(card => {
      const name = card.dataset.name || card.querySelector(".landing-lang-name")?.textContent || "";
      const native = card.dataset.native || card.querySelector(".landing-lang-native")?.textContent || "";
      const tribe = card.dataset.tribe || "";

      const rawCombined = `${name} ${native} ${tribe}`;
      const normCombined = stripDiacritics(rawCombined);
      const cleanCombined = normCombined.replace(/[^a-z0-9]/g, " ");

      const matches = (tokens.length === 0) || tokens.every(tok => {
        const cleanTok = tok.replace(/[^a-z0-9]/g, "");
        return normCombined.includes(tok) || (cleanTok && cleanCombined.includes(cleanTok));
      });

      if(matches){
        card.classList.remove("hidden");
        matchCount++;
        if(!firstMatch) firstMatch = card;
      }else{
        card.classList.add("hidden");
      }
    });

    // Update clear button & reset link visibility
    if(clearBtn) clearBtn.classList.toggle("hidden", query.length === 0);
    if(resetLink) resetLink.classList.toggle("hidden", query.length === 0);

    // Update count feedback
    if(countEl){
      if(query.length === 0){
        countEl.textContent = `${cards.length} languages available`;
      }else if(matchCount === 1){
        countEl.textContent = "1 language found";
      }else if(matchCount > 0){
        countEl.textContent = `${matchCount} of ${cards.length} languages found`;
      }else{
        countEl.textContent = "0 languages found";
      }
    }

    // Toggle container flex-wrap for filtered results
    if(langSection){
      langSection.classList.toggle("is-filtered", query.length > 0 && matchCount > 0);
    }

    // Toggle no-match view
    if(noMatchEl){
      if(matchCount === 0 && query.length > 0){
        noMatchEl.classList.remove("hidden");
        if(noMatchQuery) noMatchQuery.textContent = query;
      }else{
        noMatchEl.classList.add("hidden");
      }
    }

    return { matchCount, firstMatch };
  }

  function clearSearch(){
    searchInput.value = "";
    searchInput.focus();
    filterCards("");
    playUiSound("pop");
  }

  searchInput.addEventListener("input", (e) => {
    filterCards(e.target.value);
  });

  searchInput.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      e.preventDefault();
      clearSearch();
    }else if(e.key === "Enter"){
      e.preventDefault();
      const { matchCount, firstMatch } = filterCards(searchInput.value);
      if(matchCount === 1 && firstMatch){
        firstMatch.click();
      }
    }
  });

  if(clearBtn) clearBtn.addEventListener("click", clearSearch);
  if(resetLink) resetLink.addEventListener("click", clearSearch);
  if(noMatchResetBtn) noMatchResetBtn.addEventListener("click", clearSearch);
})();

document.getElementById("auth-form").addEventListener("submit", async e => {
  e.preventDefault();
  const username = document.getElementById("auth-username").value.trim();
  const password = document.getElementById("auth-password").value;
  const confirmPassword = document.getElementById("auth-confirm-password").value;
  const errEl = document.getElementById("auth-error");
  errEl.classList.add("hidden");

  if(!username){
    errEl.textContent = "Please enter your username.";
    errEl.classList.remove("hidden");
    document.getElementById("auth-username").focus();
    return;
  }

  if(username.length < 3){
    errEl.textContent = "Username must be at least 3 characters.";
    errEl.classList.remove("hidden");
    document.getElementById("auth-username").focus();
    return;
  }

  if(!password){
    errEl.textContent = "Please enter your password.";
    errEl.classList.remove("hidden");
    document.getElementById("auth-password").focus();
    return;
  }

  if(password.length < 4){
    errEl.textContent = "Password must be at least 4 characters.";
    errEl.classList.remove("hidden");
    document.getElementById("auth-password").focus();
    return;
  }

  if(authMode === "signup" && password !== confirmPassword){
    errEl.textContent = "Passwords do not match. Please check and re-enter.";
    errEl.classList.remove("hidden");
    document.getElementById("auth-confirm-password").focus();
    return;
  }

  const submitBtn = document.getElementById("auth-submit");
  const spinner = document.getElementById("auth-spinner");
  const btnText = document.getElementById("auth-btn-text");

  submitBtn.disabled = true;
  spinner.classList.remove("hidden");
  btnText.textContent = authMode === "login" ? "Logging in..." : "Creating account...";

  try{
    const path = authMode === "login" ? "/api/login" : "/api/signup";
    const res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.error || "Something went wrong.");

    setSession(data.token, data.username);
    await fetchProgress();
    renderHome();
    showScreen("home");
  }catch(err){
    errEl.textContent = err.message;
    errEl.classList.remove("hidden");
  }finally{
    submitBtn.disabled = false;
    spinner.classList.add("hidden");
    btnText.textContent = authMode === "login" ? "Log In" : "Create Free Account";
  }
});

/* ====================== LOCAL 24-HOUR NOTIFICATION SYSTEM ====================== */
const INACTIVITY_THRESHOLD_MS = 24 * 60 * 60 * 1000; // 24 hours
const NOTIFICATION_COOLDOWN_MS = 18 * 60 * 60 * 1000; // 18 hours between system notifications
let swRegistration = null;
let inactivityTimer = null;
let lastActivitySaveTime = 0;

// Culturally resonant Nigerian notification copy based on current or active language
const NOTIFICATION_MESSAGES = {
  igbo: [
    { title: "🇳🇬 Ndewo! Don't break your Igbo streak", body: "It's been 24 hours since your last lesson. 3 minutes of Igbo today keeps your streak burning bright!" },
    { title: "🔥 Ka anyị mụta Igbo!", body: "Your daily Igbo lesson is ready on Lingua Naija. Protect your streak and vocabulary now." }
  ],
  yoruba: [
    { title: "🇳🇬 Ẹ n lẹ o! Time for Yorùbá", body: "24 hours passed since your last session. Practice your Yorùbá phrases to keep your streak!" },
    { title: "🔥 Má jẹ́ kí streak rẹ tẹ́!", body: "3 minutes of Yorùbá today keeps memory sharp and unlocks your next badges." }
  ],
  hausa: [
    { title: "🇳🇬 Sannu! Time for Hausa lesson", body: "It's been a day since your last practice. Keep your Hausa learning streak alive!" },
    { title: "🔥 Ci gaba da koyo!", body: "Your daily Hausa lesson is waiting. Earn XP and protect your day streak on Lingua Naija." }
  ],
  edo: [
    { title: "🇳🇬 Kóyo! Complete today's Edo lesson", body: "It's been 24 hours! Don't let your Edo vocabulary slip away." }
  ],
  efik: [
    { title: "🇳🇬 Mọ́kọ́m! Time for Efịk practice", body: "Keep your Efịk streak going strong with a quick 3-minute lesson." }
  ],
  urhobo: [
    { title: "🇳🇬 Migwo! Keep your Urhobo streak", body: "24 hours since your last session. Practice your Urhobo phrases now!" }
  ],
  tiv: [
    { title: "🇳🇬 M sugh u! Daily Tiv Lesson", body: "Protect your streak! Complete today's Tiv phrases on Lingua Naija." }
  ],
  uvwie: [
    { title: "🇳🇬 Migwo! Uvwie lesson waiting", body: "Don't break your daily streak! Practice your Uvwie lesson now." }
  ],
  isoko: [
    { title: "🇳🇬 Do! Keep your Isoko streak alive", body: "24 hours have passed — jump in for your daily Isoko lesson!" }
  ],
  ijaw: [
    { title: "🇳🇬 Tebidaba! Time for Ijaw practice", body: "Keep your Nigerian language skills strong with today's Ijaw lesson." }
  ],
  default: [
    { title: "🇳🇬 Lingua Naija: Daily Lesson Reminder", body: "It's been 24 hours since your last lesson! Protect your streak with a quick 3-minute session." },
    { title: "🔥 Don't let your streak slip away!", body: "Your Nigerian language journey is waiting. Jump in for today's lesson now." }
  ]
};

function initServiceWorker(){
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/sw.js").then(reg => {
      swRegistration = reg;
    }).catch(err => {
      console.warn("ServiceWorker registration:", err.message);
    });

    navigator.serviceWorker.addEventListener("message", e => {
      if(e.data && e.data.type === "NOTIFICATION_CLICKED"){
        if(getToken()){
          renderHome();
          showScreen("home");
        }
      }
    });
  }
}

// Show visual in-app toast for notifications
function showToast(title, message, icon = "🔔", duration = 5000){
  const container = document.getElementById("toast-container");
  if(!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button type="button" class="toast-close" aria-label="Dismiss">&times;</button>
  `;
  const closeBtn = toast.querySelector(".toast-close");
  const removeToast = () => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 250);
  };
  closeBtn.addEventListener("click", removeToast);
  container.appendChild(toast);
  setTimeout(removeToast, duration);
}

// Record user activity timestamp
function recordActivity(){
  const now = Date.now();
  state.lastActiveTime = now;
  try {
    localStorage.setItem("lingua_last_active_time", now.toString());
  } catch(e) {}
  
  // Hide the 24h inactivity banner if currently showing
  const banner = document.getElementById("inactivity-reminder-banner");
  if(banner) banner.classList.add("hidden");

  // Save debounced to server if at least 10 seconds since last save
  if(now - lastActivitySaveTime > 10000){
    lastActivitySaveTime = now;
    saveState();
  }

  scheduleNext24HourCheck();
}

function getLastActiveTimestamp(){
  let stored = null;
  try {
    stored = Number(localStorage.getItem("lingua_last_active_time"));
  } catch(e) {}
  return (stored && !isNaN(stored) && stored > 0) ? stored : (state.lastActiveTime || Date.now());
}

function formatTimeAgo(ms){
  if(ms < 0) ms = 0;
  const seconds = Math.floor(ms / 1000);
  if(seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if(minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if(hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function getActiveReminderCopy(){
  const langKey = pickContinueCourse() || state.lastActiveCourse || "igbo";
  const list = NOTIFICATION_MESSAGES[langKey] || NOTIFICATION_MESSAGES.default;
  return list[Math.floor(Math.random() * list.length)];
}

async function triggerLocalNotification(isTest = false){
  const copy = getActiveReminderCopy();
  const title = isTest ? `🔔 Test Reminder: ${copy.title}` : copy.title;
  const body = isTest ? `[Sample 24h Alert] ${copy.body}` : copy.body;

  // System notification
  if("Notification" in window && Notification.permission === "granted"){
    try{
      if(swRegistration && swRegistration.showNotification){
        await swRegistration.showNotification(title, {
          body,
          icon: "/favicon.ico",
          badge: "/favicon.ico",
          tag: isTest ? "lingua-test-alert" : "lingua-24h-inactivity",
          renotify: true,
          data: { url: "/" },
          vibrate: [200, 100, 200]
        });
      } else {
        new Notification(title, {
          body,
          icon: "/favicon.ico",
          tag: isTest ? "lingua-test-alert" : "lingua-24h-inactivity"
        });
      }
    }catch(err){
      console.warn("System notification error:", err);
    }
  }

  // Also display in-app toast
  showToast(title, body, isTest ? "🧪" : "🔥", 6500);

  if(!isTest){
    state.lastNotifiedTime = Date.now();
    saveState();
  }
}

function check24HourInactivityReminder(){
  if(state.notificationsEnabled === false) return;
  const lastActive = getLastActiveTimestamp();
  const elapsed = Date.now() - lastActive;

  if(elapsed >= INACTIVITY_THRESHOLD_MS){
    // Show in-app banner on home dashboard
    const banner = document.getElementById("inactivity-reminder-banner");
    const bannerSub = document.getElementById("inactivity-banner-sub");
    if(banner){
      const hours = Math.floor(elapsed / (60 * 60 * 1000));
      const days = Math.floor(hours / 24);
      const timeStr = days > 1 ? `${days} days` : `${hours} hours`;
      if(bannerSub) bannerSub.textContent = `It's been ${timeStr} since your last lesson! Keep your ${state.streak || 0}-day streak and memory retention alive.`;
      banner.classList.remove("hidden");
    }

    // Check if we should fire the OS / browser notification (respecting 18h cooldown)
    const lastNotified = state.lastNotifiedTime || 0;
    if(Date.now() - lastNotified >= NOTIFICATION_COOLDOWN_MS){
      triggerLocalNotification(false);
    }
  }
}

function scheduleNext24HourCheck(){
  if(inactivityTimer) clearTimeout(inactivityTimer);
  const lastActive = getLastActiveTimestamp();
  const elapsed = Date.now() - lastActive;
  const remaining = Math.max(1000, INACTIVITY_THRESHOLD_MS - elapsed);

  // Set local timeout for this tab session
  inactivityTimer = setTimeout(() => {
    check24HourInactivityReminder();
  }, remaining);
}

async function requestNotificationPermissionAndEnable(){
  if(!("Notification" in window)){
    showToast("Notifications Unsupported", "Your browser does not support Web Notifications, but in-app 24h reminders are active!", "ℹ️");
    state.notificationsEnabled = true;
    saveState();
    renderReminderCard();
    renderProfileReminderCard();
    return;
  }

  if(Notification.permission === "granted"){
    state.notificationsEnabled = true;
    saveState();
    showToast("Reminders Active", "24-hour lesson reminders are enabled. We'll ping you if you haven't logged in for 24h.", "✅");
    renderReminderCard();
    renderProfileReminderCard();
    return;
  }

  try{
    const permission = await Notification.requestPermission();
    if(permission === "granted"){
      state.notificationsEnabled = true;
      saveState();
      showToast("Reminders Enabled", "You'll receive a reminder if 24 hours pass without completing a daily lesson!", "🎉");
      setTimeout(() => triggerLocalNotification(true), 400);
    } else {
      state.notificationsEnabled = false;
      saveState();
      showToast("Notifications Blocked", "Browser permission was not granted. You can re-enable notifications in browser site settings.", "⚠️");
    }
  }catch(err){
    console.warn("Notification permission error:", err);
  }
  renderReminderCard();
  renderProfileReminderCard();
}

function renderReminderCard(){
  const el = document.getElementById("reminder-card");
  if(!el) return;

  const isEnabled = state.notificationsEnabled !== false;
  const lastActive = getLastActiveTimestamp();
  const timeAgoStr = formatTimeAgo(Date.now() - lastActive);

  let statusText = "Active · Reminds after 24h inactive";
  let statusClass = "active";
  if(!isEnabled){
    statusText = "Reminders turned off";
    statusClass = "off";
  }else if("Notification" in window && Notification.permission === "denied"){
    statusText = "Browser blocked · In-app active";
  }else if("Notification" in window && Notification.permission === "default"){
    statusText = "Tap toggle to enable alerts";
  }

  el.innerHTML = `
    <div class="reminder-card-head">
      <div class="reminder-card-left">
        <div class="reminder-bell-icon">🔔</div>
        <div>
          <p class="reminder-card-title">Daily Lesson Reminder</p>
          <p class="reminder-card-sub">Get reminded after 24 hours of inactivity so your streak never resets.</p>
        </div>
      </div>
      <label class="toggle-switch" title="Toggle 24h reminders">
        <input type="checkbox" id="reminder-toggle-home" ${isEnabled ? "checked" : ""}>
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div class="reminder-status-row">
      <span class="reminder-badge-status ${statusClass}">
        <span class="reminder-status-dot"></span>
        <span>${statusText} (Last active: ${timeAgoStr})</span>
      </span>
      <button type="button" class="reminder-btn-test" id="reminder-test-btn" title="Send a test notification">
        <span>⚡ Test Alert</span>
      </button>
    </div>
  `;

  const toggle = document.getElementById("reminder-toggle-home");
  if(toggle){
    toggle.addEventListener("change", async () => {
      if(toggle.checked){
        await requestNotificationPermissionAndEnable();
      }else{
        state.notificationsEnabled = false;
        saveState();
        showToast("Reminders Paused", "Daily 24-hour lesson reminders have been disabled.", "⏸️");
        renderReminderCard();
        renderProfileReminderCard();
      }
    });
  }

  const testBtn = document.getElementById("reminder-test-btn");
  if(testBtn){
    testBtn.addEventListener("click", () => {
      triggerLocalNotification(true);
    });
  }
}

function renderProfileReminderCard(){
  const el = document.getElementById("profile-reminder-card");
  if(!el) return;

  const isEnabled = state.notificationsEnabled !== false;
  const lastActive = getLastActiveTimestamp();
  const timeAgoStr = formatTimeAgo(Date.now() - lastActive);

  el.innerHTML = `
    <div class="reminder-card-head" style="margin-bottom:8px;">
      <div class="reminder-card-left">
        <div class="reminder-bell-icon" style="background:rgba(32,148,139,0.18);">⏰</div>
        <div>
          <p class="reminder-card-title">24-Hour Streak Saver Alerts</p>
          <p class="reminder-card-sub">Sends a local device notification whenever 24 hours pass without study.</p>
        </div>
      </div>
      <label class="toggle-switch" title="Toggle 24h reminders">
        <input type="checkbox" id="reminder-toggle-profile" ${isEnabled ? "checked" : ""}>
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div class="reminder-status-row">
      <span class="reminder-badge-status ${isEnabled ? "active" : ""}">
        <span class="reminder-status-dot"></span>
        <span>${isEnabled ? "Enabled" : "Disabled"} · Last active ${timeAgoStr}</span>
      </span>
      <button type="button" class="reminder-btn-test" id="profile-reminder-test-btn">
        <span>Send Test Notification</span>
      </button>
    </div>
  `;

  const toggle = document.getElementById("reminder-toggle-profile");
  if(toggle){
    toggle.addEventListener("change", async () => {
      if(toggle.checked){
        await requestNotificationPermissionAndEnable();
      }else{
        state.notificationsEnabled = false;
        saveState();
        showToast("Reminders Paused", "Daily 24-hour lesson reminders have been disabled.", "⏸️");
        renderReminderCard();
        renderProfileReminderCard();
      }
    });
  }

  const testBtn = document.getElementById("profile-reminder-test-btn");
  if(testBtn){
    testBtn.addEventListener("click", () => triggerLocalNotification(true));
  }
}

function setupInactivityBanner(){
  const resumeBtn = document.getElementById("inactivity-resume-btn");
  const closeBtn = document.getElementById("inactivity-close-btn");
  const banner = document.getElementById("inactivity-reminder-banner");

  if(resumeBtn){
    resumeBtn.addEventListener("click", () => {
      recordActivity();
      const courseKey = pickContinueCourse() || "igbo";
      const doneCount = state.completed[courseKey]?.length || 0;
      startLesson(courseKey, doneCount < COURSES[courseKey].lessons.length ? doneCount : 0);
    });
  }

  if(closeBtn){
    closeBtn.addEventListener("click", () => {
      if(banner) banner.classList.add("hidden");
      recordActivity();
    });
  }
}

function setupUserActivityTracking(){
  let lastThrottle = 0;
  const handleInteraction = () => {
    const now = Date.now();
    if(now - lastThrottle > 60000){ // update at most once a minute
      lastThrottle = now;
      recordActivity();
    }
  };
  window.addEventListener("pointerdown", handleInteraction, { passive: true });
  window.addEventListener("keydown", handleInteraction, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if(!document.hidden){
      check24HourInactivityReminder();
      handleInteraction();
    }
  });

  // Check periodically every 10 minutes
  setInterval(() => {
    check24HourInactivityReminder();
  }, 10 * 60 * 1000);
}

/* ====================== INIT ====================== */
(async function init(){
  setupPasswordToggles();
  setupHelpModal();
  setupGoogleAuth();
  initServiceWorker();
  setupInactivityBanner();
  setupUserActivityTracking();
  initVoiceSettingsModal();

  // Check URL query parameters for OAuth redirect
  const params = new URLSearchParams(window.location.search);
  const paramToken = params.get("auth_token") || params.get("token");
  const paramUsername = params.get("auth_username") || params.get("username");
  if(paramToken && paramUsername){
    setSession(paramToken, paramUsername);
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  if(!getToken()){ showAuthScreen(); return; }
  try{
    await fetchProgress();
    recordActivity();
    renderHome();
    showScreen("home");
  }catch(e){
    if(getToken()) showAuthScreen("Could not load your progress. Check your connection and try again.");
  }
})();
