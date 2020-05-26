import color from 'color'

const primary = color('#0076ff')
const secondary = color('#4a4a4a')

const xs = 360

const s = 768
const s_s = s - 1

const m = 1024
const s_m = m - 1

const l = 1280
const s_l = l - 1

const xl = 1360
const s_xl = xl - 1

const xxl = 1920
const s_xxl = xxl - 1

const breakpoints = {
  xs,
  s,
  s_s,
  m,
  s_m,
  l,
  s_l,
  xl,
  s_xl,
  xxl,
  s_xxl,
}

const theme = {
  colors: {
    primary: {
      origin: primary.hex(),
      darken15: primary.darken(0.15).hex(),
    },
    secondary: {
      origin: secondary.hex(),
      darken100: '#18191B',
      lighten110: secondary.lighten(1.1).hex(),
      gray: '#9B9B9B',
      lightGray: '#C0C0C0',
    },
  },
  baseSize: 16,
  breakpoints: {
    mobile: {
      all: `@media (max-width: ${breakpoints.s_s}px)`,
    },
    tablet: {
      s: `@media (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.s_m}px)`,
      m: `@media (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.s_l}px)`,
      all: `@media (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.s_l}px)`,
    },
    desktop: {
      s: `@media (min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.s_xl}px)`,
      m: `@media (min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints.s_xxl}px)`,
      l: `@media (min-width: ${breakpoints.xxl}px)`,
      all: `@media (min-width: ${breakpoints.l}px)`,
    },
    below: {
      desktop: `@media (max-width: ${breakpoints.s_l}px)`,
    },
  },
  breakpointsOrdered: [
    {
      name: 'mobile.all',
      maxWidth: breakpoints.s_s,
    },
    {
      name: 'tablet.s',
      minWidth: breakpoints.s,
      maxWidth: breakpoints.s_m,
    },
    {
      name: 'tablet.m',
      minWidth: breakpoints.m,
      maxWidth: breakpoints.s_l,
    },
    {
      name: 'tablet.all',
      minWidth: breakpoints.s,
      maxWidth: breakpoints.s_l,
    },
    {
      name: 'desktop.s',
      minWidth: breakpoints.l,
      maxWidth: breakpoints.s_xl,
    },
    {
      name: 'desktop.m',
      minWidth: breakpoints.xl,
      maxWidth: breakpoints.s_xxl,
    },
    {
      name: 'desktop.l',
      minWidth: breakpoints.xxl,
    },
    {
      name: 'desktop.all',
      minWidth: breakpoints.l,
    },
  ],
  media: {
    points: breakpoints,
    from(width: number) {
      return `@media (min-width: ${width})`
    },
    to(width: number) {
      return `@media (max-width: ${width})`
    },
    from_to(minWidth: number, maxWidth: number) {
      return `@media (min-width: ${minWidth}) and (max-width: ${maxWidth})`
    },
  },
}

export default theme
export { theme as defaultTheme }
