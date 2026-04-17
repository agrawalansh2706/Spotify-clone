import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import PlayerBar from "@/components/layout/PlayerBar";
import BottomTabBar from "@/components/layout/BottomTabBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A pixel-perfect UI showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <div className="h-screen w-full flex flex-col md:grid md:grid-cols-[280px_1fr] md:grid-rows-[1fr_90px] bg-black">
          <div className="hidden md:block overflow-hidden bg-black w-full h-full p-2">
            <Sidebar />
          </div>
          <main className="flex-1 md:overflow-y-auto bg-card md:mt-2 md:mr-2 rounded-lg relative overflow-hidden" id="main-scroll-area">
            {children}
          </main>
          <div className="hidden md:block col-span-2 bg-black w-full h-[90px]">
            <PlayerBar />
          </div>
          <div className="block md:hidden bg-black fixed bottom-0 w-full z-50">
            <BottomTabBar />
          </div>
        </div>
      </body>
    </html>
  );
}
