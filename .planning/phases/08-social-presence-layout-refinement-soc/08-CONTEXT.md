# Phase 08 Context: Social Presence & Layout Refinement

Implementing the desktop "Friend Activity" sidebar and refining the main application shell to handle a three-pane responsive structure.

## Domain Boundary
- **Objective**: Create a right-hand social sidebar mirroring the Spotify desktop app.
- **Scope**: Visual components for friend activities, visibility toggles, and layout adjustments.
- **Non-Goal**: Real-time friend synchronization via backend (strictly simulated UI for this phase).

## Decisions

### Friend Activity Data
- **Mechanism**: Dynamic Local Simulation.
- **Behavior**: A list of "Friends" with randomly assigned tracks/playlists from a local mock seed. Statuses (like "now playing" or "3 min ago") will update periodically to create a "live" atmosphere.

### Toggle & Visibility
- **Placement**: A new "Social" (friends icon) button will be added to the Top-Right Header next to the User Profile.
- **State**: Persistent visibility state managed via a new `uiStore` or local state in the layout.

### Layout Responsiveness
- **Desktop Breakpoint**: 1200px.
- **Behavior**: Above 1200px, the sidebar is visible by default (if toggled on). Below 1200px, it automatically collapses to save space, but can still be opened as an overlay or sidebar depending on user toggle.

### Click Interaction
- **Navigation**: Full Global Discovery. Clicking a friend's currently playing track or playlist will trigger a navigation to the respective `PlaylistPage` or play the track.

## Aesthetics & Motion
- **Glassmorphism**: Match the `PlayerBar` background (`rgba(18, 18, 18, 0.92)` with `backdrop-filter: blur(20px)`).
- **Animations**: Slide-in from the right with a subtle fade using Framer Motion.
- **Components**: `FriendActivitySidebar`, `FriendRow`, `ActivityToggle`.

## Canonical Refs
- ROADMAP.md: Phase 08
- REQUIREMENTS.md: SOC-01
- src/components/layout/PlayerBar.tsx (Visual reference for glassmorphism)
