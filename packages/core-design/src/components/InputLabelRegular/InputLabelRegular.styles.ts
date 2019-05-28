import { css } from '@emotion/core'

import { Props } from './InputLabelRegular'

const base = css`
  color: #9b9b9b;
`

const font = css`
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  text-transform: uppercase;
`

const isActive = ({ active }: Pick<Props, 'active'>) =>
  active &&
  css`
    font-size: 0.625rem;
    color: #0076ff;
  `

const hasError = ({ error }: Pick<Props, 'error'>) =>
  error &&
  css`
    color: #d0021b;
  `

export { base, font, isActive, hasError }
