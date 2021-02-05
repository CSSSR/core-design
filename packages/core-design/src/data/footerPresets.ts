import { nav, socials, bottomLinks } from './footerLinks'

const presets = {
  defaultEn: {
    socialLinks: socials.slice(0, 4),
    nav: nav.en,
    privacyPolicyLink: bottomLinks.en.privacyPolicyLink,
    cookiesPolicyLink: bottomLinks.en.cookiesPolicyLink,
    languageLink: bottomLinks.en.languageLink,
  },
  defaultRu: {
    socialLinks: socials,
    nav: nav.ru,
    privacyPolicyLink: bottomLinks.ru.privacyPolicyLink,
    allianceLink: bottomLinks.ru.allianceLink,
    languageLink: bottomLinks.ru.languageLink,
  },
}

export default presets
