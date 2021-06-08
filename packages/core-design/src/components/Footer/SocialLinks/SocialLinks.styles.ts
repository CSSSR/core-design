import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'
import { ThemeProps } from '../../../themes/types'

const base = (props: ThemeProps) => {
  const { mobile, tablet, desktop } = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    & {
      margin-top: ${calcRem(32)};
      display: flex;
      list-style: none;
    }

    a {
      color: ${colors.secondary.darken100};
      transition: color 200ms ease-out;

      &:hover {
        color: ${colors.primary.origin};
      }
    }

    ${desktop.all} {
      li:not(:first-of-type) {
        margin-left: 16px;
      }
    }

    ${desktop.m} {
      & {
        margin-top: ${calcRem(46)};
      }
    }

    ${desktop.s} {
      & {
        margin-top: ${calcRem(46)};
      }
    }

    ${tablet.all} {
      margin-top: ${calcRem(48)};

      li:not(:first-of-type) {
        margin-left: ${calcRem(16)};
      }
    }

    ${mobile.all} {
      margin-top: ${calcRem(39)};
      margin-left: auto;
      margin-right: auto;
      max-width: ${calcRem(194)};
      flex-wrap: wrap;

      li {
        display: flex;
        flex-basis: 25%;
        justify-content: center;
        font-size: 0;
      }

      li:nth-of-type(n + 5) {
        margin-top: ${calcRem(32)};
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
