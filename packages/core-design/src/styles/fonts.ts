/* tslint:disable:variable-name */

import { css } from '@emotion/core'
import { Theme, ThemeProps } from '../themes/types'

const heading_slab_s = (props: ThemeProps) => css`
  font-family: 'Roboto Slab', 'Georgia', serif;
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5rem;
  letter-spacing: normal;
  color: ${props.theme.colors.secondary.origin};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 1rem;
    line-height: 2rem;
  }
`

const heading_slab_m = (props: ThemeProps) => css`
  font-family: 'Roboto Slab', 'Georgia', serif;
  font-size: 3rem;
  line-height: 4rem;
  font-weight: normal;
  color: ${props.theme.colors.secondary.darken100};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

const heading_slab_l = (props: ThemeProps) => css`
  font-family: 'Roboto Slab', 'Georgia', serif;
  font-size: 4rem;
  font-weight: 300;
  line-height: 5rem;
  color: ${props.theme.colors.secondary.darken100};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 2rem;
    line-height: 3rem;
  }
`

const heading_regular_s = (props: ThemeProps) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.5rem;
  color: ${props.theme.colors.secondary.origin};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

const heading_regular_m = (props: ThemeProps) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 2rem;
  color: ${props.theme.colors.secondary.origin};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`

const heading_regular_l = (props: ThemeProps) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 3.5rem;
  color: ${props.theme.colors.secondary.origin};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`

const subhead_regular = (props: ThemeProps) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 2rem;
  font-weight: 100;
  line-height: 3rem;
  color: ${props.theme.colors.secondary.origin};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`

const subhead_slab = (props: ThemeProps) => css`
  font-family: 'Roboto Slab', 'Georgia', serif;
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  color: ${props.theme.colors.secondary.origin};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 1.125rem;
    line-height: 2rem;
  }
`

const paragraph_regular = (props: ThemeProps) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  color: ${props.theme.colors.secondary.origin};
`

const paragraph_regular_s = (props: ThemeProps) => css`
  ${paragraph_regular(props)}

  ${props.theme.breakpoints.below.desktop} {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`

const paragraph_regular_m = (props: ThemeProps) => css`
  ${paragraph_regular(props)}

  ${props.theme.breakpoints.below.desktop} {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

const paragraph_strong = (props: ThemeProps) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${props.theme.colors.secondary.origin};
`
const paragraph_strong_s = (props: ThemeProps) => css`
  ${paragraph_strong(props)}

  ${props.theme.breakpoints.below.desktop} {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`

const paragraph_strong_m = (props: ThemeProps) => css`
  ${paragraph_strong(props)}

  ${props.theme.breakpoints.below.desktop} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const perforator_s = (props: ThemeProps) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 0.625rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1rem;
  letter-spacing: 0.08125rem;
  text-transform: uppercase;
  color: ${props.theme.colors.secondary.origin};

  ${props.theme.breakpoints.below.desktop} {
    font-weight: bold;
  }
`

const perforator_m = (props: ThemeProps) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  color: ${props.theme.colors.secondary.lighten110};

  ${props.theme.breakpoints.below.desktop} {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

// @media (hover: hover) and (pointer: fine)
// https://medium.com/@mezoistvan/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c
const link_list = (props: ThemeProps) => css`
  position: relative;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-weight: 300;
  text-decoration: underline;
  color: ${props.theme.colors.primary.origin};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: #0254d8;

    &:hover[target='_blank']::after {
      border-color: #0254d8;
    }
  }

  &[target='_blank']::after {
    position: relative;
    display: none;
    box-sizing: border-box;
    content: '';
  }

  &:hover::after,
  &:focus::after {
    display: inline-block;
  }

  ${props.theme.breakpoints.below.desktop} {
    font-size: 1rem;
    line-height: 1.5rem;

    &:hover::after,
    &:focus::after {
      display: none;
    }
  }
`

const link_list_s = (props: ThemeProps) => css`
  ${link_list(props)}
  font-size: 1rem;
  line-height: 1.5rem;

  &[target='_blank']::after {
    bottom: 0.625rem;
    right: -0.0625rem;
    margin-right: -0.25rem;
    width: 0.25rem;
    height: 0.25rem;
    border: 0.125rem solid ${props.theme.colors.primary.origin};
  }
`

const link_list_m = (props: ThemeProps) => css`
  ${link_list(props)}
  font-size: 1.5rem;
  line-height: 2rem;

  &[target='_blank']::after {
    bottom: 0.875rem;
    right: -0.125rem;
    margin-right: -0.375rem;
    width: 0.375rem;
    height: 0.375rem;
    border: 0.0625rem solid ${props.theme.colors.primary.origin};
  }
`

const link_list_l = (props: ThemeProps) => css`
  ${link_list(props)}
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 2.5rem;

  &[target='_blank']::after {
    bottom: 0.8125rem;
    right: -0.1875rem;
    margin-right: -0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    border: 0.125rem solid ${props.theme.colors.primary.origin};
  }
`

const link_top_menu = (props: ThemeProps & { isActive?: boolean }) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 2rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: ${props.isActive
    ? props.theme.colors.primary.darken15
    : props.theme.colors.primary.origin};

  &:hover,
  &:focus {
    color: ${props.theme.colors.primary.darken15};
  }
`

const link_burger = (props: ThemeProps & { isActive?: boolean }) => css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: ${props.isActive
    ? props.theme.colors.secondary.darken100
    : props.theme.colors.secondary.origin};

  &:hover,
  &:focus {
    color: ${props.theme.colors.secondary.darken100};
  }
`

const button_label = css`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

const fontFaces = (theme: Theme) => {
  if (typeof window === 'undefined') {
    return
  }

  return css`
    html {
      font-size: ${theme.baseSize}px;
    }
  `
}

export {
  heading_slab_s,
  heading_slab_m,
  heading_slab_l,
  heading_regular_s,
  heading_regular_m,
  heading_regular_l,
  subhead_regular,
  subhead_slab,
  paragraph_strong_s,
  paragraph_strong_m,
  paragraph_regular_s,
  paragraph_regular_m,
  perforator_s,
  perforator_m,
  link_list_s,
  link_list_m,
  link_list_l,
  link_top_menu,
  link_burger,
  button_label,
}

export default fontFaces
