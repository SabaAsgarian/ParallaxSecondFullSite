/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        cr:'cr',
        le:'le',
        gm:'gm'
      }, backgroundImage: {
        'header': "url('./components/img/ab.gif')",
        'cloud': "url('./components/img/wolkenrand-mobile.png')",
        'chery': "url('./components/img/chery.webp')",
        'back': "url('./components/img/mobile-clouds-221x480.png')",
       
     
      },
    },
  },
  plugins: [],
};
