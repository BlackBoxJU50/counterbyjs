/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./index.html"] ,
    theme: {
      extends: {
        colors: {

        'primary' :'#00ff6c',
        'secondary' : '#ff1dce'        
        },
        fontFamily:
        {
          'poppins': ['Poppins','sans-serif']

        },
      }
      },

  plugins: [],
}

