import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    nameFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { nameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
