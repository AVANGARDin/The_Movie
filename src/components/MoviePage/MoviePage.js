import axios from 'axios';
import React, { useState } from 'react'
import { LOW_SIZE_IMG_URL } from '../../constants/endpoints';
import { genres } from '../../constants/genres';
import "./MoviePage.css"
import ReactPlayer from "react-player";
import Rating from "@mui/material/Rating";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function MoviePage({movie}) {

  const [video, setVideo] = useState(null);

  useState(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
      )
      .then((response) => {
        if(response.data.results.length < 1) return;
        const oficial_trailer = response.data.results.find(
          (item) => item.name === "Official Trailer"
        );
        oficial_trailer
          ? setVideo(`https://www.youtube.com/watch?v=` + oficial_trailer.key)
          : setVideo(
              `https://www.youtube.com/watch?v=` + response.data.results[0].key
          );
      });
  },[])

  console.log(movie)



  return (
    <div className="video-player__container">
      <div className="video-player__description">
        <img
          className="video-player__poster"
          src={LOW_SIZE_IMG_URL + movie.poster_path}
        ></img>
        <div className="video-player__description_info">
          <div className="title">{movie.title || movie.name}</div>
          <div className="genres">
            <ul>
              {movie.genre_ids.map((id) => {
                return <li>{genres.find((item) => item.id === id).name}</li>;
              })}
            </ul>
          </div>
          <div className="overview">{movie.overview}</div>
          <div className="release_date">
            {movie.release_date
              ? `Release date: ${movie.release_date}`
              : `Release date: ${movie.first_air_date}`}
          </div>
          <div className="rate">
            <Rating
              readOnly
              precision={0.5}
              defaultValue={movie.vote_average}
              max={10}
            />
          </div>
        </div>
      </div>
      <ReactPlayer width={"auto"} height={"500px"} controls url={video} />
    </div>
  );
}
