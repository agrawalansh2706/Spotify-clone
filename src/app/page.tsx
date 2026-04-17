import React from 'react';
import Link from 'next/link';
import { mockPlaylists } from '@/data/mockData';
import { Play } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

export default function HomePage() {
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
          {mockPlaylists.slice(0, 6).map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="group relative flex items-center bg-[#282828] hover:bg-[#3e3e3e] transition-colors rounded overflow-hidden shadow-sm"
            >
              <div
                className="w-20 h-20 flex-shrink-0"
                style={{ background: playlist.coverColor }}
              />
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
          {mockPlaylists.map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="group flex flex-col bg-[#181818] hover:bg-[#282828] transition-colors p-4 rounded-md"
            >
              <div className="relative w-full aspect-square mb-4 rounded-md overflow-hidden shadow-lg">
                <div
                  className="w-full h-full"
                  style={{ background: playlist.coverColor }}
                />
                <div className="absolute bottom-2 right-2 p-3 bg-[#1ed760] rounded-full text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                  <Play size={20} fill="black" />
                </div>
              </div>
              <span className="font-bold text-white truncate mb-1 text-sm md:text-base">{playlist.name}</span>
              <span className="text-[#b3b3b3] text-xs md:text-sm line-clamp-2 leading-snug">{playlist.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
