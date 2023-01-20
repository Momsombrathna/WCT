/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cam-green' : '#708942',
      },
    },
  },
  plugins: [require('flowbite/plugin','tailwind-scrollbar-hide')],
}