import { client } from './sanityClient';

export const postsService = {
  getPosts: async () => {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        categories[]->{ _id, title },
        mainImage {
          asset-> {
            _id,
            url
          }
        },
        author->{
          name,
          image {
            asset-> {
              _id,
              url
            }
          }
        }
      }
    `);
    return posts;
  },

  getRecentPosts: async (limit = 5) => {
    const recentPosts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        slug,
        publishedAt
      }
    `, { limit });
    return recentPosts;
  },

  getPostBySlug: async (slug) => {
    const post = await client.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        body,
        categories[]->{ _id, title },
        mainImage {
          asset-> {
            _id,
            url
          }
        },
        author->{
          name,
          image {
            asset-> {
              _id,
              url
            }
          }
        }
      }
    `, { slug });
    return post;
  },

  getPostsByCategory: async (category) => {
    const posts = await client.fetch(`
      *[_type == "post" && $category in categories[]->title] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        categories[]->{ title }
      }
    `, { category });
    return posts;
  }
};