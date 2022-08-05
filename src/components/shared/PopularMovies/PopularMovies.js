import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./PopularMovies.css"
import { LOW_SIZE_IMG_URL } from '../../../constants/endpoints';
import { Link, useNavigate } from 'react-router-dom';
import { POPULAR_MOVIES, POPULAR_TV_SERIES } from '../../../constants/routes';

export default function PopularMovies({ movies, buttonName, link}) {
  const navigate = useNavigate();


  return (
    <div className="popular-movie">
      <Link to={link}>
        <button className="name-category">{buttonName}</button>
      </Link>
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
                      ? `${POPULAR_MOVIES}/${item.id}/${item.title.replace( /\s/g, "_" )}`
                      : `${POPULAR_TV_SERIES}/${item.id}/${item.name.replace( /\s/g, "_" )}`
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
