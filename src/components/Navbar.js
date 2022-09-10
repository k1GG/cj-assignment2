import React from "react";
import './style.scss'
import {Link, useNavigate, useLocation} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../assets/images/net.jpg"

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState()
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }

    useEffect(() => {
        setActiveLink(location.pathname)
    },[location])
    return(
        <div className="navbar">
            <div className="navbar-logo" onClick={goToHome}>
              <img src={logo} alt="" />
            </div>
            <ul className="navbar-menu">
                <li className={activeLink === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                </li>
                <li className={activeLink === "/About" ? "active" : ""}>
                    <Link to="/About">About</Link>
                </li>
                <li className={activeLink === "/Products" ? "active" : ""}>
                    <Link to="/Products">Products</Link>
                </li>
                <li className={activeLink === "/Contact" ? "active" : ""}>
                    <Link to="/Contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;