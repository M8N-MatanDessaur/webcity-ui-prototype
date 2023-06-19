import React, {useState} from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";



export default function TranslationButton() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "fr" : "en";
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    return (
        <LanguageButton onClick={toggleLanguage}>
            {language === "en" ? "EN" : "FR"}
        </LanguageButton>
    );
}

const LanguageButton = styled.button`
  position: fixed;
  top: 25px;
  right: 25px;
  background-color: transparent;
  color: #00000080;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.1s ease-in-out;
  z-index: 998;

  &:hover {
    transform: scale(0.95);
  }
`;