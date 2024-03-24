import React from "react";
import Landing from "../Slides/Landing.Slide";
import Services from "../Slides/Services.Slide";
import LightSwitch from "../Slides/Lightswitch.Slide";
import AboutUs from "../Slides/AboutUs";
import FooterQuote from "../Components/FooterQuote";

export default function MainPage() {

  return (
    <>
      <Landing />
      <Services />
      {/* <LightSwitch /> */}
      <AboutUs />
      <FooterQuote />
    </>
  );
}
