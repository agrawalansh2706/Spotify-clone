# Phase 5: Spotify Web API Authentication - Context

<domain>
## Phase Boundary
Implement OAuth2 login flow with NextAuth.js (v4) to authenticate users against the Spotify Accounts service. Securely store and refresh access tokens so we can eventually query the user's actual playlists and stream music via the Web Playback SDK.
</domain>

<decisions>
## Implementation Decisions

### NextAuth.js
- Use `next-auth@4` with `SpotifyProvider`.
- Expose the access token in the session `jwt` and `session` callbacks so client components can read it.
- Implement token rotation logic in the `jwt` callback per NextAuth's official guides, as Spotify tokens expire every 1 hour.

### Environment Setup
- Require `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `NEXTAUTH_SECRET` in `.env.local`.

### Client Context
- Wrap the main application structure in `<SessionProvider>` inside a Client Component (e.g. `AuthProvider.tsx`) since `RootLayout` must be a Server Component. 

### Login UI
- In the `Sidebar`, if the user is unauthenticated, show a "Log in to Spotify" button.
- If authenticated, display their profile image, name, and a "Sign out" button.
</decisions>
