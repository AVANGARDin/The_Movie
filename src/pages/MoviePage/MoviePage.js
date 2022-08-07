import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LOW_SIZE_IMG_URL } from "../../constants/endpoints";
import { genres } from '../../constants/genres';
import "./MoviePage.css"
import ReactPlayer from "react-player";
import Rating from "@mui/material/Rating";
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function MoviePage({ movieType }) {
  const { id } = useParams() ;
  const [movieInfo, setMovieInfo] = useState();
  const [video, setVideo] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${movieType}/${id}/videos?api_key=${API_KEY}`
      )
      .then((response) => {
        if (response.data.results.length < 1) return;

        const oficial_trailer = response.data.results.find(
          (item) => item.name === "Official Trailer"
        );
        oficial_trailer
          ? setVideo(`https://www.youtube.com/watch?v=` + oficial_trailer.key)
          : setVideo(
              `https://www.youtube.com/watch?v=` + response.data.results[0].key
            );
      }).catch(() => {
      });
  }, [])
  
    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/${movieType}/${id}?api_key=${API_KEY}`
        )
        .then((response) => {
          setMovieInfo(response.data);
        });
    }, []);


    return movieInfo ? (
      <div className="video-player__container">
        <div className="video-player__description">
          <img
            className="video-player__poster"
            src={LOW_SIZE_IMG_URL + movieInfo.poster_path}
          ></img>
          <div className="video-player__description_info">
            <div className="title">{movieInfo.title || movieInfo.name}</div>
            <div className="genres">
              <ul>
                {movieInfo.genres.map((genre) => {
                  return (
                    <li key={genre.id}>
                      {genres.find((item) => item.id === genre.id).name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="overview">{movieInfo.overview}</div>
            <div className="release_date">
              {movieInfo.release_date
                ? `Release date: ${movieInfo.release_date}`
                : `Release date: ${movieInfo.first_air_date}`}
            </div>
            <div className="rate">
              <Rating
                readOnly
                precision={0.5}
                defaultValue={movieInfo.vote_average}
                max={10}
              />
            </div>
          </div>
        </div>
        {video ? (
          <ReactPlayer width={"auto"} height={"500px"} controls url={video} />
        ) : (
          <Box padding={12} color={"white"}>
            The video will appear soon. Choose another.
          </Box>
        )}
      </div>
    ) : (
      <div>Loading</div>
    );
}
