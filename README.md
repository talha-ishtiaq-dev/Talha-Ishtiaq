# Talha Ishtiaq — Portfolio

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Deploy to Vercel (3 Steps)

### Option A — GitHub + Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/talha-portfolio.git
git push -u origin main
```

2. **Import on Vercel**
   - Go to → https://vercel.com/new
   - Click **"Import Git Repository"**
   - Select your repo
   - Vercel auto-detects Next.js — just click **Deploy** ✅

3. **Done!** Your site is live at `https://talha-portfolio.vercel.app`

---

### Option B — Vercel CLI (Fastest)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Follow the prompts. Done in ~60 seconds.

---

## ⚙️ Build Settings (already configured in vercel.json)

| Setting         | Value           |
|----------------|-----------------|
| Framework       | Next.js         |
| Build Command   | `npm run build` |
| Output Dir      | `.next`         |
| Install Command | `npm install`   |

---

## 📁 Project Structure

```
talha-portfolio/
├── app/
│   ├── globals.css       # Design tokens, utilities
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── not-found.tsx     # Custom 404 page
├── components/
│   ├── ThemeProvider.tsx # Dark/light mode
│   ├── Navbar.tsx        # Sticky responsive navbar
│   ├── Hero.tsx          # Typing animation + CTA
│   ├── About.tsx         # Summary + highlight cards
│   ├── Skills.tsx        # Animated progress bars
│   ├── Experience.tsx    # Timeline layout
│   ├── Projects.tsx      # Project cards with links
│   ├── Services.tsx      # Service offering cards
│   └── Contact.tsx       # Contact form + social links
├── public/
│   ├── cv.pdf            # ⚠️ Replace with your real CV!
│   └── robots.txt        # SEO crawl rules
├── vercel.json           # Vercel deployment config
└── next.config.ts        # Production optimizations
```

---

## ✏️ Customization Checklist

Before going live, update these:

- [ ] `public/cv.pdf` — Replace with your real CV PDF
- [ ] `components/Contact.tsx` — Update email, WhatsApp number, LinkedIn URL
- [ ] `components/Projects.tsx` — Add real project demo & GitHub links
- [ ] `app/layout.tsx` — Update `metadataBase` URL to your Vercel domain
- [ ] `app/sitemap.ts` — Update URL to your Vercel domain
- [ ] `vercel.json` — Optionally change `regions` to `bom1` (Mumbai) for South Asia

---

## 🌍 Custom Domain (Optional)

1. In Vercel dashboard → **Settings → Domains**
2. Add your domain e.g. `talha.dev`
3. Point your DNS: `A` record → Vercel IP, or use Vercel nameservers
4. SSL is automatic ✅

---

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next` 15 | Framework |
| `framer-motion` | Animations |
| `react-type-animation` | Typing effect in Hero |
| `lucide-react` | Icons |
| `@fontsource/syne` | Self-hosted Syne font |
| `@fontsource/dm-sans` | Self-hosted DM Sans font |

