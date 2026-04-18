"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { usePlayerStore } from "@/store/playerStore";

export default function SpotifyPlayer() {
  const { data: session } = useSession();
  const setPlayer = usePlayerStore((state) => state.setPlayer);
  const setDeviceId = usePlayerStore((state) => state.setDeviceId);
  const setReady = usePlayerStore((state) => state.setReady);
  const syncState = usePlayerStore((state) => state.syncState);

  useEffect(() => {
    if (!session?.user?.accessToken) return;

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Spotify Clone Web Player",
        getOAuthToken: (cb: (token: string) => void) => {
          cb(session.user.accessToken as string);
        },
        volume: 0.8,
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
        setReady(true);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
        setReady(false);
      });

      player.addListener("player_state_changed", (state) => {
        syncState(state);
      });

      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });

      player.connect();
      setPlayer(player);
    };

    return () => {
      // Disconnect handled if needed, usually survives navigation in SPAs.
    };
  }, [session, setPlayer, setDeviceId, setReady, syncState]);

  return (
    <>
      <Script src="https://sdk.scdn.co/spotify-player.js" strategy="lazyOnload" />
    </>
  );
}
