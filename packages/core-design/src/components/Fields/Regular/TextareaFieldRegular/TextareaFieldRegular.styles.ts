import { css } from '@emotion/core'
import { Props } from '../InputRegular/InputRegular'
import { InputLabelRegular } from '../InputLabelRegular'
import { Hint } from '../../Hint'
import isFieldActive, { IsFieldActiveOptions } from '../../../../utils/isFieldActive'

export default {
  base: css`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .textarea-regular {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      padding-right: 1rem;
      padding-left: 1rem;
      width: 100%;
    }

    ${InputLabelRegular} {
      position: absolute;
      pointer-events: none;
      user-select: none;
      left: 1.125rem;
      top: 1.5rem;
    }

    ${Hint} {
      margin-top: 0.625rem;
      align-self: flex-start;
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
    success: ({ success, error }: Pick<Props, 'success' | 'error'>) =>
      success &&
      !error &&
      css`
        border-color: #339900;
      `,
    error: ({ error, focused }: Pick<Props, 'error' | 'focused'>) =>
      error &&
      !focused &&
      css`
        .textarea-regular {
          padding-top: calc(1.5rem - 1px);
          padding-bottom: calc(1.5rem - 1px);
          padding-right: calc(1rem - 1px);
          padding-left: calc(1rem - 1px);
        }
      `,
  },
}
