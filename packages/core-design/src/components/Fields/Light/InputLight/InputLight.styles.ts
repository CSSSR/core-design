import { css } from '@emotion/react'
import { InputLabelLight } from '../InputLabelLight'
import { Props } from './InputLight'
import { ThemeProps } from '../../../../themes/types'

const base = (props: ThemeProps) =>
  css`
    appearance: none;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    height: 2.5rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2rem;
    text-align: center;
    color: rgb(74, 74, 74);
    caret-color: #4a4a4a;
    border: none;
    border-bottom: 0.0625rem solid #e1e1e1;
    background: none;
    outline: none;

    &::placeholder {
      font-weight: 100;
      color: #c0c0c0;
    }

    ${props.theme.breakpoints.tablet.all} {
      padding-bottom: 0.1875rem;
    }
  `

const isHovered = ({ hovered }: Pick<Props, 'hovered'>) =>
  hovered &&
  css`
    border-color: #9b9b9b;
  `

const isFocused = ({ focused, error }: Pick<Props, 'focused' | 'error'>) =>
  focused &&
  !error &&
  css`
    border-color: #0076ff;

    & + ${InputLabelLight} {
      color: #0076ff;
    }
  `

const hasError = ({ error }: Pick<Props, 'error'>) =>
  error &&
  css`
    input:not(:focus) {
      border-bottom-color: #d0021b;
      color: #d0021b;
    }
  `

const isSuccessed = (props: Props) =>
  props.success &&
  !props.error &&
  css`
    border-bottom-color: #339900;
    & + ${InputLabelLight} {
      color: #339900;
    }
  `

export { base, isHovered, isFocused, hasError, isSuccessed }
