---
wave: 1
depends_on: []
files_modified: [src/store/uiStore.ts]
autonomous: true
---

# Plan 08-01: UI State Management

Create a new store for UI-related state, starting with the Social Sidebar visibility.

<task>
<read_first>
- src/store/playerStore.ts (as a reference for Zustand setup)
</read_first>
<action>
Create `src/store/uiStore.ts`.
Add `isSocialSidebarOpen` boolean state.
Add `toggleSocialSidebar` function.
Default `isSocialSidebarOpen` to `true`.
</action>
<acceptance_criteria>
- `src/store/uiStore.ts` exists.
- Exported `useUIStore` hook.
- `isSocialSidebarOpen` defaults to `true`.
</acceptance_criteria>
</task>
