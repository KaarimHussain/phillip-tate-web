# 🤖 AI AGENT AUDIT & LAUNCH CHECKLIST (Next.js App Router)

> **Agent Instructions:** Scan the workspace against each item below. 
> - Mark `[x]` if verified in the codebase, `[ ]` if missing, or `[!]` if broken.
> - Use the **OpenSEO MCP server** tools (`/keyword-research`, `/seo-audit`, `/competitor-analysis`) whenever executing Section 3.
> - Report all missing items with exact file paths that need to be created or fixed.

## 1. Project Foundation & Core Packages
- [ ] **Next.js App Router:** Confirmed `src/app` or `app/` directory structure with TypeScript strict mode (`"strict": true` in `tsconfig.json`).
- [ ] **Env Validation:** `@t3-oss/env-nextjs` and `zod` installed with `src/env.ts` validating all server/client environment variables.
- [ ] **UI Primitives:** `shadcn/ui`, `lucide-react`, `clsx`, and `tailwind-merge` configured.
- [ ] **Forms & Server Actions:** `react-hook-form` + `zod` installed for input validation.
- [ ] **Analytics & Schema:** `@next/third-parties` and `schema-dts` installed in `package.json`.

## 2. Performance & Architecture Audit
- [ ] **RSC Boundary Check:** Scan all `.tsx` files. Ensure `'use client'` is only on interactive leaf components (forms, modals, sliders) and never on root page layouts.
- [ ] **Image Optimization:** All `<img>` tags replaced with `next/image`. Verify above-the-fold hero images include the `priority` prop and explicit dimensions/aspect ratios.
- [ ] **Font Optimization:** Fonts loaded via `next/font/google` or `next/font/local` in root `layout.tsx` with CSS variables applied.
- [ ] **Bundle Size Check:** `@next/bundle-analyzer` configured in `next.config.mjs` (or `.ts`).

## 3. OpenSEO & Technical SEO Verification
- [ ] **OpenSEO MCP Connection:** Confirm OpenSEO MCP server is active in the agent environment.
- [ ] **Keyword & Intent Mapping (via OpenSEO):** Run `openseo.keyword_research` using client brief topics. Verify every core route targets a primary keyword in its `<h1>` and metadata.
- [ ] **Root Metadata:** Root `layout.tsx` exports `metadata` with a valid `metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL)`, title template (`%s | Brand`), and default OpenGraph/Twitter cards.
- [ ] **Dynamic Route Metadata:** Every dynamic route (`[slug]/page.tsx`) exports `generateMetadata` fetching real page titles and descriptions.
- [ ] **Crawler Files:** `app/sitemap.ts` and `app/robots.ts` exist and dynamically resolve all public routes.
- [ ] **JSON-LD Structured Data:** `schema-dts` implemented on key pages (Organization, WebSite, Service, or FAQPage schema).
- [ ] **OpenSEO Site & AI Visibility Audit:** Run `/seo-audit` via OpenSEO MCP on staging/live URL to verify crawlability, internal linking, and LLM/AI search visibility.

## 4. Resilience & Pre-Flight Checks
- [ ] **Boundary Files:** `app/not-found.tsx`, `app/error.tsx`, `app/global-error.tsx`, and `app/loading.tsx` exist.
- [ ] **Zero-Error Build:** Run `npm run build` (or `pnpm build`) and confirm zero TypeScript, ESLint, or static generation errors.
- [ ] **Post-Launch GSC Sync:** Connect Google Search Console to OpenSEO and submit `/sitemap.xml`.