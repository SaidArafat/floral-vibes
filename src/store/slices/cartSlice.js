import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiEndpoint = `http://localhost:5001/cart`;

export const fetchCartItems = createAsyncThunk(
  "cart/fetch-cart-items",
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

export const addToCart = createAsyncThunk(
  "cart/add-to-cart",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(apiEndpoint, item);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove-from-cart",
  async (item, { rejectWithValue }) => {
    try {
      await axios.delete(apiEndpoint, item);

      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateQuantity = createAsyncThunk(
  "cart/update-quantity",

  async ({ item, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`${apiEndpoint}/${item.id}`, {
        quantity,
      });

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
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // add to cart
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // remove form cart
    builder.addCase(removeFromCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      const itemId = action.payload.id;
      state.state.cart = state.state.cart.filter((item) => item.id !== itemId);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // update quantity
    builder.addCase(updateQuantity.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateQuantity.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateQuantity.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
  },
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
