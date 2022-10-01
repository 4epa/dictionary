import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
};

export const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results.unshift(action.payload);
    },
  },
});

export const { setResults } = resultsSlice.actions;

export default resultsSlice.reducer;
