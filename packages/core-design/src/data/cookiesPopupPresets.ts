import cookiesPopupLinks from './cookiesPopupLinks'

const dataTestIds = {
  blocks: {
    main: 'CookiesPopup::block',
  },
  buttons: {
    close: 'CookiesPopup:button.close',
  },
  links: {
    privacyPolicy: 'CookiesPopup:link.privacyPolicy',
    cookiesPolicy: 'CookiesPopup:link.cookiesPolicy',
  },
}

const presets = {
  defaultEn: {
    text: cookiesPopupLinks.en.text,
    links: [
      {
        id: cookiesPopupLinks.en.links[0].id,
        title: cookiesPopupLinks.en.links[0].title,
        href: cookiesPopupLinks.en.links[0].href,
      },
      {
        id: cookiesPopupLinks.en.links[1].id,
        title: cookiesPopupLinks.en.links[1].title,
        href: cookiesPopupLinks.en.links[1].href,
      },
    ],
    dataTestIds,
  },
  defaultRu: {
    text: cookiesPopupLinks.ru.text,
    links: [
      {
        id: cookiesPopupLinks.ru.links[0].id,
        title: cookiesPopupLinks.ru.links[0].title,
        href: cookiesPopupLinks.ru.links[0].href,
      },
    ],
    dataTestIds,
  },
}

export { dataTestIds }
export default presets
