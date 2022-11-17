import React from "react";
import styled from "styled-components";
import './index.css';

const Container = styled.div``
const Button = ({link, name, classN}) => {
    return(
        <Container className="sqrBtn">
            <a href={link} className={classN} rel="noreferrer" target="_blank">{name}</a>
        </Container>
    );
}

export default Button;