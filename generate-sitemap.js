const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

// Initialize Sanity client
const client = createClient({
    projectId: 'e4zkjk7p',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-03-13',
});

// Define your site structure here
const siteStructure = {
  home: { url: '/', priority: 1.0 },
  mainPages: [
    { url: '/blogs', priority: 0.8 },
    { url: '/toolbox', priority: 0.8 },
  ],
  toolPages: [
    { url: '/aitools', priority: 0.6 },
    { url: '/fontstools', priority: 0.6 },
    { url: '/gamestools', priority: 0.6 },
    { url: '/generatorstools', priority: 0.6 },
    { url: '/illustrationstools', priority: 0.6 },
    { url: '/moretools', priority: 0.6 },
  ]
};

// Function to get all blog post slugs from Sanity
async function getEnBlogSlugs() {
  const query = `*[_type == "post"] {
    "slug": slug.en,
    publishedAt
  }`;
  
  try {
    const posts = await client.fetch(query);
    return posts.map(post => ({
      slug: post.slug,
      priority: 0.7,
      publishedAt: post.publishedAt
    }));
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error);
    return [];
  }
}

async function getFrBlogSlugs() {
  const query = `*[_type == "post"] {
    "slug": slug.fr,
    publishedAt
  }`;
  
  try {
    const posts = await client.fetch(query);
    return posts.map(post => ({
      slug: post.slug,
      priority: 0.7,
      publishedAt: post.publishedAt
    }));
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error);
    return [];
  }
}

async function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add home page
  sitemap += `
  <url>
    <loc>https://webcity.dev${siteStructure.home.url}</loc>
    <priority>${siteStructure.home.priority}</priority>
  </url>`;

  // Add main pages
  for (const page of siteStructure.mainPages) {
    sitemap += `
  <url>
    <loc>https://webcity.dev${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>`;
  }

  // Add tool pages
  for (const page of siteStructure.toolPages) {
    sitemap += `
  <url>
    <loc>https://webcity.dev${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>`;
  }

  // Add blog posts
  const En = await getEnBlogSlugs();
  const Fr = await getFrBlogSlugs();
  for (const post of En) {
    sitemap += `
  <url>
    <loc>https://webcity.dev/blog/${post.slug}</loc>
    <priority>${post.priority}</priority>
    <lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>
  </url>`;
  }
  for (const post of Fr) {
    sitemap += `
  <url>
    <loc>https://webcity.dev/blog/${post.slug}</loc>
    <priority>${post.priority}</priority>
    <lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>
  </url>`;
  }

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to file
generateSitemap()
  .then(sitemap => {
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
  })
  .catch(error => {
    console.error('Error generating sitemap:', error);
  });