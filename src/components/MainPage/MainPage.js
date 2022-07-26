import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation"
import "./MainPage.css"
import { genres } from '../../genres';
import { BASE_IMG_URL, getGenres, getVideos } from "../../helpers/apiHelper";

export default function MainPage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [categories, setCategories] = useState([]);

  let random = Math.floor(Math.random() * popularMovies.length);

  useEffect(() => {
    getVideos("movie", setPopularMovies);
    getGenres("movie", setCategories);
  }, []);

  return (
    <main>
      <div className="image__container">
        <img
          src={
            popularMovies.length
              ? BASE_IMG_URL + popularMovies[random].backdrop_path
              : null
          }
        ></img>
        <div className="image_overlay"></div>
      </div>
      <div className="movies__container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={60}
          slidesPerView={4}
        >
          {genres.map((item) => {
            if (!categories.some((category) => category.id === item.id)) return;
            return (
              <SwiperSlide>
                <div className="cont__player">
                  <video loop muted src={item.src}></video>
                  <div
                    className="category"
                    onMouseOver={(e) => {
                      e.target.closest(".cont__player").childNodes[0].play();
                    }}
                    onMouseOut={(e) => {
                      e.target.closest(
                        ".cont__player"
                      ).childNodes[0].currentTime = 0;
                      e.target.closest(".cont__player").childNodes[0].pause();
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </main>
  );
}
