import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from '../Translation/Fr';
import enTranslations from '../Translation/En';

const initializeI18n = (userPreferredLanguage) => {
  // Extract the language code without region or variant information
  const languageCode = userPreferredLanguage.split('-')[0];

  i18n.use(initReactI18next).init({
    resources: {
      fr: {
        translation: frTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: languageCode,
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
