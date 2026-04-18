# Spotify Clone

## What This Is

A high-end web application clone of Spotify, designed primarily as a frontend UI showcase, transitioning into a fully integrated Spotify client using the official Spotify Web API and Spotify Web Playback SDK. It features semantic HTML, glassmorphism, responsive behavior, and now real playback for authenticated Premium users.

## Core Value

A pixel-perfect, stunning, and responsive user interface that accurately mirrors Spotify's look and feel, paired with real music streaming via the user's authentic Spotify account.

## Current State

**Shipped v2.0 (2026-04-18)**
Migrated from mock data to the authentic Spotify Web API and Web Playback SDK. Users can now authenticate via Spotify OAuth, browse their real playlists, and stream high-quality audio directly in the browser through the official SDK integration.

**Shipped v1.0 (2026-04-17)**
Delivered the responsive UI shell and mobile tab navigation.

## Next Milestone Goals (v3.0)

- **Social Features**: Friend activity feed simulation.
- **Search**: Fully functional global search with filtering (Artist, Album, Playlist).
- **Library Management**: Ability to like tracks and create/edit playlists directly from the app.
- **Interactive Lyrics**: Syncing lyrics via a third-party API or Spotify lyrics endpoint.

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
