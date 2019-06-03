import { css, keyframes } from '@emotion/core'
import { button_label } from '../../styles/fonts'

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
      border: 0.125rem solid transparent;
      background-color: #0076ff;
      border-radius: 0;
      color: #fff;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      transition: background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s,
        border-color 0.3s, border-radius 0.3s;
      cursor: pointer;
    }

    button:hover {
      background-color: #0254d8;
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
      stroke: #fff;
      stroke-linecap: round;
      stroke-width: 4;
      transition: opacity 0.1s;
    }
  `,
  status: {
    submiting: css`
      button {
        width: 3rem;
        border-width: 0.1875rem;
        border-color: #ddd;
        border-radius: 1.5rem;
        background-color: transparent;
        color: #fff;
      }

      button:disabled {
        opacity: 1;
      }

      span {
        opacity: 0;
        transition: opacity 0.15s;
      }

      svg.progress-circle path {
        opacity: 1;
        stroke: #0076ff;
        stroke-width: 5;
        animation: ${dash} 2s linear forwards;
      }
    `,
    success: css`
      button {
        border-color: #0076ff;
        background-color: #0076ff;
      }

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
  font: button_label,
}
