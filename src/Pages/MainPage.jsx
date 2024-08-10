import React from "react";
import Landing from "../Blocks/Landing.Slide";
import Services from "../Blocks/Services.Slide";
import AboutUs from "../Blocks/AboutUs";
import FooterQuote from "../Components/FooterQuote/FooterQuote";
import Projects from "../Blocks/Projects";
import BlogsButton from "../Components/BlogsButton/BlogsButton";

export default function MainPage() {

  return (
    <>
      <BlogsButton />
      
      <Landing />
      <Services />
      <Projects />
      <AboutUs />
      <FooterQuote />
    </>
  );
}
