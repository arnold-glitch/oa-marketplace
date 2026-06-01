# OA Connect — Cold Email + SMS Sequence (Panel Recruitment)

**Purpose:** Recruit BPO Managers → C-suite onto the OA Connect panel.
**Landing page:** oa-marketplace.com/panel
**Sender:** Arnold · OA Connect
**Sending tool:** Mailshake — 2× Multi-Mailbox plans (10 pre-warmed mailboxes, 2 domains)

---

## Personalization strategy

Run **one Mailshake campaign per role family**. Same structure across all sequences — only `{{vendor_category}}` and `{{role_pain}}` swap. This makes every email read like it was written for the recipient's specific function, not blasted.

### Merge-field lookup per role family

| Role family | `{{vendor_category}}` | `{{role_pain}}` |
|---|---|---|
| **Operations** | workforce management, agent performance analytics, and cost-per-contact tools | every ops-automation vendor on LinkedIn wants 30 minutes of your time |
| **CX / Customer Experience** | voice analytics, CSAT tooling, journey orchestration, and conversational AI | CX vendors keep pitching the same "AI-powered customer experience" demo |
| **Quality Assurance** | AI QA platforms scoring 100% of calls, speech analytics, and coaching tools | every AI QA startup wants to show you their scorecard |
| **Training / L&D** | gamified learning, microlearning, AI coaching, and simulation platforms | learning-tech vendors are pitching the same "engagement" hook every week |
| **Workforce Management** | forecasting, scheduling, and real-time adherence platforms | WFM vendors are pitching alternatives constantly |
| **Finance / FP&A** | billing reconciliation, BPO cost analytics, vendor spend management, and finance automation | finance-ops vendors keep hitting your inbox with "BPO cost optimization" pitches |
| **HR / People Ops** | retention analytics, engagement platforms, and BPO-specific HR tools | HR-tech vendors pitching attrition solutions every other day |
| **Recruiting / TA** | AI sourcing, AI interviewing, and candidate-matching tools built for BPO scale | sourcing-tech vendors are flooding your DMs |
| **IT / CIO / Tech** | CCaaS platforms, integrations, security, and contact center infrastructure | infra vendors keep pitching CCaaS replacements |
| **Sales / BD** | lead intelligence, CRM enrichment, and outbound automation tools | sales-tech vendors are in your inbox daily |
| **Marketing** | marketing automation, ABM, demand gen, employer branding, and content/SEO platforms | martech vendors keep pitching the same "AI-powered ABM" deck without understanding BPO's long enterprise sales cycles |
| **C-suite / CXO** | AI transformation, future of work, margin expansion, new service lines, and tech consolidation | strategy and transformation vendors pitch every week, often without understanding BPO economics |

---

## Positioning — important

These emails sell **one clear value proposition**: get paid $50 per 30-min vendor discovery call you attend. Every email recaps the same 5 benefit bullets so the offer is unmissable even on a 5-second skim. The platform is brand new / soft-launch — we're shortlisting BPO leaders to participate.

**No links in any email** — we want a YES reply, then we send full details outside the cold sequence. Business email is fine — meetings are exploratory only, no confidential info shared.

### Two bullet blocks per email

**Block A — The deal (4 bullets, same in every email):**

- **$50** per meeting attended (gift card)
- **30 minutes**, one discovery call
- **No confidential info** shared — business email is fine
- **Brand new platform** — shortlisting now, completely free

**Block B — Usual services our vendors pitch about (5 bullets, role-specific):**

Customized per role family — see the `{{vendor_topics_5_bullets}}` lookup below.

### `{{vendor_topics_5_bullets}}` per role family

**IT & Security**
- Endpoint security and EDR platforms
- Identity and access management (IAM / PAM)
- SOC, SIEM, and threat detection
- Compliance automation (PCI, SOC2, GDPR)
- Multi-tenant data loss prevention

**Finance / FP&A**
- Multi-client billing and reconciliation
- BPO cost analytics and unit economics
- Vendor spend management
- Finance automation and close acceleration
- FP&A, project profitability, and client P&L

**Operations**
- Workforce optimization and shrinkage tools
- Agent performance analytics
- Cost-per-contact reduction
- Real-time ops dashboards
- Multi-client capacity planning

**CX / Customer Experience**
- Voice analytics and conversation intelligence
- CSAT / NPS measurement and benchmarking
- Customer journey orchestration
- Conversational AI and chatbots
- Multi-brand, multi-channel CX platforms

