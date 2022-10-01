import "./App.css";
import DictionaryPage from "./pages/DictionaryPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResultsPage from "./pages/ResultsPage";
import Sidebar from "./component/SideBar/Sidebar";
import styled from "@emotion/styled";
import AddWordPage from "./pages/AddWordPage";
import TestPage from "./pages/TestPage";
import Header from "./component/Header/Header";

const AppWrapper = styled.div((props) => ({
  display: "grid",
  gridTemplateColumns: "215px 6fr",
  backgroundColor: "rgb(230, 230, 255)",
  minHeight: "100vh",
}));

const Content = styled.div((props) => ({
  padding: "70px 10px 10px 10px",
}));

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Sidebar />
        <Content>
          <Routes>
            <Route path="" element={<DictionaryPage />} />
            <Route path="test" element={<TestPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="new-word" element={<AddWordPage />} />
          </Routes>
        </Content>
      </AppWrapper>
    </Router>
  );
}

export default App;
