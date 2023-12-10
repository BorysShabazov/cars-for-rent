import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://64fc97af605a026163aea6df.mockapi.io",
});

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page, limit }, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page,
        limit,
      });
      const response = await instance.get(`/cars`, {
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
