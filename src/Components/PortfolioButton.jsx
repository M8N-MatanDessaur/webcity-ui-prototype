import React from "react";
import styled,{keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";

export default function PortfolioButton({isOn}) {
    const navigate = useNavigate();

    const goToPortfolio = () => {
        navigate("/portfolio");
    };
    
    return (
        <Button isOn={isOn} onClick={goToPortfolio}>
             our recent work
        </Button>
    );
}


const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Button = styled.button`
  display: ${({ isOn }) => (isOn ? "flex" : "none")};
  width: max-content;
  height: 50px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2rem;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 26px;
  box-shadow: 35px 35px 68px 0px rgba(204, 204, 204, 0.5),
    inset -8px -8px 16px 0px rgba(204, 204, 204, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 200;
  border: 1px solid #00000020;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  animation: ${({ isOn }) => (isOn ? fadeInAnimation : "none")} 1s ease-in-out forwards;

  &:hover {
    filter:drop-shadow(0 10px 10px #00000030);
  }

  @media (max-width: 768px) {
    width: max-content;
    height: 40px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: max-content;
    font-size: 0.9rem;
  }
`;