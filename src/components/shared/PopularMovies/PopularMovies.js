import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./PopularMovies.css"

export default function PopularMovies({ movies, buttonName }) {
  return (
    <div className="popular-movie">
      <button className="name-category">
        {buttonName}
      </button>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={7}
      >
        {movies.map((item) => {
          return (
            <SwiperSlide>
              <div className="popular-movie__slide">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + item.poster_path}
                ></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
