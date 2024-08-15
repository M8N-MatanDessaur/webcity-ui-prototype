import { defineField, defineType } from 'sanity';
import localeString, { baseLanguage } from './localeString'; // Ensure this import is correct

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeString',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
      description: `description.${baseLanguage.id}`,
    },
  },
});
