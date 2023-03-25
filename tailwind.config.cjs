/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0cad31",

          secondary: "#fc3aec",

          accent: "#61dd6b",

          neutral: "#332B3B",

          "base-100": "#EDE7F4",

          info: "#9FBFE5",

          success: "#79E7D7",

          warning: "#C06707",

          error: "#E82C17",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
