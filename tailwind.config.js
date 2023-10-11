/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  // tailwind는 기본적으로 purge를 사용하지 않기 때문에, 사용하려면 명시적으로 설정해줘야 한다.
  plugins: [
    require('@tailwindcss/typography')
  ],
}

