import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'
import { ThemeProps } from '../../themes/types'

const base = (props: ThemeProps) => {
  const { mobile, tablet, desktop } = props.theme.breakpoints

  return css`
    & {
      align-items: start;
    }

    .content,
    .sticky {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .title {
      margin-top: 0;
    }

    .picture img {
      width: 100%;
      height: 100%;
    }

    ${mobile.all} {
      & {
        margin-top: ${calcRem(70)};
      }

      .sticky {
        flex-direction: row;
        align-items: flex-end;
        grid-column: 1 / span 6;
        grid-row: 1;
        position: relative;
        min-height: ${calcRem(88)};
      }

      .title {
        z-index: 2;
      }

      .picture {
        position: absolute;
        top: ${calcRem(8)};
        right: 0;
        width: ${calcRem(160)};
        height: ${calcRem(60)};
        z-index: 1;
      }

      .content {
        grid-column: 1 / span 6;
        grid-row: 2;
        margin-top: ${calcRem(24)};
      }

      .children {
        margin-top: ${calcRem(56)};
        padding-bottom: ${calcRem(64)};
      }
    }

    ${tablet.all} {
      & {
        margin-top: ${calcRem(136)};
      }

      .sticky {
        position: sticky;
        top: ${calcRem(70)};
        grid-column: 1 / span 4;
      }

      .title {
        margin-left: ${calcRem(80)};
      }

      .picture {
        grid-row: 2;
        width: ${calcRem(384)};
        height: ${calcRem(226)};
        margin-top: ${calcRem(32)};
      }

      .content {
        grid-column: 6 / span 7;
        grid-row: 1 / span 2;
      }

      .subTitle {
        margin-top: ${calcRem(13)};
      }

      .children {
        margin-top: ${calcRem(32)};
        padding-bottom: ${calcRem(96)};
      }
    }

    ${desktop.all} {
      & {
        margin-top: 152px;
      }

      .sticky {
        position: sticky;
        top: 88px;
        grid-column: 1 / span 6;
      }

      .picture {
        height: 358px;
        margin-top: 16px;
      }

      .content {
        grid-column: 7 / span 6;
        grid-row: 1 / span 2;
      }

      .title {
        margin-left: 104px;
      }

      .subTitle {
        margin-top: 30px;
      }

      .children {
        margin-top: 40px;
        padding-bottom: 120px;
      }
    }

    ${desktop.s} {
      .picture {
        width: 608px;
      }
    }

    ${desktop.m} {
      .title {
        margin-left: 112px;
      }

      .picture {
        width: 656px;
      }
    }

    ${desktop.l} {
      .title {
        margin-left: 189px;
      }

      .picture {
        width: 880px;
        height: 506px;
      }

      .content {
        grid-column: 8 / span 5;
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
