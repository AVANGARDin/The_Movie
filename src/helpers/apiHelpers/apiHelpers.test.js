import { GENRE_MOVIES } from "../../__mocks__/mockObjects/mockGenreMovies.js";
import { MOVIE_GENRES } from "../../__mocks__/mockObjects/mockMovieGenres";
import { TV_SERIES_GENRES } from "../../__mocks__/mockObjects/mockTvSeriesGenres";
import { getGenreMovies } from "./getGenreMovies.js";
import { server } from "../../__mocks__/server";
import { getGenres } from "./getGenres.js";
import { endpoints } from "../../constants/endpoints.js";
import { MOVIE } from "../../__mocks__/mockObjects/mockMovie.js";
import { getMovie } from "./getMovie.js";
import { getMovieVideos } from "./getMovieVideos.js";
import { VIDEOS } from "../../__mocks__/mockObjects/mockVideos.js";
import { getPopular } from "./getPopular.js";
import { POPULAR_MOVIES } from "../../__mocks__/mockObjects/mockPopularMovie.js";
import { POPULAR_TV_SERIES } from "../../__mocks__/mockObjects/mockPopularTvSeries.js";
import { deleteIncorrectData } from "../deleteIncorrectData.js";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());


test("get genre movies from api", async () => {
  const result = await getGenreMovies("movie", 35, 1);

  expect(result).toEqual(GENRE_MOVIES)
});

test("get movie genres from api", async () => {
  const result = await getGenres(endpoints.movieGenres);

  expect(result).toEqual(MOVIE_GENRES.genres);
});

test("get tv series genres from api", async () => {
  const result = await getGenres(endpoints.tvSeriesGenres);

  expect(result).toEqual(TV_SERIES_GENRES.genres);
});

test("get movie from api", async () => {
  const result = await getMovie("movie", 616037);

  expect(result).toEqual(MOVIE);
});

test("get videos from api", async () => {
  const result = await getMovieVideos("movie", 616037);

  expect(result).toEqual(VIDEOS);
});

test("get popular movies from api", async () => {
  const result = await getPopular(endpoints.popularMovies);

  expect(result).toEqual(deleteIncorrectData(POPULAR_MOVIES.results));
});

test("get popular tv series from api", async () => {
  const result = await getPopular(endpoints.popularTVSeries);

  expect(result).toEqual(deleteIncorrectData(POPULAR_TV_SERIES.results));
});