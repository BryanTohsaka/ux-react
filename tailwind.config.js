/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'w1': "url('/src/assets/w1.webp')",
        'w2': "url('/src/assets/w2.webp')",
        'w3': "url('/src/assets/w3.webp')",
        'w4': "url('/src/assets/w4.webp')",
        'w5': "url('/src/assets/w5.webp')",
        'w6': "url('/src/assets/w6.webp')",
        'w7': "url('/src/assets/w7.webp')",
        'w8': "url('/src/assets/w8.webp')",
        'w9': "url('/src/assets/w9.webp')",
        'footer': "url('/src/assets/footer.webp')",
      },
      fontFamily:{
        montserrat:['"Montserrat"']
      }
    },
  },
  plugins: [],
}