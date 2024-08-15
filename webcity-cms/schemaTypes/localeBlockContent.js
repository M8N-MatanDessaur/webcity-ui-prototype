import { defineType } from 'sanity';
import blockContent from './blockContent'; // Assuming you have a blockContent schema

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'fr', title: 'French' },
];

const localeBlockContent = defineType({
  name: 'localeBlockContent',
  title: 'Localized Block Content',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    name: lang.id,
    title: lang.title,
    type: 'blockContent',
  })),
});

export default localeBlockContent;
