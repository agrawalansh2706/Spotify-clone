---
wave: 2
depends_on: [08-02-sidebar-components]
files_modified: [src/app/layout.tsx]
autonomous: true
---

# Plan 08-03: Layout Grid Integration

Update the root layout to handle the three-pane responsive structure.

<task>
<read_first>
- src/app/layout.tsx
- src/components/layout/Sidebar.tsx
</read_first>
<action>
Update `src/app/layout.tsx`.
Change the main layout container to a responsive grid or flex structure.
Sidebar (Left) | Main Content (Center) | FriendActivitySidebar (Right).
Handle the `1200px` breakpoint: Hide the Right sidebar on smaller screens or use a conditional rendering based on `isSocialSidebarOpen`.
Ensure `MainContent` takes remaining space appropriately (`flex-1`).
</action>
<acceptance_criteria>
- Grid structure implemented.
- `FriendActivitySidebar` is mounted in the layout.
- Layout doesn't break on screens < 1200px.
</acceptance_criteria>
</task>
