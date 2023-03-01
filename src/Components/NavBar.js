<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import logo from "../Assets/campuslink_logo.jpg";
import menu_logo from "../Assets/menu_logo.jpg";
import settings_logo from "../Assets/settings_logo.jpg";
import notification_logo from "../Assets/notification_logo.jpg";
import user_logo from "../Assets/user_logo.jpg";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="menu-logo-container">
            <img src={menu_logo} className="menu_logo" alt="menu" />
          </div>
          <div className="notification-logo-container">
            <img
              src={notification_logo}
              className="notification_logo"
              alt="notifications"
            />
          </div>
          <div className="settings-logo-container">
            <img src={settings_logo} className="settings_logo" alt="settings" />
          </div>
          <div className="user-logo-container">
            <img src={user_logo} className="user_logo" alt="user profile" />
          </div>
        </div>
      </nav>
    </>
  );
=======
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';
import menu_logo from '../Images/menu_logo.jpg';
import settings_logo from '../Images/settings_logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';

import notification_logo from '../Images/notification_logo.jpg';
import user_logo from '../Images/user_logo.jpg';
import LogoutContainer from './LogoutContainer';
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutContainer from "./LogoutContainer";
>>>>>>> 5b0adfb (Fixed routing)
import "./NavBar.css";
=======
import React from "react";
import styled from "@emotion/styled";
import logo_mini from "../Assets/campuslink_logo.jpg";
import { Notifications, Settings, AccountCircle } from "@mui/icons-material";
>>>>>>> 8bb6cac (Improved Navbar and Homepage functionality)

// CSS Styles
const Sidebar = styled.div`
  flex-shrink: 0;
  width: 5em;
  height: 100vh;
  background-color: #20232a;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SidebarItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4em;
  color: #fff;
  cursor: pointer;
  transition: transform 0.15s ease-out;
  &:hover {
    transform: scale(1.5);
  }
`;

const SidebarText = styled.span`
  font-size: 1.25em;
  font-weight: 500;
  margin-left: 1em;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-left: 0.5em;
  }
`;

const SidebarDivider = styled.div`
  flex-shrink: 0;
  height: 1px;
  background-color: #3c3f4c;
  margin: 0.25em 1em;
`;

const SidebarRow = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 1em;
`;

const SidebarButton = styled.div`
  display: flex;
  align-items: center;
  height: 3em;
  padding: 0 25%;
  color: #fff;
  cursor: pointer;
`;

const SidebarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: teal;
  }
`;

const NavBar = () => {
  return (
<<<<<<< HEAD
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div
            className="menu-logo-container"
            onClick={() => {
              navigate("/");
            }}
          >
            <MenuIcon fontSize="large" sx={{ color: "#F0F8FF" }} />
          </div>
          <div onClick={handleOpen} className="notification-logo-container">
            <NotificationsIcon fontSize="large" sx={{ color: "#F0F8FF" }} />
            {/* <div className = "notification-dropdown">
                        {open ? (
                            <ul className = "notifications-list">
                                <li className="notification">
                                    <button>Notification 1</button>
                                </li>
                                <li>
                                    <button>Notification 2</button>
                                </li>
                            </ul>
                        ): null}
                    </div> */}
<<<<<<< HEAD
                </div>
                <div className = "settings-logo-container">
                    <Link to="/Settings">
                        <SettingsIcon fontSize="large" sx={{ color: "#F0F8FF" }} />
                    </Link>
                </div>
                <div onClick= {handleClick} className = "user-logo-container">
                    {click ? <Person2Icon fontSize="large" sx={{ color: "#F0F8FF" }}/>: <Person2Icon fontSize="large" sx={{ color: "#F0F8FF" }} />}
                </div>  
            </div>
            {click && <LogoutContainer/>} 
        </nav>
        </>
  )
>>>>>>> e212a60 (navigates to courses and settings pages - 1.5 hours)
=======
          </div>
          <div
            className="settings-logo-container"
            onClick={() => {
              navigate("/settings");
            }}
          >
            <SettingsIcon fontSize="large" sx={{ color: "#F0F8FF" }} />
          </div>
          <div
            id="user-icon"
            onClick={handleClick}
            className="user-logo-container"
          >
            {click ? (
              <Person2Icon fontSize="large" sx={{ color: "#F0F8FF" }} />
            ) : (
              <Person2Icon fontSize="large" sx={{ color: "#F0F8FF" }} />
            )}
          </div>
        </div>
        {click && <LogoutContainer />}
      </nav>
    </>
  );
>>>>>>> 5b0adfb (Fixed routing)
}
=======
    <Sidebar>
      <SidebarItem>
        <img src={logo_mini} style={{ width: "2.5em" }} />
        {/* <SidebarText>Home</SidebarText> */}
      </SidebarItem>
      <SidebarDivider />
      <SidebarRow>
        <SidebarButton>
          <SidebarIcon>
            <Notifications style={{ color: "#fff" }} />
          </SidebarIcon>
          {/* <SidebarText>Notifications</SidebarText> */}
        </SidebarButton>
        <SidebarButton>
          <SidebarIcon>
            <Settings style={{ color: "#fff" }} />
          </SidebarIcon>
          {/* <SidebarText>Settings</SidebarText> */}
        </SidebarButton>
        <SidebarButton>
          <SidebarIcon>
            <AccountCircle style={{ color: "#fff" }} />
          </SidebarIcon>
          {/* <SidebarText>User</SidebarText> */}
        </SidebarButton>
      </SidebarRow>
    </Sidebar>
  );
};
>>>>>>> 8bb6cac (Improved Navbar and Homepage functionality)

export default NavBar;
