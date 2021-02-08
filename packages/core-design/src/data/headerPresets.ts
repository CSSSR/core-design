import { menuEn, menuRu, linksEn, linksRu, schoolMenu, schoolLinks } from './headerLinks'

const presets = {
  school: {
    logo: {
      href: 'https://school.csssr.com/ru',
      testId: 'Header:link.logo',
      type: 'school',
    },
    menu: schoolMenu,
    links: schoolLinks,
    actionButton: {
      isVisible: true,
      text: 'Вход в лк',
      href: 'https://lms.csssr.school/',
      testId: 'Header:button.signIn',
    },
  },
  defaultEn: {
    logo: {
      href: 'https://csssr.com/en',
      testId: 'Header:link.logo',
      type: 'default',
    },
    menu: menuEn,
    links: linksEn,
    actionButton: {
      isVisible: false,
    },
  },
  defaultRu: {
    logo: {
      href: 'https://csssr.com/ru',
      testId: 'Header:link.logo',
      type: 'default',
    },
    menu: menuRu,
    links: linksRu,
    actionButton: {
      isVisible: false,
    },
  },
}

export default presets
