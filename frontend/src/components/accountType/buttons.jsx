import React from "react";
import styled from "styled-components";
import './buttons.css';

const Container = styled.div``;

const Buttons = ({ name, link, writings }) => {
    return(
        <Container className="btnCon">
            <div className="writings">{writings}</div>
            <div className="btnDiv"><a href={link} className="buttons">{name}</a></div>
        </Container>
    );
}
export default Buttons;