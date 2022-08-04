import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./PopularMovies.css"
import { LOW_SIZE_IMG_URL } from '../../../constants/endpoints';
import { useNavigate } from 'react-router-dom';


export default function PopularMovies({ movies, buttonName }) {
  const navigate = useNavigate();

  return (
    <div className="popular-movie">
      <button className="name-category">{buttonName}</button>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={9}
      >
        {movies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="popular-movie__slide"
                onClick={() => {
                  navigate(
                    item.title
                      ? `movie/${item.id}/${item.title.replace(/\s/g, "_")}`
                      : `tv/${item.id}/${item.name.replace(/\s/g, "_")}`
                  );
                }}
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
