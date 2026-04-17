# Phase 2: Global Audio & Playback Bar - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement the persistent global audio engine using Zustand, wire a native HTML5 `<audio>` element through a custom React hook, and build a fully functional `PlayerBar` component with seek, volume, and play/pause controls.
</domain>

<decisions>
## Implementation Decisions

### State Management
- **Zustand** is the chosen library for the global audio store — lightweight, zero boilerplate, and ideal for cross-route state like the current track, isPlaying flag, volume, and progress.
- Store name: `usePlayerStore`.
- State shape: `{ currentTrack, isPlaying, progress, duration, volume }`.
- Actions: `play(track)`, `pause()`, `toggle()`, `next()`, `prev()`, `setVolume(val)`, `setProgress(val)`.

### Audio Source
- Use a **real public MP3 URL** for the mock track so play/pause produces genuine audio output and `timeupdate` events fire naturally.
- Example source: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`

### Slider Behavior (Anti-Jitter Pattern)
- Sliders use **optimistic drag** — UI position updates instantly via local state while dragging; the global store and audio element only sync on `onPointerUp`.
- Each slider component holds a local `isDragging` boolean and a `localValue` number to achieve this.

### Audio Element Placement
- The native `<audio>` element lives **inside `PlayerBar`** but is made globally reactive by being driven entirely from the Zustand store — no prop passing required.

### the agent's Discretion
- Specific icon choices for Previous, Play/Pause, Next, Shuffle, Repeat.
- Exact pixel sizing for slider thumb and track.
- Keyboard accessibility (aria labels on buttons).
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

- `.planning/REQUIREMENTS.md` — Phase 2 Requirements (AUD-01 through AUD-04)
- `.planning/research/ARCHITECTURE.md` — Data flow and component boundaries
- `.planning/research/PITFALLS.md` — Slider jitter anti-pattern and audio element placement rules
- `src/app/layout.tsx` — Where `PlayerBar` is already mounted (do not move it)
- `src/components/layout/PlayerBar.tsx` — File to be replaced with fully functional implementation
</canonical_refs>

<specifics>
## Specific Ideas

- Mock track object: `{ id: '1', title: 'SoundHelix Song 1', artist: 'T. Schürger', albumArt: '/placeholder-art.jpg', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', duration: 372 }`
- Progress bar should display `currentTime / duration` formatting (e.g. `1:23 / 5:32`).
</specifics>

<deferred>
## Deferred Ideas

- Queue management (next/prev track from a real playlist) — deferred to Phase 3 when track data is wired.
- Keyboard shortcut bindings (Space = toggle) — deferred to Phase 4 polish.
</deferred>
