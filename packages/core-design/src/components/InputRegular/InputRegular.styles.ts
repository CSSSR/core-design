import { css } from '@emotion/core'

import { Props } from './InputRegular'

const base = css`
  padding: 1rem;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  background: none;
  outline: none;

  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.8px;

  color: rgb(74, 74, 74);
`

const isHovered = ({ hovered }: Pick<Props, 'hovered'>) =>
  hovered &&
  css`
    border-color: #9b9b9b;
  `

const isFocused = ({ focused }: Pick<Props, 'focused'>) =>
  focused &&
  css`
    border-color: #0076ff;
  `

const hasError = ({ error }: Pick<Props, 'error'>) =>
  error &&
  css`
    padding: calc(1rem - 1px);
    border: 2px solid #d0021b;
    color: #d0021b;
  `

export { base, isHovered, isFocused, hasError }
