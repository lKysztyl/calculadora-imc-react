/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-radial-gradient': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'lightblue-radial-gradient': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'sea-gradient': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))'
      },
      fontFamily: {
        'roboto-mono': 'Roboto Mono',
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

