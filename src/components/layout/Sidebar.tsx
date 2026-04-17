'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library } from 'lucide-react';
import { mockPlaylists } from '@/data/mockData';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full gap-2 text-sm max-h-full">
      {/* Main Nav */}
      <div className="rounded-lg p-4 flex flex-col gap-1" style={{ background: '#121212' }}>
        <Link
          href="/"
          className={`flex items-center gap-3 px-2 py-2 rounded font-semibold transition-colors ${
            pathname === '/' ? 'text-white' : 'text-[#b3b3b3] hover:text-white'
          }`}
        >
          <Home size={24} />
          Home
        </Link>
        <Link
          href="/search"
          className={`flex items-center gap-3 px-2 py-2 rounded font-semibold transition-colors ${
            pathname === '/search' ? 'text-white' : 'text-[#b3b3b3] hover:text-white'
          }`}
        >
          <Search size={24} />
          Search
        </Link>
      </div>

      {/* Library */}
      <div className="rounded-lg p-4 flex flex-col gap-1 flex-1 overflow-y-auto" style={{ background: '#121212' }}>
        <div className="flex items-center gap-3 px-2 mb-3">
          <Library size={24} className="text-[#b3b3b3]" />
          <span className="font-semibold text-[#b3b3b3]">Your Library</span>
        </div>
        {mockPlaylists.map((playlist) => (
          <Link
            key={playlist.id}
            href={`/playlist/${playlist.id}`}
            className={`flex items-center gap-3 px-2 py-2 rounded transition-colors ${
              pathname === `/playlist/${playlist.id}` ? 'bg-[#282828] text-white' : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            <div
              className="w-10 h-10 rounded flex-shrink-0"
              style={{ background: playlist.coverColor }}
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">{playlist.name}</p>
              <p className="text-xs text-[#b3b3b3] truncate">Playlist</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
