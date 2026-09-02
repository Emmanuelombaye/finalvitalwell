# VitalWellRx

Next.js telehealth storefront for **Semaglutide+** and **Tirzepatide+** weight-management programs.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects **Next.js** — no custom build settings needed.
   - **Build command:** `npm run build`
   - **Output directory:** (default — leave empty)
   - **Install command:** `npm install`
4. Add environment variables only if you extend the app (see `env.example`). None are required for the current static demo.
5. Deploy.

### CLI deploy (optional)

```bash
npx vercel
npx vercel --prod
```

Requires the [Vercel CLI](https://vercel.com/docs/cli) and a linked project.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
