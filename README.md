# Ìtàn — learn Igbo, Yorùbá &amp; Hausa

A gamified, frontend-only demo (XP, streaks, hearts, badges, a local leaderboard)
with 10 lessons per language, covering greetings, numbers, family, colors, time
words, common phrases, food, body parts, and animals. Four question types per
lesson: multiple choice, typing, listening (via your browser's built-in
text-to-speech), and matching. Progress is saved in the browser via
`localStorage` — there's no backend or database yet.

## Files
- `index.html`, `style.css`, `app.js` — the whole app

## Run locally
Just open `index.html` in a browser. No build step, no install.

## A note on pronunciation
The "Listen" questions and speaker buttons use the browser's built-in Web
Speech API (`speechSynthesis`), requesting an Igbo/Yorùbá/Hausa voice. Most
browsers and operating systems don't ship dedicated voices for these
languages, so playback may fall back to a generic voice or not sound quite
right — it's best-effort, not professional audio.

## Deploy on Render

**Static Site (recommended, simplest, free)**
1. On Render: **New → Static Site** → connect this repo.
2. Build command: *(leave blank)*
3. Publish directory: `.`
4. Deploy. Render gives you a `.onrender.com` URL.

## Next steps to grow this into a full app
- Add a backend (accounts, real progress storage, e.g. Postgres on Render) so streaks/XP survive across devices
- Record real audio pronunciation clips instead of relying on browser TTS
- Real-time leaderboard instead of the local placeholder one
- Spaced-repetition review of previously completed lessons
