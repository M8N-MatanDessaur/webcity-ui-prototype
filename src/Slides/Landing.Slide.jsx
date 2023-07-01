import React, { useEffect, useState, useRef, memo } from "react";
import styled, { keyframes, css } from "styled-components";
import Blob from "../Components/Blob";
import ScrollArrow from "../Components/ScrollArrow";
import ScheduleButton from "../Components/ScheduleButton";
import { useTranslation } from "react-i18next";
import PortfolioButton from "../Components/PortfolioButton";

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const Landing = () => {
  const [fadeInQuote, setFadeInQuote] = useState(false);
  const [fadeInSlogan, setFadeInSlogan] = useState(false);
  const offeringRef = useRef(null);
  const [fadeInOffering, setFadeInOffering] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setFadeInQuote(true);
    setFadeInSlogan(true);
  }, []);

  useEffect(() => {
    const current = offeringRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInOffering(true);
        }
      },
      OBSERVER_OPTIONS
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <LandingContainer>
      <FluidContainer>
        <Blob />
        <BlurredOverlay />
        <StyledSlogan fade={fadeInSlogan}>
          {t('mainText.slogan')}
        </StyledSlogan>
        <StyledQuote fade={fadeInQuote}>
          {t('mainText.slogan2')}
        </StyledQuote>
        <ScheduleButton isOn={true} />
        <ScrollArrow />
      </FluidContainer>

      <StyledOffering ref={offeringRef} fade={fadeInOffering}>
        <OfferingQuote>
          {t('mainText.offeringText')} <cite> {t('mainText.offeringText2')} </cite>
          <PortfolioButton isOn={true} />
        </OfferingQuote>
      </StyledOffering>
    </LandingContainer>
  );
}

export default memo(Landing);

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

const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image:url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png);
  background-size: 10%;
  background-attachment: fixed;

  @media (max-width: 480px) {
    background-size: 25%;
}
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

const StyledSlogan = styled.blockquote`
  font-family: 'Montserrat', sans-serif;
  font-size: 3.3rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: var(--text-color);
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

const StyledQuote = styled.blockquote`
  font-family: 'poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
  color: var(--text-color);
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


const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledOffering = styled.div`
  background: transparent;
  color: var(--text-color);	
  width: 100%;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ fade }) => fade ? css`
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeInAnimation} 1s ease-in-out;
  ` : css`
    opacity: 0;
    transform: translateY(30px);
  `}

  @media (max-width: 768px) {
    padding: 30px 30px;
  }
`;

const OfferingQuote = styled.blockquote`
border: 2px solid var(--accent-color);
background: var(--foreground-color);
padding: 30px 60px;
border-radius: 10px;
font-size: 1.8rem;
font-weight: 300;
text-align: center;
margin: 0 auto;
max-width: 800px;
line-height: 1.5;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1;

cite {
  display: block;
  font-size: 1rem;
  font-weight: 100;
  margin-top: 1rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  font-size: 1rem;
  padding: 30px 30px;
}
`;