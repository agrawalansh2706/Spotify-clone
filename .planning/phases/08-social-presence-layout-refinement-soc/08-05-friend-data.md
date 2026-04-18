---
wave: 3
depends_on: [08-02-sidebar-components]
files_modified: [src/components/layout/FriendActivitySidebar.tsx, src/lib/mockSocial.ts]
autonomous: true
---

# Plan 08-05: Dynamic Data Simulation

Implement the "Live" feeling by rotating activity data.

<task>
<read_first>
- src/components/layout/FriendActivitySidebar.tsx
</read_first>
<action>
Create `src/lib/mockSocial.ts` with a list of 5-8 fake friends and a collection of "possible" tracks.
In `FriendActivitySidebar`, use a `useEffect` with an interval (60s) to randomly update the current track for a subset of friends.
Update the `FriendRow` instances with this dynamic data.
</action>
<acceptance_criteria>
- Sidebar shows multiple friends.
- Activity (track/artist) changes periodically or on refresh.
</acceptance_criteria>
</task>
