import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { Container, Button } from "../GlobalComponent";
import { Link } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

// Styled Component in Navbar
const NavBar = styled.header`
  display: flex;
  width: 100%;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  flex-direction: column;
  box-sizing: border-box;
  flex-shrink: 0;
  position: sticky;
  z-index: 1;
  top: 0;
  left: auto;
  right: 0;
  background-color: #fcfcfc;
  color: #313131;

  & h1 {
    color: #313131;
    margin: 0.4em 0;
  }

  @media only screen and (max-width: 820px) {
  }
`;

// Menu
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

// MenuList
const MenuList = styled.div`
  display: flex;

  & Avatar {
    margin: 8px;
  }

  & p {
    margin-left: 4em;
    color: #3f3f3f;
    font-weight: 600;
  }

  @media only screen and (max-width: 820px) {
    display: none;
  }
`;

// Profile Button
const ProfileButton = styled(Button)`
  display: flex;
  width: ${(props) => props.width || "126px"};
  border-color: ${(props) => props.borderColor || "#74747483"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: ${(props) => props.color || "#3f3f3f"};
  margin-left: 3em;
  padding: 0.2em 0.2em;
  align-items: center;

  & div {
    margin: auto 0.8px;
  }

  & p {
    margin: 0 0 0 4px;
    color: #3c3c3c;
    font-weight: 600;
    padding: 0.2em 0.15em;
  }

  @media only screen and (max-width: 820px) {
    width: 118px;
    height: 42px;

    & p {
      font-size: 15px;
      font-weight:500 ;
    }

    & div {
      margin-left: 0;
    }
  }
`;

// DropDownMenu
const DropDownMenu = styled.ul`
  width: 180px;
  opacity: 2;
  top: 60px;
  right: 48px;
  border-radius: 4px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  background-color: #f6f6f6;
  color: rgba(0, 0, 0, 0.87);
  list-style: none;
  margin: 0;
  padding: 14px 18px;
  position: absolute;
  outline: 0;
  flex-direction: column;
  display: ${(props) => (props.open ? "flex" : "none")};

  @media only screen and (max-width: 820px) {
    right: 20px;
  }
`;

const DropDownItem = styled.li`
  display: flex;
  font-size: 16px;
  margin: 10px;
  font-weight: 400;
  text-align: start;
  align-items: center;
  color: black;

  & span {
    margin-left: 10px;
  }

  /* @media only screen and (max-width: 820px) {
    font-size: 14px;
  } */
`;

// Navbar function
const Navbar = ({path}) => {
  const [imgProfile, setImgProfile] = useState("");
  const [isToggle, setIsToggle] = useState(false);

  const handleOpenDropDown = (event) => {
    setIsToggle(!isToggle);
    console.log(isToggle);
  };

  const handleCloseDropDown = (event) => {
    setIsToggle(isToggle);
  };
  return (
    <NavBar>
      <Container margin="0 48px">
        <Link to="/">
          <h1>Exerack</h1>
        </Link>
        {path !== "login" && (
          <Menu>
            <MenuList>
              <Link to="/">
                {/* <Tooltip title="Home">
                <HomeIcon />
              </Tooltip> */}
                <p>Home</p>
              </Link>
              <Link to="/activities">
                <p>Activities</p>
              </Link>
              <Link to="/history">
                <p>History</p>
              </Link>
            </MenuList>
            <ProfileButton onClick={handleOpenDropDown}>
              <div>
                {imgProfile ? (
                  <Avatar alt="" src="" />
                ) : (
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 34, height: 34 }}
                  >
                    J
                  </Avatar>
                )}
              </div>
              <p>Julaluk</p>
              <ArrowDropDownIcon fontSize="small" id="arrowIcon" />
            </ProfileButton>
            <DropDownMenu open={isToggle} onClose={handleCloseDropDown}>
              <Link to="">
                <DropDownItem>
                  <PersonIcon />
                  <span>Profile</span>
                </DropDownItem>
              </Link>
              <Link to="">
                <DropDownItem>
                  <SettingsIcon />
                  <span>Setting</span>
                </DropDownItem>
              </Link>
              <Link to="/">
                <DropDownItem>
                  <LogoutIcon />
                  <span>Logout</span>
                </DropDownItem>
              </Link>
            </DropDownMenu>
          </Menu>
        )}
      </Container>
    </NavBar>
  );
};
export default Navbar;
