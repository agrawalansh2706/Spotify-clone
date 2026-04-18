"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { mockPlaylists } from '@/data/mockData';
import { Play } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { useSession } from "next-auth/react";
import { spotifyApiFetch } from '@/lib/spotify';

export default function HomePage() {
  const { data: session } = useSession();
  const [topItems, setTopItems] = useState<any[]>(mockPlaylists);
  const [madeForYou, setMadeForYou] = useState<any[]>(mockPlaylists);

  useEffect(() => {
    if (session) {
      // Fetch user's own playlists for the top grid
      spotifyApiFetch('/me/playlists?limit=6', session)
        .then(data => {
          if (data && data.items) {
            setTopItems(data.items.map((item: any) => ({
              id: item.id,
              name: item.name,
              coverUrl: item.images?.[0]?.url || 'https://misc.scdn.co/liked-songs/liked-songs-300.png',
              coverColor: '#282828'
            })));
          }
        })
        .catch(console.error);

      // Fetch featured playlists for "Made for you"
      spotifyApiFetch('/browse/featured-playlists?limit=10', session)
        .then(data => {
          if (data && data.playlists && data.playlists.items) {
            setMadeForYou(data.playlists.items.map((item: any) => ({
              id: item.id,
              name: item.name,
              description: item.description || 'Spotify Playlist',
              owner: item.owner?.display_name || 'Spotify',
              coverUrl: item.images?.[0]?.url || 'https://misc.scdn.co/liked-songs/liked-songs-300.png',
              coverColor: '#181818'
            })));
          }
        })
        .catch(console.error);
    } else {
      setTopItems(mockPlaylists.slice(0, 6));
      setMadeForYou(mockPlaylists);
    }
  }, [session]);

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }

  return (
    <PageTransition>
      <div className="p-6 pb-24 h-full overflow-y-auto w-full">
        <h1 className="text-3xl font-bold text-white mb-6 tracking-tight">
          {getGreeting()}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {topItems.map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="group relative flex items-center bg-[#282828] hover:bg-[#3e3e3e] transition-colors rounded overflow-hidden shadow-sm"
            >
              {playlist.coverUrl ? (
                <img src={playlist.coverUrl} className="w-20 h-20 flex-shrink-0 object-cover" alt="" />
              ) : (
                <div className="w-20 h-20 flex-shrink-0" style={{ background: playlist.coverColor }} />
              )}
              <div className="p-4 flex-1">
                <span className="font-bold text-white truncate text-sm md:text-base">{playlist.name}</span>
              </div>
              <div className="absolute right-4 p-3 bg-[#1ed760] rounded-full text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                <Play size={20} fill="black" />
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Made for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {madeForYou.map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="group flex flex-col bg-[#181818] hover:bg-[#282828] transition-colors p-4 rounded-md"
            >
              <div className="relative w-full aspect-square mb-4 rounded-md overflow-hidden shadow-lg">
                {playlist.coverUrl ? (
                  <img src={playlist.coverUrl} className="w-full h-full object-cover" alt="" />
                ) : (
                  <div className="w-full h-full" style={{ background: playlist.coverColor }} />
                )}
                <div className="absolute bottom-2 right-2 p-3 bg-[#1ed760] rounded-full text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                  <Play size={20} fill="black" />
                </div>
              </div>
              <span className="font-bold text-white truncate mb-1 text-sm md:text-base">{playlist.name}</span>
              <span className="text-[#b1b1b1] text-xs font-medium uppercase tracking-wider mb-1">{playlist.owner || 'Spotify'}</span>
              <span className="text-[#b3b3b3] text-xs md:text-sm line-clamp-2 leading-snug">{playlist.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
