/* ====================== PATTERNS ======================
   Small inline SVG textures nodding to each culture's craft
   tradition, used purely as abstract backdrop texture. */
const PATTERNS = {
  igbo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><g stroke='%233f9d6b' stroke-width='2' fill='none'><path d='M0 30 Q15 10 30 30 T60 30'/><path d='M0 45 Q15 25 30 45 T60 45'/><path d='M0 15 Q15 -5 30 15 T60 15'/></g></svg>`,
  yoruba: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><g fill='%23b23e78'><circle cx='8' cy='8' r='3'/><circle cx='24' cy='8' r='3'/><circle cx='40' cy='8' r='3'/><circle cx='16' cy='24' r='3'/><circle cx='32' cy='24' r='3'/><circle cx='8' cy='40' r='3'/><circle cx='24' cy='40' r='3'/><circle cx='40' cy='40' r='3'/></g></svg>`,
  hausa: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><g stroke='%23d1682f' stroke-width='2' fill='none'><rect x='8' y='8' width='40' height='40' transform='rotate(45 28 28)'/><rect x='18' y='18' width='20' height='20' transform='rotate(45 28 28)'/></g></svg>`,
  edo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52'><g fill='%232f8f8a'><circle cx='6' cy='6' r='2.5'/><circle cx='18' cy='6' r='2.5'/><circle cx='30' cy='6' r='2.5'/><circle cx='42' cy='6' r='2.5'/><circle cx='12' cy='18' r='2.5'/><circle cx='24' cy='18' r='2.5'/><circle cx='36' cy='18' r='2.5'/><circle cx='6' cy='30' r='2.5'/><circle cx='18' cy='30' r='2.5'/><circle cx='30' cy='30' r='2.5'/><circle cx='42' cy='30' r='2.5'/></g></svg>`,
  efik: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='40'><g stroke='%233f6fa8' stroke-width='2' fill='none'><path d='M0 10 Q15 0 30 10 T60 10'/><path d='M0 22 Q15 12 30 22 T60 22'/><path d='M0 34 Q15 24 30 34 T60 34'/></g></svg>`,
  urhobo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><g stroke='%237a4fa0' stroke-width='2' fill='none'><path d='M25 5 L45 25 L25 45 L5 25 Z'/><path d='M25 15 L35 25 L25 35 L15 25 Z'/></g></svg>`
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
  },
  edo: {
    name: "Edo", native: "Ẹ̀dó (Bini)", color: "edo", glyph: "B", speechLang: "bin",
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
        { native: "Erha nokhua", en: "Grandfather" }
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
      ]}
    ]
  },
  efik: {
    name: "Efik", native: "Usem Efịk", color: "efik", glyph: "C", speechLang: "efi",
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
      ]}
    ]
  },
  urhobo: {
    name: "Urhobo", native: "Ẹdo Urhobo", color: "urhobo", glyph: "U", speechLang: "urh",
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
    expanded.push({ title: `${lesson.title} \u00b7 Part 1`, vocab: vocab.slice(0, mid) });
    expanded.push({ title: `${lesson.title} \u00b7 Part 2`, vocab: vocab.slice(mid) });
  });
  return expanded;
}
Object.keys(COURSES).forEach(k => {
  COURSES[k].lessons = splitIntoSubLessons(COURSES[k].lessons);
});

const SURPRISE_FACTS = [
  "Nigeria is home to over 250 ethnic groups and more than 500 living languages \u2014 you're learning just a few of them!",
  "Nollywood, Nigeria's film industry, produces more movies per year than Hollywood \u2014 second in the world only to India's Bollywood by volume.",
  "Lagos is one of the fastest-growing megacities on Earth, with a metro population bigger than many entire countries.",
  "The name \u201cNigeria\u201d was reportedly coined by journalist Flora Shaw in 1897, after the Niger River.",
  "Nigeria has three major river systems \u2014 the Niger, the Benue, and the Cross River \u2014 which shaped where many of its languages developed.",
  "Nigerian jollof rice has sparked a decades-long, good-natured rivalry with Ghana over whose version is better.",
  "Amina of Zazzau, a 16th-century Hausa warrior queen, is remembered for expanding her kingdom's territory and trade routes.",
  "Nigeria has more than one \u201cofficial\u201d greeting for almost every hour of the day \u2014 many languages have separate words for morning, afternoon, and evening greetings.",
  "The University of Ibadan, founded in 1948, is Nigeria's oldest university.",
  "Afrobeats, a genre with deep roots in Nigerian music, is now streamed by millions of people worldwide."
];

