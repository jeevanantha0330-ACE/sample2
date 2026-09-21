# Kisan 🌱

**Growing farms. Growing livelihoods.**

Kisan is a farm-work platform that connects farmers with nearby daily-wage workers. Farmers add their fields and post short-term work; workers discover suitable nearby jobs, review the details, and enroll. Kisan Saathi, the platform’s AI companion, helps people ask farming questions in simple language.

## Hackathon demo

- Farmer dashboard with a registered field and a guided work-request form
- Worker job feed, job detail view, farmer voice-note preview, and enrollment state
- Kisan Saathi AI chat interface with farming prompts
- Responsive design for phone and desktop
- Demo pricing: first week free, then ₹3 per farmer-requested worker and ₹9 per worker enrollment

## The problem

Farmers often need dependable seasonal labour at short notice, while daily-wage workers lack a simple way to find nearby, fairly paid work. Kisan creates one trusted, easy-to-use place for both.

## Tech stack

- Next.js 16 and React
- TypeScript
- Tailwind CSS

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production roadmap

1. Supabase authentication, database, and image/audio storage
2. OTP through a compliant verification provider; never store Aadhaar/PAN document data directly
3. Razorpay test-mode payments
4. Server-side OpenAI Responses API integration for multilingual Kisan Saathi and voice-to-job-post conversion
5. Location matching, acceptance notifications, worker ratings, and secure contact sharing after approval

