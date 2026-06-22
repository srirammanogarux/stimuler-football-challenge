# World Football Conversation Challenge — prototype

An interactive mobile prototype for Stimuler's football-themed speaking challenge: talk football with **Sarah** (the AI coach), one daily set of topics, earn a collectible badge, and share it. Built as standalone HTML (no framework, no build step).

**Live:** https://fifa-world-cup-challenge.vercel.app

This is the **IP-safe** build — real player photos, the FIFA/World Cup marks, and the EA logo video have been replaced with original Stimuler artwork, flags, and copy. (One item is still pre-IP and tracked for the next version — see below.)

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
It's also an installable PWA (`manifest.json` + `sw.js`).

## Structure
- **`index.html`** — the app shell + the whole flow: Chat tab, Profile/banner, onboarding sheet, challenge dashboard (day cards), share badge, completion.
- **`day1-conversation.html`** — the conversation screen (embedded as an iframe); tap-the-mic to advance each turn.
- **`players-data.js`** — team/player data for the picker (flags only, no likenesses).
- **`assets/`** — images, gifs, video (Sarah, badge, trophy, banner, etc.).
- **`icons/`** — PWA app icons.
- `screen-1-banner-sheet.html`, `screen-2-dashboard.html`, `share-card.html` — earlier standalone screens kept for reference.

## Dev chips
On the live/desktop page, a chip bar beside the mockup jumps to any **day-card state** (fresh / in-progress / 4-of-4 + timer / closed / missed / Day 2) and any **screen** (chat, onboarding, conversation, share badge, celebration). Hidden in the installed PWA.

## Notable mechanics
- **Day cards**: 4 topics/day, finish them one at a time over a (demo) window; 1 shareable badge on the first topic of the day; day closes as Done (≥1) or Missed (0) at the timer; next day generates.
- **Badge gyroscope tilt** on iPhone (device-orientation), mouse-tilt on desktop.
- **Chat tab** cycles the day's fresh topics every 15s; tap → dashboard.

## Next version (not in this build)
- The collectible **share badge** still uses the Messi gif + "DIE-HARD MESSI FAN" + Portugal-kit Sarah stickers — to be replaced with the Sarah-concede illustrated badge set.

🤖 Prototype built with Claude Code.
