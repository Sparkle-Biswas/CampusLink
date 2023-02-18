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
import logo from '../Images/campuslink_logo.jpg';
import menu_logo from '../Images/menu_logo.jpg';
import settings_logo from '../Images/settings_logo.jpg';
import notification_logo from '../Images/notification_logo.jpg';
import user_logo from '../Images/user_logo.jpg';
import "./NavBar.css";

function NavBar() {
    function sayHello() {
        alert('Courses!');
    }  
    return (
        <>
        <nav className="navbar">
            <div className = "navbar-container">
                <div className = "logo-container">
                    <img src={logo} className = "logo" alt="logo"/>
                </div>
                <div className = "menu-logo-container">
                    <Link to="/Courses_Student">
                        <img src={menu_logo} className = "menu_logo" alt="menu"/>
                    </Link>
                </div>
                <div className = "notification-logo-container">
                    <img src={notification_logo} className = "notification_logo" alt="notifications"/>
                </div>
                <div className = "settings-logo-container">
                    <Link to="/Settings">
                        <img src={settings_logo} className = "settings_logo" alt="settings"/> 
                    </Link>
                </div>
                <div className = "user-logo-container">
                    <img src={user_logo} className = "user_logo" alt="user profile"/> 
                </div>
                    
            </div>
            <div className="seperation-bar">
            </div>
        </nav>
        </>
  )
>>>>>>> e212a60 (navigates to courses and settings pages - 1.5 hours)
}

export default NavBar;
