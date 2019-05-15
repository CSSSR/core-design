import color from 'color'

const primaryOrigin = color('#0076ff')
const secondaryOrigin = color('#4a4a4a')

const theme = {
  colors: {
    primary: {
      origin: primaryOrigin.hex(),
      darken15: primaryOrigin.darken(0.15).hex(),
    },
    secondary: {
      origin: secondaryOrigin.hex(),
      darken100: secondaryOrigin.darken(1).hex(),
    },
  },
  baseSize: 16,
  breakpoints: {
    desktop: {
      all: '@media (min-width: 1280px)',
      m: '@media (min-width: 1360px) and (max-width: 1919px)',
      s: '@media (min-width: 1280px) and (max-width: 1359px)',
    },
    tablet: {
      all: '@media (min-width: 768px) and (max-width: 1279px)',
      m: '@media (min-width: 1024px) and (max-width: 1279px)',
      s: '@media (min-width: 768px) and (max-width: 1023px)',
    },
    mobile: {
      all: '@media (max-width: 767px)',
    },
    below: {
      desktop: '@media (max-width: 1279px)',
    },
  },
}

export default theme
export { theme as defaultTheme }
export type Theme = typeof theme
