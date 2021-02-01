import { nav } from './footerLinks'

const presets = {
  en: {
    nav,
    privacyPolicy: {
      text: 'PRIVACY POLICY',
      href: 'https://csssr.com/en/privacy-policy',
    },
    cookiesPolicy: {
      text: 'WEBSITE COOKIE POLICY',
      href: 'https://csssr.com/en/cookies-policy',
    },
    languageLink: {
      text: 'ru',
      href: 'http://csssr.com/ru',
    },
  },
  ru: {
    nav,
    privacyPolicy: {
      text: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
      href: 'https://csssr.com/ru/privacy-policy',
    },
    alliance: {
      text: 'часть альянса',
      title: 'FRONTEND.DIGITAL',
      href: 'https://frontend.digital',
    },
    languageLink: {
      text: 'en',
      href: 'http://csssr.com/en',
    },
  },
}

export default presets
