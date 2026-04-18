# Project Roadmap: v3.0

## Milestone v3.0: Social, Search & Management

### Phase 08: Social Presence & Layout Refinement (SOC)
**Goal:** Implement the "Friend Activity" sidebar and polish the responsive shell for dual sidebars.
- **Requirements**: SOC-01
- **Success Criteria**:
    - Right-hand friend activity feed is visible on screens > 1200px.
    - Feed is collapsible/expandable via a toggle in the top bar.
    - Layout handles three-pane scaling (Sidebar, Main, Friend Activity) without layout shift.

### Phase 09: Global Search & Real-time Results (SRCH)
**Goal:** Implement the dynamic search interface and link it to the Spotify Search API.
- **Requirements**: SRCH-01, SRCH-02, SRCH-03, SRCH-04
- **Success Criteria**:
    - Typing in `/search` triggers a debounced API call to `GET /v1/search`.
    - Results view populates with Tracks, Artists, and Playlists.
    - Category chips (All, Songs, etc.) filter the UI results locally.
    - Recent searches are saved to `localStorage` and displayed on empty state.

### Phase 10: Library Mutations (LIB)
**Goal:** Enable users to modify their Spotify library (Like tracks, Create playlists).
- **Requirements**: LIB-01, LIB-02, LIB-03
- **Success Criteria**:
    - Clicking the Heart icon in PlayerBar triggers `PUT /v1/me/tracks`.
    - Sidebar "Create Playlist" button triggers `POST /v1/users/{user_id}/playlists`.
    - Sidebar list refreshes automatically after creation/deletion.

### Phase 11: Synced Lyrics Experience (SOC)
**Goal:** Integrate a synced lyrics view for an immersive listening experience.
- **Requirements**: SOC-02
- **Success Criteria**:
    - A "Lyrics" button in the PlayerBar opens a full-screen dynamic backdrop.
    - Lyrics scroll automatically based on SDK `position_ms`.
    - Current line is highlighted/enlarged.

---
*Last updated: 2026-04-18 after Milestone v2.0 completion*
