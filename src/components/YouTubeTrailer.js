import React from 'react';

function YouTubeTrailer({ id }) {
  return ( 
    <iframe src={`https://www.youtube.com/embed/${id}`} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen 
      style={{ width: '100%', height: '400px' }}>
    </iframe>  
  );
}

export default YouTubeTrailer;
