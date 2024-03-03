import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
      number: "",
    },
  },
  reducers: {
    nameFilter: (state, action) => {
      state.filters.name = action.payload;
    },
    numberFilter: (state, action) => {
      state.filters.number = action.payload;
    },
  },
});

export const { nameFilter, numberFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
