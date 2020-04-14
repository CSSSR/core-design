import { css } from '@emotion/core'
import { button_label } from '../../styles/fonts'
import { ThemeProps } from '../../themes/types'

export default {
  base: (props: ThemeProps) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    background: none;
    border: none;
    cursor: pointer;
    user-select: none;

    &:disabled {
      pointer-events: none;
      opacity: 0.3;
    }

    ${props.theme.breakpoints.tablet.all} {
      height: 2.5rem;
    }
  `,
  font: button_label,
  themes: {
    primary: (props: ThemeProps) => css`
      color: #ffffff;
      background-color: ${props.theme.colors.primary.origin};
      transition: background-color 0.3s ease-out;
      &:hover,
      &:active {
        background-color: ${props.theme.colors.primary.darken15};
      }
    `,
    secondary: (props: ThemeProps) => css`
      color: ${props.theme.colors.secondary.origin};
      border: solid 0.0625rem ${props.theme.colors.secondary.darken100};
      transition: color 0.3s ease-out;

      &:hover,
      &:active {
        color: ${props.theme.colors.secondary.darken100};
      }
    `,
    third: (props: ThemeProps) => css`
      height: 2.5rem;
      font-size: 0.75rem;
      line-height: 2.5rem;
      color: ${props.theme.colors.primary.origin};
      border: solid 0.0625rem ${props.theme.colors.primary.origin};
      transition: border-color 0.3s ease-out, color 0.3s ease-out;

      &:hover,
      &:active {
        color: ${props.theme.colors.primary.darken15};
        border-color: ${props.theme.colors.primary.darken15};
      }
    `,
  },
}
