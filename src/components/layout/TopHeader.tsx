'use client';
import React from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { useSession, signIn, signOut } from "next-auth/react";

export const TopHeader = () => {
  const { toggleSocialSidebar, isSocialSidebarOpen } = useUIStore();
  const { data: session } = useSession();

  return (
    <header className="h-16 w-full flex items-center justify-between px-6 sticky top-0 z-40 bg-[rgba(18,18,18,0.7)] backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neutral-400 cursor-not-allowed">
          <ChevronLeft size={24} />
        </button>
        <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-neutral-400 cursor-not-allowed">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSocialSidebar}
          className={`hidden xl:flex w-8 h-8 rounded-full items-center justify-center transition-colors ${
            isSocialSidebarOpen ? 'text-[#1db954]' : 'text-neutral-400 hover:text-white'
          }`}
          title="Friend Activity"
        >
          <Users size={20} />
        </button>

        {session ? (
          <div className="flex items-center gap-2 bg-black/50 p-0.5 pr-3 rounded-full hover:bg-neutral-800 transition-colors cursor-default group border border-white/5">
            {session.user?.image ? (
              <img src={session.user.image} className="w-7 h-7 rounded-full shadow-lg" alt="" />
            ) : (
              <div className="w-7 h-7 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] shadow-lg">?</div>
            )}
            <span className="text-xs font-bold text-white truncate max-w-[150px]">{session.user?.name}</span>
          </div>
        ) : (
          <button 
            onClick={() => signIn('spotify')}
            className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform"
          >
            Log in
          </button>
        )}
      </div>
    </header>
  );
};
