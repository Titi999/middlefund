import React, { useState } from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import Logo from "../Logo";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () =>{
    const[navOpened, setNavOpened] = useState(false);

    function toggleOpen(e) {
        setNavOpened(opened => !opened);
    }

    return(
        <nav>
            <div className="logo">
                <Logo classN="logo" wdth = "90"/>
            </div>
            <div className="hamburger" onClick={toggleOpen}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className={navOpened ? "nav-links open" : "nav-links"}>
                <li className={navOpened ? "fade" : ""}><AnchorLink href="#about">Home</AnchorLink></li>
                <li className={navOpened ? "fade" : ""}><AnchorLink href="#howItWorks">How It Works</AnchorLink></li>
                <li className={navOpened ? "fade" : ""}><Link className="login-button" to='/login' style={{}}>Login</Link></li>
                <li className={navOpened ? "fade" : ""}><Link className="join-button" to="/register">Join</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;