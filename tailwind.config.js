// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//     colors: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Bu yerda ranglarni kengaytirishingiz mumkin
        // masalan:
        // 'custom-blue': '#1DA1F2',
      },
    },
  },
  plugins: [],
};
