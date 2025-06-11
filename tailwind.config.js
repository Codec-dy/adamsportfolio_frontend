/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#f472b6',
        brandPurple: '#c084fc',
        brandBlue: '#93c5fd',
      },
    },
  },
  plugins: [],
}
