/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fusca': "url('/src/images/car_wallpaper.jpg')",
      },
      spacing: {
        '50vh': '50vh',
      }
    },
  },
  plugins: [],
}