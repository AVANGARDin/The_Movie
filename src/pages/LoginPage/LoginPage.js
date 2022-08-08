import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import "./LoginPage.css";
import styled from "@emotion/styled";
import { getObjectFromLocalStorage, setLocalStorageItem } from "./utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setIsLogged, setUserName } from "../../redux/isLoggedReduser";


localStorage.setItem(
  "n@gmail.com",
  JSON.stringify({ name: "Roman", password: "12345", myList: [] })
);

const InputStyled = styled(TextField)({
  width: "100%",
  marginBottom: "16px",
  borderRadius: "5px",
  background: "#333",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8c8c8c",
    border: "none",
  },
  "& .MuiFilledInput-root": {
    color: "white",
    "&::after" : {
        border: 'none',
      },
  },
  "& .MuiInputLabel-filled": {
    color: "#8c8c8c",
  },
});

const ButtonStyled = styled(Button)({
  background: "red",
  marginTop: "20px",
  "&:hover": {
    background: "rgba(255, 0, 0, 0.8)",
  },
});

export default function LoginPage() {
  const [email, setEmail] = useState("n@gmail.com");
  const [password, setPassword] = useState("12345");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEmailChange = (event) => {
    setErrorEmail(false);
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setErrorPassword(false);
    setPassword(event.target.value);
  };
  
  const onSubmitHandler = (event) => {
    const login = getObjectFromLocalStorage(email);
    if (!login) {
      setErrorEmail(true);
    } else if (login.password !== password) {
      setErrorPassword(true);
    } else {
      dispatch(setIsLogged(true));
      dispatch(setUserName(login.name));
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <form className="signup-form" noValidate autoComplete="off">
        <h2>Sign In</h2>
        {errorEmail ? (
          <div className="error">
            Sorry, we can't find an account with this email address. Please try
            again or <a href="https://www.google.com/">create a new account</a>.
          </div>
        ) : null}
        <Box position="relative">
          <InputStyled
            key="email"
            variant="filled"
            onChange={onEmailChange}
            label="Email"
            value="n@gmail.com"
          />
        </Box>
        {errorPassword ? <div className="error">Incorrect password</div> : null}
        <Box position="relative">
          <InputStyled
            key="password"
            variant="filled"
            onChange={onPasswordChange}
            label="Password"
            type="password"
            value="12345"
          />
        </Box>
        <ButtonStyled variant="contained" onClick={onSubmitHandler}>
          Sign In
        </ButtonStyled>
      </form>
      <img
        className="background__img"
        src="images\netflix-background-128505-385441-537479.png"
        alt="background"
      />
    </div>
  );
}
