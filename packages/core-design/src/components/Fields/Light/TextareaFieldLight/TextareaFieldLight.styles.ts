import { css } from '@emotion/react'
import { TextareaLight } from '../TextareaLight'
import { InputLabelLight } from '../InputLabelLight'
import { Hint } from '../../Hint'

export default {
  base: () => css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    min-width: 10rem;

    ${TextareaLight} {
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
