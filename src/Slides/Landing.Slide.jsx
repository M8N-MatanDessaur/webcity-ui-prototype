import React from "react";
import styled from "styled-components";
import Blob from "../Components/Blob";
import ScrollArrow from "../Components/ScrollArrow";

export default function Landing() {

  return (
    <FluidContainer>
      <Blob />
      <BlurredOverlay />
      <Slogan>
        we weave the web in the heart of the city
      </Slogan>
      <ScrollArrow slide="#services" />
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
