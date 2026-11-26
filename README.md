# Kamesh Chaudhary — Portfolio

A React portfolio with an AI-powered chat assistant built on the Claude API.

---

## 🚀 Quick Start (Run Locally)

```bash
npm install
npm start
```

Open http://localhost:3000

---

## 🌐 Deploy to Vercel (Recommended — Free)

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build`
2. Go to https://vercel.com
3. Sign up / log in
4. Drag the `build/` folder onto the Vercel dashboard
5. Done! You get a live URL instantly.

### Option 2: Via GitHub (Best for updates)
1. Push this project to a GitHub repo
2. Go to https://vercel.com → "Add New Project"
3. Import your GitHub repo
4. Vercel auto-detects React — click **Deploy**
5. Every `git push` auto-deploys 🎉

---

## 🌐 Deploy to Netlify (Also Free)

1. Run `npm run build`
2. Go to https://netlify.com
3. Drag the `build/` folder onto the Netlify dashboard
4. Live in seconds!

---

## 🌐 Deploy to GitHub Pages

1. In `package.json`, add:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```
2. Run:
   ```bash
   npm install gh-pages --save-dev
   npm run deploy
   ```

---

## 🤖 AI Chat Setup

The Chat section uses the Anthropic Claude API. To enable it:

1. Get a free API key at https://console.anthropic.com
2. When you open the portfolio, click **⚙ API Key** in the Chat section
3. Enter your key — it's saved in your browser's localStorage

> **Note:** For production, set up a backend proxy to keep the API key secret.
> Never expose `REACT_APP_ANTHROPIC_API_KEY` in a public repo.

---

## 📁 Project Structure

```
src/
  components/
    Navbar.js       — Responsive navigation
    About.js        — Hero section with stats
    Skills.js       — Tech stack + proficiency bars
    Experience.js   — Expandable timeline cards
    Projects.js     — Hover-animated project cards
    Education.js    — Degree + strengths
    CV.js           — One-page CV view, download & print
    Chat.js         — Claude AI chat assistant
    Footer.js       — Links + credits
  App.js            — Root layout + section routing
  data.js           — All portfolio content (edit this!)
  index.js          — React entry point
public/
  index.html        — HTML template
```

---

## 📄 Updating the CV

The CV tab and both PDFs are generated from `src/data.js` through `src/cvTemplate.js`:

- `public/Kamesh_Chaudhary_CV.pdf`: Software Engineer | Data Management
- `public/Kamesh_Chaudhary_IT_Support_CV.pdf`: IT Support & Network Technician (wording in `src/cvItSupport.js`)

After editing your details, rebuild both two-page A4 PDFs (needs Chrome or Edge installed):

```bash
npm run cv
```

---

## ✏️ Customization

All portfolio content lives in `src/data.js`. Edit your:
- Name, email, GitHub, LinkedIn
- Skills, experience, projects
- AI system prompt (how the chatbot represents you)

---

Built with React · Dubai, UAE
