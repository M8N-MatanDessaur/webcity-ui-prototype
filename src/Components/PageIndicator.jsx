import React from "react";
import styled from "styled-components";

export default function PageIndicator({pageName}) {

    return (
        <Indicator>
            <Title>{pageName}</Title>
        </Indicator >
    );
}

const Indicator = styled.div`
    background-color: var(--background-color);
    height: 60px;
    border: none;
    padding: 15px;
    position: fixed;
    top: 35px;
    right: 35px;
    z-index: 998;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    border: 1px solid var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: var(--foreground-color);
    }
    &:active {
        background-color: var(--background-color);
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
        height: 50px;
        top: 25px;
        right: 25px;
    }

    @media (max-width: 380px) {
        padding: 10px 20px;
        top: 25px;
        right: 25px;
        height: 40px;
    }
`;

const Title = styled.h1`
font-size: 0.9rem;
font-weight: 600;
text-transform: uppercase;
display: block;
color: var(--text-color);

@media (max-width: 380px) {
    font-size: 0.8rem;
}
`;
