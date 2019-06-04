import { css } from '@emotion/core'
import { InputLabelRegular } from '../InputLabelRegular'
import { Textarea } from './TextareaFieldRegular'
import isFieldActive from '../../../../utils/isFieldActive'

export default {
  base: css`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    ${Textarea} {
      line-height: 1.75rem;
    }

    ${InputLabelRegular} {
      position: absolute;
      pointer-events: none;
      user-select: none;
      left: 1rem;
      top: 1.5rem;
    }
  `,
  state: {
    active: ({ value, focused }) =>
      isFieldActive({ value, focused }) &&
      css`
        ${InputLabelRegular} {
          padding-left: 1rem;
          padding-top: 0.5rem;
          padding-bottom: 0.1rem;
          top: 0.125rem;
          left: 0.125rem;
          background-color: #fff;
          width: calc(100% - 2rem);
          box-sizing: border-box;
        }
      `,
  },
}
