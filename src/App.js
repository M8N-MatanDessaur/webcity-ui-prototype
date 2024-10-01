import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
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
import BlogPost from "./Components/BlogPost/BlogPost";
import FloatingHeader from "./Components/FloatingHeader/FloatingHeader";
import { ModalProvider, useModal } from './Hooks/useModal';
import ContactModal from "./Components/ContactModal/ContactModal";

// New component that uses useModal
const AppContent = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Function to get the browser language
    const getBrowserLanguage = () => {
      const browserLang = navigator.language || navigator.userLanguage;
      return browserLang.split('-')[0]; // Get the primary language code
    };

    // Set the initial language based on browser settings
    const browserLang = getBrowserLanguage();
    if (i18n.languages.includes(browserLang)) {
      i18n.changeLanguage(browserLang);
    } else {
      i18n.changeLanguage('en'); // Fallback to English if browser language is not supported
    }
  }, [i18n]);

  useEffect(() => {
    // Set the lang attribute on the html tag
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
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
      <FloatingHeader />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
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
  );
};

export default function App() {
  document.documentElement.style.setProperty("--background-color", "#FFFFFF");
  document.documentElement.style.setProperty("--text-color", "#000000");
  document.documentElement.style.setProperty("--foreground-color", "#f5f5f5");
  document.documentElement.style.setProperty("--border-color", "#00000035");
  document.documentElement.style.setProperty("--accent-color", "#00000010");
  document.documentElement.style.setProperty("--blurCardColor", "#ffffffA0");

  return (
    <I18nextProvider i18n={i18n}>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </I18nextProvider>
  );
}