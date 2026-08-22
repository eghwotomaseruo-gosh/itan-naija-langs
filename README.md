# Lingua Naija — learn Igbo, Yorùbá & Hausa

A gamified app for learning Igbo, Yorùbá, and Hausa — 10 lessons per language,
four question types (multiple choice, typing, listening, matching), missed
questions retry until you get them right, XP/streaks/badges, and now **real
accounts** so your progress is saved on a server instead of just your browser.

## What changed in this version (Phase 1)
- **Accounts**: sign up / log in with a username and password
- **Server-saved progress**: XP, streak, hearts, completed lessons, and badges
  now live in a database, not `localStorage` — so they survive across devices
  and browsers
- **Real leaderboard**: ranks actual signed-up users by XP, not placeholder names
- Lesson content (vocab, question generation) is still bundled in the frontend
  — no separate content-management step yet; that's a later phase

## Architecture
- `index.html`, `style.css`, `app.js` — the frontend
- `server.js` — an Express server that serves the frontend **and** exposes a
  small API (`/api/signup`, `/api/login`, `/api/progress`, `/api/leaderboard`)
- `package.json` — dependencies: `express`, `pg`, `bcryptjs`, `jsonwebtoken`

This app now needs to run as a **Node process**, not a static site, because it
talks to a database on your behalf.

## Environment variables (required)
Set these wherever you host it:

- `DATABASE_URL` — a PostgreSQL connection string
- `JWT_SECRET` — any long random string, used to sign login sessions (don't
  reuse a password; a random 32+ character string is fine)

The server will start without them, but every signup/login/progress request
will fail with a clear error until both are set.

## Getting a free PostgreSQL database
**Render's free Postgres expires after 30 days and gets deleted** — not a
great fit for real user accounts. Instead, use a provider with a genuinely
permanent free tier:

- **[Neon](https://neon.tech)** — permanent free tier, simple connection
  string, no credit card required. Recommended.
- **Supabase** — also has a permanent free tier and includes a full backend
  if you want to grow into it later.

Either way: create a project, copy the connection string it gives you, and
set it as `DATABASE_URL` in your hosting platform's environment variables.
The server automatically creates the tables it needs on first startup — no
manual SQL required.

## Run locally
```
npm install
DATABASE_URL=your_connection_string JWT_SECRET=some_long_random_string npm start
```
Then visit `http://localhost:3000`.

## Deploy on Render
Because this now needs a running server, it must be a **Web Service**, not a
Static Site (Static Sites can't run backend code, and an existing Static Site
can't be converted in place — this means a **new URL** if you previously
deployed the static version).

1. Push this folder to your GitHub repo (same upload flow as before).
2. On Render: **New → Web Service** → connect your repo.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Under **Environment**, add `DATABASE_URL` and `JWT_SECRET`.
6. Deploy. Render gives you a new `.onrender.com` URL.

## A note on pronunciation
"Listen" questions and speaker buttons use the browser's built-in Web Speech
API. Most browsers don't ship dedicated Igbo/Yorùbá/Hausa voices, so playback
is best-effort, not professional audio.

Wherever the speaker button appears, there's also a "Record yourself" mic
button — tap it, say the word out loud, tap again to stop, then play it back
next to the native audio to self-check your pronunciation. There's no
automatic scoring; this is a self-practice tool, not a grader. Recordings
aren't saved anywhere — they live only in the browser tab for that question.

## What's next (later phases, not built yet)
- Move lesson content into the database (a real content-management system)
- More languages
- A Nigerian-cultural-content track (proverbs, etiquette, real conversations)
- Achievements tied to more milestones, daily goal picker
- Audio recordings instead of browser text-to-speech
- Speaking exercises with pronunciation feedback
