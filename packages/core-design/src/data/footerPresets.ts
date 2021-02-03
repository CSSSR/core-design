import { nav, socials } from './footerLinks'

const presets = {
  defaultEn: {
    socialLinks: socials.slice(0, 4),
    nav: nav.en,
  },
  defaultRu: {
    socialLinks: socials,
    nav: nav.ru,
  },
}

export default presets
