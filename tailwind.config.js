/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',  
  theme: { extend: {
    colors: {
        'custom-purple': '#your-purple-hex', 
        'custom-red': '#your-red-hex',       
      },
  } },
  plugins: [],
};

