'use client';
import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { Playlist } from '@/data/mockData';
import { usePlayerStore } from '@/store/playerStore';

interface PlaylistHeaderProps {
  playlist: Playlist;
  totalMins: number;
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '18, 18, 18';
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}

export default function PlaylistHeader({ playlist, totalMins }: PlaylistHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [headerBg, setHeaderBg] = useState('transparent');
  const { play } = usePlayerStore();

  // Extract first hex color from coverColor gradient string
  const baseColor = playlist.coverColor.match(/#[a-fA-F0-9]{6}/)?.[0] ?? '#121212';

  useEffect(() => {
    const scrollEl = document.getElementById('main-scroll-area');
    if (!scrollEl) return;

    const handleScroll = () => {
      const offset = scrollEl.scrollTop;
      const threshold = 80;
      if (offset > threshold) {
        setScrolled(true);
        const opacity = Math.min((offset - threshold) / 80, 0.92);
        setHeaderBg(`rgba(${hexToRgb(baseColor)}, ${opacity})`);
      } else {
        setScrolled(false);
        setHeaderBg('transparent');
      }
    };

    scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, [baseColor]);

  const handlePlayAll = () => {
    if (playlist.tracks.length > 0) {
      play(playlist.tracks[0]);
    }
  };

  return (
    <>
      {/* Sticky scroll-linked header bar */}
      <div
        className="sticky top-0 z-30 w-full px-6 py-4 flex items-center gap-4"
        style={{
          background: headerBg,
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'background 0.3s ease',
          minHeight: '64px',
        }}
      >
        {scrolled && (
          <h2 className="text-xl font-extrabold text-white tracking-tight truncate animate-in fade-in">
            {playlist.name}
          </h2>
        )}
      </div>

      {/* Hero section — pulled up to overlap sticky bar */}
      <div className="px-6 pb-6 flex flex-col md:flex-row items-end gap-6 -mt-16">
        <div
          className="w-48 h-48 md:w-56 md:h-56 shadow-2xl flex-shrink-0 rounded-sm"
          style={{ background: playlist.coverColor }}
        />
        <div className="flex flex-col gap-2 w-full">
          <span className="text-xs font-bold text-white uppercase tracking-wider">Playlist</span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter">
            {playlist.name}
          </h1>
          <p className="text-[#b3b3b3] text-sm font-medium mt-1">{playlist.description}</p>
          <div className="flex items-center gap-1 text-sm font-medium mt-1">
            <span className="text-white font-bold">Spotify</span>
            <span className="text-[#b3b3b3] mx-1">•</span>
            <span className="text-[#b3b3b3]">{playlist.tracks.length} songs,</span>
            <span className="text-[#b3b3b3] ml-1">{totalMins} min</span>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-6 pb-6 flex items-center gap-6 mt-6">
        <button
          onClick={handlePlayAll}
          className="w-14 h-14 bg-[#1ed760] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#1fdf64] shadow-lg"
          style={{ transition: 'transform 0.15s ease, background 0.15s ease' }}
          aria-label="Play all tracks"
        >
          <Play size={24} fill="black" className="ml-1" />
        </button>
      </div>
    </>
  );
}
