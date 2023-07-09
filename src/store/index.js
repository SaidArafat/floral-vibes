import { configureStore } from "@reduxjs/toolkit";
import flowerReducer from "./slices/flowerSlice";
import feedbackReducer from "./slices/feedbackSlice";

const store = configureStore({
  reducer: {
    flowers: flowerReducer,
    feedbacks: feedbackReducer,
  },
});

export default store;
