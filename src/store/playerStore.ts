import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  uri: string;
  duration: number;
}

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;   // seconds elapsed
  duration: number;   // total seconds
  volume: number;     // 0-1
  
  // Spotify SDK Specific
  deviceId: string | null;
  player: Spotify.Player | null;
  isReady: boolean;
  playbackError: string | null;

  setPlayer: (player: Spotify.Player) => void;
  setDeviceId: (id: string) => void;
  setReady: (ready: boolean) => void;
  syncState: (state: Spotify.PlaybackState | null) => void;

  play: (track: Track) => void;
  pause: () => void;
  toggle: () => void;
  setProgress: (seconds: number) => void;
  setDuration: (seconds: number) => void;
  setVolume: (val: number) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  progress: 0,
  duration: 0,
  volume: 0.8,

  deviceId: null,
  player: null,
  isReady: false,
  playbackError: null,

  setPlayer: (player) => set({ player }),
  setDeviceId: (deviceId) => set({ deviceId }),
  setReady: (isReady) => set({ isReady }),
  
  syncState: (state) => {
    if (!state) return;
    
    const track = state.track_window.current_track;
    if (track) {
      set({
        currentTrack: {
          id: track.id || '',
          title: track.name,
          artist: track.artists.map(a => a.name).join(', '),
          album: track.album.name,
          albumArt: track.album.images[0]?.url || '',
          uri: track.uri,
          duration: Math.floor(state.duration / 1000)
        },
        isPlaying: !state.paused,
        progress: Math.floor(state.position / 1000),
        duration: Math.floor(state.duration / 1000)
      });
    }
  },

  play: (track) => {
    // If we have a player, we instruct it or use the API manually in the caller
    // For now we just update state
    set({ currentTrack: track, isPlaying: true });
  },
  
  pause: () => {
    const { player } = get();
    if (player) {
      player.pause();
    }
    set({ isPlaying: false });
  },
  
  toggle: () => {
    const { player } = get();
    if (player) {
      player.togglePlay();
    }
  },
  
  setProgress: (seconds) => {
    const { player } = get();
    if (player) {
      player.seek(seconds * 1000);
    }
    set({ progress: seconds });
  },
  
  setDuration: (seconds) => set({ duration: seconds }),
  
  setVolume: (val) => {
    const { player } = get();
    const cleanVal = Math.max(0, Math.min(1, val));
    if (player) {
      player.setVolume(cleanVal);
    }
    set({ volume: cleanVal });
  },
}));
