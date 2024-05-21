/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'transparant': 'transparant',
      'primary': '#6DBE45',
      'secondary': '#353535',
      'tertiary': '#E4E8EB',
      'white' : '#FFFFFF',
    }
  },
  plugins: [],
}

