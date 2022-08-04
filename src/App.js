import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage"
import MoviePage from "./pages/MoviePage/MoviePage";
import GenresPage from "./pages/GenresPage/GenresPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="movie/genres" element={<GenresPage movieType="movie" />} />
        <Route path="tv/genres" element={<GenresPage movieType="tv" />} />
        <Route
          path="movie/genres/:genreId/:genreName"
          element={<MoviesPage movieType="movie" />}
        />
        <Route
          path="tv/genres/:genreId/:genreName"
          element={<MoviesPage movieType="tv" />}
        />
        <Route
          path="movie/:id/:name"
          element={<MoviePage movieType="movie" />}
        />
        <Route path="tv/:id/:name" element={<MoviePage movieType="tv" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
