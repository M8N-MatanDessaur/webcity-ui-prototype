import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./Translation/i18n";

import MainPage from "./Pages/MainPage";
import Portfolio from "./Pages/Portfolio";

import InteractiveLogo from "./Components/InteractiveLogo";
import ContactRevealButton from "./Components/ContactRevealButton";
import Toolbox from "./Pages/Toolbox";
import AiTools from "./Pages/ToolboxPages/AiTools";
import FontsTools from "./Pages/ToolboxPages/FontsTools";
import GamesTools from "./Pages/ToolboxPages/GamesTools";
import GeneratorsTools from "./Pages/ToolboxPages/GeneratorsTools";
import IllustrationsTools from "./Pages/ToolboxPages/IllustrationsTools";
import MoreTools from "./Pages/ToolboxPages/MoreTools";

//TODO : uncomment this line to enable translation button (Needs to be fixed)
// import TranslationButton from "./Components/TranslationButton"; 

export default function App() {

  // Obtain the user's preferred mode (light or dark)
  const userPreferredMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  // Update the CSS variables based on the user's preferred mode
  if (userPreferredMode === "light") {
    document.documentElement.style.setProperty("--background-color", "#FFFFFF");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--foreground-color", "#f5f5f5");
    document.documentElement.style.setProperty("--border-color", "#00000035");
    document.documentElement.style.setProperty("--accent-color", "#00000010");
    document.documentElement.style.setProperty("--blurCardColor", "#f5f5f590");
  } else if (userPreferredMode === "dark") {
    // document.documentElement.style.setProperty("--background-color", "#181818");
    // document.documentElement.style.setProperty("--text-color", "#FFFFFF");
    // document.documentElement.style.setProperty("--foreground-color", "#1f1f1f");
    // document.documentElement.style.setProperty("--border-color", "#FFFFFF35");
    // document.documentElement.style.setProperty("--accent-color", "#FFFFFF90");
    // document.documentElement.style.setProperty("--blurCardColor", "#1f1f1fb0");
    document.documentElement.style.setProperty("--background-color", "#FFFFFF");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--foreground-color", "#f5f5f5");
    document.documentElement.style.setProperty("--border-color", "#00000035");
    document.documentElement.style.setProperty("--accent-color", "#00000010");
    document.documentElement.style.setProperty("--blurCardColor", "#f5f5f590");
  }


  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#fff",
              color: "#121212",
            },
          }}
        />
        <InteractiveLogo />
        {/* <TranslationButton /> */}
        <ContactRevealButton />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/toolbox" element={<Toolbox />} />
          
          <Route path="/aitools" element={<AiTools />} />
          <Route path="/fontstools" element={<FontsTools />} />
          <Route path="/gamestools" element={<GamesTools />} />
          <Route path="/generatorstools" element={<GeneratorsTools />} />
          <Route path="/illustrationstools" element={<IllustrationsTools />} />
          <Route path="/moretools" element={<MoreTools />} />

        </Routes>
      </Router>
    </I18nextProvider>
  );
}
