import { css } from '@emotion/core'
import { Props } from './InputLabelRegular'

export default {
  base: css`
    letter-spacing: 1px;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #9b9b9b;
  `,
  state: {
    active: ({ active }: Pick<Props, 'active'>) =>
      active &&
      css`
        font-size: 0.625rem;
        color: #0076ff;
      `,
    error: ({ error }: Pick<Props, 'error'>) =>
      error &&
      css`
        color: #d0021b;
      `,
    success: ({ error, success }: Pick<Props, 'error' | 'success'>) =>
      !error &&
      success &&
      css`
        color: #64c38f;
      `,
  },
}
