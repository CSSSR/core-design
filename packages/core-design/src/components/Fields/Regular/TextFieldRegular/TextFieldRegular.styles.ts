import { css } from '@emotion/core'
import { InputLabelRegular } from '../InputLabelRegular'
import { InputRegular } from '../InputRegular'
import { Hint } from '../../Hint'
import isFieldActive from '../../../../utils/isFieldActive'

export interface IFieldOptions {
  value: string | number | string[]
  focused: boolean
  fullHeight?: boolean
  fullWidth?: boolean
}

const getInputStyles = (fullHeight: boolean) =>
  fullHeight
    ? css`
        padding-top: 1.2rem;
        height: 100%;
        font-size: inherit;
      `
    : css`
        padding-top: 1.5rem;
        height: 4rem;
        max-height: 4rem;
      `
const getLabelTop = ({ value, focused, fullHeight }: IFieldOptions) => css`
  top: ${isFieldActive({ value, focused })
    ? fullHeight
      ? '15%'
      : '0.5rem'
    : fullHeight
    ? '50%'
    : '1.5rem'};
  ${fullHeight && !isFieldActive({ value, focused }) ? 'transform: translateY(-50%);' : ''}
`
const getHintStyles = (fullHeight: boolean) =>
  fullHeight
    ? css`
        position: absolute;
        bottom: -1.2rem;
        left: 0;
      `
    : css`
        margin-top: 0.625rem;
        align-self: flex-start;
      `

export default {
  base: ({ value, focused, fullHeight, fullWidth }: IFieldOptions) => css`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${fullHeight ? '100%' : 'auto'};
    width: ${fullWidth ? '100%' : 'auto'};

    ${InputRegular} {
      width: 100%;
      padding-bottom: 0;
      padding-bottom: 0.5rem;
      ${getInputStyles(fullHeight)}
    }

    ${InputLabelRegular} {
      position: absolute;
      ${getLabelTop({ value, focused, fullHeight })}
      left: 1.125rem;
      pointer-events: none;
      user-select: none;
    }

    ${Hint} {
      ${getHintStyles(fullHeight)}
    }
  `,
}
