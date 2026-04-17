# Architecture Research: Spotify Clone Web App

## Component Boundaries & Structure

The architecture must support a persistent audio player that continues without interruption while the user navigates different app views.

### High-Level Layout

1. **`AppLayout` (Shell Component)**
   - Wrapping container defining the global CSS Grid structure (`100vh`, `100vw`, `overflow: hidden`).
2. **`Sidebar` (Navigation Area)**
   - Fixed to the left side (or collapsed on mobile). Handles navigation routing.
3. **`MainView` (Scrollable Content Area)**
   - Resolves Next.js children pages (Home, Search, Playlist). Must independently manage `overflow-y: scroll`.
4. **`PlayerBar` (Persistent Bottom Area)**
   - Fixed to bottom, hosts the HTML5 `<audio>` element and all playback controls.

### Data Flow

#### Global State (`Zustand` Store)
- **`usePlayerStore`**
  - **State**: `currentTrack`, `isPlaying`, `progress`, `duration`, `volume`, `queue`.
  - **Actions**: `play(track)`, `pause()`, `toggle()`, `next()`, `prev()`, `setVolume(val)`, `setProgress(val)`.

#### Interaction Flow
1. User clicks a Track Row in `MainView`.
2. The click event calls `usePlayerStore.getState().play(trackData)`.
3. The `PlayerBar` component, which subscribes to `currentTrack` from the store, detects the change.
4. `PlayerBar` swaps the `src` of the native `<audio>` element and triggers `.play()`.
5. `<audio>` emits `ontimeupdate` events, which dispatch to `setProgress()` in the store.
6. The slider UI in `PlayerBar` re-renders smoothly relying on the store's progress state.

## Build Order

1. **Phase 1: Shell & Grid** — Build the raw 100vh layout with empty Sidebar, Main View, and Player Bar regions.
2. **Phase 2: Global State & Audio Logic** — Implement Zustand store and build the Player Bar with working sliders and play/pause logic against a hardcoded mock track.
3. **Phase 3: Core Views** — Implement the Home page with grid cards, and the Playlist Detail page with the dynamic header.
4. **Phase 4: Polish** — Add dynamic color extraction, scroll-linked opacity headers, and smooth transitions.
