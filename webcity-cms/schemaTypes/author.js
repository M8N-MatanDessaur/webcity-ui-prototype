import { defineField, defineType } from 'sanity';
import localeBlockContent from './localeBlockContent'; // Import the localeBlockContent

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string', // Define the name as a simple string (no localization)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'localeBlockContent', // Bio can be localized if needed
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
