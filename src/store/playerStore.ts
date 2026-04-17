import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  src: string;
  duration: number;
}

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;   // seconds elapsed
  duration: number;   // total seconds
  volume: number;     // 0-1

  play: (track: Track) => void;
  pause: () => void;
  toggle: () => void;
  setProgress: (seconds: number) => void;
  setDuration: (seconds: number) => void;
  setVolume: (val: number) => void;
}

export const MOCK_TRACK: Track = {
  id: '1',
  title: 'SoundHelix Song 1',
  artist: 'T. Schürger',
  albumArt: '/placeholder-art.svg',
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  duration: 372,
};

export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: MOCK_TRACK,
  isPlaying: false,
  progress: 0,
  duration: MOCK_TRACK.duration,
  volume: 0.8,

  play: (track) => set({ currentTrack: track, isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setProgress: (seconds) => set({ progress: seconds }),
  setDuration: (seconds) => set({ duration: seconds }),
  setVolume: (val) => set({ volume: Math.max(0, Math.min(1, val)) }),
}));
