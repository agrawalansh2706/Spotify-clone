# Requirements: Spotify Clone v2.0 (Real API Integration)

**Defined:** 2026-04-17
**Core Value:** A pixel-perfect, stunning, and responsive user interface that accurately mirrors Spotify's look and feel, paired with real music streaming via the user's authentic Spotify account.

## v2.0 Requirements

### Authentication (AUTH)
- [ ] **AUTH-01**: Implement NextAuth.js or custom OAuth PKCE flow to authenticate with Spotify Accounts service.
- [ ] **AUTH-02**: Store and refresh Spotify access tokens securely using HttpOnly cookies or session state.
- [ ] **AUTH-03**: Display the logged-in user's profile image and name in the top right header.

### User Data (DATA)
- [ ] **DATA-01**: Fetch the user's actual saved/followed playlists and display them in the Sidebar.
- [ ] **DATA-02**: Fetch "Recently Played" or "Top Mixes" to dynamically populate the Home page grid rows.
- [ ] **DATA-03**: Support fetching a complete Playlist detail view including all tracks using the Spotify Web API.

### Playback SDK (SDK)
- [ ] **SDK-01**: Mount the Spotify Web Playback SDK `<script>` and initialize the `Spotify.Player` object.
- [ ] **SDK-02**: Connect the `Spotify.Player` state to our existing global Zustand store so the UI reacts to real track changes.
- [ ] **SDK-03**: Replace HTML5 `<audio>` functions with `player.togglePlay()`, `player.seek()`, etc.
- [ ] **SDK-04**: Transfer playback from active Spotify devices to our web player automatically upon pressing "Play".

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| AUTH-01 | Phase 5 | Pending |
| AUTH-02 | Phase 5 | Pending |
| AUTH-03 | Phase 5 | Pending |
| DATA-01 | Phase 6 | Pending |
| DATA-02 | Phase 6 | Pending |
| DATA-03 | Phase 6 | Pending |
| SDK-01 | Phase 7 | Pending |
| SDK-02 | Phase 7 | Pending |
| SDK-03 | Phase 7 | Pending |
| SDK-04 | Phase 7 | Pending |
