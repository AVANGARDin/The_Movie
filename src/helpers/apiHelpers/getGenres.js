import axios from "axios";

export function getGenres(endpoint) {
  const results = axios
    .get(endpoint)
    .then(function (response) {
      // handle success
      return response.data.genres;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return results;
}
