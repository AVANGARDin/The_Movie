import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation"
import "./MainPage.css"
import { genres } from '../../constants/genres';
import { endpoints, ORIGINAL_IMG_URL } from "../../constants/endpoints";
import { getPopular } from '../../helpers/apiHelpers/getPopular';
import { getGenres } from "../../helpers/apiHelpers/getGenres";
import PopularMovies from "../../components/shared/PopularMovies/PopularMovies";
import PlayButton from './PlayButton';

export default function MainPage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isPopularMovies, setIsPopularMovies] = useState(false);
  const [popularTVSeries, setPopularTVSeries] = useState([]);
  const [myList, setMyList] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await getPopular(endpoints.popularMovies);
      setPopularMovies(movies);
      setIsPopularMovies(true);
    })();
    (async () => {
      const series = await getPopular(endpoints.popularTVSeries);
      setPopularTVSeries(series);
    })();
    (async () => {
      const genres = await getGenres(endpoints.movieGenres);
      setMovieGenres(genres);
    })();
  }, []);

  const mouseOverHandler = (e) => {
    e.target
      .closest(".category__player")
      .childNodes[0].play();
  }

  const mouseOutHandler = (e) => {
    e.target
      .closest(".category__player")
      .childNodes[0].pause();
  };

  const playerPauseHandler = (e) => {
    e.target.currentTime = 0;
  };


  let random = Math.floor(Math.random() * popularMovies.length);

  return (
    <main>
      <div className="image__container">
        {isPopularMovies ? (
          <img
            src={ORIGINAL_IMG_URL + popularMovies[random].backdrop_path}
          ></img>
        ) : (
          <div>Loading img</div>
        )}
        <div className="image__overlay"></div>
      </div>
      <div className="movies__container">
        <div className="random_movie">
          <div className="image__overlay_about-film">
            <div className="about-film__title">
              {popularMovies.length
                ? popularMovies[random].title || popularMovies[random].name
                : null}
            </div>
            <div className="about-film__overview">
              {popularMovies.length ? popularMovies[random].overview : null}
            </div>
          </div>
          <div className="play-button">
            <PlayButton />
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={4}
          spaceBetween={70}
        >
          {genres.map((item) => {
            if (!movieGenres.some((category) => category.id === item.id))
              return;
            return (
              <SwiperSlide>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
        <PopularMovies movies={popularMovies} buttonName="Popular Movies" />
        <PopularMovies
          movies={popularTVSeries}
          buttonName="Popular TV Series"
        />
        {myList.length ? (
          <PopularMovies movies={myList} buttonName="My List" />
        ) : null}
      </div>
    </main>
  );
}
