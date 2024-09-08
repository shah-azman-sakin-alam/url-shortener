/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  theme:{
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      screens: {
        'xs': '0px',
        'md': '768px',
        "sm": '640px',
        'lg': '1024px',
    },
    colors:{
      'label':'#2A2A2A'
    }
    }
  }
}
