# Phase 08 Plan: Social Presence & Layout Refinement

Implementing the desktop "Friend Activity" sidebar and refining the main application shell to handle a three-pane responsive structure.

## Overview
- **Requirements**: SOC-01
- **Focus**: UI Components, Responsive Grid, State Management for toggle, and Dynamic Mock Data.

## Wave 1: State & UI Skeleton
- **Goal**: Establish the visibility state and create the basic sidebar shell.
- **Plans**:
    - **08-01-ui-state**: Add `isSocialSidebarOpen` to a new `useUIStore` or existing state.
    - **08-02-sidebar-component**: Create `src/components/layout/FriendActivitySidebar.tsx` with glassmorphism styles.

## Wave 2: Layout & Toggle
- **Goal**: Integrate the sidebar into the root layout and add the header toggle.
- **Plans**:
    - **08-03-layout-grid**: Update `src/app/layout.tsx` to handle the three-column grid (Sidebar | Main | Social).
    - **08-04-header-toggle**: Add the "Social" icon button to `src/app/page.tsx` (top bar) or `RootLayout` header area.

## Wave 3: Data & Interaction
- **Goal**: Populate the sidebar with dynamic simulated data and enable navigation.
- **Plans**:
    - **08-05-friend-data**: Implement a local simulation that rotates mock activity for a list of friends.
    - **08-06-navigation**: Add click handlers to `FriendRow` for navigating to tracks/playlists.

## Verification
- **Criteria**:
    - [ ] Social sidebar is visible on Desktop (>1200px) when toggled ON.
    - [ ] Layout scales smoothly when the sidebar is toggled (no jitter).
    - [ ] Icons and glassmorphism match the existing Spotify design.
    - [ ] Clicking a friend navigates or plays content.

## must_haves
- [ ] Responsive 3-pane grid system.
- [ ] Functional toggle in the top-right header.
- [ ] Real-looking dynamic friend activity.
