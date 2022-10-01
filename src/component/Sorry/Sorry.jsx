import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const SorryContainer = styled.div((props) => ({
  color: "#1976d2",
  fontSize: "1rem",
  padding: "60px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
}));

const linkStyle = {
  color: "#1976d2",
  fontWeight: "700",
  padding: "5px 10px",
  borderRadius: "5px",

  ":hover": {
    backgroundColor: "rgb(230, 230, 255)",
  },
};

const Sorry = ({ text, buttonText, navigateTo }) => {
  return (
    <SorryContainer>
      <div>{text}</div>
      <NavLink style={linkStyle} to={`/${navigateTo}`}>
        {buttonText}
      </NavLink>
    </SorryContainer>
  );
};

export default Sorry;
