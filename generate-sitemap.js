const fs = require('fs');
const path = require('path');

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
  ],
  blogPosts: [
    { slug: 'learning-custom-styling-for-web-development', priority: 0.7 },
    // Add more blog posts here as needed
  ]
};

function generateSitemap() {
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
  for (const post of siteStructure.blogPosts) {
    sitemap += `
  <url>
    <loc>https://webcity.dev/blog/${post.slug}</loc>
    <priority>${post.priority}</priority>
  </url>`;
  }

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to file
const sitemap = generateSitemap();
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');