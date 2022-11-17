import React from "react";
import styled from "styled-components";
import './index.css';

const Container = styled.section``;

const Cards = () => {
    return(
        <Container className="cardCont" id="howItWorks">
            <h1>How it works</h1>
            <div className="worksContainer">
                <Card number="I" content={
                    "Submitting your pitch is the first review process.If we find your deck or business plan to fit any of our investors portfolios. We will send it to them directly. Your pitch will also be listed on the general startup page where  verified investors will have access to."
                    }/>
                <Card number="II" content={
                    "If an investor is interested you are automatically sent an email to notify you and the next review process can begin. This is where the investor asks you questions they might need answers to, if you reach this stage, Congratulations!"
                    }/>
                <Card number="III" content={
                    "After the second review process, if all questions have been answered then you should expect a term sheet sent intto your inbox within 3-5 business working days. An investor can decide to pull their investment even after term sheets have been agreed upon. A term sheet does not represent a contract."
                    }/>
            </div>
        </Container>
    );
}

const Card = ({number, content}) => {
    return(
        <div className="borderWaves">
            <p className="numbering">{number}</p>
            <p className="worksContent">{content}</p>
        </div>
    );
}

export default Cards;