import { configureStore } from "@reduxjs/toolkit";
import flowerReducer from "./slices/flowerSlice";
import feedbackReducer from "./slices/feedbackSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    flowers: flowerReducer,
    feedbacks: feedbackReducer,
    cart: cartReducer,
  },
});

export default store;
