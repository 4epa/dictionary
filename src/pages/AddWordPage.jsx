import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { setWord } from "../redux/dictionary-slice";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { checkString } from "../utils/helpers/helpers";

const DictionaryFormWrapper = styled.div((props) => ({
  padding: "10px",
}));

const DictionaryForm = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  gap: "25px",
  maxWidth: "500px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "1px 1px 10px rgba(30, 30, 225, 0.15)",
}));

const DictionaryFormTitle = styled.h2((props) => ({
  color: "#1976d2",
  fontSize: "1.875rem",
}));

const DictionaryFormText = styled.h2((props) => ({
  color: "#1976d2",
  fontSize: "1rem",
}));

const AddWordPage = () => {
  const [wordInput, setWordInput] = useState("");
  const [translate, setTranslate] = useState("");

  const dispatch = useDispatch();

  const handleChangeWord = (e) => {
    setWordInput(e.currentTarget.value);
  };

  const handleChangeTranslate = (e) => {
    setTranslate(e.currentTarget.value);
  };

  const addWord = (word, translate) => {
    setWordInput("");
    setTranslate("");
    dispatch(setWord({ word, translate }));
  };

  const checkFields = () => {
    if (checkString(wordInput) || checkString(translate)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <DictionaryFormWrapper>
      <DictionaryForm>
        <DictionaryFormTitle>Adding new words</DictionaryFormTitle>
        <DictionaryFormText>
          To add a word, enter the word and its translation
        </DictionaryFormText>
        <TextField
          onChange={handleChangeWord}
          value={wordInput}
          id="word"
          label="word"
          variant="outlined"
          size="small"
        />
        <TextField
          onChange={handleChangeTranslate}
          value={translate}
          id="translate"
          label="translate"
          variant="outlined"
          size="small"
        />
        <Button
          disabled={checkFields()}
          sx={{ fontSize: "16px" }}
          onClick={() => addWord(wordInput, translate)}
          variant="contained"
        >
          Add word
        </Button>
      </DictionaryForm>
    </DictionaryFormWrapper>
  );
};

export default AddWordPage;
