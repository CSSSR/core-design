import { nav, socials } from './footerLinks'

const presets = {
  defaultEn: {
    socialLinks: socials.slice(0, 4),
    nav,
  },
  defaultRu: {
    socialLinks: socials,
    nav,
  },
}

export default presets
