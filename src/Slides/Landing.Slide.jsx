import React from "react";
import styled from "styled-components";
import Blob from "../Components/Blob";

export default function Landing() {

  return (
    <FluidContainer>
      <Blob />
      <BlurredOverlay />
      <Slogan>
        we weave the web in the heart of the city
      </Slogan>
      <ScrollArrow href="#services">
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.855 7.496a.6.6 0 0 1 .85 0l6.775 6.776 6.775-6.776a.6.6 0 0 1 .85.85l-7.2 7.2a.6.6 0 0 1-.85 0l-7.2-7.2a.6.6 0 0 1 0-.85Z" clipRule="evenodd"></path>
        </svg>
      </ScrollArrow>
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
  overflow: hidden;
`;

const Slogan = styled.blockquote`
  font-family: 'Montserrat', sans-serif;
  font-size: 3.3rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: #000;
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;

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

const ScrollArrow = styled.a`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: all 150ms ease-in-out;

  &:hover {
    transform: translateX(-50%) scale(0.9);
    opacity: 0.4;
  }

  @media (max-width: 480px) {
    bottom: 65px;
  }
`;
