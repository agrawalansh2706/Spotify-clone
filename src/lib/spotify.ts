export async function spotifyApiFetch(endpoint: string, session: any) {
  if (!session?.user?.accessToken) {
    throw new Error("No access token provided");
  }

  const res = await fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Spotify API error: ${res.statusText}`);
  }

  return res.json();
}
