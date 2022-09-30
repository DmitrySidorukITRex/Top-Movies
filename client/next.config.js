/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    serverURI: 'http://localhost:3005/graphql',
  },
  images: {
    domains: [
      's4.vcdn.biz',
      's9.vcdn.biz',
      's2.vcdn.biz',
      's5.vcdn.biz',
      's6.vcdn.biz',
      's3.vcdn.biz',
      's8.vcdn.biz',
      'kinopoisk-ru.clstorage.net',
    ],
    minimumCacheTTL: 300,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
