# Ìtàn — learn Igbo, Yorùbá & Hausa

A gamified, frontend-only demo (XP, streaks, hearts, badges, a local leaderboard)
with a few sample lessons in each language. Progress is saved in the browser
via `localStorage` — there's no backend or database yet.

## Files
- `index.html`, `style.css`, `app.js` — the whole app

## Run locally
Just open `index.html` in a browser. No build step, no install.

## Deploy on Render

**Static Site (recommended, simplest, free)**
1. On Render: **New → Static Site** → connect this repo.
2. Build command: *(leave blank)*
3. Publish directory: `.`
4. Deploy. Render gives you a `.onrender.com` URL.

## Next steps to grow this into a full app
- Add a backend (accounts, real progress storage, e.g. Postgres on Render) so streaks/XP survive across devices
- Add more lessons per language and more question types (listening, matching, typing)
- Add audio pronunciation clips
- Real-time leaderboard instead of the local placeholder one
