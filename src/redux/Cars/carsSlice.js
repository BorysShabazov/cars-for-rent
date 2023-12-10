import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./carsOperations";

const initialCars = {
  items: [],
  isLoading: false,
  error: null,
};

const rejectFunc = (state, action) => {
  console.log("1243");
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = (state) => {
  return {
    items: state.items,
    isLoading: true,
    error: null,
  };
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialCars,

  extraReducers: (builder) => {
    // fetch
    builder.addCase(fetchCars.pending, pendingFunc);
    builder.addCase(fetchCars.fulfilled, (_, action) => {
      return {
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(fetchCars.rejected, rejectFunc);

    //getNoticeById

    // builder.addCase(getNoticeById.pending, pendingFunc);
    // builder.addCase(getNoticeById.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     selectedNotice: action.payload,
    //     isLoading: false,
    //     error: null,
    //   };
    // });
    // builder.addCase(getNoticeById.rejected, rejectFunc);
  },
});

export const carsReducer = carsSlice.reducer;
