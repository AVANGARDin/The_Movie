import axios from "axios";
import { deleteIncorrectData } from "../deleteIncorrectData";

export function getPopular(endpoint, page = 1) {
  const results = axios
    .get(endpoint+`&page=${page}`)
    .then(function (response) {
      // handle success
      return deleteIncorrectData(response.data.results)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return results;
}
