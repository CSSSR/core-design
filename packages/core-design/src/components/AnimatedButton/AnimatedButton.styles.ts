import { css, keyframes } from '@emotion/core'
import { button_label } from '../../styles/fonts'
import { ThemeProps } from '../../themes/types'

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

export default {
  base: css`
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100%;

    button {
      display: block;
      margin: 0 auto;
      padding: 0;
      width: 100%;
      height: 3rem;
      border: none;
      border: 0.0625rem solid transparent;
      border-radius: 0;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      transition: background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s,
        border-color 0.3s, border-radius 0.3s;
      cursor: pointer;
    }

    button:disabled {
      opacity: 0.3;
      pointer-events: none;
    }

    /* Text (transition for when returning to initial state) */
    span {
      transition: opacity 0.3s 0.1s;
    }

    /* Common style of SVGs */
    svg {
      position: absolute;
      padding: inherit;
      top: 0;
      left: 50%;
      width: 3rem;
      height: 3rem;
      transform: translateX(-50%);
      pointer-events: none;
    }

    svg path {
      opacity: 0;
      fill: none;
    }

    svg.checkmark path,
    svg.cross path {
      strokelinecap: round;
      strokewidth: 4;
      transition: opacity 0.1s;
    }
  `,
  status: {
    submitting: css`
      button {
        width: 3rem;
        border-width: 0.1875rem;
        border-color: #ddd;
        border-radius: 1.5rem;
        background-color: transparent;
        pointer-events: none;
        overflow: hidden;
      }

      button:disabled {
        opacity: 1;
      }

      button:hover {
        background-color: none;
      }

      span {
        opacity: 0;
        transition: opacity 0.15s;
      }

      svg.progress-circle path {
        opacity: 1;
        strokewidth: 5;
        animation: ${dash} 2s linear forwards;
      }
    `,
    success: css`
      svg.checkmark path {
        opacity: 1;
        animation: ${dash} 0.25s linear forwards;
      }
    `,
    fail: css`
      button {
        border-color: #fb797e;
        background-color: #fb797e;
      }

      svg.progress-circle path {
        stroke: #fb797e;
      }

      svg.cross path {
        opacity: 1;
        animation: ${dash} 0.25s linear forwards;
      }
    `,
  },
  themes: {
    primary: {
      status: {
        pending: (props: ThemeProps) => css`
          button {
            color: #ffffff;
            background-color: ${props.theme.colors.primary.origin};
          }

          button:hover,
          button:active {
            background-color: ${props.theme.colors.primary.darken15};
          }
        `,
        submitting: (props: ThemeProps) => css`
          svg.progress-circle path {
            stroke: ${props.theme.colors.primary.origin};
          }
        `,
        success: (props: ThemeProps) => css`
          button {
            border-color: ${props.theme.colors.primary.origin};
            background-color: ${props.theme.colors.primary.origin};
          }

          svg.checkmark path,
          svg.cross path {
            stroke: #fff;
          }
        `,
        fail: css`
          svg.checkmark path,
          svg.cross path {
            stroke: #fff;
          }
        `,
      },
    },
    secondary: {
      status: {
        pending: (props: ThemeProps) => css`
          button {
            color: ${props.theme.colors.secondary.origin};
            border-color: ${props.theme.colors.secondary.darken100};
          }

          button:hover,
          button:active {
            color: ${props.theme.colors.secondary.darken100};
          }
        `,
        submitting: (props: ThemeProps) => css`
          svg.progress-circle path {
            stroke: ${props.theme.colors.secondary.origin};
          }
        `,
        success: (props: ThemeProps) => css`
          button {
            border-color: ${props.theme.colors.secondary.origin};
            background-color: #fff;
          }

          svg.checkmark path,
          svg.cross path {
            stroke: ${props.theme.colors.secondary.origin};
          }
        `,
        fail: css`
          svg.checkmark path,
          svg.cross path {
            stroke: #fff;
          }
        `,
      },
    },
  },
  font: button_label,
}
