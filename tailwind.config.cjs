/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: [],
}
