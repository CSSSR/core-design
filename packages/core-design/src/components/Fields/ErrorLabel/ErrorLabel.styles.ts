import { css } from '@emotion/core'
import { perforator_s } from '../../../styles/fonts'
import { ThemeProps } from '../../../themes/types'

export default {
  base: (props: ThemeProps) => css`
    ${perforator_s(props)}
    color: #d0021b;
  `,
}
