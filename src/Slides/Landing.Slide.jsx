import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Blob from "../Components/Blob";
import ScrollArrow from "../Components/ScrollArrow";
import ScheduleButton from "../Components/ScheduleButton";

export default function Landing() {
  const [fadeInQuote, setFadeInQuote] = useState(false);
  const [fadeInSlogan, setFadeInSlogan] = useState(false);

  useEffect(() => {
    setFadeInQuote(true);
    setFadeInSlogan(true);
  }, []);

  return (
    <FluidContainer>
      <Blob />
      <BlurredOverlay />
      <Slogan fade={fadeInSlogan}>
        we weave the web in the heart of the city
      </Slogan>
      <Quote fade={fadeInQuote}>
        making your vision, our work of art
      </Quote>
      <ScheduleButton isOn={true}/>
      <ScrollArrow />
    </FluidContainer>
  );
}

const BlurredOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(40px);
`;

const FluidContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const fadeInSloganAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInQuoteAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Slogan = styled.blockquote`
  font-family: 'Montserrat', sans-serif;
  font-size: 3.3rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: #000;
  width: fit-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ fade }) => (fade ? 1 : 0)};
  animation: ${({ fade }) => (fade ? fadeInSloganAnimation : "none")} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const Quote = styled.blockquote`
  font-family: 'poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
  color: #000;
  width: fit-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ fade }) => (fade ? 1 : 0)};
  animation: ${({ fade }) => (fade ? fadeInQuoteAnimation : "none")} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
};
`;