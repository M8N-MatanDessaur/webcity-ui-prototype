import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import demoImg from "../Assets/Images/DEMO.png";
import ScheduleButton from "../Components/ScheduleButton";
import PortfolioButton from "../Components/PortfolioButton";
import { useTranslation } from "react-i18next";

const glowAnimation = keyframes`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
    filter: brightness(1.6);
  }
  100% {
    opacity: 0.3;
  }
`;

const SwitchContainer = styled.div`
--mouse-x: 0;
--mouse-y: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ isOn }) => (isOn ? "var(--background-color)" : "black")};
  color: ${({ isOn }) => (isOn ? "var(--text-color)" : "white")};
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
  opacity: ${({ opacity }) => opacity};
  background-attachment: fixed;
`;


const QuoteContainer = styled.div`
  display: ${({ isOn }) => (isOn ? "block" : "none")};
  text-align: center;
  margin-top: 20px;
`;

const Text = styled.blockquote`
      font-family: Poppins, sans-serif;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: white;
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

const TextOn = styled.blockquote`
    font-family: Poppins, sans-serif;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: var(--text-color);
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
    font-family: Poppins, sans-serif;
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
  animation: ${glowAnimation} 2s ease-in-out infinite;

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
  top: calc(var(--mouse-y) * 1px);
  left: calc(var(--mouse-x) * 1px);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 50px 25px rgba(255, 255, 255, 0.4);
  transition: all 0.15s ease;
  pointer-events: none;
  display: ${({ isOn, isMouseOver }) => (!isOn && isMouseOver ? "block" : "none")};

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
  const [opacity, setOpacity] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);


  const { t } = useTranslation();

  const handleClick = () => {
    if (!isOn) {
      setIsOn(true);
    }
  };

  const handleMouseMove = (e) => {
    const switchContainer = document.getElementById("schedule");
    switchContainer.style.setProperty('--mouse-x', e.clientX - 40);
    switchContainer.style.setProperty('--mouse-y', e.clientY - 40);
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
    <SwitchContainer isOn={isOn} opacity={opacity} onClick={handleClick} onMouseMove={handleMouseMove} onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)} id="schedule">
      <Spotlight isOn={isOn} isMouseOver={isMouseOver} />

      {isOn ? "" :
        <FlexCol>
          <Text> {t('mainText.struggle')} </Text>
          <Hint> {t('mainText.struggle2')} </Hint>
        </FlexCol>
      }
      <QuoteContainer isOn={isOn}>
        <TextOn>
          {t('mainText.struggle3')}
          <br />
          {t('mainText.struggle4')}
        </TextOn>
      </QuoteContainer>
      <Image src={demoImg} alt="demo" style={{ display: isOn ? "block" : "none" }} />
      <ScheduleButton isOn={isOn} />
      <PortfolioButton isOn={isOn} />
    </SwitchContainer>
  );
};

export default LightSwitch;