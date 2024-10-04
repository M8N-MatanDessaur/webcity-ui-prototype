import React from "react";
import { useNavigate } from "react-router-dom";

import {Button} from "./ToolsListButton.styles";

export default function ToolsListButton() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/toolbox");
    };

    return (
        <Button onClick={goBack} role="button" title="ToolsList">
            <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 9h4V5H3v4Zm4 5H3v-4h4v4Zm0 5H3v-4h4v4Zm13-5H8v-4h12v4ZM8 19h12v-4H8v4ZM8 9V5h12v4H8Z" clipRule="evenodd"></path>
            </svg>
        </Button >
    );
}
