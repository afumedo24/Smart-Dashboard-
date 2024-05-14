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
      thd_darkblue: '#1A4273',
      thd_donaublue: '#009FE3',
      thd_grey: '#6F6F6E',
      thd_ai_red: 'E73D55',
      white: '#ffffff',
      black: '#1A1A1A'
    },
    fontFamily: {
      saira: ['saira', 'sans-serif']
    }
  },
  plugins: []
}
