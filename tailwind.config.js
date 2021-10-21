module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
     'auto': 'auto',
     '-10': '-10',
    },
    screens: {
      'phoneS': {'min': '375px', 'max': '459px'},
      // => @media (min-width: 639px) { ... }
      'phoneL': {'min': '460px', 'max': '766px'},
      // => @media (min-width: 639px) { ... }
      'tablet': {'min': '767px', 'max': '1022px'},
      // => @media (min-width: 767px) { ... }
      'laptop': {'min': '1023px'},
      // => @media (min-width: 1023px) { ... }
      'laptopL': {'min': '1279px'},
      // => @media (min-width: 1279px) { ... }
      'desktop': {'min': '1535px'},
      // => @media (min-width: 1535px) { ... }
    },
    maxWidth: {
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '88rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/4': '100%',
      'phoneS':   '375px',
      'phoneL':   '460px',
      'tablet':   '767px',
      'laptop':   '1023px',
      'laptopL':  '1279px',
      'desktop':  '1535px',
    },
    maxHeight: {
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '88rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/4': '100%',
      'desktop':  '1535px',
      'laptopL':  '1279px',
      'laptop':   '1023px',
      'tablet':   '767px',
      'phoneL':   '460px',
      'phoneS':   '375px',
      '1/2vh':   '50vh',
      '2/2vh':   '100vh',
    },
    colors: {
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      blue: {
        primary: '#1C8694',
        primaryLight: '#23A6B8',
        sky: '#75E0EE',
        logo: '#2DD4EB',
        font: '#239A9E',
      },
      green: {
        grass: '#0A9419',
        forest: '#286B2F',
        button: '#1EBF1B',
        mac: '#B5D2CE',
      },
      white: {
        base: '#FFFFFF',
      },
      black: {
        black: '#000000',
      },
      red: {
        DEFAULT: '#c21414',
      },
      yellow: {
        DEFAULT: '#FFD500',
      },
      purple: {
        DEFAULT: '#700B97',
        lighter: '#8E05C2',
        darker:  '#3E065F',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '32': '32px',
      '40': '40px',
    },
    borderRadius: {
      'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'xl': '1rem',
     '2xl': '1.5rem',
     '3xl': '2rem',
     '4xl': '3rem',
    },
    fontFamily: {
      sacramento: 'Sacramento',
      montserrat: 'Montserrat',
      notoSansMoto: 'Noto Sans Mono',
      courierPrime: 'Courier Prime',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
       light: 300,
       normal: 400,
       medium: 500,
      semibold: 600,
       bold: 700,
      extrabold: 800,
      'extra-bold': 800,
       black: 900,
     },
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
