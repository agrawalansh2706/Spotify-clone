# Roadmap: Spotify Clone

## Overview

A 4-phase journey to build a complete frontend UI clone of Spotify. We start by laying out the robust 100vh CSS grid shell, proceed to wiring up the global audio state with Zustand, flesh out the core views (Home and Playlists), and finally apply premium aesthetic polish like dynamic gradients and glassmorphism.

## Phases

- [ ] **Phase 1: Shell & Architecture** - Base 100vh layout with Sidebar, Main View, and bottom Player partition
- [ ] **Phase 2: Global Audio & Playback Bar** - Zustand store, native audio handling, and playback controls
- [ ] **Phase 3: Core Views & Navigation** - Home grid, Playlist tables, and track interaction
- [ ] **Phase 4: Premium Aesthetics** - Glassmorphism, dynamic color extraction, and scroll-linked headers

## Phase Details

### Phase 1: Shell & Architecture
**Goal**: Build the raw 100vh layout providing independent scrolling behavior and mobile responsiveness.
**Depends on**: Nothing
**Requirements**: [LAY-01, LAY-02, LAY-03]
**Success Criteria**:
  1. Main viewport takes exactly 100% of the screen height without document scrolling.
  2. Sidebar is fixed on desktop and collapses to a bottom tab bar on mobile.
  3. Main view area scrolls independently.
**Plans**: 1 plan

Plans:
- [x] 01-01: Initialize Next.js app with CSS Grid layout shell and Sidebar

### Phase 2: Global Audio & Playback Bar
**Goal**: Implement the robust audio engine and persistence layer using Zustand, tying it to the UI controls.
**Depends on**: Phase 1
**Requirements**: [AUD-01, AUD-02, AUD-03, AUD-04]
**Success Criteria**:
  1. An audio file can be played and paused without interruptions when navigating.
  2. Volume slider controls native audio object volume.
  3. Track progress syncs perfectly with slider dragging.
**Plans**: 2 plans

Plans:
- [ ] 02-01: Scaffold Zustand store and mount native dummy `<audio>` element
- [ ] 02-02: Build PlayerBar component with active SVG controls and range sliders

### Phase 3: Core Views & Navigation
**Goal**: Flesh out the central routing (Home vs. Playlist) and connect track rows to the global audio player.
**Depends on**: Phase 2
**Requirements**: [VIEW-01, VIEW-02, VIEW-03, VIEW-04]
**Success Criteria**:
  1. Home renders a grid of mock playlist cards.
  2. Clicking a playlist navigates to a table view of tracks.
  3. Clicking any track row initiates playback and updates the Player Bar.
**Plans**: 2 plans

Plans:
- [ ] 03-01: Build Home Page grid and Playlist table shell
- [ ] 03-02: Populate mock track data and connect onClick handlers to Zustand `play()` action

### Phase 4: Premium Aesthetics
**Goal**: Elevate the UI from functional to stunning with Spotify's signature effects.
**Depends on**: Phase 3
**Requirements**: [AES-01, AES-02, LAY-04]
**Success Criteria**:
  1. Top navigation background fades in from transparent to distinct color on scroll.
  2. Main View background gradient matches dominant color of the active album art.
  3. Context menus and modals use frosted glass (backdrop-blur) effects.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Implement sticky scroll-linked header opacity
- [ ] 04-02: Integrate color-thief dynamically and apply glassmorphism utility classes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Shell & Architecture | 0/1 | Not started | - |
| 2. Global Audio & Playback Bar | 0/2 | Not started | - |
| 3. Core Views & Navigation | 0/2 | Not started | - |
| 4. Premium Aesthetics | 0/2 | Not started | - |
