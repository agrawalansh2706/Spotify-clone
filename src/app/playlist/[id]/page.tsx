"use client";
import React, { useEffect, useState, use } from 'react';
import { notFound } from 'next/navigation';
import { getPlaylistById } from '@/data/mockData';
import { Clock3 } from 'lucide-react';
import TrackRow from '@/components/TrackRow';
import PlaylistHeader from '@/components/PlaylistHeader';
import PageTransition from '@/components/PageTransition';
import { useSession } from "next-auth/react";
import { spotifyApiFetch } from '@/lib/spotify';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PlaylistPage({ params }: PageProps) {
  const { id } = use(params);
  const { data: session } = useSession();
  const [playlist, setPlaylist] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) {
      spotifyApiFetch(`/playlists/${id}`, session)
        .then(data => {
          if (data) {
            // Map Spotify Playlist format to our expected format
            const mappedPlaylist = {
              id: data.id,
              name: data.name,
              description: data.description,
              coverUrl: data.images?.[0]?.url,
              coverColor: '#1ed760', // Could extract color from image later
              owner: data.owner?.display_name,
              tracks: data.tracks?.items?.map((item: any) => ({
                id: item.track.id,
                title: item.track.name,
                artist: item.track.artists.map((a: any) => a.name).join(', '),
                album: item.track.album.name,
                coverUrl: item.track.album.images?.[0]?.url,
                duration: Math.floor(item.track.duration_ms / 1000),
                audioUrl: item.track.preview_url // For real play back we will use web playback SDK later
              })).filter((t: any) => t.id) || []
            };
            setPlaylist(mappedPlaylist);
          }
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setPlaylist(getPlaylistById(id)); // Fallback
          setLoading(false);
        });
    } else {
      setPlaylist(getPlaylistById(id));
      setLoading(false);
    }
  }, [id, session]);

  if (loading) {
    return <div className="p-8 text-[#b3b3b3]">Loading...</div>;
  }

  if (!playlist) notFound();

  const totalSeconds = playlist.tracks.reduce((acc: number, t: any) => acc + t.duration, 0);
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
              {playlist.tracks.map((track: any, i: number) => (
                <TrackRow key={`${track.id}-${i}`} track={track} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
