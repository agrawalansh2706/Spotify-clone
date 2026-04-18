---
wave: 2
depends_on: [08-01-ui-state]
files_modified: [src/components/layout/TopNav.tsx, src/app/page.tsx]
autonomous: true
---

# Plan 08-04: Header Toggle

Add the visibility toggle button to the top navigation area.

<task>
<read_first>
- src/app/page.tsx (to see where TopNav or Header resides)
</read_first>
<action>
Identify the header component (likely in `src/app/page.tsx` or a separate `TopNav` component).
Add a button with a `Users` or `People` icon (Lucide or similar).
On click, call `toggleSocialSidebar()` from `useUIStore`.
Style the button with hover effects and active state (highlighted when sidebar is open).
</action>
<acceptance_criteria>
- Toggle button exists in the top right.
- Clicking the button toggles the `FriendActivitySidebar` visibility.
</acceptance_criteria>
</task>
