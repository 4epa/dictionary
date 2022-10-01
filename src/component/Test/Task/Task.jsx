import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getWords } from "../../../redux/selectors/dictionary-selector";
import {
  getRandomValuesFromArray,
  shuffle,
} from "../../../utils/helpers/helpers";

const Question = styled.h3`
  font-size: 20px;
  color: #1976d2;
`;

const Task = ({ completeTasks, onClickButton }) => {
  const words = useSelector((state) => getWords(state));
  const [question, setQuestion] = useState(null);
  const [questionWords, setQuestionWords] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const copiedArray = words.map((object) => ({ ...object }));
    const shuffleWords = shuffle(copiedArray);
    setQuestionWords(shuffleWords.filter((word, index) => index < 10));
  }, []);

  useEffect(() => {
    if (questionWords !== null) {
      setQuestion(newQuestion(questionWords));
    }
  }, [questionWords]);

  const newQuestion = (array) => {
    if (index >= 10) return false;

    const questionWord = questionWords[index];
    setIndex(index + 1);
    const copiedArray = array.map((object) => ({ ...object }));
    copiedArray.splice(index, 1);

    const questionOptions = shuffle([
      questionWord.translate,
      ...getRandomValuesFromArray(copiedArray, 3).map(
        (word) => (word = word.translate)
      ),
    ]);

    const question = {
      word: questionWord.word,
      questionOptions: questionOptions,
      rightAnswer: questionWord.translate,
    };

    return question;
  };

  const handleClickButton = (answer) => {
    onClickButton(answer, question.rightAnswer, 10);
    setQuestion(newQuestion(questionWords));
  };

  if (question === null || questionWords === null) {
    return <div>..loading</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <Question>
        {`${completeTasks + 1})`} Translate this word - {question.word}
      </Question>
      <Box sx={{ display: "flex", gap: "15px" }}>
        {question.questionOptions.map((option) => (
          <Button
            onClick={() => handleClickButton(option)}
            key={option}
            variant="contained"
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Task;
