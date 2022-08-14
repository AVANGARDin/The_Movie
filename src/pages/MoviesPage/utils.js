export function ratingSort(arr) {
  let copyArray = [...arr];
  return copyArray.sort((a, b) => (a.vote_average > b.vote_average ? -1 : 1));
}

export function newestSort(arr) {
  let copyArray = [...arr];
  return copyArray.sort((a, b) => {
      return new Date(a.first_air_date || a.release_date) >
        new Date(b.first_air_date || b.release_date)
        ? -1
        : 1;
  })
}

