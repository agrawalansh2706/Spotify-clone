# Roadmap: Spotify Clone v2.0

## Overview

Upgrading the v1.0 UI clone to a functional Spotify client that leverages the real Spotify Web API for user libraries and the Spotify Web Playback SDK for authenticated HDR media streaming.

## Phases

- [ ] **Phase 5: Spotify Web API Authentication** - Setting up NextAuth for Spotify OAuth2 PKCE.
- [ ] **Phase 6: Fetch User Library & Playlists** - Hooking up the Sidebar and Home logic to `/me` endpoints.
- [ ] **Phase 7: Spotify Web Playback SDK** - Integrating the player script, taking over device state, and streaming.

## Phase Details

### Phase 5: Spotify Web API Authentication
**Goal**: Users can log into the app with their Spotify account and we hold a valid access token.
**Depends on**: Milestone 1.0 (Completed)
**Requirements**: [AUTH-01, AUTH-02, AUTH-03]
**Success Criteria**:
  1. A "Login with Spotify" button redirects to the authorization gateway.
  2. The application handles the callback securely.
  3. The user's name and image display in the header automatically.

### Phase 6: Fetch User Library & Playlists
**Goal**: Swap static mock playlists out for the logged-in user's authentic Spotify data history.
**Depends on**: Phase 5
**Requirements**: [DATA-01, DATA-02, DATA-03]
**Success Criteria**:
  1. Sidebar shows a list of the user's saved/favorited playlists.
  2. Clicking a playlist queries the API `/v1/playlists/{id}`.
  3. The track list correctly parses Spotify objects into our `TrackRow` components.

### Phase 7: Spotify Web Playback SDK
**Goal**: Render the official Spotify embedded player script and synchronize its events to the Zustand globals.
**Depends on**: Phase 6
**Requirements**: [SDK-01, SDK-02, SDK-03, SDK-04]
**Success Criteria**:
  1. The browser registers a new "Spotify Connection Device" attached to the user account.
  2. Pressing play successfully pipes encrypted audio directly to the browser node.
  3. Pausing, seeking, and skipping update the central PlayerBar UI without regressions.
