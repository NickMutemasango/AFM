// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'shine': 'shine 1s ease-in-out',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
}