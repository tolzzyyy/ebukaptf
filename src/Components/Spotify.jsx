import React, { useEffect, useState } from 'react';
import { BsSpotify } from 'react-icons/bs';

// Replace with your Spotify app credentials
const clientId = '44eb1916c35a4461948dcce94ca21338';
const redirectUri = 'http://localhost:3000/spotify'; // Ensure this matches the redirect URI in your Spotify app settings
const scopes = 'user-read-recently-played'; // Scope required to access recently played tracks

const Spotify = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('spotify_access_token'));
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAccessTokenFromHash = () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      return params.get('access_token');
    };

    if (!accessToken) {
      const token = getAccessTokenFromHash();
      if (token) {
        localStorage.setItem('spotify_access_token', token);
        setAccessToken(token);
        window.location.hash = ''; // Clear the hash from the URL for cleaner navigation
      } else {
        window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
      }
    } else {
      fetchRecentTracks(accessToken);
    }
  }, [accessToken]);

  const fetchRecentTracks = async (token) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error.message);
      }

      const data = await response.json();
      setTracks(data.items);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='relative'>
   
      {error && <p>{error}</p>}
      <ul className="track-lis md:w-[500px] flex mx-auto items-center w-[300px]    rounded-[15px]  p-4  bg-gradient-to-r from-[#092D2F] to-[#093A46] ">
        {tracks.map((track) => (
          <li key={track.track.id} className="track-item w-full items-center gap-[12px] md:gap-4 flex">
            <img src={track.track.album.images[0].url} alt={track.track.name} className="md:w-[132px] w-[80px]" />
            <div className="track-info flex flex-col gap-2 md:gap-3 w-full mb-4">
              <h1 className='text-white text-[10px] border-b-[1px] py-3 space-y-3'>Last Played</h1>
              <h2 className="track-name text-white text-[9px] md:text-[14px]">{track.track.name}</h2>
              <p className="track-artists text-white text-[7px] md:text-[11px]">{track.track.artists.map(artist => artist.name).join(', ')}</p>
            </div>
          </li>
        ))}
        <div className='text-right absolute right-0 bottom-2 md:bottom-[16px] px-4 flex justify-end'>
          <BsSpotify size={23} className='text-white' />
        </div>
      </ul>
    </div>
  );
};

export default Spotify;
