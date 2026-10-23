# KanchanFlow — React + Vite + JavaScript + CSS

A responsive three-page marketing website built from the KanchanFlow brief in the Meru Technosoft frontend assignment.

## Pages
- `/` — Home: product dashboard mockup, problem/solution, six feature cards, industries, pricing teaser, FAQ and CTA.
- `/features` — Feature details: quote-to-order, BOM, sales pipeline, customer follow-ups, reporting and mobile preview, plus comparison table.
- `/pricing` — Three plan cards, monthly/yearly toggle, comparison table, FAQ and validated walkthrough request form with demo success state.

## Stack
- React with JavaScript (JSX)
- Vite
- Plain CSS and CSS variables (no Tailwind, no Next.js)
- Lucide React icons

## Run locally
1. Install Node.js 20 or later.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed by Vite (usually `http://localhost:5173`).

Create a production build with `npm run build`; preview it with `npm run preview`. Direct navigation to `/features` and `/pricing` should be configured to fall back to `index.html` on your deployment host.

## Design decisions
- Graphite, warm steel-grey and molten-gold palette, inspired by the KanchanFlow brief.
- System font stack and CSS-drawn dashboard/mockups for a crisp responsive layout.
- Accessible focus states, mobile menu, FAQ accordion, monthly/yearly pricing toggle and front-end validated form.
- Pricing and feature details are illustrative assignment content, not verified commercial offers. The walkthrough form is a frontend demo and does not send data to a server.

## Before submission
- Run `npm install` and `npm run build`.
- Deploy to Vercel or Netlify with SPA route fallback configured for `/features` and `/pricing`.
- Run Lighthouse on mobile and save a screenshot.
- Make at least 8 meaningful Git commits with clear messages.
- Include repository and live deployment links in your submission.
