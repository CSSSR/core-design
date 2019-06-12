import { css } from '@emotion/core'
import { InputLabelRegular } from '../InputLabelRegular'
import isFieldActive, { IsFieldActiveOptions } from '../../../../utils/isFieldActive'

export default {
  base: css`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    ${InputLabelRegular} {
      position: absolute;
      pointer-events: none;
      user-select: none;
      left: 1.125rem;
      top: 1.5rem;
    }
  `,
  state: {
    active: ({ value, focused }: IsFieldActiveOptions) =>
      isFieldActive({ value, focused }) &&
      css`
        ${InputLabelRegular} {
          top: 0.5rem;
          background-color: #fff;
          width: calc(100% - 2rem);
          box-sizing: border-box;
        }
      `,
  },
}
