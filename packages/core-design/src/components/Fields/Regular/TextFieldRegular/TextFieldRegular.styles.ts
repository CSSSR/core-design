import { css } from '@emotion/core'
import { InputLabelRegular } from '../InputLabelRegular'
import isFieldActive from '../../../../utils/isFieldActive'

export default {
  base: ({ value, focused }) => css`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${InputLabelRegular} {
      position: absolute;
      top: ${isFieldActive({ value, focused }) ? '0.5rem' : 'auto'};
      left: 1rem;
      pointer-events: none;
      user-select: none;
    }
  `,
}
