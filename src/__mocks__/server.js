import { rest } from "msw";
import { setupServer } from "msw/node";
import { BASE_URL } from "../constants/endpoints";
import { GENRE_MOVIES } from "./mockObjects/mockGenreMovies.js";
import { MOVIE_GENRES } from "./mockObjects/mockMovieGenres";
import { TV_SERIES_GENRES } from "./mockObjects/mockTvSeriesGenres";
import { MOVIE } from "./mockObjects/mockMovie"


export const handlers = [
  rest.get(`${BASE_URL}genre/movie/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOVIE_GENRES));
  }),

  rest.get(`${BASE_URL}genre/tv/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(TV_SERIES_GENRES));
  }),

  rest.get(`${BASE_URL}movie/616037`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOVIE));
  }),
];

export const server = setupServer(...handlers);