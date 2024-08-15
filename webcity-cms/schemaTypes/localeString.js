import { defineType } from 'sanity';

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'fr', title: 'French' },
];

export const baseLanguage = supportedLanguages.find((lang) => lang.isDefault);

const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    name: lang.id,
    title: lang.title,
    type: 'string',
  })),
});

export default localeString;
