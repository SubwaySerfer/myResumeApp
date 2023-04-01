module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      yel: '#ffe904',
      yel2: '#e3d107',
      re: '#f63200',
    },
    extend: {
      gridTemplateRows: {
        // Простая 8-рядная сетка
        tpBr: '4rem, repeat(4, minmax(0, 2fr))',
      },
    },
    plugins: [],
  },
}
