const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  webpack: {
    // webpack config properties
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    GITHUB_API_URL: process.env.GITHUB_API_URL,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    APP_URL: process.env.APP_URL,
    APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL,
  },
};
module.exports = withPlugins([withBundleAnalyzer], nextConfig);
