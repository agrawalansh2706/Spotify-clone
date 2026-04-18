---
wave: 1
depends_on: [08-01-ui-state]
files_modified: [src/components/layout/FriendActivitySidebar.tsx, src/components/layout/FriendRow.tsx]
autonomous: true
---

# Plan 08-02: Sidebar & Friend Components

Build the visual components for the social feed using glassmorphism.

<task>
<read_first>
- src/components/layout/PlayerBar.tsx (Reference for glassmorphism styles)
- src/components/layout/Sidebar.tsx (Reference for scrollable lists)
</read_first>
<action>
Create `src/components/layout/FriendActivitySidebar.tsx`.
Use `useUIStore` to conditionally return null if `!isSocialSidebarOpen`.
Apply Spotify's right-sidebar styling: width 280px, background matching Sidebar/PlayerBar.
Create `src/components/layout/FriendRow.tsx` for individual friend entries (Avatar, Name, Track, Artist, Time-ago).
</action>
<acceptance_criteria>
- `FriendActivitySidebar` renders a container with width `280px`.
- Glassmorphism styles applied (`backdrop-filter: blur(20px)`).
- `FriendRow` accepts props for friend data.
</acceptance_criteria>
</task>
