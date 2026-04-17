import React from 'react';

export default function PlayerBar() {
  return (
    <div className="h-[90px] w-full flex items-center justify-between px-4">
      <div className="w-1/3 flex items-center">
        {/* Track Info Placeholder */}
        <div className="w-14 h-14 bg-card rounded-md mr-4"></div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold hover:underline cursor-pointer">Track Name</span>
          <span className="text-xs text-muted hover:underline cursor-pointer">Artist Name</span>
        </div>
      </div>
      
      <div className="w-1/3 flex flex-col items-center justify-center">
        <div className="flex items-center gap-6 mb-2">
          {/* Controls Placeholder */}
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition">
            ▶
          </div>
        </div>
        <div className="w-full h-1 bg-border rounded-full flex items-center group cursor-pointer">
          <div className="h-full bg-foreground w-1/3 rounded-full group-hover:bg-primary transition"></div>
        </div>
      </div>
      
      <div className="w-1/3 flex items-center justify-end">
        {/* Volume/Extras Placeholder */}
        <div className="w-24 h-1 bg-border rounded-full flex items-center group cursor-pointer">
          <div className="h-full bg-foreground w-2/3 rounded-full group-hover:bg-primary transition"></div>
        </div>
      </div>
    </div>
  );
}
