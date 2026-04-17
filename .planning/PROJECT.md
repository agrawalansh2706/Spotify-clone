# Spotify Clone

## What This Is

A high-end web application clone of Spotify, designed primarily as a frontend UI showcase. It offers a premium, modern design matching the authentic Spotify experience across desktop and mobile browsers, featuring seamless animations, mock data playback, and functional playlists.

## Core Value

A pixel-perfect, stunning, and responsive user interface that accurately mirrors Spotify's look and feel, delivering an immersive front-end experience.

## Current State

**Shipped v1.0 (2026-04-17)**
Successfully delivered a complete, responsive 100vh UI shell with full global audio playback capabilities (via Zustand and HTML5 audio), dynamic playlist extraction, and premium responsive aesthetics (Framer Motion transitions, glassmorphism, Spotify-accurate scroll layouts).

## Next Milestone Goals (v2.0)

- Personalization: "Liked Songs" local storage persistence
- Custom right-click context menu outshining browser defaults
- True keyboard accessibility and focus management
- Global search functionality simulation

## Out of Scope

- Real backend authentication — Focus is UI, so we use mock/local state for users
- Direct MP3 streaming server — We will use mock tracks or free API previews due to DRM and backend complexity

## Context

- Building a standout UI project to demonstrate mastery of modern web styling (React/Next.js)
- Requires rich, dynamic aesthetics. Visual excellence is paramount over deep backend integration.
- Target environment: Modern Browsers

## Constraints

- **Tech Stack**: React/Next.js (App Router), Vanilla CSS overlay / Tailwind v4 for utility styling.
- **Data Dependency**: Bound by mock data (SoundHelix). Real DRM music streaming is unsupported.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Web App over Native Mobile | Focus on modern web capabilities and instant accessibility | Validated (v1.0 is fully responsive and behaves like an app) |
| Mock/Preview Data Playback | Bypasses backend streaming complexity | Validated (SoundHelix MP3s work flawlessly with UI state) |

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
