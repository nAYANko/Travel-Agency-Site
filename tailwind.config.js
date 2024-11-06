/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.html",
    "./public/**/*.{html,js}",  // Adjust according to your folder structure
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#0077B6',
        'sunset-orange': '#FF6F3C',
        'sandy-beige': '#FFD9A0',
        'palm-green': '#43AA8B',
        'cloud-white': '#F9F9F9',
      },
      fontFamily: {
        sans: ['Montserrat Alternates', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}
