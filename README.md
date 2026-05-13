# Sharon Lizie weds Sam Jaspher
# Sharon Lizie weds Sam Jaspher

An immersive React + Vite digital wedding invitation for the Christian wedding of Sharon Lizie and Sam Jaspher on 24 June 2026 in Tuticorin.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- GSAP ScrollTrigger
- Three.js with React Three Fiber

## Folder Structure

```text
.
-- public/
|   |-- couple-placeholder.svg
|   |-- favicon.svg
|   |-- manifest.webmanifest
|   |-- robots.txt
|   `-- sitemap.xml
|-- public/
|   |-- couple-placeholder.svg
|   |-- favicon.svg
|   |-- manifest.webmanifest
|   |-- robots.txt
|   `-- sitemap.xml
|-- src/
|   |-- assets/
|   |   |-- audio/
|   |   `-- images/
|   |-- components/
|   |   |-- AmbientScene.jsx
|   |   |-- ChurchGlowScene.jsx
|   |   |-- CinematicIntro.jsx
|   |   |-- Countdown.jsx
|   |   |-- CoupleDetails.jsx
|   |   |-- FamilyCarousel.jsx
|   |   |-- FloatingDecor.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Navigation.jsx
|   |   |-- PageProgress.jsx
|   |   |-- SparkleCursor.jsx
|   |   |-- StorySection.jsx
|   |   `-- VenueSection.jsx
|   |-- data/
|   |   `-- weddingData.js
|   |-- hooks/
|   |   |-- useCountdown.js
|   |   `-- useGsapScroll.js
|   |-- styles/
|   |   `-- index.css
|   |-- App.jsx
|   `-- main.jsx
|-- DEPLOYMENT.md
|-- index.html
|-- netlify.toml
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vercel.json
`-- vite.config.js
```

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run the browser visual verification suite:

```bash
npm run verify:visual
```

## Update Wedding Content

Most names, family details, scripture text, dates, venues, maps, and share text live in:

```text
src/data/weddingData.js
```

## Replace The Couple Picture

- The couple portrait image is `public/couple-placeholder.svg`. Replace this file to change the portrait used on the site.

<!-- RSVP backend removed from this project. -->

## Deploy On Vercel

Official Vite-on-Vercel docs: `https://vercel.com/docs/frameworks/frontend/vite`

1. Push this folder to GitHub.
2. Go to `https://vercel.com/new`.
3. Import the GitHub repository.
4. Use these settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add `RSVP_WEBHOOK_URL` in Project Settings > Environment Variables if you want RSVP forwarding.
6. Click Deploy.
7. Test the intro, countdown, RSVP form, gallery lightbox, and Google Maps buttons on the live URL.

CLI deploy:

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

## Deploy On Netlify

Official Vite-on-Netlify docs: `https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/`

1. Push this folder to GitHub.
2. Go to `https://app.netlify.com/start`.
3. Import the GitHub repository.
4. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add `RSVP_WEBHOOK_URL` in Site Configuration > Environment Variables if you want RSVP forwarding.
6. Click Deploy Site.
7. Test the intro, countdown, RSVP form, gallery lightbox, and Google Maps buttons on the live URL.

CLI deploy:

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy
netlify deploy --prod
```

## Later Maintenance

- Update content in `src/data/weddingData.js`.
- Update visual polish in `src/styles/index.css` and `tailwind.config.js`.
- Update cinematic sections inside `src/components/`.
- Replace the couple image in `public/`.
- Run `npm run build` before deploying changes.
- Commit and push to GitHub; Vercel or Netlify will redeploy automatically.

## Performance Notes

- Three.js visuals are lightweight particle and geometry scenes.
- The music button uses Web Audio, avoiding a large audio download.
- Motion respects `prefers-reduced-motion`.
- Gallery media is lazy loaded.
- Vite splits animation and Three.js into separate production chunks.
<!-- Resolved merge of README: kept full project README -->
