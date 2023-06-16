import React from "react";
import styled from "styled-components";
import InteractiveLogo from "./Components/InteractiveLogo";
import Landing from "./Slides/Landing.Slide";
import Services from "./Slides/Services.Slide";
import LightSwitch from "./Slides/Lightswitch.Slide";
import CallUsButton from "./Components/CallUsButton";
import { Toaster } from "react-hot-toast";


export default function App() {


  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <CallUsButton />
      <InteractiveLogo />

      <Landing />
      <Offering>
        webcity is a full service web design and development agency. We build
        websites, web applications, and web experiences. 100% satisfaction
        guaranteed. <cite>— We offer a full ready to roll solution for your business.</cite>
      </Offering>
      <Services />
      <LightSwitch />
    </>
  );
}

const Offering = styled.blockquote`
  background: #f5f5f5;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
  padding: 100px 200px;
  position: relative;
  border-top: 1px solid #00000080;
  border-bottom: 1px solid #00000080;

  cite {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 30px 60px;
  }
`;

