import React from "react";
import styled from "styled-components";
import { twitter, facebook, instagram, linkedin, email, legalLibrary, website } from "../links";
import './index.css';
import {SocialIcon} from 'react-social-icons';


const Container = styled.section`
background-color: #6C6C6C;
max-height: fit-content;
`;

const Footer = () => {
    return(
        <Container className="footer">
            <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
				<path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
			</svg>
            <div className="footer-content">
                <div className="footer-content-column">
                    <div className="footer-logo">
                        <h3>Middlefund</h3>
                    </div>
                    <hr/>
                    <ul>
                        <li>Contact Us | &nbsp;
                            <SocialIcon url={twitter} network="twitter" fgColor="white" className="social-icons"/>&nbsp;&nbsp;
                            <SocialIcon url={instagram} network="instagram" fgColor="white" className="social-icons"/>&nbsp;&nbsp;
                            <SocialIcon url={linkedin} network="linkedin" fgColor="white" className="social-icons"/>&nbsp;&nbsp;
                            <SocialIcon url={facebook} network="facebook" fgColor="white" className="social-icons"/>&nbsp;&nbsp;
                            <SocialIcon url={email} network="email" fgColor="white" className="social-icons"/>
                        </li>
                        <li>Abouts Us | <a className="library" href={legalLibrary} rel="noreferrer" target="_blank" style={{textDecorationLine:"none"}}>Legal Library</a></li>
                    </ul>
                    <div className="footer-menu">

                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-wrapper">
                    <div>

                    </div>
                    <p className="footer-copyright-text">
                        <a href={website}>Copyright © {new Date().getFullYear()} | MiddleFund. | All rights reserved.</a>
                    </p>
                </div>
            </div>
        </Container>
    );
}



export default Footer;