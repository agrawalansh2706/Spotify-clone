import { Track } from '@/store/playerStore';

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverColor: string; // CSS gradient color for placeholder art
  tracks: Track[];
}

const BASE_MP3 = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export const mockPlaylists: Playlist[] = [
  {
    id: 'p1',
    name: 'Chill Vibes',
    description: 'The most relaxing tracks to wind down your day.',
    coverColor: 'linear-gradient(135deg, #1db954 0%, #191414 100%)',
    tracks: [
      { id: 't1', title: 'Ocean Drive', artist: 'Duke Dumont', album: 'Chill Vibes', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 234 },
      { id: 't2', title: 'Midnight City', artist: 'M83', album: 'Chill Vibes', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 244 },
      { id: 't3', title: 'Bloom', artist: 'The Paper Kites', album: 'Chill Vibes', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 198 },
      { id: 't4', title: 'Lost in Japan', artist: 'Shawn Mendes', album: 'Chill Vibes', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 191 },
      { id: 't5', title: 'Golden Hour', artist: 'JVKE', album: 'Chill Vibes', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 209 },
      { id: 't6', title: 'Breathe', artist: 'Pink Floyd', album: 'Chill Vibes', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 163 },
      { id: 't7', title: 'Sunset Lover', artist: 'Petit Biscuit', album: 'Chill Vibes', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 255 },
      { id: 't8', title: 'Holocene', artist: 'Bon Iver', album: 'Chill Vibes', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 352 },
    ],
  },
  {
    id: 'p2',
    name: 'Hip-Hop Classics',
    description: 'Timeless hip-hop anthems from the golden era and beyond.',
    coverColor: 'linear-gradient(135deg, #e8a200 0%, #191414 100%)',
    tracks: [
      { id: 't9', title: 'HUMBLE.', artist: 'Kendrick Lamar', album: 'DAMN.', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 177 },
      { id: 't10', title: 'God\'s Plan', artist: 'Drake', album: 'Scorpion', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 198 },
      { id: 't11', title: 'Sicko Mode', artist: 'Travis Scott', album: 'Astroworld', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 312 },
      { id: 't12', title: 'POWER', artist: 'Kanye West', album: 'My Beautiful Dark Twisted Fantasy', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 292 },
      { id: 't13', title: 'Alright', artist: 'Kendrick Lamar', album: 'To Pimp a Butterfly', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 219 },
      { id: 't14', title: 'Paris', artist: 'Jay-Z & Kanye West', album: 'Watch the Throne', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 258 },
      { id: 't15', title: 'Swimming Pools', artist: 'Kendrick Lamar', album: 'good kid, m.A.A.d city', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 313 },
      { id: 't16', title: 'Mask Off', artist: 'Future', album: 'Future', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 201 },
    ],
  },
  {
    id: 'p3',
    name: 'Electronic Pulse',
    description: 'High-energy electronic music to keep you moving.',
    coverColor: 'linear-gradient(135deg, #503acc 0%, #191414 100%)',
    tracks: [
      { id: 't17', title: 'One More Time', artist: 'Daft Punk', album: 'Discovery', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 320 },
      { id: 't18', title: 'Levels', artist: 'Avicii', album: 'True', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 206 },
      { id: 't19', title: 'Strobe', artist: 'deadmau5', album: 'For Lack of a Better Name', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 637 },
      { id: 't20', title: 'Blue (Da Ba Dee)', artist: 'Eiffel 65', album: 'Europop', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 236 },
      { id: 't21', title: 'Around the World', artist: 'Daft Punk', album: 'Homework', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 427 },
      { id: 't22', title: 'Animals', artist: 'Martin Garrix', album: 'Gold Skies', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 210 },
      { id: 't23', title: 'Clarity', artist: 'Zedd', album: 'Clarity', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 268 },
      { id: 't24', title: 'In the Air Tonight', artist: 'Meduza', album: 'Paradise', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 195 },
    ],
  },
  {
    id: 'p4',
    name: 'Indie Folk',
    description: 'Acoustic storytelling and indie melodies.',
    coverColor: 'linear-gradient(135deg, #c0392b 0%, #191414 100%)',
    tracks: [
      { id: 't25', title: 'Ho Hey', artist: 'The Lumineers', album: 'The Lumineers', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 162 },
      { id: 't26', title: 'Little Talks', artist: 'Of Monsters and Men', album: 'My Head Is an Animal', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 265 },
      { id: 't27', title: 'Home', artist: 'Edward Sharpe', album: 'Up from Below', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 315 },
      { id: 't28', title: 'Dog Days Are Over', artist: 'Florence + the Machine', album: 'Lungs', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 249 },
      { id: 't29', title: 'Stubborn Love', artist: 'The Lumineers', album: 'The Lumineers', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 256 },
      { id: 't30', title: 'Skinny Love', artist: 'Bon Iver', album: 'For Emma, Forever Ago', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 195 },
      { id: 't31', title: 'I Will Wait', artist: 'Mumford & Sons', album: 'Babel', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 272 },
      { id: 't32', title: 'Shake It Out', artist: 'Florence + the Machine', album: 'Ceremonials', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 246 },
    ],
  },
  {
    id: 'p5',
    name: 'Pop Hits 2024',
    description: 'The biggest pop songs dominating the charts right now.',
    coverColor: 'linear-gradient(135deg, #e91e8c 0%, #191414 100%)',
    tracks: [
      { id: 't33', title: 'As It Was', artist: 'Harry Styles', album: "Harry's House", albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 167 },
      { id: 't34', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 200 },
      { id: 't35', title: 'Flowers', artist: 'Miley Cyrus', album: 'Endless Summer Vacation', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 200 },
      { id: 't36', title: 'Cruel Summer', artist: 'Taylor Swift', album: 'Lover', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 178 },
      { id: 't37', title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 200 },
      { id: 't38', title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 203 },
      { id: 't39', title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', album: 'F*CK LOVE 3', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 141 },
      { id: 't40', title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 238 },
    ],
  },
  {
    id: 'p6',
    name: 'Morning Focus',
    description: 'Instrumental tracks to sharpen your mind.',
    coverColor: 'linear-gradient(135deg, #1a9fbf 0%, #191414 100%)',
    tracks: [
      { id: 't41', title: 'Divenire', artist: 'Ludovico Einaudi', album: 'Divenire', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 374 },
      { id: 't42', title: 'Experience', artist: 'Ludovico Einaudi', album: 'In a Time Lapse', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 345 },
      { id: 't43', title: 'Nuvole Bianche', artist: 'Ludovico Einaudi', album: 'Una Mattina', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 366 },
      { id: 't44', title: 'River Flows in You', artist: 'Yiruma', album: 'First Love', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 211 },
      { id: 't45', title: 'Clair de Lune', artist: 'Debussy', album: 'Suite bergamasque', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 318 },
      { id: 't46', title: 'Comptine d\'un autre été', artist: 'Yann Tiersen', album: 'Amélie OST', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 156 },
      { id: 't47', title: 'The Scientist', artist: 'Coldplay', album: 'A Rush of Blood to the Head', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 309 },
      { id: 't48', title: 'Gymnopedie No.1', artist: 'Erik Satie', album: 'Gymnopédies', albumArt: '/placeholder-art.svg', src: BASE_MP3, duration: 195 },
    ],
  },
];

export function getPlaylistById(id: string): Playlist | undefined {
  return mockPlaylists.find((p) => p.id === id);
}

export function formatDuration(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}
