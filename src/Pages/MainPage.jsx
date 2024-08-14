import React from "react";
import Landing from "../Blocks/Landing.Slide";
import Services from "../Blocks/Services.Slide";
import AboutUs from "../Blocks/AboutUs";
import FooterQuote from "../Components/FooterQuote/FooterQuote";
import Projects from "../Blocks/Projects";
import BlogsButton from "../Components/BlogsButton/BlogsButton";
import { Helmet } from "react-helmet";

export default function MainPage() {

  return (
    <>
      <Helmet>
        <meta name="description" content="webcity is a leading web design and development agency. We build stunning websites, web applications, and web experiences with a 100% satisfaction guarantee." />
        <title>webcity - tailored websites</title>
        <meta property="og:title" content="webcity - tailored websites" />
        <meta property="og:description" content="webcity is a leading web design and development agency. We build stunning websites, web applications, and web experiences with a 100% satisfaction guarantee." />
        <meta property="og:url" content="https://www.webcity.dev" />
      </Helmet>
      <BlogsButton />
      <Landing />
      <Services />
      <Projects />
      <AboutUs />
      <FooterQuote />
    </>
  );
}
