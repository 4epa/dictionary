import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [
    {
      word: "dog",
      translate: "Пес",
    },
    {
      word: "cat",
      translate: "Кіт",
    },
    {
      word: "street",
      translate: "вулиця",
    },
    {
      word: "city",
      translate: "місто",
    },
    {
      word: "country",
      translate: "країна",
    },
    {
      word: "money",
      translate: "гроші",
    },
    {
      word: "example",
      translate: "приклад",
    },
    {
      word: "mouse",
      translate: "миша",
    },
    {
      word: "car",
      translate: "машина",
    },
    {
      word: "dictionary",
      translate: "словник",
    },
  ],
};

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.words.push(action.payload);
    },
    deleteWord: (state, action) => {
      state.words = state.words.filter(word => word.word !== action.payload);
    },
  },
});

export const { setWord, deleteWord } = dictionarySlice.actions;

export default dictionarySlice.reducer;
