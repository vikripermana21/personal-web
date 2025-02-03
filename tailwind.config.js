/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["ui-serif", '"Source Serif 4"'],
      mono: ["ui-mono", '"Roboto Mono", monospace'],
    },
    lineHeight: {
      header: 1.25,
    },
    colors: {
      smoke: "#878787",
      three: "#222",
      vue: "#41b883",
      react: "#139eca",
      tailwind: "#37bcf8",
      bootstrap: "#9560d9",
      framer: "black",
      "styled-components": "#efb1ed",
      "sub-header": "#525d6e",
      white: "white",
      icons: "#ccc",
      link: "#0692ff",
    },
    extend: {},
  },
  plugins: [],
};
