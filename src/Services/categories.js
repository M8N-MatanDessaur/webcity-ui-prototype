import { client } from './sanityClient';

export const categoriesService = {
  getCategories: async () => {
    const categories = await client.fetch(`
      *[_type == "category"] {
        _id,
        title,
        description
      }
    `);
    return categories;
  },

  getCategoryBySlug: async (slug) => {
    const category = await client.fetch(`
      *[_type == "category" && slug.current == $slug][0] {
        _id,
        title,
        description
      }
    `, { slug });
    return category;
  },

  getPostCountByCategory: async () => {
    const categoryCounts = await client.fetch(`
      *[_type == "category"] {
        _id,
        title,
        "postCount": count(*[_type == "post" && references(^._id)])
      }
    `);
    return categoryCounts;
  }
};