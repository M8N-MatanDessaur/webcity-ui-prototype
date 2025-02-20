import React from "react";
import Landing from "../Blocks/Landing.Slide";
import Services from "../Blocks/Services.Slide";
import AboutUs from "../Blocks/AboutUs";
import FooterQuote from "../Components/FooterQuote/FooterQuote";
import Projects from "../Blocks/Projects";
import { Helmet } from "react-helmet";
import Statistics from "../Components/Statistics/Statistics";
import Testimonials from "../Components/Testimonials/Testimonials";

export default function MainPage() {
  const schemaOrgWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "webcity.dev",
    "url": "https://www.webcity.dev",
    "description": "Your vision, our work of art. webcity.dev crafts tailored websites that bring your unique business ideas to life. We combine stunning design with powerful functionality to create digital masterpieces that captivate and convert.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.webcity.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const schemaOrgOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "webcity.dev",
    "url": "https://www.webcity.dev",
    "logo": "https://www.webcity.dev/logo.png",
    "sameAs": [
      "https://www.facebook.com/webcitydev",
      "https://www.twitter.com/webcitydev",
      "https://www.linkedin.com/company/webcitydev"
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>webcity.dev | Tailored Websites for Your Business Vision</title>
        <meta name="description" content="Your vision, our work of art. webcity.dev crafts tailored websites that bring your unique business ideas to life. We combine stunning design with powerful functionality to create digital masterpieces that captivate and convert." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="webcity.dev" />
        <meta name="keywords" content="web design, web development, tailored websites, custom web applications, responsive design, online presence" />

        <meta property="og:title" content="webcity.dev | Tailored Websites for Your Business Vision" />
        <meta property="og:description" content="Your vision, our work of art. webcity.dev crafts tailored websites that bring your unique business ideas to life. We combine stunning design with powerful functionality to create digital masterpieces that captivate and convert." />
        <meta property="og:url" content="https://www.webcity.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.webcity.dev/og-image.jpg" />
        <meta property="og:image:alt" content="webcity.dev - Tailored Web Design and Development Solutions" />
        <meta property="og:site_name" content="webcity.dev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webcitydev" />
        <meta name="twitter:title" content="webcity.dev | Tailored Websites for Your Business Vision" />
        <meta name="twitter:description" content="Your vision, our work of art. We craft tailored websites that bring your unique business ideas to life, creating digital masterpieces that captivate and convert." />
        <meta name="twitter:image" content="https://www.webcity.dev/twitter-image.jpg" />

        <link rel="canonical" href="https://www.webcity.dev" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebsite)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgOrganization)}
        </script>
      </Helmet>
      <Landing />
      <Services />
      {/* <Statistics /> */}
      <Projects />
      {/* <Testimonials /> */}
      <AboutUs />
      <FooterQuote />
    </>
  );
}