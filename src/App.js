import React from "react";
import InteractiveLogo from "./Components/InteractiveLogo";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Portfolio from "./Pages/Portfolio";
import ContactRevealButton from "./Components/ContactRevealButton";
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/Translation/i18n';

export default function App() {
  return (
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
      <ContactRevealButton />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}