/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

