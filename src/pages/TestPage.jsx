import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import Test from "../component/Test/Test";
import { getWords } from "../redux/selectors/dictionary-selector";
import { getTestIsStarted } from "../redux/selectors/test-selector";
import { setTestIsStarted } from "../redux/test-slice";
import Sorry from "../component/Sorry/Sorry";

const TestPageWrapper = styled.div((props) => ({
  padding: "10px",
}));

const TestPageContainer = styled.div((props) => ({
  backgroundColor: "#fff",
  padding: "50px",
  borderRadius: "5px",
}));

const StartTest = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));

const StartTestTitle = styled.h2((props) => ({
  color: "#1976d2",
  fontSize: "1.875rem",
  textAlign: "center",
}));

const StartTestText = styled.p((props) => ({
  color: "#1976d2",
  textAlign: "center",
}));

const TestPage = () => {
  const words = useSelector((state) => getWords(state));
  const testIsStarted = useSelector((state) => getTestIsStarted(state));
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTestIsStarted(true));
  };

  return (
    <TestPageWrapper>
      {words.length < 10 ? (
        <Sorry
          text={
            "Sorry, but you don't have enough words to practice, give at least 10 words"
          }
          buttonText={"Add word"}
          navigateTo={"new-word"}
        />
      ) : (
        <TestPageContainer>
          {testIsStarted ? (
            <Test />
          ) : (
            <StartTest>
              <StartTestTitle>
                To start, press the "Start" button
              </StartTestTitle>
              <StartTestText>
                You will be asked one of your words and you will have to choose
                the translation of the word
              </StartTestText>
              <Button onClick={handleClick} variant="contained">
                Start
              </Button>
            </StartTest>
          )}
        </TestPageContainer>
      )}
    </TestPageWrapper>
  );
};

export default TestPage;
