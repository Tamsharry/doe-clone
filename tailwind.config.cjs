/** @type {import('tailwindcss').Config} */
module.exports= {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFA",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundImage: {
        "about": "url('/src/assets/doe_in.jpg')",
      },
    },
  },
  plugins: [],
}

