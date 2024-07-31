import React from "react";
import styled, { keyframes } from "styled-components";

export default function MailUsButton() {
  return (
    <Button>
      <a href="mailto:info@webcity.dev">
        <svg
          fill="var(--text-color)"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10v1.43C22 15.4 20.47 17 18.5 17c-1.19 0-2.31-.58-2.96-1.47-.9.91-2.16 1.47-3.54 1.47-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5v1.43c0 .79.71 1.57 1.5 1.57s1.5-.78 1.5-1.57V12c0-4.34-3.66-8-8-8s-8 3.66-8 8 3.66 8 8 8h5v2h-5C6.48 22 2 17.52 2 12Zm7 0c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>info@webcity.dev</span>
      </a>
    </Button>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(130%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Button = styled.button`
font-family: Poppins, sans-serif;
  background-color: #ffffff94;
backdrop-filter: blur(10px);
  border: none;
  padding: 10px 20px;
  position: fixed;
  bottom: 170px;
  right: 35px;
  z-index: 998;
  border-radius: 50px;
  border: 1px solid var(--text-color);
  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--text-color);
    text-decoration: none;
  }
  span {
    font-size: 1.2rem;
    font-weight: 600;
    display: block;
  }
  &:hover {
      background-color: black;
    & svg {
      fill: white;
    }
    & span {
      color: white;
    }
      color: white;
  }
  &:active {
    background-color: var(--background-color);
  }

  @media (max-width: 768px) {
   padding: 10px ;
    right: 30px;
    bottom: 150px;
    span {
      display: none;
    }
    svg {
      display: block;
    }
  }

  animation: ${fadeIn} 0.5s ease-in-out;
};
`;