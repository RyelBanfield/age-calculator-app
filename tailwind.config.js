/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Purple: "hsl(259, 100%, 65%)",
          LightRed: "hsl(0, 100%, 67%)",
        },
        neutral: {
          White: "hsl(0, 0%, 100%)",
          OffWhite: "hsl(0, 0%, 94%)",
          LightGrey: "hsl(0, 0%, 86%)",
          SmokeyGrey: "hsl(0, 1%, 44%)",
          OffBlack: "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
