import { css } from '@emotion/react'
import { Props } from './InputRegular'

export default {
  base: css`
    padding: 1rem;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 300;
    letter-spacing: normal;
    color: black;

    &::placeholder {
      font-size: 0;
    }
  `,
  state: {
    hovered: ({ hovered }: Pick<Props, 'hovered'>) =>
      hovered &&
      css`
        border-color: #9b9b9b;
      `,
    focused: ({ focused, error }: Pick<Props, 'focused' | 'error'>) =>
      focused &&
      !error &&
      css`
        border-color: #0076ff;
      `,
    success: ({ success, error }: Pick<Props, 'success' | 'error'>) =>
      success &&
      !error &&
      css`
        border-color: #339900;
      `,
    error: ({ error, focused }: Pick<Props, 'error' | 'focused'>) =>
      error &&
      !focused &&
      css`
        padding: calc(1rem - 1px);
        border: 2px solid #d0021b;
        color: #d0021b;
      `,
  },
}
