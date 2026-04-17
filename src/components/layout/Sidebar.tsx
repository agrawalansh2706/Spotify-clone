'use client';
import React from 'react';
import Link from 'next/link';
import { Home, Search, Library, Plus } from 'lucide-react';
import { mockPlaylists } from '@/data/mockData';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();

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
            {mockPlaylists.map((playlist) => (
              <li key={playlist.id}>
                <Link
                  href={`/playlist/${playlist.id}`}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800/50 transition-colors cursor-pointer group"
                >
                  <img src={playlist.coverUrl} alt="" className="w-12 h-12 rounded object-cover shadow-[0_4px_12px_rgba(0,0,0,0.5)]" />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-white truncate">{playlist.name}</span>
                    <span className="text-neutral-400 text-sm truncate">Playlist • {playlist.owner}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {session ? (
        <div className="mt-2 bg-[#121212] rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {session.user?.image ? (
              <img src={session.user.image} alt="" className="w-10 h-10 rounded-full" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">?</div>
            )}
            <span className="font-bold text-white max-w-[100px] truncate">{session.user?.name}</span>
          </div>
          <button onClick={() => signOut()} className="text-xs font-bold text-neutral-400 hover:text-white">
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
