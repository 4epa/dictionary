import Task from "./Task/Task";
import { useState, useEffect } from "react";
import { setResults } from "../../redux/results-slice";
import { useDispatch, useSelector } from "react-redux";
import TestResult from "./TestResult/TestResult";
import { calculationResult } from "../../utils/helpers/helpers";
import { getResult } from "../../redux/selectors/test-selector";
import { setResult, setTestIsStarted } from "../../redux/test-slice";
import styled from "@emotion/styled";

const TestContainer = styled.div((props) => ({
  padding: "10px",
}));

const Test = () => {
  const [completeTasks, setCompleteTasks] = useState(0);
  const [correctAnswers, setCorrectAnswer] = useState(0);
  const result = useSelector((state) => getResult(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTestIsStarted(true));
    return () => dispatch(setTestIsStarted(false));
  }, []);

  const checkAnswer = (answer, rightAnswer) => {
    if (answer === rightAnswer) {
      return correctAnswers + 1;
    } else {
      return correctAnswers;
    }
  };

  const handleButtonClick = (answer, rightAnswer, amountTasks) => {
    const taskNumber = completeTasks + 1;
    setCompleteTasks(taskNumber);
    const points = checkAnswer(answer, rightAnswer);
    setCorrectAnswer(points);

    if (taskNumber >= amountTasks) {
      const result = calculationResult(taskNumber, points);
      dispatch(setResult(result));
      dispatch(setResults(result));
      setCorrectAnswer(0);
      setCompleteTasks(0);
    }
  };

  return (
    <TestContainer>
      {result !== null ? (
        <TestResult result={result.percentageResult} />
      ) : (
        <Task completeTasks={completeTasks} onClickButton={handleButtonClick} />
      )}
    </TestContainer>
  );
};

export default Test;
