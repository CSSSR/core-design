/* tslint:disable */
const Facebook = require('../static/icons/footer/facebook.svg')
const Linkedin = require('../static/icons/footer/linkedin.svg')
const Instagram = require('../static/icons/footer/instagram.svg')
const Youtube = require('../static/icons/footer/youtube.svg')
const Soundcloud = require('../static/icons/footer/soundcloud.svg')
const Telegram = require('../static/icons/footer/telegram.svg')
const Twitter = require('../static/icons/footer/twitter.svg')
const Vk = require('../static/icons/footer/vk.svg')
/* tslint:enable */

export const socials = [
  {
    id: 'facebook',
    href: 'https://www.facebook.com/csssr',
    icon: Facebook,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/company/csssr',
    icon: Linkedin,
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/csssr.dev',
    icon: Instagram,
  },
  {
    id: 'youtube',
    href: 'https://www.youtube.com/channel/UCdkZ6ckHOJ3DjAYxoGeMG0w',
    icon: Youtube,
  },
  {
    id: 'soundcloud',
    href: 'https://soundcloud.com/csssr',
    icon: Soundcloud,
  },
  {
    id: 'telegram',
    href: 'https://t.me/csssr',
    icon: Telegram,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/csssr_dev',
    icon: Twitter,
  },
  {
    id: 'vk',
    href: 'https://vk.com/csssr_dev',
    icon: Vk,
  },
]

export const nav = {
  en: (baseNavUrl) => [
    {
      id: 'services',
      title: 'Services',
      links: [
        {
          id: 'outsourcing',
          title: 'Outsourcing',
          href: `${baseNavUrl}/en/service/outsourcing-front-end`,
        },
        {
          id: 'backend',
          title: 'Back-end</br>and DevOps',
          href: `${baseNavUrl}/en/service/back-end-and-devops`,
        },
        {
          id: 'mvp',
          title: 'MVP',
          href: `${baseNavUrl}/en/service/mvp-development`,
        },
      ],
    },
    {
      id: 'howWeWork',
      title: 'How we work',
      links: [
        {
          id: 'technologies',
          title: 'Technologies',
          href: `${baseNavUrl}/en/tech-stack`,
        },
        {
          id: 'wayOfWork',
          title: 'Processes',
          href: `${baseNavUrl}/en/way-of-work`,
        },
        {
          id: 'coreValues',
          title: 'Core values',
          href: `${baseNavUrl}/en/core-values`,
        },
      ],
    },
    {
      id: 'solutions',
      title: 'Solutions',
      links: [
        {
          id: 'lms',
          title: 'Modular LMS system',
          href: `${baseNavUrl}/en/products/lms`,
        },
        {
          id: 'tracker',
          title: 'Time-tracking software',
          href: 'https://tracker.csssr.com/',
        },
      ],
    },
    {
      id: 'company',
      title: 'Company',
      links: [
        {
          id: 'careers',
          title: 'Careers',
          href: `${baseNavUrl}/en/jobs`,
        },
        {
          id: 'blog',
          title: 'Blog',
          href: 'http://blog.csssr.com/en',
        },
        {
          id: 'contactUs',
          title: 'Contacts',
          href: `${baseNavUrl}/en/contacts`,
        },
      ],
    },
  ],
  ru: (baseNavUrl) => [
    {
      id: 'services',
      title: 'Услуги',
      links: [
        {
          id: 'web-development',
          title: 'Aутсорсинг',
          href: `${baseNavUrl}/ru/service/outsourcing-front-end`,
        },
        {
          id: 'backend',
          title: 'Бэкенд</br>и DevOps',
          href: `${baseNavUrl}/ru/service/back-end-and-devops`,
        },
        {
          id: 'mvp',
          title: 'MVP',
          href: `${baseNavUrl}/ru/service/mvp-development`,
        },
      ],
    },
    {
      id: 'howWeWork',
      title: 'Как мы&nbsp;работаем',
      links: [
        {
          id: 'technologies',
          title: 'Технологии',
          href: `${baseNavUrl}/ru/tech-stack`,
        },
        {
          id: 'wayOfWork',
          title: 'Процессы',
          href: `${baseNavUrl}/ru/way-of-work`,
        },
        {
          id: 'coreValues',
          title: 'Ценности',
          href: `${baseNavUrl}/ru/core-values`,
        },
      ],
    },
    {
      id: 'company',
      title: 'Компания',
      links: [
        {
          id: 'careers',
          title: 'Вакансии',
          href: `${baseNavUrl}/ru/jobs`,
        },
        {
          id: 'blog',
          title: 'Блог',
          href: 'http://blog.csssr.com/ru',
        },
        {
          id: 'contactUs',
          title: 'Контакты',
          href: `${baseNavUrl}/ru/contacts`,
        },
      ],
    },
  ],
}

export const bottomLinks = {
  en: {
    privacyPolicyLink: {
      text: 'PRIVACY POLICY',
      href: 'https://csssr.com/en/privacy-policy',
    },
    cookiesPolicyLink: {
      text: 'WEBSITE COOKIE POLICY',
      href: 'https://csssr.com/en/cookies-policy',
    },
  },
  ru: {
    privacyPolicyLink: {
      text: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
      href: 'https://csssr.com/ru/privacy-policy',
    },
  },
}
