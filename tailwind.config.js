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
        blackgreen: "#112211",
      },
      fontSize: {
        h1: ["45px"],
        h2: ["40px"],
      },

      fontFamily: {
        roboto: ["var(--font-roboto)", "sans"],
        montserrat: ["var(--font-montserrat)", "sans"],
      },
    },
  },
  plugins: [],
};
