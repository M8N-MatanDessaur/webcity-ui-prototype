import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Button = styled.button`
    font-family: Poppins, sans-serif;
    background-color: #ffffff94;
    backdrop-filter: blur(10px);
    border: none;
    padding: 1rem 2rem;
    position: fixed;
    bottom: 105px;
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
        text-transform: uppercase;
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
               padding: 10px;
        bottom: 93px;
        right: 30px;
        span {
          display: none;
        }
        svg {
          display: block;
        }
    }
  
    animation: ${fadeIn} 0.3s ease-in-out;
`;
