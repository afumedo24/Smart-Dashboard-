/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '2/3': '2 / 3',
        '1/2': '1 / 2'
      }
    },
    colors: {
      main: '#1A4273',
      secondary: '#009FE3',
      lightShade: '#D3D2C8',
      darkShade: '#12151A',
      darkAccent: '#4973B1',

      thd_ai_red: '#E73D55',
      white: '#ffffff',
      black: '#1A1A1A'
    },
    fontFamily: {
      saira: ['saira', 'sans-serif']
    }
  },
  plugins: []
}