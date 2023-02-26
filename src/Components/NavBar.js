import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/campuslink_logo.jpg';
import menu_logo from '../Images/menu_logo.jpg';
import settings_logo from '../Images/settings_logo.jpg';
import notification_logo from '../Images/notification_logo.jpg';
import user_logo from '../Images/user_logo.jpg';
import LogoutContainer from './LogoutContainer';
import "./NavBar.css";

function NavBar() {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    const [click, setClick] = React.useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    return (
        <>
        <nav className="navbar">
            <div className = "navbar-container">
                <div className = "logo-container">
                    <img src={logo} className = "logo" alt="logo"/>
                </div>
                <div className = "menu-logo-container">
                    <Link to="/Homepage_Student">
                        <img src={menu_logo} className = "menu_logo" alt="menu"/>
                    </Link>
                </div>
                <div onClick={handleOpen} className = "notification-logo-container">
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
                    <img src={notification_logo} className = "notification_logo" alt="notifications"/>
                </div>
                <div className = "settings-logo-container">
                    <Link to="/Settings">
                        <img src={settings_logo} className = "settings_logo" alt="settings"/> 
                    </Link>
                </div>
                <div onClick= {handleClick} className = "user-logo-container">
                    {click ? <img src={user_logo} className = "user_logo" alt="user profile"/>: <img src={user_logo} className = "user_logo" alt="user profile"/>}
                </div>  
            </div>
            {click && <LogoutContainer/>} 
        </nav>
        </>
  )
}

export default NavBar
