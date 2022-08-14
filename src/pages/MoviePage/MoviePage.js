import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LOW_SIZE_IMG_URL, VIDEO_BASE_URL } from "../../constants/endpoints";
import { genres } from '../../constants/genres';
import "./MoviePage.css"
import ReactPlayer from "react-player";
import Rating from "@mui/material/Rating";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { getMovie } from '../../helpers/apiHelpers/getMovie';
import { getMovieVideos } from '../../helpers/apiHelpers/getMovieVideos';
import { addVideo, removeVideo } from '../../redux/myListReduser';
import { useDispatch, useSelector } from 'react-redux';
import { getObjectFromLocalStorage } from '../LoginPage/utils';
import { Alert } from '@mui/material';
import styled from '@emotion/styled';

const StyledAlert = styled(Alert)({
  width: "250px",
  height: "32px",
  lineHeight:"0",
  alignItems: "center",
  marginLeft: "10px",
  borderRadius: "10px",
})

const API_KEY = process.env.REACT_APP_API_KEY;


export default function MoviePage({ movieType }) {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [video, setVideo] = useState();
  const dispatch = useDispatch();
  const isLogged = useSelector(state=>state.isLogged.isLogged);
  const userLogin = useSelector(state=>state.isLogged.userLogin);
  const myList = useSelector(state=>state.myList.myList);
  const [addAlert, setAddAlert] = useState(false);
  const [removeAlert, setRemoveAlert] = useState(false);
  const [inMyList, setInMyList] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getMovieVideos(movieType, id);
        if (data.results.length < 1) return;

        const oficial_trailer = data.results.find(
          (item) => item.name === "Official Trailer"
        );
        oficial_trailer
          ? setVideo(VIDEO_BASE_URL + oficial_trailer.key)
          : setVideo(VIDEO_BASE_URL + data.results[0].key);
    })()
  }, [])
  

  useEffect(() => {
    (async () => {
      const result = await getMovie(movieType, id);
      setMovieInfo(result);
    })()
      axios
        .get(
          `https://api.themoviedb.org/3/${movieType}/${id}?api_key=${API_KEY}`
        )
        .then((response) => {
          setMovieInfo(response.data);
          setInMyList(myList.some(item=> item.id === response.data.id));
        });

    }, []);

    useEffect(() => {
      if(movieInfo){
        setInMyList(myList.some(item => item.id === movieInfo.id));
      }
    }, [myList]);

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
            <div className='add-remove__block'>
            {isLogged && !inMyList &&<div className='add-list'>
              <Box className="add-list_button" onClick={()=>{
              const myList = getObjectFromLocalStorage(userLogin).myList;
              myList.push(movieInfo);
              localStorage.setItem(userLogin, JSON.stringify({
                                  "name": "Roman",
                                  "password": "12345",
                                  "myList": myList
                              }))
              dispatch(addVideo(movieInfo));
              setRemoveAlert(prev=>prev =false);
              setAddAlert(prev => prev = true);
              setTimeout(()=>setAddAlert(prev => prev = false),2000)
              }
            }>
            <AddCircleOutlineIcon /> My List
            </Box>
            </div>
            }
            {isLogged && inMyList && <div className='add-list'>
              <Box className="add-list_button" onClick={()=>{
              dispatch(removeVideo(movieInfo));
              setInMyList(prev => prev = false);
              setAddAlert(prev=> prev = false);
              setRemoveAlert(prev => prev = true);
              setTimeout(()=>setRemoveAlert(prev => prev = false),2000)
              }
            }>
            <RemoveCircleOutlineIcon /> My List
            </Box>
            </div>
            }
            {addAlert ? <StyledAlert severity="success" width="200px">Movie successfully added</StyledAlert> : null}
            {removeAlert ? <StyledAlert severity="success" width="200px">Movie successfully removed</StyledAlert> : null}
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
      <div>Loading...</div>
    );
}
