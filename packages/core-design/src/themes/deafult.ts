import color from 'color'

const primaryOrigin = color('#0076ff')
const secondaryOrigin = color('#4a4a4a')

export default {
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
}
