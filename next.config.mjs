/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Temporarily removed for standard Vercel deployment
  // images: { // No longer needed without output: 'export'
  //   unoptimized: true,
  // },
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