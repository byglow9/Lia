/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Certifique-se de que o caminho do seu HTML está correto
    "./src/**/*.{html,js}" // Se você estiver usando um diretório src, adicione aqui.
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['JOOJ1', 'sans-serif'], // Nome da sua fonte personalizada
      },
    },
  },
  plugins: [],
}
