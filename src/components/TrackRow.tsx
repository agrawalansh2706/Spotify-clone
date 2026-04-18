'use client';
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Track, usePlayerStore } from '@/store/playerStore';
import { formatDuration } from '@/data/mockData';

interface TrackRowProps {
  track: Track;
  index: number;
}

import { useSession } from "next-auth/react";
import { spotifyApiFetch } from '@/lib/spotify';

export default function TrackRow({ track, index }: TrackRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { data: session } = useSession();
  const { currentTrack, isPlaying, toggle, deviceId } = usePlayerStore();

  const isCurrentTrack = currentTrack?.id === track.id;

  const handlePlayClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCurrentTrack) {
      toggle();
    } else if (deviceId && session && track.uri) {
      try {
        await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
          method: 'PUT',
          body: JSON.stringify({ uris: [track.uri] }),
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        });
      } catch (err) {
        console.error("Playback failed", err);
      }
    }
  };

  return (
    <div
      className="group grid grid-cols-[16px_1fr_1fr_minmax(120px,1fr)] md:grid-cols-[16px_minmax(120px,4fr)_2fr_120px] gap-4 px-4 py-2 hover:bg-[#ffffff1a] rounded-md transition-colors cursor-pointer text-sm text-[#b3b3b3] items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={(e: any) => handlePlayClick(e)}
    >
      {/* 1. Track Number / Play icon / Equilizer */}
      <div className="flex items-center justify-end w-4 h-4">
        {isHovered ? (
          <button onClick={handlePlayClick} className="text-white">
            {isCurrentTrack && isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
          </button>
        ) : isCurrentTrack ? (
          isPlaying ? (
            <div className="flex items-end justify-between w-3 h-3 gap-[1px]">
              <div className="w-[3px] bg-[#1ed760] animate-bounce" style={{ animationDuration: '0.8s' }} />
              <div className="w-[3px] bg-[#1ed760] animate-bounce" style={{ animationDuration: '0.5s' }} />
              <div className="w-[3px] bg-[#1ed760] animate-bounce" style={{ animationDuration: '0.6s' }} />
            </div>
          ) : (
            <span className="text-[#1ed760] font-bold text-xs">{index + 1}</span>
          )
        ) : (
          <span className="tabular-nums">{index + 1}</span>
        )}
      </div>

      {/* 2. Title and Artist */}
      <div className="flex flex-col min-w-0 pr-4">
        <span className={`font-medium truncate ${isCurrentTrack ? 'text-[#1ed760]' : 'text-white'}`}>
          {track.title}
        </span>
        <span className="truncate group-hover:text-white transition-colors">{track.artist}</span>
      </div>

      {/* 3. Album */}
      <div className="hidden md:block min-w-0 pr-4">
        <span className="truncate group-hover:text-white transition-colors">{track.album}</span>
      </div>

      {/* 4. Duration */}
      <div className="text-right">
        {formatDuration(track.duration)}
      </div>
    </div>
  );
}
