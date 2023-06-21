import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './Fr';
import enTranslations from './En';

const initializeI18n = (userPreferredLanguage) => {
  i18n.use(initReactI18next).init({
    resources: {
      fr: {
        translation: frTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: userPreferredLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

// Example usage: obtain user's preferred language and then initialize i18n
const userPreferredLanguage = navigator.language;
initializeI18n(userPreferredLanguage);

export default i18n;
