import React, { useEffect } from 'react';

function Imdb({ id }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <span className="imdbRatingPlugin" data-title={id} data-style="p1">
      <a href={`https://www.imdb.com/title/${id}/?ref_=plg_rt_1`}>
        <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="IMDb Rating" />
      </a>
    </span>
  );
}

export default Imdb;