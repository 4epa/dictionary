import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./dictionary-slice";
import resultsReducer from "./results-slice";
import testReducer from "./test-slice";

const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    results: resultsReducer,
    test: testReducer,
  },
});

export default store;
