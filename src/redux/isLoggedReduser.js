import { createSlice } from "@reduxjs/toolkit";

const isLogged = createSlice({
  name: "isLogged",
  initialState: {
    isLogged: false,
    userName: "",
    userLogin:"",
  },
  reducers: {
    setIsLogged(state, action) {
      state.isLogged = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserLogin(state, action) {
      state.userLogin = action.payload;
    },
  },
});

export const { setIsLogged, setUserName, setUserLogin } = isLogged.actions;

export default isLogged.reducer;