const CULTURE = {
  igbo: {
    intro: "A few pieces of everyday Igbo wisdom and custom \u2014 the kind of thing you'd pick up from elders, not textbooks.",
    proverbs: [
      { native: "Egbe belụ, ugo belụ, nke si ibe ya ebena, nku kwaa ya.", translation: "Let the hawk perch, let the eagle perch; whichever says the other should not perch, may its wing break.", meaning: "Live and let live \u2014 everyone deserves the chance to thrive." },
      { native: "Onye kwe, chi ya ekwe.", translation: "If a person agrees, their personal god agrees.", meaning: "Self-belief and determination pave the way to success." }
    ],
    etiquette: { title: "Greeting elders", text: "When greeting an elder, a slight bow shows respect, and it's customary to use both hands when giving or receiving something from them." },
    scenario: {
      prompt: "You meet your friend's mother for the first time. What's the respectful thing to do?",
      options: [
        { text: "Say \u201cNdewo\u201d and offer a slight bow", correct: true, feedback: "That's the respectful way to greet an elder you're meeting for the first time." },
        { text: "Wave from a distance without speaking", correct: false, feedback: "A greeting is expected \u2014 a wave alone can come across as distant." },
        { text: "Ask for her phone number right away", correct: false, feedback: "Save the small talk for after a proper greeting!" }
      ]
    }
  },
  yoruba: {
    intro: "A few pieces of everyday Yorùbá wisdom and custom \u2014 the kind of thing you'd pick up from elders, not textbooks.",
    proverbs: [
      { native: "Ilé ọba tí ó jóná, ẹwà ló bù sí i.", translation: "A king's palace that gets burnt has only added more beauty.", meaning: "Make the best of hardship \u2014 necessity is the mother of invention." },
      { native: "Ìdí méjèèjì ló tó olúwa rẹ̀ jókòó.", translation: "The two buttocks are sufficient for their owner to sit on.", meaning: "Be content with what you have." }
    ],
    etiquette: { title: "Greeting elders", text: "Young men traditionally prostrate flat on the ground (\u00ecdobal\u00e8) when greeting an elder, while young women kneel (k\u00fanl\u1eb9) \u2014 a sign of deep respect still practiced today." },
    scenario: {
      prompt: "You meet your friend's mother for the first time. What's the respectful thing to do?",
      options: [
        { text: "Say \u201cBawo ni\u201d and kneel or prostrate briefly", correct: true, feedback: "That's the traditional, respectful way to greet an elder." },
        { text: "Wave from a distance without speaking", correct: false, feedback: "A greeting is expected \u2014 a wave alone can come across as distant." },
        { text: "Ask for her phone number right away", correct: false, feedback: "Save the small talk for after a proper greeting!" }
      ]
    }
  },
  hausa: {
    intro: "A few pieces of everyday Hausa wisdom and custom \u2014 the kind of thing you'd pick up from elders, not textbooks.",
    proverbs: [
      { native: "A yi, a gama, ta fi takama, gobe a koma.", translation: "To do and finish is better than \u2018don't care, come back tomorrow.\u2019", meaning: "Don't put off until tomorrow what you can do today." },
      { native: "Ruwa ba ta tsami banza.", translation: "Water does not get sour without a cause.", meaning: "Everything happens for a reason." }
    ],
    etiquette: { title: "Greeting elders", text: "A handshake is the customary greeting, and it's considered polite to ask after someone's family and health before getting to the point of a conversation." },
    scenario: {
      prompt: "You meet your friend's mother for the first time. What's the respectful thing to do?",
      options: [
        { text: "Say \u201cSannu\u201d and ask after her health and family", correct: true, feedback: "That's the respectful, customary way to open a greeting." },
        { text: "Wave from a distance without speaking", correct: false, feedback: "A greeting is expected \u2014 a wave alone can come across as distant." },
        { text: "Ask for her phone number right away", correct: false, feedback: "Save the small talk for after a proper greeting!" }
      ]
    }
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
  { id: "xp-300", name: "XP machine", icon: "\u{1F4AA}", test: s => s.xp >= 300, target: { type: "xp", value: 300 } },
  { id: "xp-500", name: "XP legend", icon: "\u{1F680}", test: s => s.xp >= 500, target: { type: "xp", value: 500 } },
  { id: "streak-7", name: "Week streak", icon: "\u{1F31F}", test: s => s.streak >= 7, target: { type: "streak", value: 7 } },
  { id: "streak-30", name: "Month streak", icon: "\u{1F451}", test: s => s.streak >= 30, target: { type: "streak", value: 30 } },
  { id: "practice-5", name: "Practice pro", icon: "\u{1F3AF}", test: s => s.practiceSessionsCompleted >= 5, target: { type: "practice", value: 5 } },
  { id: "culture-keeper", name: "Culture keeper", icon: "\u{1FAD8}", test: s => s.cultureCompletedCount >= 3 }
];

/* ====================== HELPERS ====================== */
function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }
function normalizeStr(s){
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
}
function speak(text, lang){
  if(!("speechSynthesis" in window)) return;
  const sBtn = document.getElementById("speaker-btn");
  try{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.85;
    u.onstart = () => sBtn.classList.add("playing");
    u.onend = () => sBtn.classList.remove("playing");
    u.onerror = () => sBtn.classList.remove("playing");
    window.speechSynthesis.speak(u);
  }catch(e){ /* speech not available — fail silently */ }
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
  const rest = order.slice(mcCount);
  const typeIdx = rest[0] ?? order[0];
  const listenIdx = rest.find(i => i !== typeIdx) ?? mcIdx.find(i => i !== typeIdx) ?? order[0];

  const questions = [];
  mcIdx.forEach(i => questions.push(makeMcQuestion(vocab[i], course)));
  questions.push(makeTypeQuestion(vocab[typeIdx], course));
  questions.push(makeListenQuestion(vocab[listenIdx], course));
  questions.push(makeMatchQuestion(vocab));
  return questions;
}

