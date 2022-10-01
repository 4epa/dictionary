import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { setResult, setTestIsStarted } from "../../../redux/test-slice";
import { useDispatch } from "react-redux";

const ResultContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  width: "100%",
}));

const ResultTitle = styled.h2((props) => ({
  color: "#1976d2",
  fontSize: "1.875rem",
}));

const ResultText = styled.p((props) => ({
  color: "#1976d2",

  "& span": {
    fontSize: "1.25rem",
    fontWeight: "700",
  },
}));

const TestResult = ({ result }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTestIsStarted(false));
    dispatch(setResult(null));
  };

  return (
    <ResultContainer>
      <ResultTitle>Your result</ResultTitle>
      <ResultText>
        You answered <span>{`${result}%`}</span> of the words correctly
      </ResultText>
      <Button onClick={handleClick} variant="contained">
        Go to back
      </Button>
    </ResultContainer>
  );
};

export default TestResult;
