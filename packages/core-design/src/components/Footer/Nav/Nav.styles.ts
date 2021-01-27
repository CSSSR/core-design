import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'
import { ThemeProps } from '../../../themes/types'
import { Props } from './Nav'

const base = (props: Props & ThemeProps) => {
  const { mobile, tablet, desktop } = props.theme.breakpoints
  const colors = props.theme.colors
  const navSectionsNumber = props.nav.length

  return css`
    & {
      margin-left: auto;
      padding-top: ${calcRem(55)};
      height: 100%;
      display: flex;
      justify-content: space-between;
    }

    .nav-item:nth-of-type(4) {
      width: 100px;
    }

    .title {
      display: block;
      color: ${colors.secondary.darken100};
    }

    ${desktop.l} {
      & {
        width: ${navSectionsNumber === 4 ? '588px' : '738px'};
      }
    }

    ${desktop.m} {
      & {
        width: ${navSectionsNumber === 4 ? '622px' : '752px'};
      }
    }

    ${desktop.s} {
      & {
        margin-right: 50px;
        width: ${navSectionsNumber === 4 ? '655px' : '785px'};
      }
    }

    ${tablet.all} {
      & {
        margin-right: ${calcRem(3)};
        width: ${navSectionsNumber === 4 ? calcRem(522) : calcRem(652)};
      }
    }

    ${mobile.all} {
      display: none;
    }
  `
}

export default (props: Props & ThemeProps) => base(props)
