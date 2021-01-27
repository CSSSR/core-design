import { css } from '@emotion/react'
import { paragraph_regular_s, paragraph_regular_m } from '../../../styles/fonts'
import { ThemeProps } from '../../../themes/types'
import { Props } from './ListItem'

export default {
  base: (props: ThemeProps & Props) => css`
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
        ${props.size === 's' &&
        css`
          top: 0.25rem;
        `}
        ${props.size === 'm' &&
        css`
          top: 0.5rem;
        `}
      }
    }
  `,
  font: (props: ThemeProps & Props) => css`
    ${props.size === 's' && paragraph_regular_s(props)}
    ${props.size === 'm' && paragraph_regular_m(props)}
  `,
}
