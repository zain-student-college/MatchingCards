module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        borderColorChange: {
          '0%':   { borderColor: '#3b82f6' }, // blue-500
          '33%':  { borderColor: '#22c55e' }, // green-500
          '66%': { borderColor: '#a855f7' }, // purple-500
          '100%': { borderColor: '#3b82f6' }, // blue-500
        },
      },
    },
  },
  plugins: [],
};