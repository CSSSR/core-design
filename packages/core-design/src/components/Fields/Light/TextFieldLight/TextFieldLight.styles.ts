import { css } from '@emotion/core'
import { InputLight } from '../InputLight'
import { InputLabelLight } from '../InputLabelLight'
import { Hint } from '../../Hint'

export default {
  base: () => css`
    display: inline-flex;
    height: 4.375rem;
    flex-direction: column;
    align-items: center;
    min-width: 10rem;

    ${InputLight} {
      width: 100%;
      box-sizing: border-box;
    }

    ${InputLabelLight} {
      margin-top: 0.25rem;
    }

    ${Hint} {
      margin-top: -0.1875rem;
    }
  `,
}
