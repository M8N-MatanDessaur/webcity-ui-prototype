import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Landing from "../Slides/Landing.Slide";
import Services from "../Slides/Services.Slide";
import LightSwitch from "../Slides/Lightswitch.Slide";
import { useTranslation } from 'react-i18next';
import AboutUs from "../Slides/AboutUs";
import FooterQuote from "../Components/FooterQuote";
import PortfolioButton from "../Components/PortfolioButton";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <>
      <Landing />
      <Services />
      <LightSwitch />
      <AboutUs />
      <FooterQuote />
    </>
  );
}

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

const Offering = styled.div`
  background: var(--foreground-color);
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

const Quote = styled.blockquote`
border: 2px solid var(--border-color);
background: var(--accent-color);
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


