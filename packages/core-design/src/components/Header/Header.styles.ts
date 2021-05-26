import { css } from '@emotion/react'
import { ThemeProps } from '../../themes/types'
import calcRem from '../../utils/style/calcRem'

const base = (props: ThemeProps) => {
  const { mobile } = props.theme.breakpoints
  const { colors } = props.theme

  return css`
    & {
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: ${calcRem(64)};
      width: 100%;
      background-color: ${colors.secondary.darken100};
      box-sizing: border-box;
      transition: top 300ms ease 0s;
    }

    .logo-wrapper {
      font-size: 0;
    }

    .logo {
      margin-left: ${calcRem(40)};
      order: 1;
      color: white;

      &_school {
        width: ${calcRem(158)};
        height: ${calcRem(28)};
      }
    }

    .button_action {
      margin-left: auto;
      padding-left: ${calcRem(27)};
      padding-right: ${calcRem(27)};
      width: auto;
      height: 100%;
      order: 4;
      font-size: 0.75rem;
      letter-spacing: 0;
    }

    ${mobile.all} {
      & {
        height: ${calcRem(56)};
      }

      .logo {
        margin-left: ${calcRem(16)};
        width: ${calcRem(64)};
        height: ${calcRem(16)};
        order: 1;

        &_school {
          width: ${calcRem(104)};
          height: ${calcRem(18)};
        }
      }

      .burger {
        margin-left: auto;
        margin-right: ${calcRem(16)};
        padding: ${calcRem(16)};
        order: 2;
        height: 100%;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }

      .burger svg {
        width: ${calcRem(24)};
        height: ${calcRem(24)};
      }

      .dropdown {
        position: absolute;
        top: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        height: calc(100vh - 100%);
        height: calc(var(--vh, 1vh) * 100 - 100%);
        background-color: ${colors.secondary.darken100};
        transition: height 125ms ease-out;
        overflow: auto;
      }

      .dropdown_closed {
        height: 0;
        overflow: hidden;
      }

      .button_action {
        margin-top: auto;
        width: 100%;
        height: ${calcRem(64)};
        flex-shrink: 0;
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
