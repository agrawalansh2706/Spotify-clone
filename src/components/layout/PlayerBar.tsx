'use client';
import React, { useState, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from 'lucide-react';
import { usePlayerStore } from '@/store/playerStore';
import { useAudioEngine } from '@/hooks/useAudioEngine';
import Image from 'next/image';

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function Slider({
  value,
  max,
  onChange,
  className = '',
}: {
  value: number;
  max: number;
  onChange: (v: number) => void;
  className?: string;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  const displayValue = isDragging ? localValue : value;
  const percent = max > 0 ? (displayValue / max) * 100 : 0;

  return (
    <div className={`relative flex items-center group ${className}`}>
      <input
        type="range"
        min={0}
        max={max}
        step={0.01}
        value={displayValue}
        onChange={(e) => setLocalValue(Number(e.target.value))}
        onPointerDown={() => {
          setIsDragging(true);
          setLocalValue(value);
        }}
        onPointerUp={(e) => {
          setIsDragging(false);
          onChange(Number((e.target as HTMLInputElement).value));
        }}
        className="w-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #1ed760 ${percent}%, #535353 ${percent}%)`,
          borderRadius: '9999px',
          height: '4px',
          outline: 'none',
          border: 'none',
        }}
      />
    </div>
  );
}

export default function PlayerBar() {
  const audioRef = useAudioEngine();
  const {
    currentTrack,
    isPlaying,
    progress,
    duration,
    volume,
    toggle,
    setProgress,
    setVolume,
  } = usePlayerStore();

  const handleSeek = useCallback(
    (val: number) => {
      if (audioRef.current) audioRef.current.currentTime = val;
      setProgress(val);
    },
    [audioRef, setProgress]
  );

  const handleVolume = useCallback(
    (val: number) => {
      setVolume(val);
    },
    [setVolume]
  );

  return (
    <div className="h-[90px] w-full flex items-center justify-between px-4 select-none border-t border-[#282828]">
      {/* Left: Track Info */}
      <div className="w-1/3 flex items-center gap-3 min-w-0">
        <div className="relative w-14 h-14 flex-shrink-0 bg-[#282828] rounded overflow-hidden">
          {currentTrack?.albumArt && (
            <Image
              src={currentTrack.albumArt}
              alt="Album art"
              fill
              className="object-cover"
            />
          )}
        </div>
        {currentTrack && (
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate hover:underline cursor-pointer">
              {currentTrack.title}
            </p>
            <p className="text-xs text-[#b3b3b3] truncate hover:underline cursor-pointer">
              {currentTrack.artist}
            </p>
          </div>
        )}
        <button
          className="ml-1 text-[#b3b3b3] hover:text-white transition-colors flex-shrink-0"
          aria-label="Like track"
        >
          <Heart size={16} />
        </button>
      </div>

      {/* Center: Controls + Progress */}
      <div className="w-1/3 flex flex-col items-center gap-2">
        <div className="flex items-center gap-5">
          <button
            className="text-[#b3b3b3] hover:text-white transition-colors"
            aria-label="Shuffle"
          >
            <Shuffle size={16} />
          </button>
          <button
            className="text-[#b3b3b3] hover:text-white transition-colors"
            aria-label="Previous track"
          >
            <SkipBack size={18} />
          </button>
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={16} fill="black" />
            ) : (
              <Play size={16} fill="black" />
            )}
          </button>
          <button
            className="text-[#b3b3b3] hover:text-white transition-colors"
            aria-label="Next track"
          >
            <SkipForward size={18} />
          </button>
          <button
            className="text-[#b3b3b3] hover:text-white transition-colors"
            aria-label="Repeat"
          >
            <Repeat size={16} />
          </button>
        </div>

        <div className="w-full flex items-center gap-2 text-xs text-[#b3b3b3]">
          <span className="w-8 text-right tabular-nums">{formatTime(progress)}</span>
          <Slider
            value={progress}
            max={duration || 1}
            onChange={handleSeek}
            className="flex-1"
          />
          <span className="w-8 tabular-nums">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right: Volume */}
      <div className="w-1/3 flex items-center justify-end gap-2">
        <button
          className="text-[#b3b3b3] hover:text-white transition-colors"
          aria-label="Volume"
        >
          <Volume2 size={16} />
        </button>
        <Slider
          value={volume}
          max={1}
          onChange={handleVolume}
          className="w-28"
        />
      </div>
    </div>
  );
}
