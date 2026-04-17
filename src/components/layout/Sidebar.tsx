import React from 'react';

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full text-muted">
      <div className="p-4">
        <h1 className="text-xl font-bold text-foreground">Spotify Clone</h1>
      </div>
      <div className="p-4 bg-card rounded-md flex-1">
        <p>Your Library</p>
      </div>
    </div>
  );
}
