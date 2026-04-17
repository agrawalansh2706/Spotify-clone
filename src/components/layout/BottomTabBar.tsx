import React from 'react';
import { Home, Search, Library } from 'lucide-react';

export default function BottomTabBar() {
  return (
    <div className="flex flex-row justify-around items-center p-3 text-muted">
      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-foreground transition">
        <Home size={24} />
        <span className="text-xs">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-foreground transition">
        <Search size={24} />
        <span className="text-xs">Search</span>
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-foreground transition">
        <Library size={24} />
        <span className="text-xs">Library</span>
      </div>
    </div>
  );
}
