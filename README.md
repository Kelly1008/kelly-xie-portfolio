# Kelly Xie — AI portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `data/projects.ts` — all project content (problem, solution, highlights, impact, tech stack). Edit this file to update copy.
- `components/Hero.tsx`, `TrustStrip.tsx`, `Nav.tsx`, `FooterCta.tsx` — homepage sections
- `components/ProjectRow.tsx` — reusable project card used on the homepage (alternates left/right)
- `components/ProjectVisual.tsx` — the gradient-framed mockup panel per project
- `app/page.tsx` — homepage
- `app/projects/[slug]/page.tsx` — case study detail page, one per project, generated automatically from `data/projects.ts`
- `app/about/page.tsx`, `app/how-i-work/page.tsx` — placeholder pages, edit freely

## To deploy

Push this to a GitHub repo, then import it at https://vercel.com/new — it'll deploy automatically with zero config since it's already a standard Next.js app.

## To edit content

Everything project-related lives in `data/projects.ts`. Change any field there and both the homepage cards and the detail pages update automatically — no need to touch components.

## To add your resume download

Drop a `resume.pdf` file into the `public/` folder. The "Download resume" button on the homepage already links to `/resume.pdf`.
