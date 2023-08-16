/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}"
   ],
   theme: {
     extend: {},
     colors:{
      primary: 'hsl(207, 100%, 98%)',
      button: 'hsl(322, 100%, 66%)',
      footer: 'hsl(192, 100%, 9%)', 
      white: '#fff'
     },
   },
   plugins: [],
}
