import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"
import logo from './logo.png'
const Nav = () => {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <nav style={{padding : '0px 20px'}}  className="navbar">
                <div className="navbar__logo">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                
                <ul  style={{marginBottom : "0px", paddingLeft: "0"}} className={open ? "navbar_list active" : "navbar_list"}>
                    
                    <li>
                        <NavLink to="/Swarozgar fellowship">Swarozgar fellowship</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Local Livelihood">Local Livelihood</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About Us">About Us</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/Blogs">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact us</NavLink>
                    </li>
                </ul>
                <div className="navbar__menu" onClick={handleClick}>
                    <div className={open ? "navbar_menu-icon open" : "navbar_menu-icon"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav