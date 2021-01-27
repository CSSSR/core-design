import { css } from '@emotion/react'
import { ThemeProps } from '../../../../themes/types'
import calcRem from '../../../../utils/style/calcRem'

const base = (props: ThemeProps) => {
  const { desktop, tablet, above, mobile } = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    & {
      position: absolute;
      top: ${calcRem(64)};
      left: 0;
      width: 100%;
      height: 0;
      order: 5;
      background-color: ${colors.secondary.darken100};
      overflow: hidden;
      will-change: height;
      transition: height 75ms ease-out;
    }

    &.visible {
      height: ${calcRem(240)};
    }

    .nav,
    .nav ul,
    .nav-item {
      height: 100%;
    }

    .nav-item_active {
      pointer-events: none;
    }

    .nav-item_active a {
      color: #5695ed;
    }

    .nav {
      margin-left: auto;
      margin-right: auto;
      max-width: 1360px;

      ul {
        display: flex;
        flex-wrap: wrap;
      }
    }

    .title,
    .description {
      color: inherit;
      width: 100%;
    }

    .description {
      margin-top: ${calcRem(15)};
      width: calc(100% - ${calcRem(80)});
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .nav_howWeWork,
    .nav_solutions,
    .nav_industries {
      .nav-item {
        width: 50%;
      }

      .title {
        width: calc(100% - ${calcRem(43)});
      }
    }

    .nav_services_children_number_3,
    .nav_courses_children_number_3 {
      .nav-item {
        width: 33%;
      }
    }

    .nav_services_children_number_3 {
      .title {
        width: 45%;
      }
    }

    .nav_industries {
      padding-top: ${calcRem(36)};
      padding-bottom: ${calcRem(28)};

      .nav-item {
        padding-top: ${calcRem(28)};
        padding-bottom: ${calcRem(28)};
        height: auto;
      }

      .link {
        padding-top: 0;
      }

      .icon {
        top: ${calcRem(4)};
      }

      .nav-item_active .icon_fintech path:last-of-type {
        fill: #5695ed;
      }

      .nav-item_active .icon_eCommerce path:last-of-type {
        fill: #5695ed;
      }

      .nav-item_active .icon_information path:first-of-type {
        fill: #5695ed;
      }

      .nav-item_active .icon_mediaAndMarketing path:first-of-type {
        fill: #5695ed;
      }

      .nav-item_active .icon_mediaAndMarketing path:last-of-type {
        stroke: #18191b;
      }
    }

    .nav_howWeWork {
      .nav-item_active .icon_technologies {
        fill: #5695ed;
      }
    }

    .nav_services,
    .nav_courses {
      .nav-item_active .icon path {
        stroke: #5695ed;
      }

      .nav-item_active .icon {
        fill: #5695ed;
      }

      .link {
        padding-top: ${calcRem(42)};
        padding-left: ${calcRem(88)};
      }
    }

    .nav_services_children_number_3,
    .nav_courses,
    .nav_howWeWork,
    .nav_solutions {
      .icon {
        top: ${calcRem(68)};
      }

      .description {
        width: 55%;
      }
    }

    .nav_services_children_number_4 {
      .nav-item {
        width: 23.125%;
        margin-left: ${calcRem(19)};
      }

      .title,
      .description {
        width: 80%;
      }

      .icon {
        top: ${calcRem(60)};
      }
    }

    .link {
      position: relative;
      padding-top: ${calcRem(64)};
      padding-left: ${calcRem(88)};
      display: block;
      height: 100%;
      color: white;
      text-decoration: none;

      &::after {
        display: none !important;
      }
    }

    .icon {
      position: absolute;
      top: ${calcRem(82)};
      left: ${calcRem(40)};
      width: ${calcRem(24)};
      transition: fill 100ms ease;

      path {
        stroke: white;
        transition: stroke 100ms ease;
      }
    }

    @media (pointer: fine) {
      .nav_howWeWork,
      .nav_solutions,
      .nav_industries {
        .link:hover {
          color: #5695ed;
        }

        .link:hover .icon path {
          stroke: #5695ed;
        }
      }

      .nav_industries {
        .link:hover .icon_fintech path:last-of-type {
          fill: #5695ed;
        }

        .link:hover .icon_eCommerce path:last-of-type {
          fill: #5695ed;
        }

        .link:hover .icon_information path:first-of-type {
          fill: #5695ed;
        }

        .link:hover .icon_mediaAndMarketing path:first-of-type {
          fill: #5695ed;
        }

        .link:hover .icon_mediaAndMarketing path:last-of-type {
          stroke: #18191b;
        }
      }

      .nav_howWeWork {
        .link:hover .icon_technologies {
          fill: #5695ed;
        }
      }

      .nav_services,
      .nav_courses {
        .link:hover {
          color: #5695ed;
        }

        .link:hover .icon {
          fill: #5695ed;
        }

        .link:hover .icon path {
          stroke: #5695ed;
        }
      }
    }

    .nav_howWeWork,
    .nav_solutions,
    .nav_industries {
      .nav-item_active .link {
        color: #5695ed;
      }

      .nav-item_active .link .icon path {
        stroke: #5695ed;
      }
    }

    .nav_services,
    .nav_courses {
      .nav-item_active .link {
        color: #5695ed;
      }

      .nav-item_active .link .icon {
        fill: #5695ed;
      }

      .nav-item_active .link .icon path {
        stroke: #5695ed;
      }
    }

    .nav_solutions .link:hover,
    .nav_solutions .nav-item_active .link {
      .icon_lms {
        fill: #5695ed;

        path {
          stroke: #5695ed;
        }

        path:not(:first-of-type) {
          stroke: #18191b;
        }
      }

      .icon_tracker {
        fill: #5695ed;

        circle {
          stroke: #5695ed;
        }

        path {
          stroke: #18191b;
        }
      }
    }

    ${desktop.all} {
      .nav_courses_children_number_3 {
        .title {
          margin-top: 22px;
          width: 90%;

          br {
            display: none;
          }
        }

        .description {
          width: 75%;
        }
      }
    }

    ${desktop.l} {
      .nav_services_children_number_4 {
        .nav-item {
          margin-left: ${calcRem(24)};
        }
      }
    }

    ${desktop.s} {
      .nav_courses_children_number_3 {
        .description {
          width: 85%;
        }
      }
    }

    ${tablet.all} {
      .title {
        font-size: ${calcRem(24)};
        line-height: ${calcRem(32)};
      }

      .nav_services {
        .title {
          width: 60%;
        }

        .description {
          width: calc(100% - ${calcRem(25)});
        }

        .link {
          padding-left: ${calcRem(72)};
        }

        .nav-item {
          width: 33%;
        }
      }

      .nav_courses {
        .title {
          width: 75%;
        }

        .description {
          width: calc(100% - ${calcRem(40)});
        }
      }

      .nav_services_children_number_4 {
        .nav-item {
          width: 21.875%;
          margin-left: ${calcRem(16)};
        }

        .icon {
          left: ${calcRem(23)};
        }

        .title {
          width: 100%;
        }

        .description {
          width: calc(100% - ${calcRem(10)});
        }
      }

      .nav_services_children_number_3,
      .nav_courses_children_number_3 {
        .link {
          padding-left: ${calcRem(89)};
        }
      }

      .nav_services_children_number_3 {
        .link {
          padding-top: ${calcRem(64)};
        }

        .icon {
          top: ${calcRem(81)};
        }
      }

      .nav_courses_children_number_3 {
        .link {
          padding-top: ${calcRem(56)};
        }

        .icon {
          top: ${calcRem(61)};
        }
      }

      .nav_howWeWork,
      .nav_solutions {
        .description {
          width: calc(100% - ${calcRem(92)});
        }
      }

      .nav_services,
      .nav_courses {
        .nav-item_active .icon path {
          stroke: #5695ed;
        }
      }
    }

    ${above.mobile} {
      .nav-item_design {
        .link {
          padding-top: ${calcRem(56)};
        }

        .description {
          width: ${calcRem(144)};
        }
      }
    }

    ${mobile.all} {
      & {
        top: 0;
        margin-bottom: ${calcRem(64)};
      }

      &.visible {
        position: static;
        height: auto;
      }

      .icon_back {
        margin-right: ${calcRem(8)};
        height: ${calcRem(12)};
      }

      .nav-item {
        padding-right: ${calcRem(32)};
        padding-left: ${calcRem(32)};
      }

      .button_back {
        margin-top: ${calcRem(12)};
        padding-right: ${calcRem(32)};
        padding-left: ${calcRem(32)};
        display: flex;
        align-items: center;
        height: ${calcRem(48)};
        font-family: 'Roboto', 'Arial', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: ${calcRem(10)};
        line-height: ${calcRem(16)};
        letter-spacing: ${calcRem(1.25)};
        text-transform: uppercase;
        color: #7e8fa4;
        background-color: transparent;
        border: none;
      }

      .nav ul {
        display: flex;
        flex-direction: column;
      }

      .link {
        padding-top: 0;
        padding-left: 0;
      }

      .nav_services,
      .nav_courses {
        .link {
          padding-top: 0;
          padding-left: 0;
        }

        .nav-item {
          margin-left: 0;
        }
      }

      .title {
        margin-top: ${calcRem(8)};
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .description {
        margin-top: ${calcRem(6)};
        font-size: ${calcRem(12)};
        line-height: ${calcRem(16)};
      }

      .icon {
        position: static;
        width: ${calcRem(24)};
        height: ${calcRem(24)};
      }

      .nav_industries,
      .nav_howWeWork,
      .nav_solutions,
      .nav_services,
      .nav_courses {
        .nav-item {
          width: 100%;
          height: auto;
        }

        .title,
        .description {
          width: 100%;
        }
      }

      .nav_howWeWork,
      .nav_solutions {
        ul {
          margin-top: ${calcRem(27)};
        }

        .nav-item {
          width: 100%;
          height: auto;
        }

        .nav-item:not(:first-of-type) {
          margin-top: ${calcRem(67)};
        }
      }

      .nav_services {
        ul {
          margin-top: ${calcRem(19)};
        }

        .nav-item {
          width: 100%;
          height: auto;
        }

        .title {
          margin-top: 0;
        }

        .nav-item:not(:first-of-type) {
          margin-top: ${calcRem(35)};
        }
      }

      .nav_courses {
        ul {
          margin-top: ${calcRem(28)};
        }

        .nav-item {
          width: 100%;
          height: auto;
        }

        .nav-item:not(:first-of-type) {
          margin-top: ${calcRem(67)};
        }

        .title {
          margin-top: ${calcRem(8)};

          br {
            display: none;
          }
        }
      }

      .nav_industries {
        padding-top: ${calcRem(8)};

        .nav-item {
          padding-top: 0;
          padding-bottom: 0;
          width: 100%;
          height: auto;
        }

        .nav-item:not(:first-of-type) {
          margin-top: ${calcRem(20)};
        }

        .link {
          padding-top: ${calcRem(16)};
          padding-bottom: ${calcRem(16)};
          display: flex;
          align-items: center;
        }

        .title {
          margin-top: 0;
          margin-left: ${calcRem(24)};
        }

        .icon {
          width: ${calcRem(28)};
          height: ${calcRem(28)};
        }
      }
    }
  `
}

export default (props: ThemeProps) => css`
  ${base(props)}
`
