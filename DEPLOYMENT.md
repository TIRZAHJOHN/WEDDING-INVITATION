# Deployment Guide

## Recommended: Vercel

1. Create a GitHub repository and push this project.
2. Open `https://vercel.com/new`.
3. Import the repository.
4. Confirm:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Optional RSVP forwarding:
   - Open Project Settings > Environment Variables.
   - Add `RSVP_WEBHOOK_URL`.
   - Redeploy.
6. Click Deploy.
7. Add a custom domain in Project Settings > Domains.

## Alternative: Netlify

1. Create a GitHub repository and push this project.
2. Open `https://app.netlify.com/start`.
3. Import the repository.
4. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Optional RSVP forwarding:
   - Open Site Configuration > Environment Variables.
   - Add `RSVP_WEBHOOK_URL`.
   - Redeploy.
6. Click Deploy Site.
7. Add a custom domain in Domain Management.

## Updating After Deployment

1. Edit the project locally.
2. Run:

```bash
npm run build
```

3. Commit and push:

```bash
git add .
git commit -m "Update wedding invitation"
git push
```

4. Vercel or Netlify automatically redeploys from the pushed commit.

## Common Edits

- Couple/family/content: `src/data/weddingData.js`
- Image replacement: `public/couple-placeholder.svg`
- Global styles: `src/styles/index.css`
- Venue map links: `src/data/weddingData.js`
- RSVP forwarding: `RSVP_WEBHOOK_URL` environment variable
