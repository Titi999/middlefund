import React from "react";
import styled from "styled-components";
import Button from "../SqrButton";
import './index.css';
import {blog} from '../links';

const Container = styled.section``;
const Blog = () => {
    return(
        <Container className="blog">
            <Button classN="link" name="Blog" link={blog}/>
        </Container>
    );
}

export default Blog;