import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './Fr';
import enTranslations from './En';

const userPreferredLanguage = navigator.language;

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

export default i18n;
