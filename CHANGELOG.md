# Lepley Nutrition — Changelog

## 2026-04-13 — Bug Fix, Client Email, Mobile Nav

### 1. Bug Fix: Missing Form Fields in API Route
**File:** `app/api/apply/route.ts`

**Problem:** The intake form collects `gender` and `trackingMacros` on the client side, but the server-side `ApplySubmission` type, validation, and email template didn't include them. These fields were silently dropped — applications arrived in your inbox without gender or macro-tracking info.

**Fix:**
- Added `gender` and `trackingMacros` to the `ApplySubmission` type
- Added both fields to the `isValidSubmission` check
- Added both fields to the HTML email template you receive

---

### 2. Client Confirmation Email
**Files:** `app/api/apply/route.ts`, `.env.example`

**Problem:** When a client submitted the intake form, they saw a green success banner but received no email confirmation. This creates a trust gap, especially before asking for payment.

**Fix:**
- Imported the existing `getWelcomeEmailTemplate` from `lib/emails/welcome.ts` (it was already written but never wired up)
- After the notification email sends to you successfully, a confirmation email now fires to the client using their name and email from the form
- Added a configurable `EMAIL_FROM` environment variable so the sender address can be updated without touching code
- Falls back to `onboarding@resend.dev` (Resend sandbox) if `EMAIL_FROM` is not set

**Action required:** Add `EMAIL_FROM=Lepley Nutrition <hello@lepleynutrition.com>` to your Vercel environment variables now that your domain is verified.

---

### 3. Phone Number Field Added to Intake Form
**Files:** `components/forms/ApplyForm.tsx`, `app/api/apply/route.ts`

**Change:** Added a required phone number field so Kaylie can reach out to clients via text as part of the consultation flow.

**Details:**
- Added `phone` to the client-side `FormData` type and initial state
- Added phone input (type `tel`) after the email field in the form
- Added `phone` to the server-side `ApplySubmission` type and validation
- Added phone to the HTML notification email

---

### 4. Welcome Email Rewritten for Inquiry Flow
**File:** `lib/emails/welcome.ts`

**Problem:** The original welcome email said "Thank you for your purchase" and referenced refund policies — but clients haven't paid yet at this stage. The actual flow is: apply → Kaylie reviews → conversation → payment link.

**Fix:**
- Subject changed to "Thanks for Applying – Lepley Nutrition"
- Body rewritten to set expectations: Kaylie will reach out within 24-48 hours
- Removed refund and communication tier sections (not relevant pre-payment)
- Added "In the Meantime" section prompting clients to think about food preferences, schedule, and questions
- Sign-off changed to "Talk soon, Kaylie" for a personal touch

---

### 5. Social Proof & Positioning Overhaul
**Files:** `app/page.tsx`, `app/program/page.tsx`

**Goal:** Reframe Kaylie's credibility around her unique combination (CS/AI degree + lifelong athlete + both extremes of transformation + 5 years coaching) instead of traditional certifications.

**Homepage — "Built From Experience" section:**
- Headline changed to "Built From Experience — Not a Textbook"
- Rewrote intro to lead with CS & AI degree + coaching since 2020
- Reframed the approach as "engineering mindset" — analyze inputs, find what's broken, build a system, iterate on data
- Strengthened transformation bullet points with more direct language
- Added closing line: "Most people giving nutrition advice have only been on one side. I've been on both."

**Homepage — "About the Founder" card:**
- Headline changed to "An engineer's brain. An athlete's body. Real-world results."
- Description rewritten to emphasize analytical approach + athletic understanding
- Founder highlights rewritten from vague ("STEM graduate") to specific ("CS & AI degree — I treat nutrition like a systems problem, not guesswork")
- Photo caption updated to "UCSC '25 — Computer Science & AI"

**Program page — Testimonials section replaced:**
- Replaced empty "coming soon" placeholder with a "Track Record" section
- Added three stat cards: "2020" (coaching start), "Both Extremes" (transformation story), "CS & AI" (degree)
- Includes honest note that client stories will be added as they come in

**Program page — New FAQ added:**
- "Are you a certified nutritionist or dietitian?" — addresses it head-on with transparency
- Explains what she brings instead: CS/AI degree, lifetime athletics, personal transformation, 5+ years coaching
- Includes medical consultation reminder for trust and legal coverage

---

### 6. Mobile Navigation (Hamburger Menu)
**File:** `components/layout/SiteHeader.tsx`

**Problem:** The header nav rendered four horizontal links with no responsive behavior. On mobile screens, the links would overflow or stack awkwardly — a conversion blocker for social media traffic.

**Fix:**
- Converted `SiteHeader` from a server component to a client component (`"use client"`)
- Desktop nav is unchanged — still horizontal links, hidden below `md` breakpoint
- Added a hamburger button (3-line icon) visible only on mobile
- Tapping the hamburger toggles a clean dropdown menu with all four nav links
- Tapping a link closes the menu automatically
- The hamburger icon transitions to an X when the menu is open
- Uses existing design tokens (ivory, beige, muted, ink) — no new dependencies
- Proper accessibility: `aria-label`, `aria-expanded` on the toggle button, separate `aria-label` on the mobile nav

---

### Environment Variables Reference

| Variable | Purpose | Example |
|---|---|---|
| `RESEND_API_KEY` | Resend API key for sending emails | `re_xxxxx` |
| `EMAIL_FROM` | Sender address for all outbound emails | `Lepley Nutrition <hello@lepleynutrition.com>` |
