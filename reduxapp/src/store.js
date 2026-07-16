// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../src/features/listSlice";
import counterReducer from "../src/features/counterSlice"
export const store = configureStore({
  reducer: {
    list: listReducer,
    counter: counterReducer,
  },
});