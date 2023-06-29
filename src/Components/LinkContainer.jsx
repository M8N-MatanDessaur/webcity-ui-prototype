import React from "react";
import styled from "styled-components";

export default function LinkContainer({title, description, link}) {
    return (
        <Container>
            <LinkTitle href={link} target="blank">{title}</LinkTitle>
            <LinkDescription>{description}</LinkDescription>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 650px;
    height: max-content;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background: var(--foreground-color);
    opacity: 0.8;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        padding: 15px 20px;
        border-bottom: 1px solid var(--text-color);
        border-top: 1px solid var(--text-color);

        &:first-child {
            border-top: none;
        }

        &:last-child {
            border-bottom: none;
        }
    }

    @media (max-width: 680px) {
        width: 100%;
    }
    `;

const LinkTitle = styled.a`
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;

    &:hover {
        transform: scale(1.1) translateX(5px);
        transition: all 0.1s ease-in-out;
    }

    @media (max-width: 680px) {
         font-size: 1rem;
    }
    `;

const LinkDescription = styled.p`
    color: var(--text-color);
    font-size: 0.9rem;
    font-weight: 400;

    &:hover {
        transform: scale(0.98) translateX(-5px);
        opacity: 0.8;
        transition: all 0.1s ease-in-out;
    }

    @media (max-width: 680px) {
       font-size: 0.8rem;
       text-align: right;
    }
    `;
