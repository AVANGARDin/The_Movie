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
  const handleClick = (e) => {
    const movie = movies.find(item => item.id === +e.currentTarget.dataset.id);
    console.log("click", "click", movie);
    navigate(`movie/${e.currentTarget.dataset.name}`,
      { state: { id: e.currentTarget.dataset.id, moviType: e.currentTarget.dataset.type } });
  };



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
            <SwiperSlide>
              <div
                data-id={item.id}
                data-type={item.title ? "movie" : "tv"}
                data-name={item.title ? item.title.replace(/\s/g, "") : item.name.replace(" ","")}
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
