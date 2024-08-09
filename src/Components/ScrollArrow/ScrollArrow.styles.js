import styled from "styled-components";

export const ScrollArrowButton = styled.p`
  position: absolute;
  bottom: ${props => props.bottom ? props.bottom : "35px"};
  left: 0;
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  color: var(--text-color);
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
    bottom: ${props => props.bottom ? props.bottom : "65px"};
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