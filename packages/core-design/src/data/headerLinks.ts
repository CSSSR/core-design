import Link from '../components/Link'

/* tslint:disable */
const Square = require('../static/icons/header/square.svg')
const Triangle = require('../static/icons/header/triangle.svg')
const Circle = require('../static/icons/header/circle.svg')
const Arc = require('../static/icons/header/arc.svg')
const PieChart = require('../static/icons/header/pieChart.svg')
const Bag = require('../static/icons/header/bag.svg')
const Computer = require('../static/icons/header/computer.svg')
const Message = require('../static/icons/header/message.svg')
const CPU = require('../static/icons/header/cpu.svg')
const Repeat = require('../static/icons/header/repeat.svg')
const LMS = require('../static/icons/header/lms.svg')
const Tracker = require('../static/icons/header/tracker.svg')
const React = require('../static/icons/header/react.svg')
const Eda = require('../static/icons/header/eda.svg')
const OurProjects = require('../static/icons/header/ourProjects.svg')
/* tslint:enable */

export const schoolMenu = [
  {
    id: 'courses',
    testId: 'Header:nav:button.courses',
    title: 'Курсы',
    links: [
      {
        id: 'junior',
        testId: 'Header:nav:link.junior',
        icon: React,
        component: Link,
        title: 'React</br> Getting Started',
        description: 'Курс для разработчиков, которые хотят кодить на React.',
        href: '/ru/course/react/junior',
      },
      {
        id: 'middle',
        testId: 'Header:nav:link.middle',
        icon: React,
        component: Link,
        title: 'React</br> Under the Hood',
        description: 'Курс для React-джунов и тех, кто хочет заглянуть под капот фреймворка.',
        href: '/ru/course/react/react-under-the-hood',
      },
      {
        id: 'eda',
        testId: 'Header:nav:link.eda',
        icon: Eda,
        component: Link,
        title: 'Event-Driven Applications',
        description:
          'Курс для начинающих и уже работающих Junior <span style="white-space: nowrap">React-разработчиков</span>.',
        href: '/ru/course/event-driven-apps',
      },
    ],
  },
]

export const schoolLinks = [
  {
    href: 'https://csssr.com/ru',
    title: 'О компании',
    testId: 'Header:link.careers',
    component: Link,
  },
  {
    href: 'https://csssr.com/ru-ru/jobs',
    title: 'Вакансии',
    testId: 'Header:link.blog',
    component: Link,
  },
  {
    href: 'https://blog.csssr.com/ru',
    title: 'Блог',
    testId: 'Header:link.blog',
    component: Link,
  },
]

export const menuEn = [
  {
    id: 'services',
    testId: 'Header:nav:button.services',
    title: 'Services',
    links: [
      {
        id: 'outsourcing',
        testId: 'Header:nav:link.outsourcing',
        icon: Circle,
        component: Link,
        title: 'Outsourcing Front-end',
        description: 'Web development to&nbsp;complement core competencies',
        href: 'https://csssr.com/en/service/outsourcing-front-end',
      },
      {
        id: 'backend',
        testId: 'Header:nav:link.backend',
        icon: Arc,
        component: Link,
        title: 'Back-end and&nbsp;DevOps',
        description: 'Reliable back-end development and DevOps services.',
        href: 'https://csssr.com/en/service/back-end-and-devops',
      },
      {
        id: 'mvp',
        testId: 'Header:nav:link.mvp',
        icon: Square,
        component: Link,
        title: 'MVP Development',
        description: 'Development of&nbsp;core functionality for testing purposes.',
        href: 'https://csssr.com/en/service/mvp-development',
      },
      {
        id: 'design',
        testId: 'Header:nav:link.design',
        icon: Triangle,
        component: Link,
        title: 'DesignLab',
        description:
          'Design expertise with a&nbsp;focus on&nbsp;what really matters: users, investors, and revenue.',
        href: 'https://csssr.com/en/service/design',
      },
    ],
  },
  {
    id: 'portfolio',
    testId: 'Header:nav:button.portfolio',
    title: 'Portfolio',
    listTitle: 'Clients by industry',
    links: [
      {
        id: 'ourProjects',
        testId: 'Header:nav:link.ourProjects',
        icon: OurProjects,
        component: Link,
        title: 'Our projects',
        description: 'Take a look at solutions we have developed for some of our clients',
        href: 'https://csssr.com/en/projects',
      },
      {
        id: 'mediaAndMarketing',
        testId: 'Header:nav:link.mediaAndMarketing',
        icon: Message,
        component: Link,
        title: 'Media and marketing',
        href: 'https://csssr.com/en/industry/media-and-marketing',
      },
      {
        id: 'eCommerce',
        testId: 'Header:nav:link.eCommerce',
        icon: Bag,
        component: Link,
        title: 'E-Commerce',
        href: 'https://csssr.com/en/industry/ecommerce',
      },
      {
        id: 'information',
        testId: 'Header:nav:link.information',
        icon: Computer,
        component: Link,
        title: 'IT industry',
        href: 'https://csssr.com/en/industry/information-technology',
      },
      {
        id: 'fintech',
        testId: 'Header:nav:link.fintech',
        icon: PieChart,
        component: Link,
        title: 'Fintech',
        href: 'https://csssr.com/en/industry/fintech',
      },
    ],
  },
  {
    id: 'howWeWork',
    testId: 'Header:nav:button.howWeWork',
    title: 'How we work',
    links: [
      {
        id: 'technologies',
        testId: 'Header:nav:link.technologies',
        icon: CPU,
        component: Link,
        title: 'Technologies',
        description:
          'We&nbsp;keep a&nbsp;careful eye on&nbsp;emerging web development trends and never compromise best practice.',
        href: 'https://csssr.com/en/tech-stack',
      },
      {
        id: 'processes',
        testId: 'Header:nav:link.processes',
        icon: Repeat,
        component: Link,
        title: 'Our Process',
        description:
          'Attention to&nbsp;detail and well established business processes differentiate successful projects and those that are just average.',
        href: 'https://csssr.com/en/way-of-work',
      },
    ],
  },
  {
    id: 'solutions',
    testId: 'Header:nav:button.products',
    title: 'Solutions',
    links: [
      {
        id: 'lms',
        testId: 'Header:nav:link.lms',
        icon: LMS,
        component: Link,
        title: 'Modular LMS Platform',
        description:
          'Start you E-Learning business with or&nbsp;LMS. We&nbsp;offer design and development teams to&nbsp;do&nbsp;all the necessary integrations and customization',
        href: 'https://csssr.com/en/solutions/lms',
      },
      {
        id: 'tracker',
        testId: 'Header:nav:link.tracker',
        icon: Tracker,
        component: Link,
        title: 'Time-tracking Software',
        description:
          'We&rsquo;ve created an&nbsp;app that helps&nbsp;us manage time on&nbsp;our projects. Give it&nbsp;a&nbsp;try',
        href: 'https://tracker.csssr.com',
      },
    ],
  },
]

