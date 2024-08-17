import { client } from './sanityClient';

export const postsService = {
  getPosts: async (lang = 'en') => {
    try {
      const posts = await client.fetch(`
        *[_type == "post" && defined(title.${lang}) && defined(slug.${lang})] | order(publishedAt desc) {
          _id,
          "title": title.${lang},
          "slug": slug.${lang},
          publishedAt,
          "excerpt": excerpt.${lang},
          categories[]->{ _id, "title": title.${lang} },
          mainImage {
            asset-> {
              _id,
              url
            }
          },
          author->{
            "name": name.${lang},
            image {
              asset-> {
                _id,
                url
              }
            }
          }
        }
      `, { lang });
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw new Error("errorLoadingContent");
    }
  },

  getRecentPosts: async (limit = 5, lang = 'en') => {
    try {
      limit = parseInt(limit, 10);

      const recentPosts = await client.fetch(`
        *[_type == "post" && defined(title.${lang}) && defined(slug.${lang})] | order(publishedAt desc)[0...${limit}] {
          _id,
          "title": title.${lang},
          "slug": slug.${lang},
          publishedAt
        }
      `);

      return recentPosts;
    } catch (error) {
      console.error("Error fetching recent posts:", error);
      throw new Error("errorLoadingContent");
    }
  },

  getPostBySlug: async (slug, lang = 'en') => {
    try {
      const post = await client.fetch(`
        *[_type == "post" && slug.${lang} == $slug && defined(title.${lang})] | order(publishedAt desc) {
          _id,
          "title": title.${lang},
          "slug": slug.${lang},
          publishedAt,
          "body": body.${lang},
          categories[]->{ _id, "title": title.${lang} },
          mainImage {
            asset-> {
              _id,
              url
            }
          },
          author->{
            "name": name.${lang},
            image {
              asset-> {
                _id,
                url
              }
            }
          }
        }
      `, { slug, lang });
      return post;
    } catch (error) {
      console.error("Error fetching post by slug:", error);
      throw new Error("errorLoadingContent");
    }
  },

  getPostById: async (id) => {
    try {
      const post = await client.fetch(`
        *[_type == "post" && _id == $id] {
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
        }[0]
      `, { id });
      return post;
    } catch (error) {
      console.error("Error fetching post by ID:", error);
      throw new Error("errorLoadingContent");
    }
  },
};
