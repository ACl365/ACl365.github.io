/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',

  // Disable ESLint checks during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

export default nextConfig;