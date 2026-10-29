# 🤖 AI AGENT AUDIT & LAUNCH CHECKLIST (Next.js App Router)

> **Agent Instructions:** Scan the workspace against each item below. 
> - Mark `[x]` if verified in the codebase, `[ ]` if missing, or `[!]` if broken.
> - Use the **OpenSEO MCP server** tools (`/keyword-research`, `/seo-audit`, `/competitor-analysis`) whenever executing Section 3.
> - Report all missing items with exact file paths that need to be created or fixed.

_Last audited: 2026-10-30._

## 1. Project Foundation & Core Packages
- [x] **Next.js App Router:** Confirmed `src/app` or `app/` directory structure with TypeScript strict mode (`"strict": true` in `tsconfig.json`).
  - `app/` directory; `tsconfig.json` has `"strict": true`.
- [x] **Env Validation:** `@t3-oss/env-nextjs` and `zod` installed with `src/env.ts` validating all server/client environment variables.
  - Lives at `env.ts` (project root; this project has no `src/`). Validates `NEXT_PUBLIC_SITE_URL` and optional `NEXT_PUBLIC_GA_ID`. Template in `.env.example`.
- [x] **UI Primitives:** `shadcn/ui`, `lucide-react`, `clsx`, and `tailwind-merge` configured.
  - `lib/utils.ts` `cn()` now uses `clsx` + `tailwind-merge` (replaced the `cn` package).
- [x] **Forms & Server Actions:** `react-hook-form` + `zod` installed for input validation.
  - `components/contact-form.tsx` validates with a zod schema via `@hookform/resolvers`. No server action yet: the form opens the visitor's email app (no email service is set up).
- [x] **Analytics & Schema:** `@next/third-parties` and `schema-dts` installed in `package.json`.
  - Google Analytics loads in `app/layout.tsx` only when `NEXT_PUBLIC_GA_ID` is set.

## 2. Performance & Architecture Audit
- [x] **RSC Boundary Check:** Scan all `.tsx` files. Ensure `'use client'` is only on interactive leaf components (forms, modals, sliders) and never on root page layouts.
  - Only `components/reveal.tsx`, `components/contact-form.tsx`, `app/error.tsx` and `app/global-error.tsx` (the last two must be client components).
- [x] **Image Optimization:** All `<img>` tags replaced with `next/image`. Verify above-the-fold hero images include the `priority` prop and explicit dimensions/aspect ratios.
  - No raw `<img>`. Next 16 deprecated `priority` in favor of `preload`, so hero and book-page covers use `preload`. Covers use a fixed `aspect-[2/3]` box; the author photo has explicit width/height.
- [x] **Font Optimization:** Fonts loaded via `next/font/google` or `next/font/local` in root `layout.tsx` with CSS variables applied.
  - Inter (`--font-sans`) and Lora (`--font-serif`).
- [x] **Bundle Size Check:** `@next/bundle-analyzer` configured in `next.config.mjs` (or `.ts`).
  - Configured in `next.config.ts` (`ANALYZE=true`, Webpack builds). Builds use Turbopack, so use `npm run analyze` (`next analyze`) for the real report.

## 3. OpenSEO & Technical SEO Verification
- [x] **OpenSEO MCP Connection:** Confirm OpenSEO MCP server is active in the agent environment.
  - Connected (hosted mode, 229 credits left). The only project is for a different domain (`klyronai.vercel.app`).
- [ ] **Keyword & Intent Mapping (via OpenSEO):** Run `openseo.keyword_research` using client brief topics. Verify every core route targets a primary keyword in its `<h1>` and metadata.
  - **Not run.** Needs an OpenSEO project for Philip's domain (not decided yet). Keyword research costs ~54 credits per seed. Headings and metadata already target topics from the brief (Philip Tate author, Asheville Civil War novel, Blue Ridge mountain tales, China naval book).
- [x] **Root Metadata:** Root `layout.tsx` exports `metadata` with a valid `metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL)`, title template (`%s | Brand`), and default OpenGraph/Twitter cards.
  - `metadataBase` reads the validated `env.NEXT_PUBLIC_SITE_URL`. **Set it to the real domain before launch** (it defaults to localhost).
- [x] **Dynamic Route Metadata:** Every dynamic route (`[slug]/page.tsx`) exports `generateMetadata` fetching real page titles and descriptions.
  - `app/books/[slug]/page.tsx` (with book cover as OG image, `og:type=book`) and `app/blog/[slug]/page.tsx`, both with canonical URLs.
- [x] **Crawler Files:** `app/sitemap.ts` and `app/robots.ts` exist and dynamically resolve all public routes.
- [x] **JSON-LD Structured Data:** `schema-dts` implemented on key pages (Organization, WebSite, Service, or FAQPage schema).
  - `Person` + `WebSite` site-wide (`app/layout.tsx`), `Book` on each book page.
- [ ] **OpenSEO Site & AI Visibility Audit:** Run `/seo-audit` via OpenSEO MCP on staging/live URL to verify crawlability, internal linking, and LLM/AI search visibility.
  - **Blocked:** the site isn't deployed yet, so there's no URL to audit.

## 4. Resilience & Pre-Flight Checks
- [x] **Boundary Files:** `app/not-found.tsx`, `app/error.tsx`, `app/global-error.tsx`, and `app/loading.tsx` exist.
- [x] **Zero-Error Build:** Run `npm run build` (or `pnpm build`) and confirm zero TypeScript, ESLint, or static generation errors.
  - `npm run build` and `npm run lint` pass; 19/19 pages generated.
- [ ] **Post-Launch GSC Sync:** Connect Google Search Console to OpenSEO and submit `/sitemap.xml`.
  - **Blocked until launch:** needs the live domain and Google Search Console access.
