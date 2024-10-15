/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mintgreen: "#8DD3BB",
        salmon: "#FF8682",
      },
      fontSize: {
        fontFamily: {
          roboto: ["var(--font-gothic)", "sans"],
        },
      },
    },
  },
  plugins: [],
};
