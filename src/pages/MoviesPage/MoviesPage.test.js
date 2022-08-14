import { newestSort, ratingSort } from "./utils";

const movies1 = [
  { vote_average: 1, first_air_date: "2021-7-15" },
  { vote_average: 5, first_air_date: "2022-6-15" },
  { vote_average: 10, first_air_date: "2022-7-16" },
];

const movies2 = [
  { vote_average: 6, release_date: "2000-7-15" },
  { vote_average: 1, release_date: "1990-7-15" },
  { vote_average: 7, release_date: "2021-7-15" },
];

describe("testing sort methods", () => {
  test("shoud return top rated movies 1", () => {
    const result = ratingSort(movies1);

    expect(result).toEqual([
      { vote_average: 10, first_air_date: "2022-7-16" },
      { vote_average: 5, first_air_date: "2022-6-15" },
      { vote_average: 1, first_air_date: "2021-7-15" },
    ]);
  });

    test("shoud return top rated movies 2", () => {
      const result = ratingSort(movies2);
      expect(result).toEqual([
        { vote_average: 7, release_date: "2021-7-15" },
        { vote_average: 6, release_date: "2000-7-15" },
        { vote_average: 1, release_date: "1990-7-15" },
      ]);
    });
  
    test("shoud return newest movies 1", () => {
      const result = newestSort(movies1);

      expect(result).toEqual([
        { vote_average: 10, first_air_date: "2022-7-16" },
        { vote_average: 5, first_air_date: "2022-6-15" },
        { vote_average: 1, first_air_date: "2021-7-15" },
      ]);
    });

    test("shoud return newest movies 2", () => {
      const result = newestSort(movies2);
      expect(result).toEqual([
        { vote_average: 7, release_date: "2021-7-15" },
        { vote_average: 6, release_date: "2000-7-15" },
        { vote_average: 1, release_date: "1990-7-15" },
      ]);
    });
})