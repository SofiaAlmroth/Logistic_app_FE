/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4338ca",
          secondary: "#a5b4fc",
          accent: "#9d76f7",
          neutral: "#d6d3d1",
          "base-100": "#f5f5f4",
          info: "#292524",
          success: "#4ade80",
          warning: "#fbbf24",
          error: "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
