# Phase 6: Fetch User Library & Playlists - Context

<domain>
## Phase Boundary
Replace hardcoded mock data elements (Mock Playlists, Mock Tracks) from Phase 3 with API calls mapping directly to Spotify's Web API (`https://api.spotify.com/v1`).
</domain>

<decisions>
## Implementation Decisions

### API Fetch Patterns
- We rely on `useSession()` from `next-auth/react` to acquire the `accessToken`.
- Define a generic isomorphic fetch utility `fetchWebApi(endpoint: string, method: string, body?: any)` ensuring Authorization headers exist.

### Sidebar Integration
- Query `GET /me/playlists` and map to `playlist.id`, `playlist.name`, `playlist.images[0].url`, and `playlist.owner.display_name`.
- Fall back to standard styling while preserving responsive structure.

### Home Grid Integration
- Query `GET /me/top/tracks` or `GET /me/playlists` as the Home data populator.

### Playlist Details
- Modify `src/app/playlist/[id]/page.tsx` to query `GET /playlists/{id}` directly from the Spotify API.
- Use `TrackRow` to parse the Spotify track shape (Spotify includes `duration_ms`, `album.images`, `artists`, etc. format the times accordingly).

### Security
- Since this is a client-rendered environment wrapping around an interaction layer, data fetching inside `useEffect` or Server components (using `getServerSession`) is perfectly valid. For UI snappiness and ease of passing Zustand state, prefer client-rendered SWR or `useEffect` loops with a loading skeleton.
</decisions>
