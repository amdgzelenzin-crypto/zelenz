/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dummyzelenz.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1.0,
  exclude: ['/apple-icon', '/icon', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
