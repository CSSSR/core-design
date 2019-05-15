import { css } from '@emotion/core'
import { button_label } from '../../styles/fonts'

export default {
  base: css`
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

    @media (min-width: 768px) and (max-width: 1279px) {
      height: 2.5rem;
    }
  `,
  font: button_label,
  themes: {
    primary: props => css`
      color: #ffffff;
      background-color: ${props.theme.colors.primary.origin};
      transition: background-color 0.3s ease-out;
      &:hover,
      &:active {
        background-color: ${props.theme.colors.primary.darken15};
      }
    `,
    secondary: props => css`
      color: ${props.theme.colors.secondary.origin};
      border: solid 0.0625rem ${props.theme.colors.secondary.darken100};
      transition: color 0.3s ease-out;

      &:hover,
      &:active {
        color: ${props.theme.colors.secondary.darken100};
      }
    `,
  },
}
