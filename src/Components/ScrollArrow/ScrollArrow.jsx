import React from "react";

import { ScrollArrowButton } from "./ScrollArrow.styles";

export default function ScrollArrow({ slide, bottom }) {
    return (

        <ScrollArrowButton bottom={bottom}>
            <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.855 7.496a.6.6 0 0 1 .85 0l6.775 6.776 6.775-6.776a.6.6 0 0 1 .85.85l-7.2 7.2a.6.6 0 0 1-.85 0l-7.2-7.2a.6.6 0 0 1 0-.85Z" clipRule="evenodd"></path>
            </svg>
        </ScrollArrowButton>
    );
}