import React, { useState, useEffect } from "react";
import styled from "styled-components";
import demoImg from "../Assets/Images/DEMO.png";
import ScheduleButton from "../Components/ScheduleButton";
import PortfolioButton from "../Components/PortfolioButton";

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
  cursor: ${({ isOn }) => (isOn ? "default" : "crosshair")};
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
  opacity: ${({ opacity }) => opacity};
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
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 50px 25px rgba(255, 255, 255, 0.4);
  transition: all 0.15s ease;
  pointer-events: none;
  display: ${({ isOn }) => (isOn ? "none" : "block")};

  z-index: 2;
  backdrop-filter: invert(1);

  @media (max-width: 680px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 350px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;



const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const [mouseX, setMouseX] = useState(-500);
  const [mouseY, setMouseY] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleClick = () => {
    if (!isOn) {
      setIsOn(true);
    }
  };

  const handleMouseMove = (e) => {
    setMouseX(e.clientX - 40);
    setMouseY(e.clientY - 40);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementTop = document.getElementById("schedule").offsetTop;
      const windowHeight = window.innerHeight;
      
      if (scrollY + windowHeight > elementTop) {
        const scrollPercentage = Math.min(1, (scrollY + windowHeight - elementTop) / windowHeight);
        setOpacity(scrollPercentage);
      } else {
        setOpacity(0);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SwitchContainer isOn={isOn} opacity={opacity} onClick={handleClick} onMouseMove={handleMouseMove} id="schedule">
      <Spotlight mouseX={mouseX} mouseY={mouseY} isOn={isOn}/>
      {isOn ? "" :
        <FlexCol>
          <Text style={{ filter: "invert(1)" }}>Struggling to display your most significant work to the world?</Text>
          <Hint>Click anywhere to shine the spotlight</Hint>
        </FlexCol>
      }
      <QuoteContainer isOn={isOn}>
        <Text>shine a spotlight on your achievements <br /> bring your best work to life and share them with the world</Text>
      </QuoteContainer>
      <Image src={demoImg} alt="demo" style={{ display: isOn ? "block" : "none" }} />
      <ScheduleButton isOn={isOn} />
      <PortfolioButton isOn={isOn} />
    </SwitchContainer>
  );
};

export default LightSwitch;