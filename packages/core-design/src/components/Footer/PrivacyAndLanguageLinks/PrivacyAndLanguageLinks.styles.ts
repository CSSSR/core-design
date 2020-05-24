import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import { ThemeProps } from '../../../themes/types'

const base = (props: ThemeProps) => {
  const { mobile } = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    & {
      margin-top: ${calcRem(11)};
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      & > li {
        display: flex;
      }
    }

    .link {
      text-decoration: none;
    }

    .lng-link {
      margin-left: ${calcRem(50)};
    }

    .policy-link {
      margin-left: 16px;
    }

    .link-text {
      color: ${colors.primary.origin};
      font-weight: normal;
    }

    ${mobile.all} {
      margin-top: ${calcRem(45)};

      .lng-link {
        display: none;
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
