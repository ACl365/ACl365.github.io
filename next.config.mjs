/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',

  // Required for static export's next/image component
  images: {
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