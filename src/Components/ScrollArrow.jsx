import React from "react";
import styled from "styled-components";

export default function ScrollArrow({ slide }) {
    return (

        <ScrollArrowButton>
            <svg fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.855 7.496a.6.6 0 0 1 .85 0l6.775 6.776 6.775-6.776a.6.6 0 0 1 .85.85l-7.2 7.2a.6.6 0 0 1-.85 0l-7.2-7.2a.6.6 0 0 1 0-.85Z" clipRule="evenodd"></path>
            </svg>
        </ScrollArrowButton>
    );
}

const ScrollArrowButton = styled.p`
  position: absolute;
  bottom: 35px;
  left: 0;
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: all 150ms ease-in-out;
  animation: bounce 2s infinite;

  svg{
    height: 35px;
  }

  @media (max-width: 480px) {
    bottom: 65px;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
`;