import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export function getGenreMovies(movieType, genreId, page = 1) {
  const results = axios
    .get(
      `https://api.themoviedb.org/3/discover/${movieType}?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
    )
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return results;
}
