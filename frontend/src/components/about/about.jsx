import React from "react";
import './about.css';
import styled from 'styled-components';

const Container = styled.section``;

const About = () => { 
    return(
        <Container className="about" id="about">
        <div className="intro-section">
            <div className="intro-content">
                <h1 className="middlefund">MIDDLEFUND</h1>
                <h6>We provide a platform that helps startups reach a global<br/>
                    audience through entrepreneurship and investment. We help them build<br/>
                    everything they need to succeed including pitch development, investor research and easy access to funding
                </h6>
            </div>
        </div>
        </Container>	
    );
}

export default About;