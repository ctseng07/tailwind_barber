/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
        transitionTimingFunction: {
          'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
          'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      colors: {
        'gold': "#D5A153",
        'white': "#FFFFFF",
        'black': "#242424",
        'gray': "#707070",
        'bg-gold': "#D5A1531A",
        'bg-black': "#0D0D0D",
      },
      backgroundImage: {
        'hero': "url('assets/images/hero-banner.jpg')",
        'black': "url('assets/images/bg.png')",
        'pricing': "url('assets/images/pricing-bg.jpg')",
        'footer': "url('assets/images/footer-bg.png')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}

