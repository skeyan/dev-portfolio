/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#fff5f5',
            100: '#ffe4e4',
            200: '#ffc8c8',
            300: '#ffa3a3',
            400: '#ff9a9e',  
            500: '#fa8072',  
            600: '#f56565',
            700: '#e53e3e',
            800: '#c53030',
            900: '#9b2c2c',
          },
          accent: {
            50: '#fff5f0',
            100: '#ffeae0',
            200: '#ffd5c6',
            300: '#fad0c4', 
            400: '#ffb199',
            500: '#ff9b7d',
            600: '#ff7a54',
            700: '#ff5c2a',
            800: '#ff3d00',
            900: '#ff2d00',
          },
        },
        backgroundImage: {
          'hero-gradient': 'linear-gradient(120deg, var(--tw-colors-primary-500) 0%, var(--tw-colors-accent-300) 100%)',
        },
      },
    },
    plugins: [],
  }