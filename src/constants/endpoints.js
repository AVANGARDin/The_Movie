export const ORIGINAL_IMG_URL = "https://image.tmdb.org/t/p/original";
export const LOW_SIZE_IMG_URL = "https://image.tmdb.org/t/p/w500";

const API_KEY = process.env.REACT_APP_API_KEY;

export const endpoints = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  popularTVSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
  movieGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
  tvSeriesGenres: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`,
};