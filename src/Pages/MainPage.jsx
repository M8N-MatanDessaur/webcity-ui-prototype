import React from "react";
import Landing from "../Blocks/Landing.Slide";
import Services from "../Blocks/Services.Slide";
import AboutUs from "../Blocks/AboutUs";
import FooterQuote from "../Components/FooterQuote/FooterQuote";
import Projects from "../Blocks/Projects";

export default function MainPage() {

  return (
    <>
      <Landing />
      <Services />
      <Projects />
      <AboutUs />
      <FooterQuote />
    </>
  );
}
