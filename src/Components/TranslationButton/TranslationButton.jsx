import React, {useState} from "react";
import { useTranslation } from "react-i18next";

import { LanguageButton } from "./TranslationButton.styles";

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
