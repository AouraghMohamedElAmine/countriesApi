module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "hsl(207, 26%, 17%)",
        lightBg: "hsl(0, 0%, 98%)",
        dark: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 98%)",
        darkElement: "hsl(209, 23%, 22%)",
        darkGray: "hsl(0, 0%, 52%)",
        lightElement : "hsl(0, 0%, 100%)"
      },
    },
  },
  plugins: [],
};
