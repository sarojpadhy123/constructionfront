/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      colors:{
        "green":"#39DB4A",
        "red":"FF6868",
        "secondary":"#555",
        "primaryBG":"#FCFCFC"
      },
   
    },
  },
  plugins: [require("daisyui")],
  
}

