# Pitfalls Research: Spotify Clone Web App

## 1. The Global Audio Paradox
- **Warning Sign**: Clicking play on a new song while another is playing causes both tracks to play over each other simultaneously, or navigation cuts the music completely off.
- **Prevention Strategy**: NEVER put the `<audio>` element inside a page-level component (like `PlaylistDetail.tsx`). The `<audio>` tag MUST live globally in the `PlayerBar` or root `AppLayout`. Manage the `src` via a global store mechanism (Zustand).
- **Phase Map**: Should be addressed early in **Phase 2 (State Management)**.

## 2. Prop Drilling the "Is Playing" State
- **Warning Sign**: Passing `isPlaying` and `currentTrackId` down 5 levels of components just to make the green equalizer GIF show up next to a track row in a playlist.
- **Prevention Strategy**: Use atomic state selectors. Let `TrackRow.tsx` read its own playing state directly from `usePlayerStore((state) => state.currentTrack?.id === track.id)`. Do not pass complex state recursively.
- **Phase Map**: Addressed in **Phase 3 (Core Views)**.

## 3. The Broken Body Scroll
- **Warning Sign**: Scrolling down the playlist moves the left sidebar and bottom player bar off the screen.
- **Prevention Strategy**: The CSS grid shell is sacred. `body { overflow: hidden; height: 100vh; }`. The main content area must use a specific localized `overflow-y: auto`. Scrollbars on the main view need webkit pseudo-element styling to look like Spotify's overlay scrollbars.
- **Phase Map**: Address immediately in **Phase 1 (Shell & Grid)**.

## 4. Input Range Throttling (Slider Drag Jitter)
- **Warning Sign**: When dragging the track progress slider, it fights with the `ontimeupdate` event of the audio element, jumping rapidly back and forth between where the user drags and where the time interval updates.
- **Prevention Strategy**: Maintain a separate `isDragging` local state in the slider component. When `isDragging` is true, pause updates from the global store, only syncing back to the global store on `onPointerUp`.
- **Phase Map**: Address during **Phase 2 (Audio Logic)**.
