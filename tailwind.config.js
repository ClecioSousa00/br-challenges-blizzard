/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        bgMenu:
          'linear-gradient(180deg, #020203 0%, rgba(14, 17, 23, 0.92) 96.35%, rgba(14, 17, 23, 0.9) 100%)',
        shadowSlide:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 18%, rgba(0,0,0,0) 100%)',
      },
      fontFamily: {
        sans: 'var(--font-poppins)',
      },
      colors: {
        buttonBg: '#00AEFF',
        dropDownFooter: '#15171B',
      },
    },
  },
  plugins: [],
}
