import { css } from '@emotion/react'
import { Props } from './InputLabelLight'
import { perforator_s } from '../../../../styles/fonts'
import { ThemeProps } from '../../../../themes/types'

const base = (props: ThemeProps) => css`
  position: relative;
  ${perforator_s(props)}
`

const hasError = ({ error }: Pick<Props, 'error'>) =>
  error &&
  css`
    color: #d0021b;
  `

const isSuccessed = (props: Props) =>
  props.success &&
  !props.error &&
  css`
    color: #339900;
  `

export { base, hasError, isSuccessed }
