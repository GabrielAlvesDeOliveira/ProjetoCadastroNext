module.exports = {
  purge:{
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist:[
      /^bg-/,
      /^to-/,
      /^from-/
    ]
  },

  darkmode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
