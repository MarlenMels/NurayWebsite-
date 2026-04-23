# Столкновение в Южно-Китайском море

Editorial single-page site on the South China Sea conflict through the lenses of Huntington and Brzezinski.

## Structure

```
site/
├── index.html       # Full single-page site
├── styles.css       # Editorial dossier styling
├── script.js        # Scroll reveals + active nav
├── vercel.json      # Vercel config (clean URLs, cache headers)
└── images/          # All portraits, book covers, map
```

## Deploy to Vercel — three options

### Option A — Drag & drop (easiest, zero setup)
1. Go to https://vercel.com/new
2. Sign in (GitHub / GitLab / email)
3. Click **"deploy"** → pick **"Other"** / **"Upload"**
4. Drag the whole unzipped `site/` folder onto the page
5. Done — Vercel gives you a `*.vercel.app` URL in ~20 seconds

### Option B — Vercel CLI (if you have Node installed)
```bash
npm i -g vercel
cd site
vercel          # follow prompts, choose project name, confirm settings
vercel --prod   # push to production
```

### Option C — GitHub → Vercel (best for future edits)
1. Create a new GitHub repo, push the `site/` folder contents to it
2. On vercel.com → **Add New → Project** → import that repo
3. Framework preset: **Other**. Root directory: `./`. Build command: leave empty. Output directory: leave empty.
4. Click **Deploy**. Every future `git push` auto-redeploys.

## Local preview

Just open `index.html` in a browser — it works fully offline (Google Fonts require internet for the typeface to load, but falls back gracefully).

Or run a quick local server:
```bash
cd site
python3 -m http.server 8000
# visit http://localhost:8000
```
