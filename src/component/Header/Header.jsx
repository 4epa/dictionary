import styled from "@emotion/styled";

const HeaderWrapper = styled.div((props) => ({
  position: "fixed",
  width: "100%",
  height: "60px",
  backgroundColor: "#fff",
  padding: "10px",
  boxShadow: "1px 1px 10px rgba(30, 30, 225, 0.15)",
  zIndex: "10",
}));

const HeaderAppTitle = styled.div((props) => ({
  color: "#1976d2",
  fontSize: "1.875rem",
  fontWeight: "700",
}));

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderAppTitle>English coach</HeaderAppTitle>
    </HeaderWrapper>
  );
};

export default Header;
