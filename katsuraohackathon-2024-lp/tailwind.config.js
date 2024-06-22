/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      height: {
        '1/3screen': '33.33vh',  // ビューポートの1/3の高さ
        '2/3screen': '66.66vh',  // ビューポートの1/3の高さ
        'screen': '100vh',  // ビューポートの1/3の高さ
      },
      fontSize: {
        'vh-10': '10vh',  // 画面の縦幅の10%に相当する文字サイズ
        'vh-20': '20vh',  // 画面の縦幅の20%に相当する文字サイズ
        'vh-25': '25vh',  // 画面の縦幅の25%に相当する文字サイズ
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}