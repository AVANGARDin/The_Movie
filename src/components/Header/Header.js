import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  const input = document.querySelector(
    ".header__categories_search input"
  );
  return (
    <>
      <header>
        <Link to="/">
          <div className="header__logo">
            <img src="/images/logo.svg"></img>
          </div>
        </Link>
        <div className="header__categories">
          <Link to="movie/genres">
            <div className="header__categories_movies">Movies</div>
          </Link>
          <Link to="tv/genres">
            <div className="header__categories_tv-series">TV Series</div>
          </Link>
          <Link to="/">
            <div className="header__categories_tv-series">My List</div>
          </Link>

          <div className="header__categories_search" onClick={() => {
            input.focus();
          }}>
            <input placeholder="Search..." type="search"></input>
            <Link to="/" onClick={()=>input.value = ''}>
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
