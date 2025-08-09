module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if you use .vue or other extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Dancing Script"', 'cursive'],
        cursive: ['"Mea Culpa"', 'cursive'],
      },
      colors: {
        main: '#f8f4ef',
      },
    },
  },
};
