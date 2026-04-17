# Spotify Clone

## What This Is

A high-end web application clone of Spotify, designed primarily as a frontend UI showcase, transitioning into a fully integrated Spotify client using the official Spotify Web API and Spotify Web Playback SDK. It features semantic HTML, glassmorphism, responsive behavior, and now real playback for authenticated Premium users.

## Core Value

A pixel-perfect, stunning, and responsive user interface that accurately mirrors Spotify's look and feel, paired with real music streaming via the user's authentic Spotify account.

## Current State

**Shipped v1.0 (2026-04-17)**
Successfully delivered a complete, responsive 100vh UI shell with full global audio playback capabilities, dynamic playlist extraction, and premium responsive aesthetics (Framer Motion transitions, glassmorphism, Spotify-accurate scroll layouts).

## Next Milestone Goals (v2.0)

- **Spotify Web API Authentication:** Implement OAuth2 login flow (NextAuth / custom).
- **Real User Data:** Replace all mock data with the user's actual playlists, liked songs, and recently played albums.
- **Spotify Web Playback SDK:** Connect the global Zustand store to the official browser SDK for real DRM music streaming (requires Spotify Premium).

## Out of Scope

- Real backend authentication for non-Spotify functions (we strictly rely on Spotify OAuth).
- Offline downloading (Browser restriction).

## Context

- Evolving the v1 UI shell to become a functional music player.
- Integrating external authenticated APIs.

## Constraints

- **Tech Stack**: React/Next.js (App Router), Vanilla CSS overlay / Tailwind v4 for utility styling.
- **Data Dependency**: The Spotify Web Playback SDK exclusively requires the user to have a Spotify Premium subscription.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Web App over Native Mobile | Focus on modern web capabilities and instant accessibility | Validated (v1.0 is fully responsive and behaves like an app) |
| Transition to Real API | The UI is robust enough to handle real streaming data, satisfying the user's primary goal. | Active for v2.0 |

<details>
<summary>Previous Content</summary>

### Active
- [x] Responsive Web Layout (Desktop, Tablet, Mobile)
- [x] Persistent Playback Bar with functional Play/Pause toggle
- [x] Playlists rendering with mock track data
- [x] Premium aesthetics (glassmorphism, modern typography, hover animations)
- [x] State management for currently playing tracks

</details>

---
*Last updated: 2026-04-17 after v1.0 release*
