import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import "./LoginPage.css";
import styled from "@emotion/styled";


const InputStyled = styled(TextField)({
  width: "100%",
  marginBottom: "16px",
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




export default function LoginPage() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const onEmailChange = (event) => {
    // setEmail(event.target.value);
    const input = document.querySelector(".MuiInput-root.Mui-focused");
    const styles = window.getComputedStyle(input, "::after");

  }

  const onPasswordChange = (event) => {
    // setPassword(event.target.value);
  };

  const onFirstNameChange = (event) => {
    // setFirstName(event.target.value);
  };

  const onLastNameChange = (event) => {
    // setLastName(event.target.value);
  };

  const onPhoneNumberChange = (event) => {
    // setPhoneNumber(event.target.value);
  };

  const onSubmit = async () => {

    // const data = await createUser({
    //   email,
    //   password,
    //   firstName,
    //   lastName,
    //   phoneNumber,
    // });
    // if (data && !data.error) {
    //   setLoginSession(data);
    //   setIsLoggedIn(true);
    // }
  };
  return (
    <div className="form-container">
      <form className="signup-form" noValidate autoComplete="off">
        <h2>Sign In</h2>
        <Box position="relative">
          <InputStyled
            key="email"
            variant="filled"
            onChange={onEmailChange}
            label="Email"
          />
          <div className="incorect">Pasword must include</div>
        </Box>
        <Box position="relative">
          <InputStyled
            key="password"
            variant="filled"
            onChange={onPasswordChange}
            label="Password"
            type="password"
          />
          <div className="incorect">Pasword must include</div>
        </Box>
        <Button onClick={onSubmit} variant="contained" color="primary">
          Sign In
        </Button>
      </form>
      <img
        className="background__img"
        src="images\netflix-background-128505-385441-537479.png"
        alt="background"
      />
    </div>
  );
}
