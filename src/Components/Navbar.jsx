import React from "react";
import "./Styles/Navbar.css";
import SRMlogo from "./../assets/SRMISTlogo.webp";
import IEILogo from "./../assets/IEILogo.webp";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navlogos">
                <a href="/">
                    <img src={SRMlogo} alt="SRMIST Logo" className="navlogo" />
                </a>
                <a href="/">
                    <img src={IEILogo} alt="IEI Logo" className="navlogo" />
                </a>
            </div>
            <div className="navlinks">
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/events">EVENTS</a>
                    </li>
                    <li>
                        <a href="/departments">DEPARTMENTS</a>
                    </li>
                    <li>
                        <a href="#bottompage">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
