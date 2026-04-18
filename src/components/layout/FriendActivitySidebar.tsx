'use client';
import React, { useState, useEffect } from 'react';
import { X, UserPlus } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { FriendRow } from './FriendRow';

const MOCK_FRIENDS = [
  {
    id: '1',
    name: 'Anansh',
    lastActive: '3m',
    currentTrack: {
      title: 'Starboy',
      artist: 'The Weeknd',
      id: 'track_1',
      type: 'track' as const
    }
  },
  {
    id: '2',
    name: 'Sarah',
    lastActive: '5m',
    currentTrack: {
      title: 'Espresso',
      artist: 'Sabrina Carpenter',
      id: 'track_2',
      type: 'track' as const
    }
  },
  {
    id: '3',
    name: 'Michael',
    lastActive: '12m',
    currentTrack: {
      title: 'Daily Mix 1',
      artist: 'Spotify',
      id: 'playlist_1',
      type: 'playlist' as const
    }
  }
];

export const FriendActivitySidebar = () => {
  const { isSocialSidebarOpen, toggleSocialSidebar } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isSocialSidebarOpen) return null;

  return (
    <div 
      className="hidden xl:flex w-[280px] h-full bg-[#121212] flex-col overflow-hidden border-l border-white/5"
      style={{
        background: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="p-4 flex items-center justify-between border-b border-white/5">
        <span className="font-bold text-white text-[15px]">Friend Activity</span>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-white">
            <UserPlus size={18} />
          </button>
          <button 
            onClick={toggleSocialSidebar}
            className="p-1 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
        {MOCK_FRIENDS.map((friend) => (
          <FriendRow key={friend.id} friend={friend} />
        ))}
      </div>

      <div className="p-4 bg-white/5 border-t border-white/5">
        <p className="text-[11px] text-neutral-400 text-center">
          Go to Settings &gt; Privacy and enable "Share my listening activity" to see your friends.
        </p>
      </div>
    </div>
  );
};
