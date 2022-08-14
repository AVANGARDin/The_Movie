import {
  render,
  screen,
  waitFor,
  fireEvent} from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, useParams } from "react-router-dom";
import { store } from "../../redux/store";
import MoviePage from "./MoviePage";


test("should render movie page", async () => {
  const { container } = render(
    <Provider store={store}>
      <MoviePage movieType="movie" />
    </Provider>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
