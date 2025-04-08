/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for next export
  images: { // Required for static export on GitHub Pages
    unoptimized: true,
  },
  // Disable ESLint checks during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript checks during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

export default nextConfig;