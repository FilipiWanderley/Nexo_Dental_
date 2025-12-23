/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0055A4', // Assuming a blue shade from the image
        secondary: '#00AEEF', // Lighter blue
        accent: '#E6F4FA', // Very light blue background
      }
    },
  },
  plugins: [],
}
