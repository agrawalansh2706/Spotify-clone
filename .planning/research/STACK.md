# Stack Research: Spotify Clone Web App

## Recommended Stack

- **Framework**: **Next.js (App Router)**
  - *Rationale*: Best-in-class performance, file-based routing perfectly handles dynamic playlist/album structures, and it provides an excellent foundation for any future API endpoints for mock data.
- **Styling**: **Tailwind CSS**
  - *Rationale*: Spotify relies on heavy utility variations and specific hex codes. Tailwind is perfect for rapid UI construction.
- **Animations**: **Framer Motion**
  - *Rationale*: Critical for replicating Spotify's fluid transitions, hover states, and smooth opening/closing of modals.
- **State Management**: **Zustand**
  - *Rationale*: The audio player needs to be persistent across the entire app. Zustand provides lightweight, un-opinionated global state to manage `currentTrack`, `isPlaying`, `progress`, and `volume` without React Context re-render bloat.
- **UI Primitives**: **Radix UI**
  - *Rationale*: Building custom accessible sliders (for volume/seek) and dropdown menus is extremely hard. Radix provides headless primitives that we can style exactly like Spotify using Tailwind.
- **Utility**: **Fast Color Extractor (e.g., `colorthief`)**
  - *Rationale*: To replicate exactly how Spotify extracts the prominent color from an album cover to create a dynamic gradient background for the top header.

## What NOT to use

- **Heavy UI Component Libraries (Material UI, Bootstrap)**
  - *Rationale*: Spotify has a highly bespoke, brutalist-yet-elegant design. Pre-styled libraries will force you to fight their default styles constantly.
- **Complex Audio Libraries (Howler.js) for simple mock playback**
  - *Rationale*: A native HTML5 `<audio>` element wrapped in a custom hook is sufficient for a UI clone and allows total control over the DOM.

## Confidence Level
**High**. This stack is the modern standard for building premium, responsive, state-heavy interactive web applications in 2025.
