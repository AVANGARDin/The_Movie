import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import MoviePage from "./components/MoviePage/MoviePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="movie/:name" element={<MoviePage />} />
        {/* <Route path="tv/:name" element={<MoviePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
