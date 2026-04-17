# Features Research: Spotify Clone Web App

## Core Focus: Frontend UI Representation

### Table Stakes (Must-Have)

- **Persistent Playback Bar**: The bottom bar that stays visible regardless of navigation, with Play, Pause, Next, Previous, Shuffle, and Repeat.
- **Sidebar Navigation**: Fixed left-hand sidebar containing Home, Search, Library, and User Playlists.
- **Responsive CSS Grid Layout**: 
  - Desktop: 3-column layout (Sidebar, Main View, Friend Activity/Right Sidebar).
  - Tablet: Sidebar collapses to icons.
  - Mobile: Bottom navigation tab bar (replaces Sidebar).
- **Dynamic Routing**: Smooth navigation between Home page, Playlist Detail, and Album Detail pages.
- **Functional Sliders**: Custom-styled range inputs for Volume control and Track Progress.
- **Track List Views**: Precise table-like layouts for tracks (Title, Artist, Album, Date Added, Duration) with hover states triggering play icons.

### Differentiators (What makes it a great clone)

- **Dynamic Header Gradients**: Extracting the dominant color from the currently viewed playlist/album artwork and applying it as a smooth fade-to-black background in the Main View.
- **Scroll-Linked Header Opacity**: The top sticky navbar should transition from transparent to solid colored as the user scrolls down the Main View.
- **Global Context Menus**: Custom right-click menus tailored to mimic native Spotify behavior (instead of the browser default).
- **Glassmorphism Elements**: Subtle blur effects behind floating elements like modals or sticky headers.

### Anti-Features (Deliberately NOT building)

- **Real Audio Streaming Engine**: Dealing with HLS streams, DRM, and bandwidth optimization. We will use simple MP3 previews or dummy local files.
- **True User Authentication Flow**: Password hashing, OAuth callback nightmares. We will mock the "Logged In" state.
- **Full Backend Catalog Search**: Algorithmic searching of millions of songs. Our search will only filter the mock dataset.
