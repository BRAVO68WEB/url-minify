import React from 'react';
import styled from 'styled-components';

//the variables --navbar-color1 and --navbar-color2 are declared under :root in globalStyles.js
//the variable --navbar-font is declared under root in App.css

const Bg = require("../assets/bg/main-bg.png").default;

const Box = styled.div`
    position: absolute;
    background: rgb(231,231,231);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    padding: 15px;
`;

const Box2 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    width: 55%;
    padding: 13px;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: none;
    border: none;
    background: #16a085;
    font-size: 25px;
`

const Para = styled.p`
    font-size: 55px;
    color: #16a085;
`

const Para2 = styled.p`
    color: #16a085;
`

const Link = styled.a`
    text-decoration: none;
    color: white;
    font-family: monospace;
`
const NotFound = () => {
    return (
        <Box img = {"../assets/bg/main-bg.png"}>
          <Box2>
            <Para>404 Not Found</Para>
            <Para2>The page you are looking for is not available</Para2>
            <Button><Link href = "/">Take me back!</Link></Button>
          </Box2>
        </Box>
    )
}

export default NotFound;