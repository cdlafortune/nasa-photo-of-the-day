import React from "react";
import "./Header.css";
import styled from "styled-components";

export default function Header (){
    const Navbar = styled.header`
        background-color: #1c253c;
        opacity: 0.75;
        width: 100%;
        position: fixed;
        overflow: hidden;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `;

    const NavLinks = styled.a`
        color: white;
        font-size: 1.25rem;
        text-decoration: none;
        display: flex;
        align-content: center;
        margin: 1% 5%;
        margin-top: 2%;
        font-family: 'Montserrat', sans-serif;
    `;

    const NavText = styled.p`
        color: white;
        font-size: 2rem;
        display: flex;
        margin: 1% 5%;
        font-family: 'Roboto Mono', monospace;

    `;

    return (
        <Navbar>
            <NavText>NASA Photo of the Day</NavText>
            <NavLinks target="_blank" href="https://github.com/cdlafortune/nasa-photo-of-the-day">See the Code</NavLinks>
            <NavLinks target="_blank" href="https://api.nasa.gov/#apod">Get the API</NavLinks>
        </Navbar>

    );

};