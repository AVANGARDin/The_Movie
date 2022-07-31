import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import MoviePage from "./components/MoviePage/MoviePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <MainPage />} />
    </Routes>
  );
}

export default App;
