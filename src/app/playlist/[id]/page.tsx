import React from 'react';
import { notFound } from 'next/navigation';
import { getPlaylistById } from '@/data/mockData';
import { Play, Clock3 } from 'lucide-react';
import TrackRow from '@/components/TrackRow';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PlaylistPage({ params }: PageProps) {
  const { id } = await params;
  const playlist = getPlaylistById(id);

  if (!playlist) {
    notFound();
  }

  // Calculate total duration roughly
  const totalSeconds = playlist.tracks.reduce((acc, t) => acc + t.duration, 0);
  const mins = Math.floor(totalSeconds / 60);

  return (
    <div className="h-full overflow-y-auto w-full relative">
      {/* Header gradient background */}
      <div
        className="absolute top-0 left-0 w-full h-[400px] opacity-40 z-0 pointer-events-none"
        style={{
          background: playlist.coverColor,
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 p-6 pb-24">
        {/* Playlist Header */}
        <div className="flex flex-col md:flex-row items-end gap-6 mb-8 mt-12">
          <div
            className="w-48 h-48 md:w-56 md:h-56 shadow-2xl flex-shrink-0"
            style={{ background: playlist.coverColor }}
          />
          <div className="flex flex-col gap-2 relative z-10 w-full">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Playlist</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4">
              {playlist.name}
            </h1>
            <p className="text-[#b3b3b3] text-sm md:text-base font-medium">{playlist.description}</p>
            <div className="flex items-center gap-1 text-sm font-medium mt-1">
              <span className="text-white hover:underline cursor-pointer">Spotify</span>
              <span className="text-[#b3b3b3] before:content-['•'] before:mx-1">{playlist.tracks.length} songs,</span>
              <span className="text-[#b3b3b3]">{mins} min</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center gap-6 mb-8 mt-4">
          <button className="w-14 h-14 bg-[#1ed760] rounded-full flex items-center justify-center hover:scale-105 transition hover:bg-[#1fdf64] shadow-lg">
            <Play size={24} fill="black" className="ml-1" />
          </button>
        </div>

        {/* Tracks Table */}
        <div className="mt-8">
          {/* Table Header */}
          <div className="grid grid-cols-[16px_1fr_1fr_minmax(120px,1fr)] md:grid-cols-[16px_minmax(120px,4fr)_2fr_120px] gap-4 px-4 py-2 border-b border-[#ffffff1a] text-[#b3b3b3] text-sm font-medium mb-4 sticky top-0 bg-[#121212] z-20">
            <div className="text-right">#</div>
            <div>Title</div>
            <div className="hidden md:block">Album</div>
            <div className="flex justify-end"><Clock3 size={16} /></div>
          </div>

          <div className="flex flex-col">
            {playlist.tracks.map((track, i) => (
              <TrackRow key={track.id} track={track} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
