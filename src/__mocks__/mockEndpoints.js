import { BASE_URL } from "../constants/endpoints"
const API_KEY = process.env.REACT_APP_API_KEY;

export const GENRE_MOVIES_ENDPOINT = (movieType, genreId, page = 1) =>
  `${BASE_URL}discover/${movieType}?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`;

export const MOVIE_ENDPOINT = (movieType, id) => `${BASE_URL}${movieType}/${id}?api_key=${API_KEY}`;

export const VIDEOS_ENDPOINT = (movieType, id) => `${BASE_URL}${movieType}/${id}/videos?api_key=${API_KEY}`;

export const POPULAR_MOVIES_ENDPOINT = (endpoint, page) => endpoint+`&page=${page}`;

export const POPULAR_TV_SERIES_ENPOINT = (endpoint, page) => endpoint+`&page=${page}`;
