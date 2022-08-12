import React, { useState, useEffect } from "react";
import { LOW_SIZE_IMG_URL } from "../../constants/endpoints";
import NotFoundPage from "../NotFoundPage/NotFoundPage"
import { Rating } from "@mui/material";
import { newestSort, ratingSort } from "../MoviesPage/utils";
import { useSelector } from "react-redux";

export default function MyListPage() {
  let [sort, setSort] = useState("Popularity");
  let myList = useSelector(state=>state.myList.myList);
  const [videos, setVideos] = useState([]);
  const [sortedVideos, setSortedVideos] = useState([]);
  const isLogged = useSelector(state=>state.isLogged.isLogged)

  useEffect(() => {
      setVideos(myList);
  }, [myList]);

  useEffect(() => {
    if (sort === "Newest") {
        setSortedVideos(newestSort(videos));
    } else if (sort === "Rating") {
        setSortedVideos(ratingSort(videos));
    } else {
        setSortedVideos(videos);
    }
  }, [videos, sort]);

  if(!videos.length && isLogged === false){
    return <div className="movies-container">You must login first.</div>
  }

  if(!videos.length && isLogged === true){
    return <div className="movies-container">Add movie to your list.</div>
  }

  return (
    <div className="movies-container">
      <div className="movies-container_title">
        <div>My List</div>
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
      </div>
      <div className="movies-container__videos">
        {sortedVideos ? (
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
          <NotFoundPage />
        )}
      </div>
    </div>
  );
}
