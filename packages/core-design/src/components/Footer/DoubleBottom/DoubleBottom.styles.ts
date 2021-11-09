import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'
import { ThemeProps } from '../../../themes/types'

const base = (props: ThemeProps) => {
  const { mobile, tablet, desktop } = props.theme.breakpoints

  return css`
    & {
      position: fixed;
      z-index: -999;
      bottom: 0;
      left: 0;
      padding: ${calcRem(32)};
      display: flex;
      width: 100%;
      background-color: white;
    }

    .map-wrapper {
      margin-left: auto;
      position: relative;
      z-index: 1;
    }

    .map {
      position: absolute;
      top: 0;
      right: 0;
    }

    .picture {
      display: block;
    }

    .pin {
      position: absolute;
      display: block;
      width: 20px;
      height: 26px;

      &_russia,
      &_russia_2 {
        top: 100px;
        right: 191px;
      }

      &_estonia {
        top: 86px;
        right: 219px;
      }

      &_singapore {
        top: 147px;
        right: 117px;
        width: 38px;
        height: 48px;
      }

      &_hovered {
        transform: scale(1.2);
        transition: transform 300ms ease;
        transform-origin: bottom;
      }
    }

    ${desktop.all} {
      & {
        padding-right: ${calcRem(52)};
      }

      .map {
        width: 492px;
        height: 280px;
      }

      .picture {
        width: 492px;
        height: 280px;
      }

      .pin_singapore {
        top: 40%;
        right: 14.5%;
      }

      .pin_estonia {
        top: 15.7%;
        right: 36%;
      }

      .pin_russia,
      .pin_russia_2 {
        top: 22%;
        right: 31.7%;
      }
    }

    ${desktop.m} {
      & {
        padding-top: ${calcRem(59)};
      }
    }

    ${tablet.all} {
      & {
        padding-top: ${calcRem(41)};
        padding-right: ${calcRem(32)};
        padding-bottom: ${calcRem(29)};
        padding-left: ${calcRem(30)};
      }

      .map {
        width: ${calcRem(424)};
        height: ${calcRem(242)};
      }

      .picture {
        width: ${calcRem(424)};
        height: ${calcRem(242)};
      }

      .pin_singapore {
        top: ${calcRem(84)};
        right: ${calcRem(54)};
      }

      .pin_estonia {
        top: ${calcRem(32)};
        right: ${calcRem(135)};
      }

      .pin_russia,
      .pin_russia_2 {
        top: ${calcRem(48)};
        right: ${calcRem(112)};
      }
    }

    ${mobile.all} {
      & {
        position: static;
        z-index: 1;
        margin-top: ${calcRem(42)};
        padding: 0;
        flex-direction: column;
      }

      .map {
        position: relative;
      }

      .picture {
        margin-top: ${calcRem(22)};
        width: ${calcRem(328)};
      }

      .pin {
        max-width: 15px;
        max-height: 20px;
        background-position: 50%;

        &_singapore {
          top: ${calcRem(73)};
          right: ${calcRem(48)};
          max-width: 29px;
          max-height: 37px;
        }

        &_estonia {
          top: ${calcRem(37)};
          right: ${calcRem(119)};
        }

        &_russia,
        &_russia_2 {
          top: ${calcRem(44)};
          right: ${calcRem(99)};
        }
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
