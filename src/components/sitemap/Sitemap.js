// Component/Sitemap/Sitemap.js

import React, { useEffect, useState } from 'react';

function Sitemap() {
  const [sitemapContent, setSitemapContent] = useState(null);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await fetch('/sitemap.xml');
        const sitemapText = await response.text();
        setSitemapContent(sitemapText);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
        setSitemapContent('Error fetching sitemap');
      }
    };

    fetchSitemap();
  }, []);

  return (
    <div>
      <h2>Sitemap</h2>
      {sitemapContent ? (
        <pre>{sitemapContent}</pre>
      ) : (
        <p>Loading sitemap...</p>
      )}
    </div>
  );
}

export default Sitemap;
