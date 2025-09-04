/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: '#626F47', // Main brand color (background overlay, text)
            dark: '#4A5535',   // Darker shade for hover or accents
            light: '#8B9A6B',  // Lighter shade for subtle backgrounds
          },
          accent: {
            DEFAULT: '#FFCF50', // Accent color (button background, hover text)
            dark: '#E6B800',   // Darker shade for hover states
            light: '#FFF5B3',  // Lighter shade for highlights
          },
          secondary: {
            DEFAULT: '#A4B465', // Secondary color (button background, hover)
            dark: '#7F8C4C',   // Darker shade for hover or accents
            light: '#C2D18A',  // Lighter shade for backgrounds
          },
        },
        white: '#FFFFFF',       // Pure white for text (e.g., headings)
        focus: {
          orange: '#EA580C',    // Tailwind's orange-600 for focus outline
          green: '#16A34A',     // Tailwind's green-600 for focus outline
        },
      },
    },
  },
  plugins: [],
}