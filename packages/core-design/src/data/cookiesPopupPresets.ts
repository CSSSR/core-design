import cookiesPopupLinks from './cookiesPopupLinks'

const presets = {
  defaultEn: {
    text: cookiesPopupLinks.en.text,
    links: [
      {
        title: cookiesPopupLinks.en.links[0].title,
        href: cookiesPopupLinks.en.links[0].href,
      },
      {
        title: cookiesPopupLinks.en.links[1].title,
        href: cookiesPopupLinks.en.links[1].href,
      },
    ],
  },
  defaultRu: {
    text: cookiesPopupLinks.ru.text,
    links: [
      {
        title: cookiesPopupLinks.ru.links[0].title,
        href: cookiesPopupLinks.ru.links[0].href,
      },
    ],
  },
}

export default presets
