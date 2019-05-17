import { css } from '@emotion/core'

import { Props } from './InputLabelLight'

import { perforator_s } from '../../styles/fonts'

const base = props => css`
  position: relative;
  ${perforator_s(props)}
  color: #9b9b9b;
`

const hasError = ({ error }: Pick<Props, 'error'>) =>
  error &&
  css`
    color: #d0021b;
  `

export { base, hasError }
