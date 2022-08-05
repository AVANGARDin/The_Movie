import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import { MOVIE_GENRES, TV_GENRES } from "../../constants/routes";

export default function Header() {
  const inputRef = useRef();
  return (
    <>
      <header>
        <Link to="/">
          <div className="header__logo">
            <img src="/images/logo.svg"></img>
          </div>
        </Link>
        <div className="header__categories">
          <Link to={MOVIE_GENRES}>
            <div className="header__categories_movies">Movies</div>
          </Link>
          <Link to={TV_GENRES}>
            <div className="header__categories_tv-series">TV Series</div>
          </Link>
          <Link to="/">
            <div className="header__categories_tv-series">My List</div>
          </Link>

          <div
            className="header__categories_search"
            onClick={() => {
              inputRef.current.focus();
            }}
          >
            <input placeholder="Search..." type="search" ref={inputRef}></input>
            <Link to="/" onClick={() => (inputRef.current.value = "")}>
              <SearchIcon />
            </Link>
          </div>
        </div>
        <div className="header__user-info">AVANGARDin</div>
      </header>
      <Outlet />
    </>
  );
}
