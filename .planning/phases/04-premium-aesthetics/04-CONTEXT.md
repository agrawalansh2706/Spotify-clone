# Phase 4: Premium Aesthetics - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Elevate the UI from functional to stunning by applying Spotify's signature visual polish: glassmorphism on the Player Bar, scroll-linked dynamic gradient headers on the Playlist page, refined typography, smooth page transitions via Framer Motion, and complete mobile BottomTabBar wiring.
</domain>

<decisions>
## Implementation Decisions

### Glassmorphism Player Bar
- The `PlayerBar` component gets a `backdrop-filter: blur(12px)` CSS glass panel effect.
- Background changes from solid black to a semi-transparent `rgba(0,0,0,0.7)` with a top border shadow using `box-shadow: 0 -1px 0 rgba(255,255,255,0.1)`.
- This is achieved via inline styles (not Tailwind classes) to avoid Tailwind v4 issues.

### Scroll-Linked Gradient Header (Playlist Page)
- The playlist page mounts a client component `<PlaylistHeader>` that listens to the scroll of the `#main-scroll-area` element.
- On scroll, the fixed top Navigation/header bar fades in a background color that matches the playlist's `coverColor`.
- Threshold: header becomes opaque after 80px of scroll.
- Uses `useEffect` + `addEventListener('scroll', ...)` on the main scroll container.
- The gradient overlay already exists; this adds a sticky frosted nav bar on top.

### Framer Motion Page Transitions
- Install `framer-motion`.
- Add a `<motion.div>` wrapper with `initial={{ opacity: 0, y: 8 }}`, `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.25 }}` on both the Home page and Playlist Detail page.
- This creates a smooth fade+slide-up when routes change.

### Mobile Bottom Tab Bar Polish
- `BottomTabBar` is already rendered; wire its `Home` and `Search` links to actual routes using `next/link`.
- Add active state highlighting (white icon + label for active route, grey for others) using `usePathname()`.
- Add subtle `backdrop-filter: blur(20px)` to the BottomTabBar container for a premium feel.

### Typography & Micro-details
- Ensure Google Font `Inter` is the global font (currently Geist). Swap to `Inter` in `layout.tsx`.
- Add custom CSS for the Spotify-accurate `input[type=range]` thumb (round green dot on hover) to `globals.css`.
- Apply consistent hover transitions: all interactive text elements get `transition: color 0.15s ease`.

### the agent's Discretion
- Exact easing curves for Framer Motion transitions.
- Specific scroll threshold pixel value for header fade.
- Shadow depth values for glassmorphism layers.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before implementing.**

- `src/app/globals.css` — Add range input thumb styles here (Tailwind v4 `@theme`)
- `src/components/layout/PlayerBar.tsx` — Add glassmorphism styles inline
- `src/app/playlist/[id]/page.tsx` — Extract `PlaylistHeader` client component from this
- `src/components/layout/BottomTabBar.tsx` — Add `usePathname` active state + backdrop blur
- `src/app/layout.tsx` — Font swap from Geist to Inter
- `.planning/research/PITFALLS.md` — Check for scroll listener cleanup patterns
</canonical_refs>

<specifics>
## Specific Ideas

- Sticky playlist header bar: a `<div>` that transitions from `opacity-0` to `opacity-100` at 80px scroll. Background color = the first color stop of the playlist's `coverColor`, extracted via string parsing or just hardcoded per playlist.
- Simplify: Use a single "scrim" approach. The header div is always present but its `backgroundColor` transitions from `transparent` to `rgba(r,g,b,0.8)` based on `scrollY`.
- Range input thumb style in `globals.css`: target `input[type='range']::-webkit-slider-thumb { appearance: none; width: 12px; height: 12px; border-radius: 50%; background: #fff; cursor: pointer; opacity: 0; transition: opacity 0.15s; }` and `input[type='range']:hover::-webkit-slider-thumb { opacity: 1; }` — this matches the exact Spotify slider reveal on hover.
</specifics>

<deferred>
## Deferred Ideas

- Color extraction from actual album art (requires canvas API magic) — too complex for v1, use `coverColor` directly.
- Dark/light mode toggle — out of scope.
- Animated album art rotation in player — not in requirements.
</deferred>
