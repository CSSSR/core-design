import { css } from '@emotion/core'

import { button_label } from '../../styles/fonts'

export default {
  base: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    background: none;
    border: none;
    cursor: pointer;
    user-select: none;

    &:disabled {
      pointer-events: none;
      opacity: 0.3;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      height: 2.5rem;
    }
  `,
  font: button_label,
  themes: {
    primary: css`
      color: white;
      background-color: #0076ff;
      transition: background-color 0.3s ease-out;

      &:hover,
      &:active {
        background-color: #0254d8;
      }
    `,
    secondary: css`
      color: #4a4a4a;
      border: solid 0.0625rem #000000;
      transition: color 0.3s ease-out;

      &:hover,
      &:active {
        color: #000;
      }
    `,
  },
}
