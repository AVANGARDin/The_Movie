import React, { useEffect, useState } from 'react'
import "./GenresPage.css"
import { genres } from '../../../constants/genres';
import { endpoints } from '../../../constants/endpoints';
import { getGenres } from '../../../helpers/apiHelpers/getGenres';
import { Link } from 'react-router-dom';

  const mouseOverHandler = (e) => {
    e.target.closest(".category__player").childNodes[0].play();
  };

  const mouseOutHandler = (e) => {
    e.target.closest(".category__player").childNodes[0].pause();
  };

  const playerPauseHandler = (e) => {
    e.target.currentTime = 0;
  };

export default function GenresPage({ movieType = "movie" }) {
  const [videoGenres, setVideoGenres] = useState();

  useEffect(() => {
    (async () => {
      const genres = await getGenres(
        endpoints[movieType === "tv" ? "tvSeriesGenres" : "movieGenres"]
      );
      console.log(genres);
      setVideoGenres(genres);
    })();
  }, [movieType]);
  
  return (
    <div className="genres-container">

        {videoGenres
          ? genres.map((item) => {
              if (!videoGenres.some((category) => category.id === item.id))
                return;
              return (
                <Link to={`/${movieType}/${item.name}/${item.id}`}>
                  <div className="category__player">
                    <video
                      loop
                      muted
                      src={item.src}
                      type="video/mp4"
                      onPause={playerPauseHandler}
                    ></video>
                    <div
                      className="category"
                      onMouseOver={mouseOverHandler}
                      onMouseOut={mouseOutHandler}
                    >
                      {item.name}
                    </div>
                  </div>
                </Link>
              );
            })
          : null}

</div>
  );
}
