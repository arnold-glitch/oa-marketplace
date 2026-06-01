# OA Marketplace — Prototype

A static prototype of a three-surface marketplace for Outsource Accelerator.

## How to open

Double-click **`sales.html`** (public-facing landing page with pricing) or **`index.html`** (the app/dashboard view) in this folder. They'll open in your default browser.
No installation, no build step. Internet connection is needed only for fonts and the avatar images.

## What's inside

| File | What it is |
|---|---|
| `sales.html` | **Public sales page** (for vendors). Long-scroll marketing site combining patterns of paved.com (ad marketplace) and leadrpro.com (meeting marketplace), positioned for the outsourcing industry. Three-tier pricing (Free / Standard $29 / Premium $599) with monthly↔annual toggle. |
| `panel.html` | **Public buyer-panel page** (for BPO decision-makers). 4-section landing pitching $50/meeting (Amazon gift voucher) for accepting 30-45 min discovery calls. Emphasizes: no commitments, no confidential info, voluntary, you approve every pitch. Includes mock dashboard preview, 5-question FAQ. All "Join the panel" CTAs route to `register.html`. |
| `register.html` | **Panel registration form**. Two-column layout: form on left (name, role, company, LinkedIn URL with "smart-fill" framing, business + personal email, mobile, working hours, timezone, consent). Dashboard preview always visible on right. On submit, the form card swaps to a success card ("we sent a confirmation email · here's what happens next") and the dashboard personalizes with the submitted name / role / company. Success card includes a "Go to my dashboard →" button → `lead-dashboard.html`. |
| `lead-dashboard.html` | **Logged-in panel-member dashboard**. Sticky header bar with welcome + monthly earnings + 4 stat tiles (Pending pitches, Scheduled calls, YTD earned, Relevance score). 4 tabs: **🏠 How It Works** (default home — 4-step explainer + voluntary reminder + refer CTA), **📬 Upcoming** (3 pending pitch cards with Accept/Skip + 2 scheduled calls with date tiles), **📊 History** (YTD summary + 10-row table of past meetings & referral bonuses), **🎁 Refer a Colleague** (intro + qualifying-criteria card + send-referral form + your-referrals tracking table). Referral pays $20 per Manager-level+ in BPO/outsourcing with verifiable LinkedIn. |
| `index.html` | Part 1 — ABM Hub (landing, accounts, ICP builder, links to the other surfaces). Replicates the look of the existing Vercel prototype. |
| `marketplace.html` | Part 2 — OA Media. 7 products: guest posts ($599), display ads ($1,299/mo), newsletter ($799/wk), podcast ($2,499/ep), whitepaper ($1,499), top-list ($1,299–$4,499), and **Premium Bundle** (3 tiers: $1,499 quarterly / $6,999 annual / $12,999 annual premium — save up to 75% vs à la carte). Every product has a **live preview** that re-renders as you type. |
| `meetings.html` | Part 3 — OA Connect. 100 mock BPO directors generated from a seeded RNG. Filter, multi-select, book at $300/meeting with refund-on-decline policy. |
| `shared.css`, `shared.js` | Shared design system, mock data, top nav, and persistent cart (`localStorage`). |

**Recommended entry point for a stakeholder demo:** open `sales.html` first (the public marketing surface), then click "Live Demo" in the top-right to drop into `index.html` (the app surface).

## Pricing tiers (sales.html)

| Tier | Price | Browse | Enrichment | Ad checkout | Meeting checkout |
|---|---|---|---|---|---|
| **Free** | $0 | ✓ Everything | — | — | — |
| **Standard** | $29/mo (or $24/mo annual — "10+2 free") | ✓ | 50 credits/mo | ✓ Guest posts, display, newsletter | — Locked |
| **Premium** | $599/mo (quarterly $1,797 or annual $5,990) | ✓ | 200 credits/mo | ✓ All | ✓ 1 Meeting Credit/mo · 1 Guest Post/mo ($599 value) · **roll over** · refund on decline |

Premium has **no monthly option** — quarterly or annual only. The pricing section on `sales.html` has a monthly↔annual toggle that recalculates the displayed prices.

## The flow to demo

1. **Open `sales.html`** — see the public marketing surface. Scroll through the three surfaces, the preview-first differentiator, social proof, and the pricing table. Toggle monthly↔annual.
2. **Click "Live Demo" or "Start free"** to drop into `index.html` (the app surface).
2. **Click "OA Media"** in the top nav → "Build & Preview" on the Guest Posting card.
   - Edit the title or draft on the left → the preview on the right re-renders in real time.
   - Watch the editorial checklist update (word count, internal/external links, disclaimer).
   - Click "Add to Cart — $499" → see the cart drawer.
3. **Switch to Display Ads** → change the headline / blurb / placement dropdown → see the ad rendered inside a mock OA article.
4. **Switch to Newsletter Insertion** → see the sponsored block rendered inside the OA Weekly newsletter mockup.
5. **Click "OA Connect"** in the top nav → browse the 100 directors.
   - Use filters (seniority, region, role focus).
   - Click cards to multi-select. A floating action bar shows total cost.
   - Click "Review & Book" → see the prospect list, write your pitch, and confirm. Items land in the cart.
6. **Click the cart icon** in the top nav → review and "Proceed to Checkout" (prototype: alerts only, no real payment).

## Notable details

