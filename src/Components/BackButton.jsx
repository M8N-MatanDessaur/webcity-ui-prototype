import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    };

    return (
        <Button onClick={goBack}>
            <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"></path>
            </svg>
        </Button >
    );
}

const Button = styled.button`
    background-color: var(--background-color);
    border: none;
    padding: 15px;
    position: fixed;
    bottom: 35px;
    left: 35px;
    z-index: 998;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    border: 1px solid var(--text-color);
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
    &:hover {
        background-color: var(--foreground-color);
    }
    &:active {
        background-color: var(--background-color);
    }

    @media (max-width: 768px) {
        bottom: 25px;
        left: 25px;
    }
`;