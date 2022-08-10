export const ORIGINAL_IMG_URL = "https://image.tmdb.org/t/p/original";
export const LOW_SIZE_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const VIDEO_BASE_URL = "https://www.youtube.com/watch?v=";
export const BASE_URL = "https://api.themoviedb.org/3/"

const API_KEY = process.env.REACT_APP_API_KEY;


export const endpoints = {
  popularMovies: `${BASE_URL}movie/popular?api_key=${API_KEY}`,
  popularTVSeries: `${BASE_URL}tv/popular?api_key=${API_KEY}`,
  movieGenres: `${BASE_URL}genre/movie/list?api_key=${API_KEY}`,
  tvSeriesGenres: `${BASE_URL}genre/tv/list?api_key=${API_KEY}`,
};