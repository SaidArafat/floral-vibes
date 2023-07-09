import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiEndpoint = `http://localhost:5001/flowers`;

export const fetchFlowers = createAsyncThunk(
  "flowers/fetchFlowers",
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
  flowers: [],
};

const flowerSlice = createSlice({
  name: "flower",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlowers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchFlowers.fulfilled, (state, action) => {
      state.flowers = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(fetchFlowers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const {} = flowerSlice.actions;

export default flowerSlice.reducer;
