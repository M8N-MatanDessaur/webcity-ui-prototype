import React from "react";
import { useNavigate } from "react-router-dom";

import {Button} from "./BackButton.styles";

export default function BackButton() {
    const history = useNavigate();

    const goBack = () => {
        history(-1);
    };

    return (
        <Button onClick={goBack} role="button" title="Back">
            <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"></path>
            </svg>
        </Button >
    );
}