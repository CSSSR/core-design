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
/* tslint:enable */

export const menu = [
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
        title: 'Web Development',
        description: 'Fast, reliable and professional web development services.',
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
        href: 'https://csssr.com/en/service/design-lab',
      },
    ],
  },
  {
    id: 'industries',
    testId: 'Header:nav:button.industries',
    title: 'Industries',
    links: [
      {
        id: 'fintech',
        testId: 'Header:nav:link.fintech',
        icon: PieChart,
        component: Link,
        title: 'Fintech',
        href: 'https://csssr.com/en/industry/fintech',
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
        title: 'Information Technology',
        href: 'https://csssr.com/en/industry/information-technology',
      },
      {
        id: 'mediaAndMarketing',
        testId: 'Header:nav:link.mediaAndMarketing',
        icon: Message,
        component: Link,
        title: 'Media & Marketing',
        href: 'https://csssr.com/en/industry/media-and-marketing',
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
        href: 'https://csssr.com/en/products/lms',
      },
      {
        id: 'tracker',
        testId: 'Header:nav:link.tracker',
        icon: Tracker,
        component: Link,
        title: 'Time-tracking Software',
        description:
          'Powerful time tracking app for teams. Track working hours across projects and get detailed reports to&nbsp;improve budgeting efficiency',
        href: 'https://tracker.csssr.com',
      },
    ],
  },
]

export const links = [
  {
    href: 'https://blog.csssr.com',
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
]
