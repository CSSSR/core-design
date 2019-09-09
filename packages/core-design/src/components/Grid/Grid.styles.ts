import { css } from '@emotion/core'
import { ThemeProps } from '../../themes/types'

export default {
  base: (props: ThemeProps) => css`
    margin-right: auto;
    margin-left: auto;
    display: grid;
    align-content: start;
    grid-template-columns: repeat(12, 120px);
    grid-gap: 0 32px;
    width: 1792px;

    ${props.theme.breakpoints.desktop.m} {
      grid-template-columns: repeat(12, 96px);
      grid-gap: 0 16px;
      width: 1328px;
    }

    ${props.theme.breakpoints.desktop.s} {
      grid-template-columns: repeat(12, 88px);
      grid-gap: 0 16px;
      width: 1232px;
    }

    ${props.theme.breakpoints.tablet.m} {
      grid-template-columns: repeat(12, 64px);
      grid-gap: 0 16px;
      width: 944px;
    }

    ${props.theme.breakpoints.tablet.s} {
      grid-template-columns: repeat(12, 4rem);
      grid-gap: 0 1rem;
      width: 59rem;
    }

    ${props.theme.breakpoints.mobile.all} {
      grid-template-columns: repeat(6, 3rem);
      grid-gap: 0 0.5rem;
      width: 20.5rem;
    }
  `,
  ie11: (props: ThemeProps) => css`
    display: -ms-grid;
    -ms-grid-columns: 120px (32px 120px) [11];

    ${props.theme.breakpoints.desktop.m} {
      -ms-grid-columns: 96px (16px 96px) [11];
    }

    ${props.theme.breakpoints.desktop.s} {
      -ms-grid-columns: 88px (16px 88px) [11];
    }

    ${props.theme.breakpoints.tablet.m} {
      -ms-grid-columns: 64px (16px 64px) [11];
    }

    ${props.theme.breakpoints.tablet.s} {
      -ms-grid-columns: 4rem (1rem 4rem) [11];
    }

    ${props.theme.breakpoints.mobile.all} {
      -ms-grid-columns: 3rem (0.5rem 3rem) [5];
    }
  `,
  guidelines: (props: ThemeProps) => css`
    background-size: 152px;
    background-image: linear-gradient(
      90deg,
      rgba(246, 211, 195, 0.5) 120px,
      transparent 120px,
      transparent 32px
    );

    ${props.theme.breakpoints.desktop.m} {
      background-size: 112px;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 96px,
        transparent 96px,
        transparent 16px
      );
    }
    ${props.theme.breakpoints.desktop.s} {
      background-size: 104px;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 88px,
        transparent 88px,
        transparent 16px
      );
    }

    ${props.theme.breakpoints.tablet.m} {
      background-size: 80px;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 64px,
        transparent 64px,
        transparent 16px
      );
    }

    ${props.theme.breakpoints.tablet.s} {
      background-size: 5rem;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 4rem,
        transparent 4rem,
        transparent 1rem
      );
    }

    ${props.theme.breakpoints.mobile.all} {
      background-size: 3.5rem;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 3rem,
        transparent 3rem,
        transparent 0.5rem
      );
    }
  `,
}
