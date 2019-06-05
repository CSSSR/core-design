import { css } from '@emotion/core'
import { Props } from './InputRegular'

export default {
  base: css`
    padding: 1rem;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    font-family: Roboto;
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
    focused: ({ focused }: Pick<Props, 'focused'>) =>
      focused &&
      css`
        border-color: #0076ff;
      `,
    error: ({ error }: Pick<Props, 'error'>) =>
      error &&
      css`
        padding: calc(1rem - 1px);
        border: 2px solid #d0021b;
        color: #d0021b;
      `,
  },
}
