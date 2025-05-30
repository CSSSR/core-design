import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'
import { ThemeProps } from '../../../themes/types'

const base = (props: ThemeProps) => {
  const { mobile, tablet } = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    & {
      display: flex;
      justify-content: space-between;

      & > li {
        display: flex;
      }

      & li {
        align-items: flex-end;
      }
    }

    .link {
      text-decoration: none;
    }

    .alliance {
      display: flex;
      align-items: flex-end;
      margin-left: ${calcRem(40)};
    }

    .arda {
      height: 10px;
      padding-right: 60%;
    }

    .alliance-icon {
      margin: 0 ${calcRem(4)};
    }

    .cookies-link {
      margin-left: 40px;
    }

    .internal-link::after {
      display: none;
    }

    .link-text {
      color: ${colors.primary.origin};
    }

    ${tablet.all} {
      .privacy-policy,
      .alliance-text,
      .alliance-link,
      .language {
        font-weight: 400;
      }
    }

    ${mobile.all} {
      & {
        margin-top: ${calcRem(45)};
      }

      & li {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .cookies-link {
        margin-left: ${calcRem(24)};
      }

      .alliance {
        margin-top: ${calcRem(37)};
        margin-left: 0;
      }

      .arda {
        height: 10px;
        padding-right: 0;
        margin-top: 24px;
      }

      .lng-link {
        display: none;
      }

      .privacy-policy,
      .alliance-text,
      .alliance-link,
      .language {
        font-weight: 400;
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
