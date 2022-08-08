import { configureStore } from "@reduxjs/toolkit";
import myListReduser from "./myListReduser";
import isLoggedReduser from "./isLoggedReduser";

export const store = configureStore({
  reducer: {
    myList: myListReduser,
    isLogged: isLoggedReduser,
  }
})