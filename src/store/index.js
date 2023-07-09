import { configureStore } from "@reduxjs/toolkit";
import flowerReducer from "./slices/flowerSlice";

const store = configureStore({
  reducer: {
    flowers: flowerReducer,
  },
});

export default store;
