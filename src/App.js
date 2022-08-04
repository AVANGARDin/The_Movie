import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import MoviePage from "./components/shared/MoviePage/MoviePage";
import GenresPage from "./components/shared/GenresPage/GenresPage";
import MoviesPage from "./components/shared/MoviesPage/MoviesPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="movie/genres" element={<GenresPage movieType="movie" />} />
        <Route path="tv/genres" element={<GenresPage movieType="tv" />} />
        <Route path="/movie/:genre/:genreId" element={<MoviesPage />} />
        <Route path="/tv/:genre/:genreId" element={<MoviesPage />} />
        <Route path="movie/:name" element={<MoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
