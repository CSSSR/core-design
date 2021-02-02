import { nav, bottomLinks } from './footerLinks'

const presets = {
  defaultEn: {
    nav,
    privacyPolicyLink: bottomLinks.en.privacyPolicyLink,
    cookiesPolicyLink: bottomLinks.en.cookiesPolicyLink,
    languageLink: bottomLinks.en.languageLink,
  },
  defaultRu: {
    nav,
    privacyPolicyLink: bottomLinks.ru.privacyPolicyLink,
    allianceLink: bottomLinks.ru.allianceLink,
    languageLink: bottomLinks.ru.languageLink,
  },
}

export default presets
