import { checkData } from "../checkData";

const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_MOVIE_URL = `https://api.themoviedb.org/3/movie`;
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
// const GENRE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;

export function getVideos(movie, store) {
  fetch(`https://api.themoviedb.org/3/${movie}/popular?api_key=${API_KEY}`)
    .then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(Error("Failed to load"))
    )
    .then((response) => {
      store(checkData(response.results));
    });
}

export function getGenres(movie, store) {
  fetch(`https://api.themoviedb.org/3/genre/${movie}/list?api_key=${API_KEY}`)
    .then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(Error("Failed to load"))
    )
    .then((response) => {
      store(response.genres);
    });
}