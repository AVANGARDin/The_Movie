import { rest } from "msw";
import { setupServer } from "msw/node";
import { endpoints } from "../constants/endpoints";
import { GENRE_MOVIES_ENDPOINT, MOVIE_ENDPOINT, POPULAR_MOVIES_ENDPOINT, POPULAR_TV_SERIES_ENPOINT, VIDEOS_ENDPOINT } from "./mockEndpoints";
import { GENRE_MOVIES } from "./mockObjects/mockGenreMovies";
import { MOVIE } from "./mockObjects/mockMovie";
import { MOVIE_GENRES } from "./mockObjects/mockMovieGenres";
import { POPULAR_MOVIES } from "./mockObjects/mockPopularMovie";
import { POPULAR_TV_SERIES } from "./mockObjects/mockPopularTvSeries";
import { TV_SERIES_GENRES } from "./mockObjects/mockTvSeriesGenres";
import { VIDEOS } from "./mockObjects/mockVideos";


export const handlers = [
  rest.get(GENRE_MOVIES_ENDPOINT("movie", 28, 1), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(GENRE_MOVIES)
    );
  }),

  rest.get(endpoints.movieGenres, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(MOVIE_GENRES)
    );
  }),

  rest.get(endpoints.tvSeriesGenres, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(TV_SERIES_GENRES)
    );
  }),

  rest.get(MOVIE_ENDPOINT("movie", 616037), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(MOVIE)
    );
  }),

  rest.get(VIDEOS_ENDPOINT("movie", 616037), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(VIDEOS)
    );
  }),

  rest.get(POPULAR_MOVIES_ENDPOINT(endpoints.popularMovies, 1), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(POPULAR_MOVIES)
    );
  }),

  rest.get(POPULAR_TV_SERIES_ENPOINT(endpoints.popularTVSeries, 1), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(POPULAR_TV_SERIES)
    );
  }),
];

export const server = setupServer(...handlers);