import React from "react";
import "./Header.css";
import styled from "styled-components";

export default function PhotoCard(props){
    const url = props.url;
    const date = props.date;
    const title = props.title;
    const explanation = props.explanation;
    const copyright = props.copyright;


    const Photo = styled.img`
        width: 80%;
        height: auto;
        margin: 0 auto;

    `;

    const TitleText = styled.h1`
        font-size: 3rem;
    `;

    const Card = styled.div`
        background-color: #1c253c;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 60%;
        height: auto;
        margin: 0 auto;
        margin-top: 100px;
        padding: 5%;
        color: white;
        font-family: 'Roboto Mono', monospace;
        font-size: 1rem;
    `;

    return (
        <Card>
            <Photo src= {url} />
            <TitleText>{title}</TitleText>
            <p>{date}</p>
            <p>{copyright}</p>
            <p>{explanation}</p>
        </Card>
    );
};
