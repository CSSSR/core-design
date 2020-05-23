import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'
import { ThemeProps } from '../../themes/types'

const base = (props: ThemeProps) => {
  const { mobile, tablet, desktop } = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    & {
      position: relative;
      margin-bottom: ${calcRem(344)};
      padding-top: ${calcRem(32)};
      padding-right: ${calcRem(102)};
      padding-bottom: ${calcRem(39)};
      padding-left: ${calcRem(32)};
      display: flex;
      flex-direction: column;
      height: ${calcRem(344)};
      background-color: white;
      box-shadow: 0px 8px 12px rgba(50, 60, 72, 0.15);
      overflow: hidden;
    }

    .top-content {
      display: flex;
    }

    .logo {
      position: relative;
      z-index: 2;
      height: ${calcRem(24)};
      display: block;
      color: ${colors.secondary.darken100};
      transition: color 100ms ease-out;
    }

    .video {
      position: absolute;
      top: 50%;
      left: 0;
      z-index: 1;
      width: 100%;
      opacity: 0;
      transform: translateY(-50%);
      transition: opacity 100ms ease-out;
      pointer-events: none;
    }

    @media (pointer: fine) {
      .logo:hover {
        color: white;
      }

      .logo:hover ~ .video {
        opacity: 1;
      }
    }

    .action-phrase {
      margin-top: ${calcRem(30)};
      color: ${colors.secondary.darken100};
    }

    .email {
      margin-top: ${calcRem(16)};
      display: block;
    }

    ${desktop.s} {
      padding-right: ${calcRem(52)};
    }

    ${tablet.all} {
      & {
        margin-bottom: ${calcRem(288)};
        padding-right: ${calcRem(41)};
      }
    }

    ${mobile.all} {
      & {
        padding-top: ${calcRem(40)};
        padding-right: ${calcRem(16)};
        padding-bottom: ${calcRem(16)};
        padding-left: ${calcRem(16)};
        margin-bottom: 0;
        height: auto;
        flex-direction: column;
        align-items: center;
        box-shadow: none;
      }

      .logo {
        display: none;
      }

      .top-content {
        width: 100%;
      }

      .top-content-left-wrapper {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .action-phrase,
      .email {
        margin-left: ${calcRem(31)};
        align-self: flex-start;
      }

      .action-phrase {
        margin-top: 0;
      }

      .link-lng,
      .email {
        margin-top: ${calcRem(8)};
        display: inline-block;
      }

      .link-lng {
        position: relative;
        top: ${calcRem(-3)};
        margin-left: ${calcRem(127)};
        text-decoration: none;
      }

      .link-text {
        color: ${colors.primary.origin};
        font-weight: 300;
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
