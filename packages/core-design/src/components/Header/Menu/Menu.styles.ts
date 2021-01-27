import { css } from '@emotion/react'
import { ThemeProps } from '../../../themes/types'
import calcRem from '../../../utils/style/calcRem'

const base = (props: ThemeProps) => {
  const { mobile } = props.theme.breakpoints

  return css`
    & {
      order: 2;
      height: 100%;
      flex-grow: 1;
    }

    .menu {
      padding-left: ${calcRem(32)};
      padding-right: ${calcRem(32)};
      display: flex;
      align-items: center;
      height: 100%;
    }

    .menu-item {
      color: white;
      cursor: pointer;
      font-weight: 900;
      font-size: ${calcRem(14)};
      line-height: ${calcRem(32)};
      letter-spacing: ${calcRem(1.8)};

      &:not(:first-of-type) {
        margin-left: ${calcRem(19)};
      }

      &_active {
        color: #5695ed;
      }
    }

    @media (pointer: fine) {
      .menu-item:hover {
        color: #5695ed;
      }
    }

    ${mobile.all} {
      & {
        margin-top: ${calcRem(52)};
        width: 100%;
        height: auto;
        flex-grow: 0;
      }

      &.with_hidden_menu {
        margin-top: 0;
      }

      &.with_hidden_menu .menu,
      &.with_hidden_menu + ul {
        display: none;
      }

      .menu {
        padding-left: 0;
        padding-right: 0;
        flex-direction: column;
        align-items: flex-start;
        -webkit-tap-highlight-color: transparent;
      }

      .menu-item {
        padding-left: ${calcRem(32)};
        padding-right: ${calcRem(32)};
        font-size: ${calcRem(12)};
        letter-spacing: ${calcRem(0.8)};
        border: none;
        background-color: transparent;

        &:not(:first-of-type) {
          margin-top: ${calcRem(16)};
          margin-left: ${calcRem(0)};
        }
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
