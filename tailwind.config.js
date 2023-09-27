/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontFamily: {
        "custom-font-family": ["Rubik", "sans-serif"],
      },
      colors: {
        "moderate-blue": "hsl(238, 40%, 52%)",
        "soft-red": "hsl(358, 79%, 66%)",
        "light-greyish-blue": "hsl(239, 57%, 85%)",
        "pale-red": "hsl(357, 100%, 86%)",
        "dark-blue": "hsl(212, 24%, 26%)",
        "greyish-blue": "hsl(211, 10%, 45%)",
        "light-grey": "hsl(223, 19%, 93%)",
        "very-light-grey": "hsl(228, 33%, 97%)",
      },
    },
  },
  plugins: [],
};