export const menuRu = [
  {
    id: 'services',
    testId: 'Header:nav:button.services',
    title: 'Услуги',
    links: [
      {
        id: 'outsourcing',
        testId: 'Header:nav:link.outsourcing',
        icon: Circle,
        component: Link,
        title: 'Фронтенд аутсорсинг',
        description: 'Работа над веб-проектами для крупных компаний.',
        href: 'https://csssr.com/ru/service/outsourcing-front-end',
      },
      {
        id: 'backend',
        testId: 'Header:nav:link.backend',
        icon: Arc,
        component: Link,
        title: 'Бэкенд и&nbsp;DevOps',
        description: 'Разработка полного цикла и&nbsp;настройка окружения.',
        href: 'https://csssr.com/ru/service/back-end-and-devops',
      },
      {
        id: 'mvp',
        testId: 'Header:nav:link.mvp',
        icon: Square,
        component: Link,
        title: 'Разработка MVP',
        description: 'Ключевой функционал для проверки бизнес-идей.',
        href: 'https://csssr.com/ru/service/mvp-development',
      },
    ],
  },
  {
    id: 'portfolio',
    testId: 'Header:nav:button.portfolio',
    title: 'Портфолио',
    listTitle: 'Делаем проекты для',
    links: [
      {
        id: 'ourProjects',
        testId: 'Header:nav:link.ourProjects',
        icon: OurProjects,
        component: Link,
        title: 'Наши проекты',
        description: 'Посмотрите на решения для некоторых из наших клиентов',
        href: 'https://csssr.com/ru/projects',
      },
      {
        id: 'mediaAndMarketing',
        testId: 'Header:nav:link.mediaAndMarketing',
        icon: Message,
        component: Link,
        title: 'Медиа и&nbsp;маркетинга',
        href: 'https://csssr.com/ru/industry/media-and-marketing',
      },
      {
        id: 'eCommerce',
        testId: 'Header:nav:link.eCommerce',
        icon: Bag,
        component: Link,
        title: 'E-Commerce',
        href: 'https://csssr.com/ru/industry/ecommerce',
      },
      {
        id: 'information',
        testId: 'Header:nav:link.information',
        icon: Computer,
        component: Link,
        title: 'IT-отрасли',
        href: 'https://csssr.com/ru/industry/information-technology',
      },
      {
        id: 'fintech',
        testId: 'Header:nav:link.fintech',
        icon: PieChart,
        component: Link,
        title: 'Финтеха',
        href: 'https://csssr.com/ru/industry/fintech',
      },
    ],
  },
  {
    id: 'howWeWork',
    testId: 'Header:nav:button.howWeWork',
    title: 'Как мы&nbsp;работаем',
    links: [
      {
        id: 'technologies',
        testId: 'Header:nav:link.technologies',
        icon: CPU,
        component: Link,
        title: 'Технологии',
        description:
          'Мы&nbsp;внимательно следим за&nbsp;новинками веб-разработки и&nbsp;не&nbsp;забываем про лучшие стандарты.',
        href: 'https://csssr.com/ru/tech-stack',
      },
      {
        id: 'processes',
        testId: 'Header:nav:link.processes',
        icon: Repeat,
        component: Link,
        title: 'Процессы',
        description:
          'Отлаженные процессы, опыт и&nbsp;внимание к&nbsp;деталям помогают нам создавать успешные проекты.',
        href: 'https://csssr.com/ru/way-of-work',
      },
    ],
  },
]

export const linksEn = [
  {
    href: '/en',
    title: 'Blog',
    testId: 'Header:link.blog',
    component: Link,
  },
  {
    href: 'https://csssr.com/en/jobs',
    title: 'Careers',
    testId: 'Header:link.careers',
    component: Link,
  },
  {
    href: 'https://csssr.com/en/contacts',
    title: 'Contacts',
    testId: 'Header:link.contacts',
    component: Link,
  },
]

export const linksRu = [
  {
    href: '/ru',
    title: 'Блог',
    testId: 'Header:link.blog',
    component: Link,
  },
  {
    href: 'https://csssr.com/ru/jobs',
    title: 'Вакансии',
    testId: 'Header:link.careers',
    component: Link,
  },
  {
    href: 'https://csssr.com/ru/contacts',
    title: 'Контакты',
    testId: 'Header:link.contacts',
    component: Link,
  },
]
