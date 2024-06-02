/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    maxHeight: {
      '535': '535px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
    colors: {
      primary: '#27AE60',
      primary50: '#93D7AF',
      secundary: '#EB5757',
      gray1: '#333333',
      gray2: '#828282',
      gray3: '#E0E0E0',
      gray4: '#F5F5F5',
    },
  }
}

