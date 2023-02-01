/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['news.itmo.ru'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'news.itmo.ru',
  //       port: '',
  //       pathname: 'images/news/big/**',
  //     },
  //   ],
  // },
};

module.exports = {};

module.exports = nextConfig;
