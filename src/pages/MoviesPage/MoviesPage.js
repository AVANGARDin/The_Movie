import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { LOW_SIZE_IMG_URL } from "../../constants/endpoints";
import { getGenreMovies } from '../../helpers/apiHelpers/getGenreMovies';
import { deleteIncorrectData } from "../../helpers/deleteIncorrectData";
import "./MoviesPage.css"

export default function MoviesPage({ movieType }) {
  const { id, genreName } = useParams();
  let [page, setPage] = useState(1);
  const [videos, setVideos] = useState([]);

  const scrollHandler = () => {
    const cont = document.querySelector("html");
    if (cont.scrollHeight - cont.scrollTop <= window.innerHeight + 5) {
      setPage(page++);
    }
  };

  useEffect(() => {
    (async () => {
      const videos = await getGenreMovies(movieType, id, page);
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
      <div className="movies-container_title">{genreName.replace(/_/g," ")}</div>
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
