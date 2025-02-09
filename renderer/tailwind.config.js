
module.exports = {
  content: [
    './renderer/app/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#3DBDA7",
        "secondary":"#1D1E22",
        "darkPrimary":"#067D71"
      }
    },
    container:{
      centered:true,
      'padding':'40px'
    }
  },
  plugins: [],
}
