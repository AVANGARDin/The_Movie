import React, { useState } from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./PopularMovies.css"
import { LOW_SIZE_IMG_URL } from '../../../constants/endpoints';

const user = "Dima";
const handleClick = (e) => {
  axios.post("http://localhost:3050/", { user, videoId: e.currentTarget.dataset.id }).then((response) => {
    console.log(response);
  }).catch(response=>console.log(response.status))
  // console.log("CLidICCCK", e.currentTarget.dataset.id)
}

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
