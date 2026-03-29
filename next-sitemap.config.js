/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nixtudio.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/apple-icon', '/icon', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // Allow ChatGPT search bot for real-time visibility
        userAgent: ['OAI-SearchBot', 'Google-Extended'],
        allow: '/',
      },
      {
        // Disallow large foundational models from scraping without attribution
        userAgent: ['GPTBot'],
        disallow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Homepage — highest priority
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() }
    }
    // Core money pages
    if (['/bridal', '/services'].includes(path)) {
      return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() }
    }
    // About, Gallery, Party — high value
    if (['/about', '/gallery', '/party'].includes(path)) {
      return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() }
    }
    // Blog index
    if (path === '/blog') {
      return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() }
    }
    // Blog posts
    if (path.startsWith('/blog/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() }
    }
    // Contact
    if (path === '/contact') {
      return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() }
    }
    // Default
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() }
  },
  additionalPaths: async (config) => {
    // Add blog post URLs that next-sitemap might not auto-discover
    const blogSlugs = [
      'hd-vs-airbrush-makeup-kerala-weddings',
      'christian-bridal-makeup-trends-2025',
      'pre-wedding-skin-prep-humid-kerala',
    ]
    
    // Add SEO landing pages for search domination
    const seoPages = [
      {
        loc: '/best-bridal-makeup-pala',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bridal-makeup-kottayam',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/luxury-bridal-makeup-kerala',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/airbrush-makeup-pala',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bridal-makeup-price-pala',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ]
    
    const blogPaths = blogSlugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))
    
    return [...seoPages, ...blogPaths]
  },
}
