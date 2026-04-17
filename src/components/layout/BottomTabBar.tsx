'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library } from 'lucide-react';

const tabs = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/search', label: 'Search', Icon: Search },
  { href: '/library', label: 'Library', Icon: Library },
];

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <div
      className="flex flex-row justify-around items-center px-2 py-3 w-full"
      style={{
        background: 'rgba(18, 18, 18, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {tabs.map(({ href, label, Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 cursor-pointer min-w-[60px]"
            style={{ color: isActive ? '#ffffff' : '#b3b3b3' }}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 1.8} />
            <span className="text-[10px] font-semibold tracking-wide">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
