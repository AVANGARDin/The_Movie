import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import MoviePage from "./components/MoviePage/MoviePage";
import GenresPage from "./components/shared/GenresPage/GenresPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route
          path="movie/genres"
          element={<GenresPage moviType="movie" />}
        />
        <Route
          path="tv/genres"
          element={<GenresPage moviType="tv" />} />
        <Route path="movie/:name" element={<MoviePage />} />
      </Route>
    </Routes>
  );
}

export default App;