- **Preview-first**: the right-hand panel on each OA Media product re-renders as the user types — there's no "submit" delay. This is the conversion lever the brief called out.
- **Editorial checklist** auto-evaluates word count and link counts as you edit the draft.
- **100 directors** are generated from a seeded RNG (`shared.js` → `generateDirectors()`), so the same list appears every load. Avatars are SVG initials via Dicebear.
- **Refund policy** is shown prominently in the booking modal — "you only pay for taken meetings."
- **Cart** persists across page navigation via `localStorage`.

## What's a stub vs real

| Working | Stub |
|---|---|
| All previews (live, real-time) | No real Stripe / payment processing |
| All filtering, sorting, selection | No backend, no real LinkedIn scraping |
| Editorial checklist evaluation | No real publishing pipeline |
| Cart with persistence | No real email / Slack notifications on checkout |
| Tab navigation across the three surfaces | The 9 secondary ABM Hub tabs (Graph, OA500, etc.) are stubbed |

## OA Media inventory (current)

| Product | Price | Limit | Preview |
|---|---|---|---|
| Guest Posting | $599 | unlimited | Full OA article render + editorial checklist |
| Newsletter Insertion | **$1,999 / month** (12 insertions · 3/wk × 4 wks) | one sponsor / edition | **Inside Outsourcing** mockup — purple-branded header, scripted edition name, dedicated 16:9 image slot in the sponsored block. Editorial sections are blurred placeholder (rotates per issue); the sponsor block is the focus and renders sharp. |
| Display Ads | **$2,999 / quarter** (3 months) | unlimited | Banner placed inside a mock OA News article — right-rail + in-feed banner placements |
| Podcast Interview | $1,999 / episode | Max 2 / company / year | OA podcast episode page with player, show notes, backlinks, sponsored disclosure |
| Custom Whitepaper | $3,999 | unlimited | Gated landing page on OA.com + co-branded cover + 1-month newsletter feature + 2 stand-alone articles + 3 months display ads + lead-delivery pipeline (HubSpot/SFDC/webhook) |
| **Top List Inclusion** | **$1,299–$4,499** (varies by list) | **Editorial review · not guaranteed · refund if rejected** | 10-list catalog, list-aware pricing, full mock of the listicle article with your entry highlighted at position N+1, auto-graded editorial criteria with acceptance-probability estimate |
| ★ **Premium Bundle** | **$1,499 / 6 mo · $6,999 / yr · $12,999 / yr** | 3 tiers: **Lite** (6 months) · **Standard** (12 mo · Most popular) · **Premium** (12 mo · Best value) | Inverted dark navy tile shown FIRST in Overview. Preview panel shows all 3 mini-tier cards inline. Dedicated tab with full 3-tier comparison, side-by-side feature table showing **84-93% savings** vs à la carte (~$19K / ~$44K / ~$66K saved). Premium tier adds priority editorial review + dedicated success manager. |

## Gap analysis — what OA offers that we haven't built yet

Reviewing [outsourceaccelerator.com/publisher](https://outsourceaccelerator.com/publisher) and competitors (G2, Capterra, TrustRadius, Paved, LeadrPro), here's what's still on the table:

**High-impact (recommend adding next):**
1. **Article mention** ($299) — paid mention of your product in an existing high-traffic OA article. Lower effort than a full guest post; very high SEO juice.
2. **Sponsored directory listing** ($299/mo) — premium placement in OA's BPO/Vendor Directory.
3. **Webinar / "Outsource Insights Live" sponsorship** ($2,500-5,000) — co-host or sponsor a live session with Derek.
4. **Lead-gen package** (pay-per-qualified-lead, BANT-screened, like Capterra) — would let advertisers pay only for sales-qualified leads.

**Lower priority / nice-to-have:**
6. **Social media boost** ($199-499) — OA's LinkedIn + Meta share your content to their followers.
7. **Press release distribution** ($299-499) — push to OA News + their syndication network.
8. **Calculator sponsorship** — sponsored placement on the Outsourcing Calculator (huge buyer-intent signal).
9. **"OA Verified" / award badges** for vendors in higher tiers (G2-style).
10. **Speaking opportunity** at OA events (Derek as keynote / vendor as panelist).

**For OA Connect:**
11. **Bulk meeting discounts** — 10+ meetings = 15% off, 25+ = 25% off.
12. **Group panel sessions** — 1 vendor presents to 5-8 buyers at once ($1,500-3,000).
13. **Custom ICP curation** — paid add-on where OA hand-picks the prospect list for you ($500 flat).
14. **In-person executive dinners** at industry events (CCW, IBPAP Convention).

Want any of these built? Point at a number and I'll add it.

## Open questions to confirm before building for real

1. **Article preview source**: do guest posters paste raw text, paste a Google Doc URL, or upload a Word file? The prototype assumes paste-in.
2. **Display ad creative spec**: is 728×200 right? Multiple sizes per slot?
3. **Newsletter cadence & inventory**: Tuesday weekly is hardcoded — confirm actual cadence and how many sponsored slots per send.
4. **Meeting matchmaking source-of-truth**: is the buyer-side panel (50 USD gift cert) something we'll build later or is there an existing vendor we'd plug in?
5. **OA-Score™ inputs**: the prototype shows scores cosmetically; we'd need to define the actual scoring inputs.

## Tech notes

- No build step, no dependencies, no package.json.
- Tailwind is NOT used — all styles are in `shared.css`. This keeps it portable.
- Inter is loaded from Google Fonts. Site still works offline if Inter doesn't load (falls back to system sans).
- Avatars use `api.dicebear.com` — if blocked, cards will show a broken image icon. Easy fix: replace with locally-rendered SVG initials.

If you want any of the stubbed pieces built out (real Stripe, real LinkedIn enrichment, a Next.js port for Vercel hosting), point at the file and I'll extend it.
