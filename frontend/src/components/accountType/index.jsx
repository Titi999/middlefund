import React from "react";
import styled from "styled-components";
import Buttons from "./buttons";
import './index.css';

const Container = styled.section``;

const AccountType = () => {
    return(
        <Container className="container">
            <div className="left">
                <div className="boxes">
                    <Buttons name="Investor" writings="REGISTER TO GET ACCESS TO OUR PORTFOLIO OF STARTUPS CHANGING THE WORLD" link="#"/>
                </div>
            </div>
            <div className="right">
                <div className="boxes">
                    <Buttons name="Startup" writings="REGISTER TO GET ACCESS TO OUR POOL OF RESOURCES AND INVESTORS" link="#"/>
                </div>
            </div>
        </Container>
    );
}
export default AccountType;