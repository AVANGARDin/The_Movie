import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MOVIE_GENRES, TV_GENRES } from "../../constants/routes";
const isActiveLink = ({ isActive }) => {
  if (isActive) {
    return (
      {
        color: "#E50914",
        borderColor:"#E50914"
      }
    )
  }
}

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
          <NavLink to={MOVIE_GENRES} style={isActiveLink}>
            <div className="header__categories_movies">Movies</div>
          </NavLink>
          <NavLink to={TV_GENRES} style={isActiveLink}>
            <div className="header__categories_tv-series">TV Series</div>
          </NavLink>
          <NavLink to="/" style={isActiveLink}>
            <div className="header__categories_tv-series">My List</div>
          </NavLink>

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
