'use client';
import React from 'react';
import { Music2 } from 'lucide-react';

interface FriendRowProps {
  friend: {
    id: string;
    name: string;
    image?: string;
    currentTrack?: {
      title: string;
      artist: string;
      id: string;
      type: 'track' | 'playlist' | 'album';
    };
    lastActive: string;
  };
}

export const FriendRow: React.FC<FriendRowProps> = ({ friend }) => {
  return (
    <div className="flex gap-4 p-2 rounded-md hover:bg-white/5 transition-all group cursor-pointer">
      <div className="relative flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden shadow-lg border border-white/5">
          {friend.image ? (
            <img src={friend.image} alt={friend.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-500 font-bold">
              {friend.name[0]}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#1db954] border-2 border-[#121212] rounded-full shadow-sm" />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-[#f6f6f6] truncate group-hover:text-white">
            {friend.name}
          </span>
          <span className="text-[10px] text-neutral-500 whitespace-nowrap">
            {friend.lastActive}
          </span>
        </div>

        {friend.currentTrack ? (
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-xs text-neutral-300 truncate hover:text-white hover:underline cursor-pointer">
                {friend.currentTrack.title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-xs text-neutral-500 truncate hover:text-white hover:underline cursor-pointer">
                {friend.currentTrack.artist}
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 text-neutral-500">
              <Music2 className="w-3 h-3" />
              <span className="text-[10px] truncate">
                {friend.currentTrack.type === 'playlist' ? 'Playlist' : 'Single'}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-xs text-neutral-500">Offline</span>
        )}
      </div>
    </div>
  );
};
