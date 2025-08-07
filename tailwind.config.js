module.exports = {
content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if you use .vue or other extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        noticia: ['"Noticia Text"', "serif"],
        dancing: ['"Dancing Script"', "cursive"],
        garamond: ['"EB Garamond"', "serif"],
        mea: ['"Mea Culpa"', "cursive"],
      },
    },
  },
};
