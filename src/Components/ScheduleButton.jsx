import React from "react";
import styled from "styled-components";

export default function ScheduleButton({ isOn}) {
    return (
        <Button href="#" isOn={isOn}>
            Schedule a Meeting
        </Button>
    );
}

const Button = styled.button`
    display: ${({ isOn }) => (isOn ? "flex" : "none")};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    padding: 1.2rem;
    color: #fff;
    width: auto;
    height: max-content;
    align-items: center;
    justify-content: center;
    background-color: #005ce6;
    border: none;
    outline: none;
    border-radius: 50px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }

    @media (max-width: 320px) {
        font-size: 0.5rem;
    }
`;
