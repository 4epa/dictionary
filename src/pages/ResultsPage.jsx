import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import Sorry from "../component/Sorry/Sorry";

const ResultsWrapper = styled.div((props) => ({
  padding: "10px",
}));

const ResultsContainer = styled.div((props) => ({
  backgroundColor: "#fff",
  padding: "10px 0px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  minHeight: "580px",
}));

const ResultsHeader = styled.header((props) => ({
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr",
  borderBottom: "2px solid #1976d2",
}));

const ResultsItem = styled.div((props) => ({
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr",
  backgroundColor: "rgb(250, 250, 255)",
}));

const ResultPage = () => {
  const results = useSelector((state) => state.results.results);

  return (
    <ResultsWrapper>
      <ResultsContainer>
        <ResultsHeader>
          <span>№</span>
          <span>Result</span>
          <span>date</span>
        </ResultsHeader>
        {results.length > 0 ? (
          results.map((result, index) => {
            return (
              <ResultsItem key={index}>
                <span>{index + 1}</span>
                <span>
                  You answered {result.percentageResult}% of the words
                </span>
                <span>{result.date}</span>
              </ResultsItem>
            );
          })
        ) : (
          <Sorry
            text={"Sorry, but you have not passed any test"}
            buttonText={"Go to test"}
            navigateTo={"test"}
          />
        )}
      </ResultsContainer>
    </ResultsWrapper>
  );
};

export default ResultPage;
