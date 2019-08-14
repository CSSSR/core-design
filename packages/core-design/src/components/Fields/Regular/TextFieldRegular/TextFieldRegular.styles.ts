import { css } from '@emotion/core'
import { InputLabelRegular } from '../InputLabelRegular'
import { InputRegular } from '../InputRegular'
import { ErrorLabel } from '../../ErrorLabel'
import isFieldActive, { IsFieldActiveOptions } from '../../../../utils/isFieldActive'

export default {
  base: ({ value, focused }: IsFieldActiveOptions) => css`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${InputRegular} {
      width: 100%;
      padding-bottom: 0;
      padding-top: 1.5rem;
      padding-bottom: 0.5rem;
      height: 4rem;
      max-height: 4rem;
    }

    ${InputLabelRegular} {
      position: absolute;
      top: ${isFieldActive({ value, focused }) ? '0.5rem' : '1.5rem'};
      left: 1.125rem;
      pointer-events: none;
      user-select: none;
    }

    ${ErrorLabel} {
      margin-top: 0.625rem;
      align-self: flex-start;
    }
  `,
}