**Quality Assurance**
- AI QA platforms scoring 100% of calls
- Speech and text analytics
- Agent coaching and calibration
- Compliance QA and PCI redaction
- Multi-client scorecard automation

**Training / L&D**
- Gamified learning and microlearning
- AI coaching and roleplay simulation
- New-hire onboarding acceleration
- Agent upskilling and certification
- Knowledge management and search

**Workforce Management**
- Forecasting and capacity planning
- Multi-skill scheduling
- Real-time adherence and intraday management
- Occupancy and shrinkage analytics
- WFM platforms (alternatives to IEX, NICE)

**HR / People Ops**
- Attrition prediction and retention analytics
- Agent engagement platforms
- Performance management
- Frontline communication tools
- BPO-specific HR and payroll

**Recruiting / TA**
- AI sourcing and resume screening
- Video interviewing at scale
- Candidate matching for BPO roles
- Geographic and remote hiring
- Recruitment marketing and pipeline tools

**IT Infrastructure / CIO**
- CCaaS platforms and alternatives
- Integration and middleware
- Cloud infrastructure for BPO
- Contact center networking
- Voice / SIP infrastructure

**Sales / BD**
- Lead intelligence and enrichment
- ABM and outbound automation
- CRM and pipeline management
- Conversation intelligence for sales
- BPO-vertical sales tools

**Marketing**
- Account-based marketing (ABM) and enterprise demand gen
- Marketing automation and lead nurture platforms
- Employer branding and recruitment marketing
- Content, SEO, and thought leadership tools
- Sales enablement and marketing attribution

**C-suite / CXO**
- AI transformation and operational reinvention at scale
- Future of work, agent enablement, and human-AI workflows
- Margin expansion, cost-to-serve, and unit economics
- New service line opportunities (verticals, geographies, capabilities)
- Tech consolidation and enterprise vendor strategy

---

## Email 1 — Day 0 · Monday AM (recipient local time)

**Subject lines (A/B test 3 per campaign):**
- `Get paid $50 to attend a 30-min vendor call`
- `New platform: $50 per vendor meeting — BPO {{role_family_plural}}`
- `{{first_name}}, earn $50 per vendor discovery call`

**Body:**

> Hi {{first_name}},
>
> We just launched a new platform for BPO {{role_family_plural}}: vendors pay **$50 (gift card)** for every 30-min discovery meeting you accept with them.
>
> Here's the deal:
>
> - **$50** per meeting attended (gift card)
> - **30 minutes**, one discovery call
> - **No confidential info** shared — business email is fine
> - **Brand new platform** — shortlisting now, completely free
>
> Usual services our vendors pitch about.
>
> {{vendor_topics_5_bullets}}
>
> You approve every pitch in writing first; skip is invisible.
>
> Reply YES if you want to learn more.
>
> Arnold
> OA Connect

---

## Email 2 — Day 3 · Thursday AM *(reply to Email 1, same thread)*

**Subject:** `Re: [Email 1 subject]`

> {{first_name}} —
>
> Quick follow-up. The obvious question: **the vendors pay, not you.** The $50 (gift card) is how they respect your time when you accept a discovery meeting.
>
> Same kinds of vendors who DM you on LinkedIn already — except now they're paying for your time.
>
> Recap:
>
> - **$50** per meeting attended (gift card)
> - **30 minutes**, one discovery call
> - **No confidential info** shared — business email is fine
> - **Brand new platform** — shortlisting BPO {{role_family_plural}} now
>
> Usual services our vendors pitch about.
>
> {{vendor_topics_5_bullets}}
>
> Reply YES if you want to learn more.
>
> Arnold
> OA Connect

---

## Email 3 — Day 8 · Tuesday AM *(new thread, different mailbox)*

**Subject options:**
- `$50 per vendor call — still shortlisting BPO {{role_family_plural}}`
- `New BPO platform: vendors pay you to attend their pitch`

> {{first_name}},
>
> You're getting cold-pitched by {{vendor_category}} vendors daily. What if every meeting you accepted came with $50 attached?
>
> That's the platform we just launched:
>
> - **$50** per meeting attended (gift card)
> - **30 minutes**, one discovery call
> - **No confidential info** shared
> - **Brand new** — shortlisting now, completely free
>
> Usual services our vendors pitch about.
>
> {{vendor_topics_5_bullets}}
>
> You approve every pitch first, skip the rest. Reply YES if you want to learn more.
>
> Arnold
> OA Connect

---

## Email 4 — Day 14 · Wednesday AM *(social proof + soft scarcity)*

**Subject:** `Shortlist filling — BPO {{role_family_plural}}, $50/meeting`

