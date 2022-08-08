import { createSlice } from "@reduxjs/toolkit";

const isLogged = createSlice({
  name: "isLogged",
  initialState: {
    isLogged: false,
    userName: "",
  },
  reducers: {
    setIsLogged(state, action) {
      state.isLogged = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { setIsLogged, setUserName } = isLogged.actions;

export default isLogged.reducer;
