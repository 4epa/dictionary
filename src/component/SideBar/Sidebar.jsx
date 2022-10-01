import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import { lightBlue } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

const SideBarWrapper = styled.div((props) => ({
  backgroundColor: "#fff",
  position: "relative",
  boxShadow: "1px 1px 10px rgba(30, 30, 225, 0.15)",
}));

const SideBarContainer = styled.div((props) => ({
  position: "fixed",
  top: "60px",
  left: "0px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "215px",
  padding: "10px",
}));

const AdminContainer = styled.div((props) => ({
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  gap: "15px",
  alignItems: "center",
  backgroundColor: "rgb(230, 230, 255)",
  padding: "5px",
  borderRadius: "5px",
  cursor: "pointer",
}));

const AdminName = styled.span((props) => ({
  fontSize: "1rem",
  color: "#1976d2",
  fontWeight: "700",
}));

const NavBar = styled.nav((props) => ({
  position: "relative",
}));

const MenuList = styled.ul((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));

const MenuItem = styled.li((props) => ({
  width: "100%",
  position: "relative",
  height: "auto",
}));

const navLnkStyle = (isActive) => {
  return {
    color: isActive ? "#fff" : "#1976d2",
    backgroundColor: isActive ? "#1976d2" : "rgb(230, 230, 255)",
    borderRadius: "5px",
    padding: "10px",
    display: "block",
    transition: "all 0.2s ease 0s",
  };
};

const Sidebar = () => {
  return (
    <SideBarWrapper>
      <SideBarContainer>
        <AdminContainer>
          <Avatar sx={{ bgcolor: lightBlue[500] }}>JD</Avatar>
          <AdminName>John Doe</AdminName>
        </AdminContainer>
        <NavBar>
          <MenuList>
            <MenuItem>
              <NavLink
                end
                style={(navData) => navLnkStyle(navData.isActive)}
                to="/"
              >
                Home page
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                style={(navData) => navLnkStyle(navData.isActive)}
                to="new-word"
              >
                New word
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                style={(navData) => navLnkStyle(navData.isActive)}
                to="/test"
              >
                Repeat words
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                style={(navData) => navLnkStyle(navData.isActive)}
                to="/results"
              >
                Results
              </NavLink>
            </MenuItem>
          </MenuList>
        </NavBar>
      </SideBarContainer>
    </SideBarWrapper>
  );
};

export default Sidebar;
