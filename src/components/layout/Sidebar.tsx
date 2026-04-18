'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, Search, Library, Plus } from 'lucide-react';
import { mockPlaylists } from '@/data/mockData';
import { useSession, signIn, signOut } from "next-auth/react";
import { spotifyApiFetch } from '@/lib/spotify';

export default function Sidebar() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState<any[]>(mockPlaylists);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (session && mounted) {
      spotifyApiFetch('/me/playlists', session)
        .then((data) => {
          if (data && data.items) {
            setPlaylists(data.items.map((item: any) => ({
              id: item.id,
              name: item.name,
              coverUrl: item.images?.[0]?.url || 'https://misc.scdn.co/liked-songs/liked-songs-300.png',
              owner: item.owner?.display_name || 'Spotify',
            })));
          }
        })
        .catch(console.error);
    } else {
      setPlaylists(mockPlaylists);
    }
  }, [session, mounted]);

  if (!mounted) return <div className="w-full h-full bg-black rounded-lg" />;

  return (
    <div className="w-full h-full flex flex-col gap-2 relative">
      {/* Top Navigation Block */}
      <div className="bg-[#121212] rounded-lg p-4 flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
          <Home className="w-6 h-6" />
          <span className="font-bold">Home</span>
        </Link>
        <Link href="/search" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
          <Search className="w-6 h-6" />
          <span className="font-bold">Search</span>
        </Link>
      </div>

      {/* Library Block */}
      <div className="bg-[#121212] rounded-lg flex-1 flex flex-col overflow-hidden relative">
        <div className="p-4 flex items-center justify-between text-neutral-400 hover:text-white transition-colors cursor-pointer">
          <div className="flex items-center gap-4">
            <Library className="w-6 h-6" />
            <span className="font-bold">Your Library</span>
          </div>
          <Plus className="w-5 h-5 hover:bg-neutral-800 rounded-full p-0.5" />
        </div>
        
        {/* Playlists Menu */}
        <div className="flex-1 overflow-y-auto px-2 pb-4">
          <ul className="flex flex-col gap-1">
            {playlists.map((playlist) => (
              <li key={playlist.id}>
                <Link
                  href={`/playlist/${playlist.id}`}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800/50 transition-colors cursor-pointer group"
                >
                  <img src={playlist.coverUrl} alt="" className="w-12 h-12 rounded object-cover shadow-[0_4px_12px_rgba(0,0,0,0.5)]" />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-white text-sm font-medium truncate">{playlist.name}</span>
                    <span className="text-neutral-400 text-xs truncate">Playlist • {playlist.owner}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {session ? (
        <div className="mt-2 bg-[#121212] rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            {session.user?.image ? (
              <img src={session.user.image} alt="" className="w-10 h-10 rounded-full shrink-0" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">?</div>
            )}
            <span className="font-bold text-sm text-white truncate">{session.user?.name}</span>
          </div>
          <button onClick={() => signOut()} className="text-xs font-bold text-neutral-400 hover:text-white shrink-0">
            Log out
          </button>
        </div>
      ) : (
        <button 
          onClick={() => signIn('spotify')}
          className="mt-2 w-full py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
        >
          Log in with Spotify
        </button>
      )}
    </div>
  );
}
