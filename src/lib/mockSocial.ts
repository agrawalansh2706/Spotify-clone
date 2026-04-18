export interface FriendActivity {
  id: string;
  name: string;
  image?: string;
  lastActive: string;
  currentTrack?: {
    title: string;
    artist: string;
    id: string;
    type: 'track' | 'playlist' | 'album';
  };
}

export const MOCK_FRIENDS_SEED: FriendActivity[] = [
  { id: '1', name: 'Anansh', lastActive: '2m', image: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Sarah', lastActive: '5m', image: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', name: 'Michael', lastActive: '12m', image: 'https://i.pravatar.cc/150?u=3' },
  { id: '4', name: 'Emily', lastActive: '1h', image: 'https://i.pravatar.cc/150?u=4' },
  { id: '5', name: 'David', lastActive: '3h', image: 'https://i.pravatar.cc/150?u=5' },
];

export const MOCK_TRACKS = [
  { title: 'Starboy', artist: 'The Weeknd', id: '37i9dQZF1DXcBWIGoYBM5M', type: 'track' },
  { title: 'Blinding Lights', artist: 'The Weeknd', id: '37i9dQZF1DXcBWIGoYBM5M', type: 'track' },
  { title: 'Espresso', artist: 'Sabrina Carpenter', id: '37i9dQZF1DXcBWIGoYBM5M', type: 'track' },
  { title: 'Kill Bill', artist: 'SZA', id: '37i9dQZF1DXcBWIGoYBM5M', type: 'track' },
  { title: 'Daily Mix 1', artist: 'Spotify', id: '37i9dQZF1E35Nshz626GfG', type: 'playlist' },
  { title: 'Today\'s Top Hits', artist: 'Spotify', id: '37i9dQZF1DXcBWIGoYBM5M', type: 'playlist' },
];

export function getRandomActivity(): FriendActivity['currentTrack'] {
  const track = MOCK_TRACKS[Math.floor(Math.random() * MOCK_TRACKS.length)];
  return track as FriendActivity['currentTrack'];
}
