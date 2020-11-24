import { menu, schoolMenu, links, schoolLinks } from './headerLinks'

const presets = {
  school: {
    logo: {
      href: 'https://school.csssr.com/ru',
      testId: 'Header:link.logo',
      type: 'school',
    },
    menu: { links: schoolMenu, backButtonText: 'Курсы' },
    links: schoolLinks,
    actionButton: {
      isVisible: true,
      text: 'Вход в лк',
      href: 'https://lms.csssr.school/',
      testId: 'Header:button.signIn',
    },
  },
  default: {
    logo: {
      href: 'https://csssr.com/en',
      testId: 'Header:link.logo',
      type: 'default',
    },
    menu: { links: menu, backButtonText: 'Our services' },
    links,
    actionButton: {
      isVisible: true,
      text: 'Hire us',
      href: '',
      testId: 'Header:button.hireUs',
    },
  },
}

export default presets
