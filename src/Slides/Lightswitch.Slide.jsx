import React, { useState } from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ isOn }) => (isOn ? "white" : "black")};
  color: ${({ isOn }) => (isOn ? "black" : "white")};
  font-size: 18px;
  font-weight: bold;
  cursor: ${({ isOn }) => (isOn ? "default" : "pointer")};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const QuoteContainer = styled.div`
  display: ${({ isOn }) => (isOn ? "block" : "none")};
  text-align: center;
  margin-top: 20px;
`;

const Text = styled.blockquote`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: #000;
  width: auto;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.5rem;
  }
`;

const Hint = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: #FFFFFF60;
  width: auto;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Spotlight = styled.div`
  position: absolute;
  top: ${({ mouseY }) => mouseY}px;
  left: ${({ mouseX }) => mouseX}px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.4);
  transition: all 0.1s ease;
  pointer-events: none;

  @media (max-width: 500px) {
    display: none;
  }
`;


const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleClick = () => {
    if (!isOn) {
      setIsOn(true);
    }
  };

  const handleMouseMove = (e) => {
    setMouseX(e.clientX - 50);
    setMouseY(e.clientY - 50);
  };

  return (
    <SwitchContainer isOn={isOn} onClick={handleClick} onMouseMove={handleMouseMove}>
      <Spotlight mouseX={mouseX} mouseY={mouseY} />
      {isOn ? "" :
        <FlexCol>
          <Text style={{ filter: "invert(1)" }}>Struggling to display your most significant work to the world?</Text>
          <Hint>Click anywhere to turn on</Hint>
        </FlexCol>
      }
      <QuoteContainer isOn={isOn}>
        <Text>shine a spotlight on your achievements <br /> bring your best work to life and share them with the world</Text>
      </QuoteContainer>
    </SwitchContainer>
  );
};

export default LightSwitch;
