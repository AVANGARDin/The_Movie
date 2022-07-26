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
import GenreItem from '../../components/shared/GenreItem/GenreItem';
import { Link } from 'react-router-dom';
import { MOVIE_GENRES, POPULAR_MOVIES, POPULAR_TV_SERIES } from "../../constants/routes"
import { useSelector } from 'react-redux';

export default function MainPage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isPopularMovies, setIsPopularMovies] = useState(false);
  const [popularTVSeries, setPopularTVSeries] = useState([]);
  const myList = useSelector(state=>state.myList.myList);
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
      const genresFromApi = await getGenres(endpoints.movieGenres);
      const result = genres.filter((genre) =>
        genresFromApi.some((item) => item.id === genre.id)
      );
      setMovieGenres(result);
    })();
  }, []);

  let random = Math.floor(Math.random() * popularMovies.length);

  return (
    <main>
      <div className="image__container">
        {isPopularMovies ? (
          <img
            src = {ORIGINAL_IMG_URL + popularMovies[random].backdrop_path}
            alt="background img"
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
            <Link
              className="play-button-link"
              to={
                popularMovies.length
                  ? `${POPULAR_MOVIES}/${popularMovies[random].id}/${popularMovies[random].title.replace(/\s/g,"_")}`
                  : "/"
              }
            >
              <PlayButton />
            </Link>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={4}
          spaceBetween={70}
        >
          {movieGenres.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link to={`${MOVIE_GENRES}/${item.id}/${item.name}`}>
                  <GenreItem item={item} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <PopularMovies
          movies={popularMovies}
          buttonName="Popular Movies"
          link={POPULAR_MOVIES}
        />
        <PopularMovies
          movies={popularTVSeries}
          buttonName="Popular TV Series"
          link={POPULAR_TV_SERIES}
        />
        {myList.length ? (
          <PopularMovies movies={myList} buttonName="My List" link="myList" />
        ) : null}
      </div>
    </main>
  );
}
