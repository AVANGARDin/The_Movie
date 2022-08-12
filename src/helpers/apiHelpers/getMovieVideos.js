import axios from "axios";
import { BASE_URL } from "../../constants/endpoints";

const API_KEY = process.env.REACT_APP_API_KEY;

export function getMovieVideos(movieType, id) {
  const results = axios
    .get(`${BASE_URL}${movieType}/${id}/videos?api_key=${API_KEY}`)
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
