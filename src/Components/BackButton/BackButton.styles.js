import styled from "styled-components";

export const Button = styled.button`
    font-family: Poppins, sans-serif;
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
        transform: ${props => (props.isClicked ? "scaleY(-1)" : "none")};
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
    background-color: black;
        & svg {
          fill: white;
        }
    }

    &:active {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        bottom: 25px;
        left: 25px;
        padding: 8px;
    }
`;