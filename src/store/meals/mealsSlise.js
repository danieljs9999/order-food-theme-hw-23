import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../../lib/FetchApi";

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};

export const maealsSlise = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getmaeals.fulfilled, (state, action) => {
      state.meals = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(getmaeals.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getmaeals.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const maealsActions = maealsSlise.actions;

export const getmaeals = createAsyncThunk(
  "meals/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchApi("foods");

      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);
