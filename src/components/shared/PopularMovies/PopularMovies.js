import React, { useState } from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./PopularMovies.css"
import { LOW_SIZE_IMG_URL } from '../../../constants/endpoints';
import MoviePage from '../../MoviePage/MoviePage';

export default function PopularMovies({ movies, buttonName }) {
const [isMovie,setIsMovie]=useState(false)
  const [movie, setMovie] = useState(null);
  const handleClick = (e) => {
    const movie = movies.find(item => item.id === +e.currentTarget.dataset.id);
    setMovie (movie);
    setIsMovie(true);
  };

  return (
    <div className="popular-movie">
      {isMovie ? <MoviePage movie={movie} /> : null}
      <button className="name-category">
        {buttonName}
      </button>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={9}
      >
        {movies.map((item) => {
          return (
            <SwiperSlide>
              <div
                data-id={item.id}
                className="popular-movie__slide"
                onClick={handleClick}
              >
                <img src={LOW_SIZE_IMG_URL + item.poster_path}></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
