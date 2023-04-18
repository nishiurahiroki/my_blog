/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    ,
    './src/app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  plugins: [require('flowbite/plugin'), require('flowbite-typography')],
  theme: {},
  darkMode: 'class',
  mode: 'jit',
};
