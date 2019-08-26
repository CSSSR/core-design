import { css } from '@emotion/core'
import { perforator_s } from '../../../styles/fonts'
import { Props } from './Hint'
import { ThemeProps } from '../../../themes/types'

export default {
  base: (props: Props) => css`
    ${perforator_s((props as unknown) as ThemeProps)}
  `,
  state: {
    error: ({ error }: Pick<Props, 'error'>) =>
      error &&
      css`
        color: #d0021b;
      `,
    hint: ({ hint, error }: Pick<Props, 'hint' | 'error'>) =>
      hint &&
      !error &&
      css`
        color: #9b9b9b;
      `,
    success: ({ hint, error, success }: Pick<Props, 'hint' | 'error' | 'success'>) =>
      hint &&
      !error &&
      success &&
      css`
        color: #64c38f;
      `,
  },
}
