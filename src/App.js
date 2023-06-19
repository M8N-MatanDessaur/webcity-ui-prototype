import React from "react";
import InteractiveLogo from "./Components/InteractiveLogo";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./Translation/i18n";

import MainPage from "./Pages/MainPage";
import Portfolio from "./Pages/Portfolio";
import ContactRevealButton from "./Components/ContactRevealButton";
import TranslationButton from "./Components/TranslationButton";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <InteractiveLogo />
      <TranslationButton />
      <ContactRevealButton />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
    </I18nextProvider>
  );
}