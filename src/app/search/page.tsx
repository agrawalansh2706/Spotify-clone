"use client";

import React from 'react';
import PageTransition from '@/components/PageTransition';
import { Search as SearchIcon } from 'lucide-react';

export default function SearchPage() {
  return (
    <PageTransition>
      <div className="p-6 h-full flex flex-col items-center justify-center text-neutral-400">
        <SearchIcon size={64} className="mb-4 opacity-20" />
        <h1 className="text-2xl font-bold text-white mb-2">Search</h1>
        <p className="max-w-md text-center">
          Searching for songs, artists, and playlists will be available in the next update (Milestone 3.0).
        </p>
        <div className="mt-8 relative w-full max-w-lg">
           <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={20} />
           <input 
             type="text" 
             placeholder="What do you want to listen to?" 
             disabled
             className="w-full bg-[#242424] rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder-neutral-500 cursor-not-allowed"
           />
        </div>
      </div>
    </PageTransition>
  );
}
