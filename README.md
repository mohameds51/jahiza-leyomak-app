# جاهزة ليومك — 1.0 (release candidate)

Arabic RTL Next.js app with five interactive bridal planning tools, private account access, PostgreSQL persistence, private photos, and Paddle webhook preparation.

## Requirements
Node.js 20+; PostgreSQL (Neon); a verified sender domain and Resend API key; commercial-use-compatible hosting; optional Paddle account.

## Local development
1. `npm install`
2. Copy `.env.example` to `.env.local`, fill DATABASE_URL, APP_URL, RESEND_API_KEY, MAIL_FROM.
3. Run `psql "$DATABASE_URL" -f schema.sql` (or paste schema.sql in Neon SQL editor).
4. Activate a *test buyer* using `DATABASE_URL='...' node scripts/activate.mjs buyer@example.com`.
5. `npm run dev`; visit localhost:3000. APP_URL must be http://localhost:3000 for local email links.
6. Run `npm test`, `npm run typecheck`, `npm run build` before deployment.

## Deployment
- Push this directory to GitHub and deploy on a **commercially permitted** Vercel plan or other Next.js-compatible host.
- Set the environment variables in the hosting dashboard; do not commit .env.local.
- Configure the verified email sender and HTTPS APP_URL.
- Configure Paddle webhook endpoint `https://YOUR_DOMAIN/api/paddle/webhook` and subscribe to `transaction.completed` and `adjustment.updated`. Set webhook secret, API key, environment, and exact price ID. Run a sandbox purchase, confirm access, then test an approved refund and access revocation. **Checkout UI is not implemented**; the payment page/checkout remains a separate integration task.
- After purchase the buyer uses the same email address to request a one-time login link. Paddle webhook activates it when the transaction is completed.

## Data / security
- HttpOnly SameSite session cookie; 30-day session. One-time login links expire in 15 minutes. Access checked server-side on each API call.
- State is saved as a single JSON document per user with optimistic revision control. If simultaneous editing on two devices conflicts, a warning is shown; refresh to retrieve the newest version. Avoid editing on multiple devices simultaneously.
- Private images are stored as compressed JPEGs in PostgreSQL bytea, maximum 450 KB each, 30 per account. This is a deliberately simple low-volume approach; monitor DB storage and migrate to object storage when needed.
- Authentication request rate limits are database-backed. Add edge/IP protections and monitoring before large-scale marketing.
- There is no automated email after purchase; buyers need a link to the app from the checkout success page or purchase email. Set this up in Paddle/marketing flow.
- Local browser storage is used only as a transient client cache after authenticated server hydration. It is cleared on logout; it is **not encrypted at rest** on the device. Avoid shared/public devices.
- Exported JSON backup covers textual state only, not images.

## Known release blockers / QA
- Run full dependency installation, typecheck, production build, and browser E2E tests in an environment with npm access; this sandbox may not have registry connectivity.
- Test email delivery and link expiry, Paddle sandbox payment and refunds, image upload/restore across devices, multi-device conflict, mobile layouts, and failed-network saves.
- The five tools are functional but their suggested content and timing need editorial review by the product owner before accepting real customers.
- Legal pages, privacy/retention policy, refund terms, customer support contact, checkout UI, and production deployment must be completed before selling.


## V3 notes
- Image upload API removed. Legacy `jahiza-looks-v1` state remains stored for safe backward compatibility; it is not displayed or newly uploaded. Do not delete old images or DB tables without a separate consented migration.
- New textual bookings use `jahiza-bookings-v1` inside existing `user_state` JSON; no SQL migration required.
- Run `npm install`, `npm test`, `npm run typecheck`, `npm run build` before production deployment. Verify live login, Paddle purchase, and Neon sync with staging accounts.

## Content update — detailed bridal preparation journey

The planner now includes 49 structured milestones across venue/vendor coordination, budgeting and balances, bridal look, attire, transport, guest confirmations, care, packing, privacy, handoffs, and wedding-day operations. Every milestone includes three actionable steps and a defined outcome. Tasks that do not apply to a particular celebration may be deleted manually. The listed minutes estimate *planning/admin time*, not the duration of an appointment or service. Existing plans are upgraded by adding missing base milestones without overwriting previous task completion, dates, custom tasks, or recorded outcomes. The onboarding remains unchanged, so this is not yet a fully conditional plan based on a detailed wedding-type questionnaire.

This update does not alter authentication, database schema, payment integration, or the sales landing page. Verify a production build and test the state-sync flow with a staging account before deploying to customers. Bridal care tips are organizational and do not replace advice from a qualified professional.
