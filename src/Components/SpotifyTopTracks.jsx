import React from 'react';

const SpotifyTopTracks = () => {
  const playlistId = '1xHOd2NLNJALePegNAnrjd';

  return (
    <div>
     
      <div className='flex relative items-center justify-center top-[100px] md:justify-end  px-[65px]'>
      <iframe className='absolute w-[350px] h-[140px] md:h-[200px]'
        title="Spotify Embed: Recommendation Playlist"
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
       
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      </div>
    </div>
  );
};

export default SpotifyTopTracks;
