/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989FF",
        topHeadPrimary: "#010f1c",
        topHeadingSecondary: "#021d35",
        pink: "#FD486B",
      }
    },
    container: {
      center: true,
      padding: "15px",
    },
  },
  plugins: [],
}

