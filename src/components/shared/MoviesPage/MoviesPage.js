import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { LOW_SIZE_IMG_URL } from "../../../constants/endpoints";
import { getGenreMovies } from '../../../helpers/apiHelpers/getGenreMovies';
import { deleteIncorrectData } from "../../../helpers/deleteIncorrectData";
import "./MoviesPage.css"

export default function MoviesPage() {
  const location = useLocation();
  const params = location.pathname.split("/");
  let [page,setPage] = useState(1);
  const [videos, setVideos] = useState([]);

  const scrollHandler = () => {
    const cont = document.querySelector("html");
    if (cont.scrollHeight - cont.scrollTop <= window.innerHeight+5) {
      setPage(page++);
    }
  }
console.log(videos)
    useEffect(() => {
      (async () => {
        const videos = await getGenreMovies(
          params[1],
          params[params.length - 1],
          page
        );
        const result = deleteIncorrectData(videos.results);
        setVideos((prev) => prev.concat(result));
      })();
    }, [page]);
  
  useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => document.removeEventListener("scroll", scrollHandler);
      }, []);
  
  return (
    <div className="movies-container">
      <div className="movies-container_title">{params[2]}</div>
      <div className="movies-container__videos">
        {videos ? (
          videos.map((video) => {
            return (
              <div className="movies-container__item">
                <img src={LOW_SIZE_IMG_URL + video.poster_path}></img>
              </div>
            );
          })
        ) : (
          <div>Page not found</div>
        )}
      </div>
    </div>
  );
}
