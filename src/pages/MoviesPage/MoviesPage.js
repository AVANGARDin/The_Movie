import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { LOW_SIZE_IMG_URL } from "../../constants/endpoints";
import { getGenreMovies } from '../../helpers/apiHelpers/getGenreMovies';
import { deleteIncorrectData } from "../../helpers/deleteIncorrectData";
import "./MoviesPage.css"
import { getPopular } from "../../helpers/apiHelpers/getPopular";
import { Button, Rating } from "@mui/material";
import { newestSort, ratingSort } from "./utils";
import GenresSort from "../../components/GenresSort/GenresSort";
import { genresSort } from "../../components/GenresSort/utils";

export default function MoviesPage({ movieType, title, endpoint }) {
  const { genreId, genreName } = useParams();
  let [page, setPage] = useState(1);
  let [sort, setSort] = useState("Popularity");
  let [genre, setGenre] = useState("0");
  const [videos, setVideos] = useState([]);
  const [sortedVideos, setSortedVideos] = useState([]);

  const loadMoreHandler = () => {
    setPage(prev=>++prev);
  };

  useEffect(() => {
    (async () => {
      if (genreName) {
        const videosFromApi = await getGenreMovies(movieType, genreId, page);
        const result = deleteIncorrectData(videosFromApi.results);
        setVideos((prev) => prev.concat(result));
      } else {
        const videos = await getPopular(endpoint, page);
        console.log(videos);
        const result = deleteIncorrectData(videos);
        setVideos((prev) => prev.concat(result));
      }
    })();
  }, [page]);

  useEffect(() => {
    if (sort === "Newest") {
      if (genre === "0") {
        setSortedVideos(newestSort(videos));
      } else {
        const genreVideos = genresSort(videos, genre);
        setSortedVideos(newestSort(genreVideos));
      }
    } else if (sort === "Rating") {
      if (genre === "0") {
        setSortedVideos(ratingSort(videos));
      } else {
        const genreVideos = genresSort(videos, genre);
        setSortedVideos(ratingSort(genreVideos));
      }
    } else {
      if (genre === "0") {
        setSortedVideos(videos);
      } else {
        const genreVideos = genresSort(videos, genre);
        setSortedVideos(genreVideos);
      }
    }
  }, [videos, sort, genre]);

  return (
    <div className="movies-container">
      <div className="movies-container_title">
        <div>{genreName ? genreName.replace(/_/g, " ") : title}</div>
        <div className="sort">
          <div>Sort:</div>
          <select
            id="select"
            name="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Popularity">Popularity</option>
            <option value="Rating">Rating</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
        {!genreName ? <GenresSort onChange={setGenre} /> : null}
      </div>
      <div className="movies-container__videos">
        {sortedVideos.length ? (
          sortedVideos.map((video) => {
            return (
              <div className="movies-container__item" key={video.id}>
                <img src={LOW_SIZE_IMG_URL + video.poster_path}></img>
                <div className="title">{video.title || video.name}</div>
                <div className="release_date">
                  {video.first_air_date
                    ? video.first_air_date
                    : video.release_date}
                </div>
                <Rating
                  size="12px"
                  readOnly
                  precision={0.1}
                  defaultValue={video.vote_average}
                  max={10}
                  sx={{
                    fontSize: "20px",
                  }}
                />
              </div>
            );
          })
        ) : (
          <div>Loading movies ...</div>
        )}
      </div>
      {sortedVideos.length ? <Button
        onClick={loadMoreHandler}
        sx={{
          display: "flex",
          color: "red",
          margin: "30px auto 0",
        }}
      >
        Load more
      </Button> : null}
    </div>
  );
}
