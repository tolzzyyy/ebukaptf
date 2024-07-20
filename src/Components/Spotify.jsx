import React, { useEffect, useState } from 'react';
import { BsSpotify } from 'react-icons/bs';

// Replace with your Spotify app credentials
const CLIENT_ID = '44eb1916c35a4461948dcce94ca21338';
const REDIRECT_URI = 'http://localhost:3000';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPES = 'user-read-recently-played';

const Spotify = () => {
  const [accessToken, setAccessToken] = useState('BQBkaFiawzqijjEKftKb6Q1YJdG6FOY4dTY3yQub6B0F3b6XnnTdAOaQwtKwXgEW2kRz_VWTiV9yNngnii6WJbR-UtJds1WjiNwvs3zcuLxfT1yk_EwfI6TMYVoTQ1fByi3XPZSbk6JCUlCsWvJDneIxru5lAJWcNGD78JHCRHhRP-yoEQTFGweuk5mzyto4r8XBsGgK52DE');
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecentTracks(accessToken);
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
    <div className='max-w-[1640px] h-full font-monument-extended mt-10 mx-auto p-4 px-[30px] lg:px-[40px] xl:px-[65px]'>
      <h1></h1>
      {error && <p>{error}</p>}
      <ul className="track-lis md:w-[500px] w-[300px] relative rounded-[15px]  p-4  bg-gradient-to-r from-[#092D2F] to-[#093A46] ">
        {tracks.map((track) => (
          <li key={track.track.id} className="track-item items-center gap-[12px] md:gap-4 flex">
            <img  src={track.track.album.images[0].url} alt={track.track.name} className="md:w-[132px] w-[80px] " />
            <div className="track-info flex flex-col gap-2 md:gap-3 w-full mb-4">
              <h1 className='text-white text-[10px] border-b-[1px] py-3 space-y-3'>Last Played</h1>
              <h2 className="track-name text-white text-[9px]  md:text-[14px]">{track.track.name}</h2>
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


// BQDX4dI7ULsHfPZk9ZSxsYRzPVvBKRoMHxWO_n1qBS_Sxq-zcH4HwKFTiPV2QoobIHKUG2EZksRTRlLCNgv80YzkPi0139AB0mz-fiZJRrSntan13eCg25ZHB0l63oXXJ90HjVGcW4osXMsigJEEUuY2J1jtBtzXlm-g_je1SLxm-uUqlYB_eHB1ZTjDVbLnROlR8tADta2b