# Phase 3: Core Views & Navigation - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the two primary views — Home (playlist/album grid cards) and Playlist Detail (track table) — connected by Next.js App Router file-based routing. All track rows dispatch to the global Zustand player store on click.
</domain>

<decisions>
## Implementation Decisions

### Routing
- **Next.js App Router** with a `(main)` layout group sharing the existing shell.
- Routes:
  - `/` → Home page — grid of mock playlist cards
  - `/playlist/[id]` → Playlist detail — table of tracks
- The existing `src/app/page.tsx` becomes the Home view and `src/app/playlist/[id]/page.tsx` is the playlist detail.

### Mock Data
- **Hardcoded TypeScript module** at `src/data/mockData.ts` — typed arrays of `Playlist` and `Track` objects.
- This is the single source of truth for all rendered content. Zero latency, zero loading states needed.
- Data shape:
  ```ts
  { id, name, description, coverArt, tracks: Track[] }
  Track: { id, title, artist, album, duration, src, coverArt }
  ```
- Seed data: 6 playlists, each with 8-10 tracks.

### Track Row Hover UX (Exact Spotify Pattern)
- Default state: show track number in left cell.
- On row hover: track number is replaced by a ▶ play icon.
- Currently playing track: number cell shows animated equalizer bars (CSS-only), track title is rendered in `--color-primary` (#1ed760).
- Clicking any track row calls `usePlayerStore.getState().play(track)`.

### Sidebar Navigation
- Sidebar gets real nav links: Home, Search (placeholder), and a list of playlist names from `mockData`.
- Clicking a playlist name navigates to `/playlist/[id]`.

### the agent's Discretion
- Specific cover art (can use unsplash placeholder URLs or colored SVG squares).
- Exact MP3 track src values (reuse the SoundHelix URL pattern for all tracks).
- Column width ratios in the track table.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

- `.planning/REQUIREMENTS.md` — Phase 3 Requirements (VIEW-01 through VIEW-04)
- `src/store/playerStore.ts` — `usePlayerStore`, `Track` type, `MOCK_TRACK` — MUST reuse these types
- `src/components/layout/Sidebar.tsx` — Will be updated with real nav links
- `src/app/layout.tsx` — Existing shell, do NOT move or rewrap children
- `.planning/research/PITFALLS.md` — Prop drilling anti-pattern for isPlaying
</canonical_refs>

<specifics>
## Specific Ideas

- Home page section header: "Good evening" (time-of-day greeting) + "Made for you" grid.
- Album cover placeholder: colored gradient squares generated inline with CSS (no external image dependency).
- Track table columns: `#` | `Title / Artist` | `Album` | `Duration`.
</specifics>

<deferred>
## Deferred Ideas

- Search page implementation — deferred to a future phase.
- Infinite scroll / pagination — out of scope for v1.
- "Now playing" queue sidebar — out of scope.
</deferred>
