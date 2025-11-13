// import daisyui from "daisyui";

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: true, // DaisyUI handles theme
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],
//   daisyui: {
//     themes: ["light", "dark"],
//   },
// };

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // ✅ Enable Tailwind dark variants
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // ✅ DaisyUI theme names
  },
};

export default config;
