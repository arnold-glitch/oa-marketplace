# Mailshake Setup Steps — OA Connect Cold Email Campaigns

End-to-end guide to going from "no account" to "campaigns live" using Mailshake's Multi-Mailbox plan with pre-warmed managed mailboxes.

**Companion docs:**
- [cold-email-sequence.md](cold-email-sequence.md) — the 5-email + 3-SMS/WhatsApp sequence per role family

---

## Phase 1 — Sign up & infrastructure (Day 0–1)

### Step 1. Create the Mailshake account
- Go to `mailshake.com` → Sign up
- Use a business email (e.g. `arnold@outsourceaccelerator.com`) — this is your *admin* login, not a sending mailbox
- Verify the email

### Step 2. Buy the Multi-Mailbox plan(s)
- Navigate to the Multi-Mailbox / Managed Mailboxes section
- Buy **2× Multi-Mailbox plans** → gets you **10 mailboxes across 2 domains**
- Cost: ~$24/mo or ~$258/yr (save ~$30 by going annual once you've validated it works)
- Confirm both subscriptions are active in billing

### Step 3. Provision the mailboxes
Mailshake will either auto-assign domains or let you pick from available ones. Aim for domains that look related to OA but aren't `outsourceaccelerator.com`:
- e.g. `oa-connect.com`, `oaconnect.io`, `getoaconnect.com`, `oamarketplace.io`
- Avoid spammy-looking suffixes (`.click`, `.top`, `.xyz`)

Mailshake provisions 5 mailboxes per domain. Suggested mailbox naming:
- `arnold@oa-connect.com`
- `arnold.j@oa-connect.com`
- `arnold.oa@oa-connect.com`
- `a.jacob@oa-connect.com`
- `hello@oa-connect.com` ← optional general inbox
- (repeat 5 more on the second domain)

### Step 4. Configure sender persona on every mailbox
For **each of the 10 mailboxes**, set the same persona so they look like the same human writing from slightly different addresses:
- **Display name:** `Arnold · OA Connect`
- **Profile photo:** upload a real headshot (consistent across all 10)
- **Signature:**
  ```
  Arnold
  OA Connect
  ```
- **Reply-to address:** route to one shared inbox you actively monitor (e.g. `arnold@outsourceaccelerator.com` or a Help Scout / Front shared inbox)

### Step 5. Confirm mailboxes are sending-ready
Check Mailshake's status indicator on each mailbox:
- ✅ DNS configured (SPF, DKIM, DMARC)
- ✅ Warmup active
- ✅ Connected and authenticated

Send a test from each mailbox to:
- Your own Gmail
- Your own Outlook / Office 365 if available
- A second Gmail account

Goal: inbox placement (not Promotions, not Spam). If any mailbox lands in Spam, **flag Mailshake support immediately** — don't use that mailbox until resolved.

---

## Phase 2 — Build the list (Day 1–3, in parallel with Phase 1)

### Step 6. Pull the prospect list
Sources:
- **LinkedIn Sales Navigator** — filter by company (Concentrix, TaskUs, TDCX, Sutherland, Genpact, WNS, Cloudstaff, Teleperformance) + title + geography
- **Apollo.io / Clay / Lusha** — enrich with verified business emails
- **Manual research** — for harder-to-find C-suite

Target: 3,000–5,000 contacts across all 10 role families. Roughly:
- ~30% Operations
- ~15% QA
- ~15% CX
- ~10% IT & Security
- ~10% Workforce Management
- ~5% Finance
- ~5% HR
- ~5% Training
- ~3% Recruiting
- ~2% Sales

### Step 7. Segment & enrich the CSV
For each contact, fill these columns:
- `first_name`
- `last_name`
- `email`
- `company`
- `title`
- `role_family` *(from matrix: Operations, CX, QA, Training, WFM, Finance, HR, Recruiting, IT-Security, IT-Infra, Sales)*
- `role_family_plural` *(e.g. "IT and Security leaders", "Finance leaders")*
- `role_keyword` *(e.g. "IT & Security", "Finance")*
- `vendor_category` *(from matrix in cold-email-sequence.md)*
- `vendor_topics_block` *(the 5 bullets, joined as a single text field — see below)*
- `peer_company` *(rotate — different BPO than recipient's employer)*
- `country` / `timezone` *(for send-time targeting)*

**Tip for `vendor_topics_block`:** in your Sheet, write a formula that looks up the role family and returns the joined 5-bullet string. Then in Mailshake's template, you insert it as a single `{{vendor_topics_block}}` merge field rather than 5 separate ones.

### Step 8. Verify the list (non-negotiable)
- Run the whole list through **NeverBounce**, **ZeroBounce**, or **Million Verifier**
- Cost: ~$0.004–$0.008 per email (~$20 for 3,000 contacts)
- Remove anything flagged as invalid, role-based (`info@`, `admin@`), or risky
- **Target: <3% bounce rate.** Anything above wrecks the mailbox reputation Mailshake just warmed for you.

---

## Phase 3 — Build the campaigns in Mailshake (Day 3–4)

### Step 9. Create one campaign per role family
Don't run a single mega-campaign — create **10 separate campaigns**, one per role family, named clearly:
- `OA Connect — IT & Security`
- `OA Connect — Finance`
- `OA Connect — Operations`
- ...etc

This lets each sequence speak directly to that role's topics, and lets you A/B test independently.

For each campaign:

**a. Import the segment CSV** — only contacts matching that `role_family`.

**b. Build the 5-email sequence** — paste from [cold-email-sequence.md](cold-email-sequence.md):
- Email 1 (Day 0) — 3 subject A/B variants
- Email 2 (Day +3) — reply to E1, same thread
- Email 3 (Day +8) — new thread
- Email 4 (Day +14)
- Email 5 (Day +21) — breakup

**c. Configure mailbox rotation** — assign all 10 mailboxes to the campaign so Mailshake auto-rotates sends across them.

**d. Set sending schedule:**
- Days: **Monday–Thursday only** (Friday and weekends underperform)
- Hours: **9am–12pm recipient local time** (use time-zone targeting if available)
- Volume per mailbox: see ramp schedule in Step 12

**e. Set tracking:** opens ON, clicks OFF (we have no links anyway — and click tracking hurts deliverability slightly).

**f. Reply detection:** ON. Any reply auto-pulls the contact from the rest of the sequence.

### Step 10. Set up the reply handler
Replies need a fast, human response — that's the whole conversion mechanism.

- **Reply destination:** every reply lands in your shared inbox / Help Scout / Front
- **Template ready in your inbox:** the "Email reply handler" from [cold-email-sequence.md](cold-email-sequence.md) — save as a canned response
- **SLA:** respond within 1 business hour during your active sending window
- **Suppression:** any "NO", "STOP", "UNSUBSCRIBE" → suppress immediately across all 10 campaigns

---

## Phase 4 — SMS / WhatsApp side (parallel to email, Day 3–5)

### Step 11. Set up the messaging channel
- **For US/UK/AU lists:** Mailshake's SMS add-on OR Twilio + explicit consent on every number
- **For PH/India/ZA/MX/CO lists:** WhatsApp Business API via **Wati**, **360dialog**, or **Twilio WhatsApp**

Configure:
- Sender display: `Arnold · OA Connect` (with profile photo on WhatsApp)
- STOP / opt-out handling automated
- Replies route to the same shared inbox as email
- Schedule the 3 messages per the cadence in cold-email-sequence.md (Days 5, 11, 19)

---

## Phase 5 — Test launch (Day 5)

### Step 12. Soft launch with one segment
Don't blast all 10 campaigns on day 1. Start with **one segment, 100 contacts** to validate everything works end-to-end:

- Pick the segment most likely to convert (Operations or QA — biggest pain, biggest list)
- Send Email 1 to 100 contacts on Day 5
- Volume per mailbox: **10 emails/mailbox/day**

Watch for 48 hours:
| Metric | Healthy range | Action if outside |
|---|---|---|
| Bounce rate | <3% | Pause campaign, investigate list quality |
| Open rate | >40% | If <30%, subject line is the problem |
| Reply rate | >2% | If <1%, copy is the problem |
| Spam complaints | <0.1% | If >0.1%, pause everything — reputation problem |

### Step 13. Ramp up gradually
Once the first 100 sends look healthy:

| Week | Per mailbox per day | Total daily | Total weekly |
|---|---|---|---|
| 1 | 10 | 100 | 500 |
| 2 | 20 | 200 | 1,000 |
| 3 | 30 | 300 | 1,500 |
| 4+ | 40 | 400 | 2,000 |

Open additional role-family campaigns gradually — one new campaign every 1–2 days during ramp.

---

## Phase 6 — Run, monitor, iterate (ongoing)

### Step 14. Daily review (15 min)
- Mailshake dashboard: per-mailbox bounce, open, reply rates
- Reply inbox: respond to YES replies fast, suppress NOs
- Any mailbox crossing 5% bounce → pause and contact Mailshake support

### Step 15. Weekly review (30 min)
- Which subject A/B is winning — kill the loser after 200+ sends
- Which role family has best conversion — invest more list there
- Which mailboxes are healthiest — could you safely push to 50/day on those?
- Any patterns in NOs / objections — feed back into the email copy

### Step 16. Track the funnel end-to-end
Track in a Sheet or Airtable:
- Sends → Opens → Replies → YES → Signed up to OA Connect → Took first meeting → Took 3+ meetings

This tells you cost per panelist and which channel/role/copy is producing real activated users — not just inbox opens.

---

## Pre-launch checklist (final gate before going live)

- [ ] Mailshake account active with 2× Multi-Mailbox plans
- [ ] 10 mailboxes provisioned, all green on DNS + warmup
- [ ] Sender persona (name, photo, signature) identical across all 10 mailboxes
- [ ] Test sends inbox-placed in Gmail and Outlook
- [ ] 3,000+ contacts in CSV, segmented by `role_family`
- [ ] List verified, <3% bounce projected
- [ ] All merge fields populated (`first_name`, `role_family_plural`, `vendor_topics_block`, etc.)
- [ ] 10 campaigns built in Mailshake — one per role family
- [ ] Mailbox rotation enabled on every campaign
- [ ] Send schedule restricted to Mon–Thu, 9am–12pm local
- [ ] Reply detection + auto-stop ON
- [ ] Shared reply inbox active and monitored
- [ ] Reply handler template saved as canned response
- [ ] SMS / WhatsApp configured with opt-out handling
- [ ] First 100-contact soft launch ready

---

## Common pitfalls to avoid

1. **Blasting full volume on day 1.** Pre-warmed ≠ "send 400 emails immediately." Ramp gradually even with managed mailboxes.
2. **Importing an unverified list.** Bounces kill warmed-mailbox reputation faster than anything else.
3. **Slow reply response.** A YES that waits 8 hours converts at half the rate of one answered in 30 minutes.
4. **Same subject line across all 10 mailboxes.** Mail providers detect this as templated and downgrade. A/B test 3 subjects per campaign.
5. **Sending on Fridays.** Open rates drop 30%+ vs Tue–Wed. Save the send budget for the better days.
6. **Forgetting time zones.** A 9am PH send arrives at 9pm in NY. Use Mailshake's per-contact time zone targeting.
7. **Not pausing problem mailboxes.** One mailbox with 8% bounce will start dragging the others down via shared reputation signals.