> {{first_name}},
>
> Quick update — the shortlist for the new platform is filling up. BPO {{role_family_plural}} from {{peer_company}} and similar BPOs are already on it.
>
> The deal:
>
> - **$50** per meeting attended (gift card)
> - **30 minutes**, one discovery call
> - **No confidential info** shared
> - **Brand new platform** — shortlisting now, completely free
>
> Usual services our vendors pitch about.
>
> {{vendor_topics_5_bullets}}
>
> Reply YES if you want to learn more.
>
> Arnold
> OA Connect

---

## Email 5 — Day 21 · Tuesday AM *(breakup)*

**Subject:** `Last one, {{first_name}} — $50 per vendor meeting`

> {{first_name}},
>
> Last note — we're closing the initial shortlist soon. The deal one more time:
>
> - **$50** per meeting attended (gift card)
> - **30 minutes**, one discovery call
> - **No confidential info** shared
> - **Brand new platform** — completely free, you approve every pitch
>
> Usual services our vendors pitch about.
>
> {{vendor_topics_5_bullets}}
>
> Reply YES if you want to learn more. If not, no worries — appreciate you reading this far.
>
> Arnold
> OA Connect

---

## Email reply handler — when they reply "YES" / "INTERESTED" / "TELL ME MORE"

Sent within 1 business hour, manually or via templated reply (outside the cold sequence so it lands warm).

**Subject:** `Re: [their reply subject]`

> {{first_name}} — thanks, you're on the shortlist.
>
> Quick recap of how it'll work when we open:
>
> - Vendors in {{vendor_category}} send short written pitches — who they are, what they're building, what they want to discuss
> - You approve or skip each one. Skip is invisible to them.
> - Accepted pitches → 30-min discovery call (45 if you want more time)
> - **$50 gift card per accepted meeting**, sent within 24 hours
> - Pitches matched to your function — for someone in your role, that's {{vendor_category}}
> - Business email is fine — no confidential info shared in any meeting
> - **Completely free for you**, no charges ever, pause or quit anytime
>
> We're aiming to open the first cohort soon. I'll reach out with the signup link the moment we go live.
>
> Two quick things to put you on the right list:
>
> 1. Best email for the launch invite when we open?
> 2. Any specific categories within {{vendor_category}} you'd want to see — or skip?
>
> Arnold
> OA Connect

**If they ask a question instead of confirming** ("is this legit?", "how is this different from X?", "what's the catch?"): respond personally, no template. This is your highest-intent lead — handle it as a sales conversation, not a sequence.

**Common objections + responses:**

- *"Is this legit?"* → Outsource Accelerator has been the BPO industry's reference platform since 2014. You can verify us at outsourceaccelerator.com. The paid-meeting model is the same one expert networks like GLG use — we're applying it specifically to BPO, and we've run smaller versions of this before for other industries.
- *"Will my employer know?"* → We don't disclose your participation to anyone. Meetings are professional discovery only — nothing that would conflict with your role. The gift card format is also not contractor pay, which usually sidesteps outside-compensation policies — but you know your org best.
- *"How much time will this take?"* → 30–45 min per accepted meeting. Most {{role_family_plural}} accept 2–4 per month. You're in full control of the volume — accept zero in a given month if you want.
- *"What if no pitches are relevant?"* → You skip everything. No penalty, no follow-up, no awkwardness. The relevance filter is the whole point — we'd rather you skip 10 than accept an irrelevant one.
- *"When does it actually launch?"* → Soon — we're finalizing the first cohort now. I'll be in touch with the exact date and signup as soon as it's live. Being on the shortlist means you get the invite ahead of public launch.

**If they reply NO / NOT INTERESTED / UNSUBSCRIBE:** suppress immediately across email *and* SMS. No reply needed — extra contact would be poor form.

---

## SMS sequence (3 messages interleaved — no links, reply-based)

**Rules:**
- Only send to opt-ins or legitimate-basis contacts (personal numbers in your CRM, business numbers publicly listed)
- 9am–6pm recipient local time
- **No links in any SMS** — links get flagged as spam, especially on PH/India carriers. Reply-based instead.
- Goal: get a "yes" or "interested" reply, which becomes a soft opt-in. Then send details by reply.
- STOP handling still required for compliance
- For US/UK/AU: explicit consent required. PH/India: gray area — tread carefully.

### SMS 1 — Day 5 · Friday 10am local *(between Email 2 and Email 3)*

> Hi {{first_name}} — Arnold from OA Connect. I emailed you about a new platform for BPO {{role_family_plural}}: vendors pay $50 (gift card) per discovery meeting you accept, all in {{vendor_category_short}}. Reply YES to learn more. — Arnold

