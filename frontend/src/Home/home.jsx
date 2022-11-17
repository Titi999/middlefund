import React from "react";
import Navbar from "../components/navbar/navbar";
import About from "../components/about/about";
import AccountType from "../components/accountType";
import Blog from "../components/Blog";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import styled from 'styled-components';
import './home.css';

const Container = styled.div`

`;

function Home(){
    return(
        <Container className="home">            
            <Navbar/>
            <About/>
            <AccountType/>
            <Blog/>
            <Cards/>
            <Footer/>
        </Container>
    );
}
export default Home;