import { client } from './sanityClient';

export const categoriesService = {
  getCategories: async (lang = 'en') => {
    const categories = await client.fetch(`
      *[_type == "category" && defined(title.${lang})] {
        _id,
        "title": title.${lang},
        "description": description.${lang}
      }
    `);
    return categories;
  },

  getCategoryBySlug: async (slug, lang = 'en') => {
    const category = await client.fetch(`
      *[_type == "category" && slug.current == $slug && defined(title.${lang})][0] {
        _id,
        "title": title.${lang},
        "description": description.${lang}
      }
    `, { slug });
    return category;
  },

  getPostCountByCategory: async (lang = 'en') => {
    const categoryCounts = await client.fetch(`
      *[_type == "category" && defined(title.${lang})] {
        _id,
        "title": title.${lang},
        "postCount": count(*[_type == "post" && references(^._id)])
      }
    `);
    return categoryCounts;
  }
};
