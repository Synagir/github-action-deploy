/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/github-action-deploy/" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/github-action-deploy/" : undefined,
  output: 'export',
}

module.exports = nextConfig
