/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["ui-serif", '"Source Serif 4"'],
      mono: ["ui-mono", '"Roboto Mono", monospace'],
    },
    fontSize: {
      "size-header": "128px",
      "size-sub-header": "40px",
      "size-icons": "32px",
    },
    lineHeight: {
      header: 1.25,
    },
    colors: {
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
