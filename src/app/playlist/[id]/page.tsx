import React from 'react';
import { notFound } from 'next/navigation';
import { getPlaylistById } from '@/data/mockData';
import { Clock3 } from 'lucide-react';
import TrackRow from '@/components/TrackRow';
import PlaylistHeader from '@/components/PlaylistHeader';
import PageTransition from '@/components/PageTransition';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PlaylistPage({ params }: PageProps) {
  const { id } = await params;
  const playlist = getPlaylistById(id);
  if (!playlist) notFound();

  const totalSeconds = playlist.tracks.reduce((acc, t) => acc + t.duration, 0);
  const totalMins = Math.floor(totalSeconds / 60);

  return (
    <PageTransition>
      <div className="h-full overflow-y-auto w-full relative">
        {/* Ambient background gradient */}
        <div
          className="absolute top-0 left-0 w-full h-[500px] opacity-30 z-0 pointer-events-none"
          style={{
            background: playlist.coverColor,
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />

        <div className="relative z-10 pt-8">
          <PlaylistHeader playlist={playlist} totalMins={totalMins} />

          {/* Tracks Table */}
          <div className="px-6 pb-24">
            <div className="grid grid-cols-[16px_1fr_1fr_minmax(120px,1fr)] md:grid-cols-[16px_minmax(120px,4fr)_2fr_120px] gap-4 px-4 py-2 border-b border-[#ffffff1a] text-[#b3b3b3] text-sm font-medium mb-4">
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
    </PageTransition>
  );
}
