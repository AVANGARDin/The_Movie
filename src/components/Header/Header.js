import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="header__logo">
          <img src="/images/logo.svg"></img>
        </div>
        <div className="header__categories">
          <div className="header__categories_movies">Movies</div>
          <div className="header__categories_tv-series">TV Series</div>
          <div className="header__categories_tv-series">My List</div>

          <SearchIcon
            id="header__search_button"
            onClick={(e) => {
              const search_box = document.querySelector(
                ".header__categories_search"
              );
              const search_input = document.querySelector(
                ".header__categories_search input"
              );
              const header__search_button = document.getElementById(
                "header__search_button"
              );
              e.currentTarget.style.display = "none";
              console.log(e.currentTarget);
              search_box.classList.remove("display_none");
              search_box.classList.add("display_flex");
              search_input.focus();
              search_input.addEventListener("blur", () => {
                header__search_button.style.display = "inline-block";
                search_box.classList.remove("display_flex");
                search_box.classList.add("display_none");
              });
            }}
          />

          <div className="header__categories_search display_none">
            <input placeholder="Search..." type="search"></input>
            <SearchIcon />
          </div>
        </div>
        <div className="header__user-info">AVANGARDin</div>
      </header>
      <Outlet />
    </>
  );
}
