/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: { },
    colors: {
      main: '#1A4273',
      secondary: '#009FE3',
      lightShade: '#dadada',
      thd_ai_red: '#E73D55',
      
      white: '#ffffff',
      black: '#4973B1',
      darkAccent: '#4973B1',
      darkShade: '#12151A',
    },
    fontFamily: {
      saira: ['saira', 'sans-serif']
    }
  },
  plugins: []
}
