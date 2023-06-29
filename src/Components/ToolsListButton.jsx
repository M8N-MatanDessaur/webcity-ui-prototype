import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ToolsListButton() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/toolbox");
    };

    return (
        <Button onClick={goBack}>
            <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 9h4V5H3v4Zm4 5H3v-4h4v4Zm0 5H3v-4h4v4Zm13-5H8v-4h12v4ZM8 19h12v-4H8v4ZM8 9V5h12v4H8Z" clip-rule="evenodd"></path>
            </svg>
        </Button >
    );
}

const Button = styled.button`
    background-color: var(--background-color);
    border: none;
    padding: 15px;
    position: fixed;
    bottom: 25px;
    left: 25px;
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
`;