import { genres } from "../../constants/genres";

export function genresSort(arr, genreId) {
  let copyArray = [...arr];
  return copyArray.filter((item) =>
    item.genre_ids.some((id) => id+"" === genreId)
  );
}