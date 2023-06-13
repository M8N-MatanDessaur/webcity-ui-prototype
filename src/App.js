import React from "react";
import InteractiveLogo from "./Components/InteractiveLogo";
import Landing from "./Slides/Landing.Slide";
import Services from "./Slides/Services.Slide";
import LightSwitch from "./Slides/Lightswitch.Slide";


export default function App() {


  return (
    <>
      <InteractiveLogo />
      <Landing />
      <Services />
      <LightSwitch />
    </>
  );
}