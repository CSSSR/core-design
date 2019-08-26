import { css } from '@emotion/core'

import { Props } from './TextareaLight'

const base = css`
  border: 0.0625rem solid #e1e1e1;
  line-height: 1.5rem;
`

const isHovered = (props: Props) =>
  props.hovered &&
  css`
    border-color: #9b9b9b;
  `

const isFocused = (props: Props) =>
  props.focused &&
  !props.error &&
  css`
    border-color: #0076ff;
  `

const isSuccessed = (props: Props) =>
  props.success &&
  !props.error &&
  css`
    &:not(:focus) {
      border-color: #339900;
    }
  `

const hasError = (props: Props) =>
  props.error &&
  !props.focused &&
  css`
    &:not(:focus) {
      border-color: #d0021b;
      color: #d0021b;
    }
  `

export { base, isHovered, isFocused, hasError, isSuccessed }
