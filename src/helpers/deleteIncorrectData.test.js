import { deleteIncorrectData } from "./deleteIncorrectData";

describe("delete incorrect data from array", () => {
  test("should return array objects with all data", () => {
    const arrayData = [
      {
        adult: false,
        backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
        genre_ids: [28, 12, 14],
        id: 616037,
      },
      {
        adult: false,
        backdrop_path: "",//no path
        genre_ids: [], //empty array
        id: 616037,
      },
    ];
    expect(deleteIncorrectData(arrayData)).toEqual([
      {
        adult: false,
        backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
        genre_ids: [28, 12, 14],
        id: 616037,
      }]);
  })

    test("should return array objects with all data or empty array", () => {
      const arrayData = [
        {
          adult: false,
          backdrop_path: "",
          genre_ids: [28, 12, 14],
          id: 616037,
        }
      ];
      expect(deleteIncorrectData(arrayData)).toEqual([]);
    });
});