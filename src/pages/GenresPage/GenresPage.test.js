import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GenresPage from "./GenresPage";

test("should render movie genres", async () => {
  render(<GenresPage movieType="movie" />, { wrapper: MemoryRouter });
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  await waitFor(() => expect(screen.getAllByRole("link")).toHaveLength(19));
})

test("should render tv series genres", async () => {
  render(<GenresPage movieType="tv" />, { wrapper: MemoryRouter });
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getAllByRole("link")).toHaveLength(16);
  });
});