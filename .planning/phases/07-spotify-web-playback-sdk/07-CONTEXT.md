# Phase 7: Spotify Web Playback SDK - Context

<domain>
## Phase Boundary
Integrate the official Spotify Web Playback SDK. We will replace the native HTML5 `<audio>` engine managed by Zustand with the Spotify Web Player instance. We need to load the SDK script, initialize the player with the session token, and synchronize player state back to Zustand so our PlayerBar and track rows react correctly.
</domain>

<decisions>
## Implementation Decisions

### Player Script Load
- Next.js `Script` tag or manual DOM injection in a dedicated `SpotifyPlayer` client component.

### Zustand Integration
- Update `playerStore.ts` to hold a reference to the `Spotify.Player` instance and device ID.
- Create an action to initialize the player once the SDK is ready.
- Listen to `player.addListener('player_state_changed')` to update `currentTrack`, `isPlaying`, etc.

### Playback Control
- When clicking "play" on a track, instead of setting local state, we will call `PUT /me/player/play` using `spotifyApiFetch` targeting our `deviceId` with the track URI.
- Pause/Resume and Seeking will use the `player.pause()`, `player.resume()`, and `player.seek()` methods.

### Constraints
- The Spotify Web Playback SDK strictly requires Spotify Premium. Free users will receive an `ACCOUNT_ERROR`. We should catch this and display a fallback or warning.
- Playback requires the user to interact with the DOM first (autoplay policy).
</decisions>
