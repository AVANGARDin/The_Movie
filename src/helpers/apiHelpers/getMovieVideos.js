import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export function getMovieVideos(movieType, id) {
  const results = axios
    .get(
      `https://api.themoviedb.org/3/${movieType}/${id}/videos?api_key=${API_KEY}`
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