### SMS 2 — Day 11 · Tuesday 11am local *(after Email 3)*

> {{first_name}} — we're shortlisting BPO {{role_family_plural}} for a new paid-meeting platform. Vendors pay $50/meeting, you approve every pitch, all in {{vendor_category_short}}. Free for you. Reply YES to learn more. — Arnold, OA Connect

### SMS 3 — Day 19 · Monday 10am local *(before final email)*

> {{first_name}} — closing the initial shortlist soon. $50 per accepted meeting from {{vendor_category_short}} vendors, you approve every pitch. Reply YES to learn more. If not, no worries. — Arnold, OA Connect

---

## SMS reply handler — when they reply "YES" / "INTERESTED" / "TELL ME MORE"

Now they've opted in. Send a short SMS confirming the shortlist spot, then follow up by email with the full details (longer-form info reads better in email than SMS). Send within 5 minutes (manually or automated via Twilio/Mailshake).

**SMS confirmation:**

> Great, {{first_name}} — sending the full details to your email now. Reply here anytime with questions. — Arnold, OA Connect

**Then email follow-up:** use the email reply handler template above.

**If they ask a question instead of confirming** (common — "what is this?", "is this legit?", "how does it work?"): respond personally by SMS, then offer to send more by email. This is your highest-intent lead — handle it like a sales conversation, not a sequence.

**If they reply STOP / NOT INTERESTED / NO:** suppress immediately across SMS *and* email. Send no confirmation reply (replying back triggers more carrier scrutiny).

---

## WhatsApp sequence (alternative or addition to SMS)

WhatsApp is the better channel for PH, India, ZA, MX, CO — read rates are 90%+ and the conversation lives in a real thread. Use WhatsApp Business API (Twilio, 360dialog, or Wati) so opt-out is compliant and replies route to your shared inbox.

**Differences vs SMS:**
- Slightly longer messages OK (up to 1024 chars)
- Profile photo and "Arnold · OA Connect" name visible — adds legitimacy
- Native threading — replies stay in the same conversation
- Read receipts → you can see who saw the message before replying
- Still no links in cold outreach (Meta flags business accounts that send links to non-opted-in numbers)

### WhatsApp 1 — Day 5 · Friday 10am local

> Hi {{first_name}}, Arnold here from OA Connect.
>
> I emailed you earlier about a new platform we just launched for BPO {{role_family_plural}}.
>
> Short version: vendors in {{vendor_category_short}} pay **$50 (gift card)** per 30-min discovery meeting you accept with them. You approve every pitch first, skip is invisible, no confidential info shared.
>
> We're shortlisting BPO leaders right now — completely free to join.
>
> Reply YES if you want to learn more and I'll send the details.

### WhatsApp 2 — Day 11 · Tuesday 11am local

> {{first_name}} — quick follow-up.
>
> The shortlist for the new paid-meeting platform is filling. BPO {{role_family_plural}} from peer BPOs are already on it.
>
> Recap:
> • $50 gift card per accepted meeting
> • 30-min discovery call
> • Vendors in {{vendor_category_short}}, matched to your role
> • No confidential info shared
> • Free for you
>
> Reply YES to learn more.
>
> — Arnold, OA Connect

### WhatsApp 3 — Day 19 · Monday 10am local

> Hi {{first_name}} — last note from me on this.
>
> We're closing the initial shortlist soon. $50 per accepted vendor meeting in {{vendor_category_short}}, you approve every pitch, completely free.
>
> Reply YES if you want to learn more. If not, all good.
>
> — Arnold, OA Connect

### WhatsApp reply handler — when they reply "YES"

> Great, {{first_name}} — thanks for replying. Sending the full details to your email now. Feel free to reply here anytime with questions. — Arnold

---

## Cadence schedule

| Day | Channel | Mailbox rotation |
|---|---|---|
| 0 | Email 1 | Mailbox A |
| 3 | Email 2 | Same mailbox (threaded) |
| 5 | **SMS 1** | — |
| 8 | Email 3 | Mailbox B (new thread) |
| 11 | **SMS 2** | — |
| 14 | Email 4 | Mailbox C (new thread) |
| 19 | **SMS 3** | — |
| 21 | Email 5 | Mailbox D (breakup) |

---

## Worked example — Finance Director at Sutherland

To show how the merge fields render. Recipient: **Maria, Finance Director, Sutherland, Philippines**.

### Email 1 (rendered)

