import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./Assets/Translation/i18n";

import MainPage from "./Pages/MainPage";
import InteractiveLogo from "./Components/InteractiveLogo/InteractiveLogo";
import ContactRevealButton from "./Components/ContactRevealButton/ContactRevealButton";
import AiTools from "./Pages/ToolboxPages/AiTools";
import FontsTools from "./Pages/ToolboxPages/FontsTools";
import GamesTools from "./Pages/ToolboxPages/GamesTools";
import GeneratorsTools from "./Pages/ToolboxPages/GeneratorsTools";
import IllustrationsTools from "./Pages/ToolboxPages/IllustrationsTools";
import MoreTools from "./Pages/ToolboxPages/MoreTools";
import ToolboxPage from "./Pages/ToolboxPage";
import BlogsPage from "./Pages/BlogsPage";

// import TranslationButton from "./Components/TranslationButton"; 

export default function App() {
  document.documentElement.style.setProperty("--background-color", "#FFFFFF");
  document.documentElement.style.setProperty("--text-color", "#000000");
  document.documentElement.style.setProperty("--foreground-color", "#f5f5f5");
  document.documentElement.style.setProperty("--border-color", "#00000035");
  document.documentElement.style.setProperty("--accent-color", "#00000010");
  document.documentElement.style.setProperty("--blurCardColor", "#f5f5f590");

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
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/toolbox" element={<ToolboxPage />} />
          <Route path="/aitools" element={<AiTools />} />
          <Route path="/fontstools" element={<FontsTools />} />
          <Route path="/gamestools" element={<GamesTools />} />
          <Route path="/generatorstools" element={<GeneratorsTools />} />
          <Route path="/illustrationstools" element={<IllustrationsTools />} />
          <Route path="/moretools" element={<MoreTools />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}
