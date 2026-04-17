import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import PlayerBar from "@/components/layout/PlayerBar";
import BottomTabBar from "@/components/layout/BottomTabBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A pixel-perfect Spotify UI showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body style={{ background: '#000', color: '#fff', height: '100vh', overflow: 'hidden' }}>
        <div
          className="h-screen w-full flex flex-col md:grid md:grid-cols-[280px_1fr] md:grid-rows-[1fr_90px]"
          style={{ background: '#000' }}
        >
          {/* Sidebar — desktop only */}
          <div className="hidden md:block overflow-hidden p-2" style={{ background: '#000' }}>
            <Sidebar />
          </div>

          {/* Main content area */}
          <main
            className="flex-1 md:overflow-y-auto rounded-lg relative overflow-hidden md:mt-2 md:mr-2"
            id="main-scroll-area"
            style={{ background: '#121212' }}
          >
            {children}
          </main>

          {/* Player bar — desktop */}
          <div className="hidden md:flex md:col-span-2" style={{ background: '#000' }}>
            <PlayerBar />
          </div>

          {/* Bottom tab bar — mobile */}
          <div className="block md:hidden fixed bottom-0 w-full z-50">
            <BottomTabBar />
          </div>
        </div>
      </body>
    </html>
  );
}
