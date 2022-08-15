/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'landing1':"#0C0820",
        'landing2':"#191628",
        'landing3':"#36258B",
        'bgpurple':"#060822",
      },
    },
    backgroundImage: {
      'banner-image': "url('../public/images/banner.png')",
    },
    
  },
  plugins: [],
};
