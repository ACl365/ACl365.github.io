/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include if using pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // Disable dark mode variants
  theme: {
    extend: {
      colors: {
        // Example custom colors (replace/expand later)
        'primary': {
          DEFAULT: '#0A66C2', // Example: LinkedIn Blue
          'light': '#378FE9',
          'dark': '#004182',
        },
        'secondary': '#F3F2EF', // Example: Light neutral
        'accent': '#38A169', // Example: Green accent
        'neutral': {
          'light': '#F8F8F8',
          'DEFAULT': '#E0E0E0',
          'dark': '#333333',
        }
      },
      fontFamily: {
        // Map 'sans' utility to the Inter font variable with fallbacks
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Add 'heading' utility mapped to the Montserrat font variable with fallbacks
        heading: ['var(--font-montserrat)', 'ui-serif', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Add other custom theme extensions here (spacing, keyframes, etc.)
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add other plugins here
  ],
}