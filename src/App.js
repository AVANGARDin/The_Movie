import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage"
import MoviePage from "./pages/MoviePage/MoviePage";
import GenresPage from "./pages/GenresPage/GenresPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import {
  MOVIE_GENRES,
  TV_GENRES,
  POPULAR_MOVIES,
  POPULAR_TV_SERIES,
} from "./constants/routes";
import { endpoints } from "./constants/endpoints";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyListPage from "./pages/MyListPage/MyListPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path={MOVIE_GENRES} element={<GenresPage movieType="movie" />} />
        <Route path={TV_GENRES} element={<GenresPage movieType="tv" />} />
        <Route
          path={`${MOVIE_GENRES}/:genreId/:genreName`}
          element={<MoviesPage movieType="movie" />}
        />
        <Route
          path={`${TV_GENRES}/:genreId/:genreName`}
          element={<MoviesPage movieType="tv" />}
        />{" "}
        <Route
          path={`${POPULAR_MOVIES}`}
          element={
            <MoviesPage
              movieType="movie/popular"
              title="Popular movies"
              endpoint={endpoints.popularMovies}
            />
          }
        />
        <Route
          path={`${POPULAR_TV_SERIES}`}
          element={
            <MoviesPage
              movieType="tv/popular"
              title="Popular TV series"
              endpoint={endpoints.popularTVSeries} />
          }
        />
        <Route
          path={`${POPULAR_MOVIES}/:id/:name`}
          element={<MoviePage movieType="movie" />}
        />
        <Route
          path={`${POPULAR_TV_SERIES}/:id/:name`}
          element={<MoviePage movieType="tv" />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="myList" element = {<MyListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
