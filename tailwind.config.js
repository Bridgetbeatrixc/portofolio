/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#FF6B9D',
          orange: '#FF8C42',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-pink-orange': 'linear-gradient(to right, #FF6B9D, #FF8C42, #FFFFFF)',
        'hero-gradient': 'linear-gradient(180deg, #f6d5e3 0%, #f39ab0 45%, #f6d6b8 100%)',
      },
    },
  },
  plugins: [],
}

