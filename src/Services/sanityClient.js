import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'e4zkjk7p',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-13',
});

export async function getPosts() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    categories[]->{ title }
  }`);
  return posts;
}

export async function getCategories() {
  const categories = await client.fetch(`*[_type == "category"] {
    _id,
    title
  }`);
  return categories;
}

export async function getRecentPosts(limit = 5) {
  const recentPosts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    slug,
    publishedAt
  }`, { limit });
  return recentPosts;
}