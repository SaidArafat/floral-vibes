import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiEndpoint = `http://localhost:5001/feedbacks`;

export const fetchFeedbacks = createAsyncThunk(
  "feedbacks/fetch-feedbacks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.get(`${apiEndpoint}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  feedbacks: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeedbacks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchFeedbacks.fulfilled, (state, action) => {
      state.feedbacks = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(fetchFeedbacks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const {} = feedbackSlice.actions;

export default feedbackSlice.reducer;
