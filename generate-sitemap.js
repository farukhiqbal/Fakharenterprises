const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define your URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 0.9 },
  { url: '/home', changefreq: 'daily', priority: 0.9 },
  { url: '/product', changefreq: 'weekly', priority: 0.7 },
  { url: '/services', changefreq: 'weekly', priority: 0.7 },
  { url: '/aboutus', changefreq: 'weekly', priority: 0.7 },
  { url: '/contactus', changefreq: 'weekly', priority: 0.7 },
  { url: '/productdetail/:id', changefreq: 'weekly', priority: 0.7 },
 
  // Add other routes here
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://www.fakharenterprises.com/' });

// Generate the sitemap
streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  console.log('Sitemap written to ./public/sitemap.xml');
}).catch((err) => {
  console.error('Error generating sitemap:', err);
});
