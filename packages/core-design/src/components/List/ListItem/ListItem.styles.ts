import { css } from '@emotion/core'
import { paragraph_regular } from '../../../styles/fonts'

export default {
  base: props => css`
    position: relative;
    margin-top: 0;
    padding-left: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;

    &:before {
      content: '';
      position: absolute;
      top: 0.5rem;
      left: 0;
      box-sizing: border-box;
      width: 0.5rem;
      height: 0.5rem;
      border: 0.125rem solid black;
    }

    ${props.theme.breakpoints.below.desktop} {
      &:before {
        top: 0.25rem;
      }
    }
  `,
  font: props => css`
    ${paragraph_regular(props)}

    ${props.theme.breakpoints.below.desktop} {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  `,
}
