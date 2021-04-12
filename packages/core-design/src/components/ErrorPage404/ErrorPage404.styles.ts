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

    .img-wrap img {
      width: 100%;
      height: 100%;
    }

    ${mobile.all} {
      & {
        margin-top: ${calcRem(77)};
      }

      .sticky {
        flex-direction: row;
        align-items: flex-end;
        grid-column: 1 / span 6;
        grid-row: 1;
        position: relative;
        min-height: ${calcRem(99)};
      }

      .title {
        z-index: 2;
      }

      .img-wrap {
        position: absolute;
        bottom: ${calcRem(11)};
        right: 0;
        width: ${calcRem(160)};
        height: ${calcRem(51)};
        z-index: 1;
      }

      .content {
        grid-column: 1 / span 6;
        grid-row: 2;
        margin-top: ${calcRem(24)};
      }

      .children {
        margin-top: ${calcRem(56)};
      }
    }

    ${tablet.all} {
      & {
        margin-top: ${calcRem(136)};
      }

      .sticky {
        position: sticky;
        top: ${calcRem(136)};
        grid-column: 1 / span 4;
      }

      .title {
        margin-left: ${calcRem(80)};
      }

      .img-wrap {
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
      }
    }

    ${desktop.all} {
      & {
        margin-top: 152px;
      }

      .sticky {
        position: sticky;
        top: 153px;
        grid-column: 1 / span 6;
      }

      .img-wrap {
        height: 358px;
        margin-top: 32px;
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
      }
    }

    ${desktop.s} {
      .img-wrap {
        width: 608px;
      }
    }

    ${desktop.m} {
      .title {
        margin-left: 112px;
      }

      .img-wrap {
        width: 656px;
      }
    }

    ${desktop.l} {
      .title {
        margin-left: 188px;
      }

      .img-wrap {
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
