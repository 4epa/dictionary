import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testIsStarted: false,
  result: null,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setTestIsStarted: (state, action) => {
      state.testIsStarted = action.payload;
    },
  },
});

export const { setTestIsStarted, setResult } = testSlice.actions;

export default testSlice.reducer;
