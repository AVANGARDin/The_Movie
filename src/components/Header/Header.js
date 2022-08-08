import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MOVIE_GENRES, TV_GENRES } from "../../constants/routes";
import { Button, styled } from "@mui/material";
import { setIsLogged, setUserName } from "../../redux/isLoggedReduser";

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

const ButtonStyled = styled(Button)({
  background: "rgb(229, 9, 20)",
  borderRadius: "10px",
  color: "white",
  width: "100px",
  whiteSpace:"nowrap",
  "&:hover": {
    background: "red",
  },
});

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged.isLogged);
  const userName = useSelector(state => state.isLogged.userName);
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
        <div className="header__user-info">{userName}</div>
        {!isLogged ? (
          <ButtonStyled onClick={() => {
            navigate("/login")
          }}>Sign in</ButtonStyled>
        ) : (
            <ButtonStyled onClick={() => {
              dispatch(setIsLogged(false));
              dispatch(setUserName(""));
          }}>Sign out</ButtonStyled>
        )}
      </header>
      <Outlet />
    </>
  );
}