> Subject: Get paid $50 to attend a 30-min vendor call
>
> Hi Maria,
>
> We just launched a new platform for BPO Finance leaders: vendors pay **$50 (gift card)** for every 30-min discovery meeting you accept with them.
>
> Here's the deal:
>
> - **$50** per meeting attended (gift card)
> - **30 minutes**, one discovery call
> - **No confidential info** shared — business email is fine
> - **Brand new platform** — shortlisting now, completely free
>
> Usual services our vendors pitch about.
>
> - Multi-client billing and reconciliation
> - BPO cost analytics and unit economics
> - Vendor spend management
> - Finance automation and close acceleration
> - FP&A, project profitability, and client P&L
>
> You approve every pitch in writing first; skip is invisible.
>
> Reply YES if you want to learn more.
>
> Arnold
> OA Connect

### Email 3 (rendered)

> Subject: $50 per vendor call — still shortlisting BPO Finance leaders
>
> Maria,
>
> You're getting cold-pitched by billing, cost-analytics, vendor-spend, and finance-automation vendors daily. What if every meeting you accepted came with $50 attached?
>
> That's the platform we just launched:
>
> - **$50** per meeting attended (gift card)
> - **30 minutes**, one discovery call
> - **No confidential info** shared
> - **Brand new** — shortlisting now, completely free
>
> Usual services our vendors pitch about.
>
> - Multi-client billing and reconciliation
> - BPO cost analytics and unit economics
> - Vendor spend management
> - Finance automation and close acceleration
> - FP&A, project profitability, and client P&L
>
> You approve every pitch first, skip the rest. Reply YES if you want to learn more.
>
> Arnold
> OA Connect

### SMS 1 (rendered)

> Hi Maria — Arnold from OA. I emailed you about a waitlist for BPO Finance leaders: vendors in billing, cost-analytics, and finance-automation pay $50 per discovery meeting you accept. Want a shortlist spot? Reply YES. — Arnold

---

## Variant tweaks by seniority

The default templates target **Managers / Senior Managers / Directors**. **C-suite / CXO** is now its own role family in the matrix (uses the standard email template with strategic, cross-functional topics).

### For Independent consultants / ex-BPO operators
- **Lead with expert-network framing:** "Your perspective is valuable to vendors building for this industry"
- **Drop peer-company name-drops** — they're not currently at one
- **Money angle is fine to lead with** — they're freelance, $50 reads as fair pay for time

---

## List-building merge fields needed

Each row in your Mailshake import needs these columns filled per contact:

- `first_name`
- `company`
- `role_family` *(one of: Operations, CX, QA, Training, WFM, Finance, HR, Recruiting, IT, Sales)*
- `role_title_short` *(e.g. "Finance Director", "QA Manager", "Ops VP")*
- `role_family_plural` *(e.g. "Finance leaders", "QA managers", "Ops directors")*
- `role_keyword` *(e.g. "Finance", "QA", "WFM")*
- `vendor_category` *(from matrix above)*
- `vendor_category_short` *(2-3 word version for SMS)*
- `role_pain` *(from matrix)*
- `role_pain_short` *(short subject-line version)*
- `peer_company` *(rotate per email — different BPO than recipient's employer)*

When pulling from Sales Nav / Apollo, classify each contact into a `role_family` based on their title, then mass-fill the other fields with the matrix above (formula in Sheets/Excel).

---

## Volume + ramp plan (revised — no manual warmup needed with Mailshake managed mailboxes)

| Week | Per mailbox per day | Total daily | Total weekly |
|---|---|---|---|
| 1 | 10 | 100 | 500 |
| 2 | 20 | 200 | 1,000 |
| 3 | 30 | 300 | 1,500 |
| 4+ | 40 | 400 | 2,000 |

10 mailboxes × 40/day = 400 first-touches/day at steady state. At a 25% reply-to-signup conversion and 4% reply rate, that's **~4 new panelists per day** at steady state, ~120/month.

---

## Pre-launch checklist

- [ ] 2× Mailshake multi-mailbox plans purchased (10 mailboxes, 2 domains)
- [ ] List of 3,000+ BPO contacts built and segmented by `role_family`
- [ ] List verified via NeverBounce or ZeroBounce (<3% bounce)
- [ ] Merge fields filled per contact using the matrix above
- [ ] SMS provider configured with STOP handling
- [ ] `oamkt.co/p` short-link redirecting to `oa-marketplace.com/panel`
- [ ] Signup attribution wired so we can see which mailbox + sequence converted each panelist
- [ ] Reply routing: any reply pulls contact from sequence and lands in your inbox
