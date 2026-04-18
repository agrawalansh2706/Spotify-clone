---
wave: 3
depends_on: [08-05-friend-data]
files_modified: [src/components/layout/FriendRow.tsx]
autonomous: true
---

# Plan 08-06: Interaction & Navigation

Enable navigation when clicking friend activity items.

<task>
<read_first>
- src/components/layout/FriendRow.tsx
- src/store/playerStore.ts
</read_first>
<action>
Add `onClick` handlers to the track and artist names in `FriendRow`.
Use `router.push()` to navigate to `/album/{id}` or `/artist/{id}` if IDs are available in mock data.
Alternatively, trigger a play function if the track has a URI.
</action>
<acceptance_criteria>
- Clicking a friend's track title triggers a navigation or action.
- UI shows pointer cursor on clickable items.
</acceptance_criteria>
</task>