/* ---- missed-word tracking (for Practice mode) ---- */
function recordMiss(courseKey, vocabItem){
  if(!vocabItem) return;
  const key = `${courseKey}|${vocabItem.native}`;
  let entry = state.missedWords.find(m => m.key === key);
  if(!entry){
    entry = { key, courseKey, native: vocabItem.native, en: vocabItem.en, count: 0 };
    state.missedWords.push(entry);
  }
  entry.count++;
  entry.lastMissed = todayStr();
  if(state.missedWords.length > 100) state.missedWords = state.missedWords.slice(-100);
}
function clearMiss(courseKey, vocabItem){
  if(!vocabItem) return;
  const key = `${courseKey}|${vocabItem.native}`;
  state.missedWords = state.missedWords.filter(m => m.key !== key);
}

function buildPracticeQuestions(courseKey){
  const course = COURSES[courseKey];
  const items = state.missedWords.filter(m => m.courseKey === courseKey);
  return shuffle(items.map(m => {
    const v = { native: m.native, en: m.en };
    const r = Math.random();
    if(r < 0.34) return makeMcQuestion(v, course);
    if(r < 0.67) return makeTypeQuestion(v, course);
    return makeListenQuestion(v, course);
  }));
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
  completed: { igbo: [], yoruba: [], hausa: [], edo: [], efik: [], urhobo: [] },
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
  cultureCompleted: { igbo: false, yoruba: false, hausa: false }
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
  if(state.lastPlayedDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = (state.lastPlayedDate === yesterday) ? state.streak + 1 : 1;
  state.lastPlayedDate = today;
  if(state.streak > (state.longestStreak || 0)) state.longestStreak = state.streak;
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
    xp: state.xp,
    practiceSessionsCompleted: state.practiceSessionsCompleted || 0,
    cultureCompletedCount: Object.values(state.cultureCompleted).filter(Boolean).length
  };
  BADGES.forEach(b => {
    if(!state.earnedBadges.includes(b.id) && b.test(snap)) state.earnedBadges.push(b.id);
  });
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

  const pillCourseKey = pickContinueCourse();
  const pillCourse = COURSES[pillCourseKey];
  const pillGlyph = document.getElementById("lang-pill-glyph");
  pillGlyph.textContent = pillCourse.glyph;
  pillGlyph.style.background = `var(--${pillCourse.color})`;

  renderContinueCard();
  renderWeekCal();
  renderDailyGoal();
  renderPracticeEntry();
  renderCultureEntry();

  const trackSelect = document.getElementById("track-select");
  trackSelect.innerHTML = "";
  Object.keys(COURSES).forEach(key => {
    const course = COURSES[key];
    const done = state.completed[key].length;
    const total = course.lessons.length;
    const isDone = done >= total;
    const card = document.createElement("button");
    card.className = `track-card ${course.color}`;
    card.innerHTML = `
      <div class="track-glyph">${course.glyph}${isDone ? `<span class="track-done-badge">\u2713</span>` : ""}</div>
      <p class="track-name">${course.name}</p>
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
  const byLanguage = Object.keys(COURSES).map(k => ({ key: k, count: state.missedWords.filter(m => m.courseKey === k).length })).filter(x => x.count > 0);
  const summary = byLanguage.map(x => `${COURSES[x.key].name} (${x.count})`).join(", ");
  el.innerHTML = `
    <div class="practice-card">
      <div class="practice-card-head">
        <span class="practice-glyph" style="background:var(--gold);">\u{1F3AF}</span>
        <div>
          <p class="practice-name">Practice</p>
          <p class="practice-sub">${total} word${total === 1 ? "" : "s"} to review: ${summary}</p>
        </div>
      </div>
      <button class="continue-btn" id="practice-entry-btn">Review mistakes \u2192</button>
    </div>
  `;
  document.getElementById("practice-entry-btn").addEventListener("click", () => {
    renderPracticeScreen();
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
  touchStreak();
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
function renderPracticeScreen(){
  const container = document.getElementById("practice-list");
  container.innerHTML = "";
  Object.keys(COURSES).forEach(k => {
    const course = COURSES[k];
    const items = state.missedWords.filter(m => m.courseKey === k);
    const card = document.createElement("div");
    card.className = `practice-card ${course.color}`;
    if(items.length === 0){
      card.innerHTML = `
        <div class="practice-card-head">
          <span class="practice-glyph">${course.glyph}</span>
          <div><p class="practice-name">${course.name}</p><p class="practice-sub">Nothing to review right now.</p></div>
        </div>
      `;
    }else{
      const preview = items.slice(0, 6).map(m => m.native).join(", ") + (items.length > 6 ? "\u2026" : "");
      card.innerHTML = `
        <div class="practice-card-head">
          <span class="practice-glyph">${course.glyph}</span>
          <div><p class="practice-name">${course.name}</p><p class="practice-sub">${items.length} word${items.length === 1 ? "" : "s"}: ${preview}</p></div>
        </div>
        <button class="continue-btn practice-start-btn" data-course="${k}">Start practice \u2192</button>
      `;
    }
    container.appendChild(card);
  });
  container.querySelectorAll(".practice-start-btn").forEach(btn => {
    btn.addEventListener("click", () => startPractice(btn.dataset.course));
  });
}

/* ---- profile screen ---- */
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

  const badgesEl = document.getElementById("profile-badges-grid");
  badgesEl.innerHTML = BADGES.map(b => {
    const earned = state.earnedBadges.includes(b.id);
    return `<div class="badge${earned ? " earned" : ""}"><div class="badge-icon">${b.icon}</div><div class="badge-name">${b.name}</div></div>`;
  }).join("");
}

/* ---- badge progress teaser ---- */
function renderBadgeTeaser(){
  const el = document.getElementById("badge-teaser");
  const currentVals = { lessons: lessonsCompletedCount(), streak: state.streak, xp: state.xp, practice: state.practiceSessionsCompleted || 0 };
  let best = null, bestGap = Infinity;
  BADGES.forEach(b => {
    if(state.earnedBadges.includes(b.id) || !b.target) return;
    const gap = b.target.value - currentVals[b.target.type];
    if(gap > 0 && gap < bestGap){ bestGap = gap; best = b; }
  });
  if(!best){ el.textContent = ""; return; }
  const unitLabel = { lessons: `lesson${bestGap === 1 ? "" : "s"}`, streak: `day${bestGap === 1 ? "" : "s"}`, xp: "XP", practice: `session${bestGap === 1 ? "" : "s"}` }[best.target.type];
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
  let currentNodeEl = null;
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
    if(isNext) currentNodeEl = node;
    if(isDone && doneCount < course.lessons.length){
      const nextBadge = document.createElement("span");
      nextBadge.className = "lesson-node-next-badge";
      nextBadge.textContent = "✓";
      nextBadge.setAttribute("aria-label", "Go to next lesson");
      nextBadge.addEventListener("click", e => {
        e.stopPropagation();
        startLesson(key, doneCount);
      });
      node.appendChild(nextBadge);
    }else if(isDone){
      const doneBadge = document.createElement("span");
      doneBadge.className = "lesson-node-next-badge";
      doneBadge.textContent = "✓";
      node.appendChild(doneBadge);
    }
    const label = document.createElement("div");
    label.className = "lesson-node-label";
    label.textContent = lesson.title;
    node.appendChild(label);
    pathEl.appendChild(node);
  });

  setupJumpToCurrentButton(currentNodeEl);
  showScreen("path");
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
  saveState();
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

function startPractice(courseKey){
  if(state.hearts <= 0){
    alert("You're out of hearts. Come back after a short break, or refresh to reset this demo.");
    return;
  }
  const questions = buildPracticeQuestions(courseKey);
  if(questions.length === 0) return;
  state.lastActiveCourse = courseKey;
  saveState();
  session = {
    courseKey, lessonIndex: null,
    questions,
    qi: 0,
    correctCount: 0,
    mistakes: 0,
    selected: null,
    answered: false,
    matchState: null,
    isPractice: true
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
  document.getElementById("speaking-row").classList.add("hidden");
  document.getElementById("audio-hint").classList.add("hidden");
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
      setupSpeakingRow();
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
    document.getElementById("audio-hint").classList.remove("hidden");
    setTimeout(() => speak(q.speakText, course.speechLang), 350);
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
        if(session.isPractice) q.pairs.forEach(p => clearMiss(session.courseKey, p));
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
      recordMiss(session.courseKey, q.pairs[ms.selNativeIdx]);
      recordMiss(session.courseKey, q.pairs[ms.selEnIdx]);
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
      if(session.isPractice && q._vocab) clearMiss(session.courseKey, q._vocab);
    }else{
      fb.className = "feedback bad";
      const answerText = q.type === "type" ? q.answerDisplay : q.answer;
      fbText.textContent = `Not quite — the answer is "${answerText}". It'll come back around later in the lesson.`;
      session.mistakes++;
      state.hearts = Math.max(0, state.hearts - 1);
      document.getElementById("lesson-hearts").textContent = state.hearts;
      recordMiss(session.courseKey, q._vocab);
      saveState();
      session.questions.push(requeueQuestion(q, COURSES[session.courseKey]));
    }
    document.getElementById("check-btn").textContent = (session.qi === session.questions.length - 1) ? "Finish" : "Continue";
    return;
  }

  // advance
  if(state.hearts <= 0){
    if(session.isPractice){
      renderPracticeScreen();
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

  touchStreak();
  addDailyXp(xpGain);
  state.xp += xpGain;
  if(session.isPractice){
    state.practiceSessionsCompleted = (state.practiceSessionsCompleted || 0) + 1;
  }else if(!state.completed[session.courseKey].includes(session.lessonIndex)){
    state.completed[session.courseKey].push(session.lessonIndex);
  }
  if(session.mistakes === 0) state.hasPerfect = true;
  checkBadges();

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
  const trackSelect = document.getElementById("track-select");
  const pill = document.getElementById("lang-pill-toggle");
  trackSelect.classList.toggle("hidden");
  pill.classList.toggle("open", !trackSelect.classList.contains("hidden"));
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

function showAuthScreen(message){
  showScreen("auth");
  const err = document.getElementById("auth-error");
  if(message){ err.textContent = message; err.classList.remove("hidden"); }
  else{ err.classList.add("hidden"); err.textContent = ""; }
}

function setAuthMode(mode){
  authMode = mode;
  document.getElementById("auth-tab-login").classList.toggle("active", mode === "login");
  document.getElementById("auth-tab-signup").classList.toggle("active", mode === "signup");
  document.getElementById("auth-submit").textContent = mode === "login" ? "Log in" : "Sign up";
  document.getElementById("auth-password").autocomplete = mode === "login" ? "current-password" : "new-password";
}

document.getElementById("auth-tab-login").addEventListener("click", () => setAuthMode("login"));
document.getElementById("landing-cta-btn").addEventListener("click", () => {
  setAuthMode("signup");
  document.getElementById("auth-form-wrap").scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => document.getElementById("auth-username").focus(), 400);
});
document.getElementById("auth-tab-signup").addEventListener("click", () => setAuthMode("signup"));

document.getElementById("auth-form").addEventListener("submit", async e => {
  e.preventDefault();
  const username = document.getElementById("auth-username").value.trim();
  const password = document.getElementById("auth-password").value;
  const errEl = document.getElementById("auth-error");
  errEl.classList.add("hidden");
  if(!username || !password) return;

  const submitBtn = document.getElementById("auth-submit");
  submitBtn.disabled = true;
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
  }
});

/* ====================== INIT ====================== */
(async function init(){
  if(!getToken()){ showAuthScreen(); return; }
  try{
    await fetchProgress();
    renderHome();
    showScreen("home");
  }catch(e){
    if(getToken()) showAuthScreen("Could not load your progress. Check your connection and try again.");
  }
})();
