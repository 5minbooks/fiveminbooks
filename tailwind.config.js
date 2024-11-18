/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1ac19d',
          50: '#ebfaf7',
          100: '#d7f5ef',
          200: '#b0ece0',
          300: '#88e2d0',
          400: '#61d8c1',
          500: '#1ac19d',
          600: '#159a7d',
          700: '#10735e',
          800: '#0b4c3e',
          900: '#05251f',
        },
        accent: {
          yellow: '#f7c04a',
          orange: '#f56738',
          coral: '#ff9b61',
          blue: '#2b6d9c',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#1ac19d',
              '&:hover': {
                color: '#159a7d',
              },
            },
            strong: {
              color: 'inherit',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};