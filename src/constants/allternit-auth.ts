/**
 * Allternit account authentication (Clerk) — production configuration.
 *
 * gizzi-code signs in through Allternit's Clerk-backed platform: the
 * browser is redirected to the platform's `/terminal/clerk` bridge page,
 * which signs the user in with Clerk and posts the resulting session
 * token back to this CLI's local callback
 * (`POST /auth/terminal/clerk/callback/:sessionID`).
 *
 * The publishable key below is Clerk's public, frontend-safe key — it
 * only identifies the Clerk instance (custom domain clerk.allternit.com)
 * and is safe to embed in a distributed CLI. Secret keys (sk_*) are never
 * needed here; they live server-side in the platform/cloud deployment
 * (GitHub secrets / .env), and the token exchange happens on the platform.
 *
 * If Allternit rotates the instance, update all three values together;
 * the JWKS issuer for token verification is ALLTERNIT_CLERK_FRONTEND_URL.
 */
export const ALLTERNIT_PLATFORM_URL = "https://ai.allternit.com"
export const ALLTERNIT_CLERK_FRONTEND_URL = "https://clerk.allternit.com"
export const ALLTERNIT_CLERK_PUBLISHABLE_KEY =
  "pk_live_Y2xlcmsuYWxsdGVybml0LmNvbSQ"
