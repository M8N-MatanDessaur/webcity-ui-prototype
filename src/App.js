import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import InteractiveLogo from "./Components/InteractiveLogo";
import Landing from "./Slides/Landing.Slide";
import Services from "./Slides/Services.Slide";
import LightSwitch from "./Slides/Lightswitch.Slide";
import CallUsButton from "./Components/CallUsButton";
import { Toaster } from "react-hot-toast";

export default function App() {
  const offeringRef = useRef(null);
  const [fadeInOffering, setFadeInOffering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInOffering(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (offeringRef.current) {
      observer.observe(offeringRef.current);
    }

    return () => {
      if (offeringRef.current) {
        observer.unobserve(offeringRef.current);
      }
    };
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <CallUsButton />
      <InteractiveLogo />

      <Landing />
      <Offering ref={offeringRef} fade={fadeInOffering}>
        webcity is a full service web design and development agency. We build
        websites, web applications, and web experiences. 100% satisfaction
        guaranteed. <cite>— We offer a full ready to roll solution for your business.</cite>
      </Offering>
      <Services />
      <LightSwitch />
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

const Offering = styled.blockquote`
  background: #f5f5f5;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
  padding: 100px 200px;
  position: relative;

  opacity: ${({ fade }) => (fade ? 1 : 0)};
  transform: ${({ fade }) => (fade ? "translateY(0)" : "translateY(30px)")};
  animation: ${({ fade }) => (fade ? fadeInAnimation : "none")} 1s ease-in-out;

  cite {
    display: block;
    font-size: 1rem;
    font-weight: 100;
    margin-top: 1rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 30px 60px;
  }
`;
