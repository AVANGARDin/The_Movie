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
console.log(popularMovies)
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
            </svg>
          </div>
        </div>
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
                <div className="category__player">
                  <video loop muted src={item.src}></video>
                  <div
                    className="category"
                    onMouseOver={(e) => {
                      e.target
                        .closest(".category__player")
                        .childNodes[0].play();
                    }}
                    onMouseOut={(e) => {
                      e.target.closest(
                        ".category__player"
                      ).childNodes[0].currentTime = 0;
                      e.target
                        .closest(".category__player")
                        .childNodes[0].pause();
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
