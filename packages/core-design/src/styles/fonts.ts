/* tslint:disable:variable-name */

import { css } from '@emotion/core'

const heading_slab_s = css`
  font-family: Roboto Slab;
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5rem;
  letter-spacing: normal;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`

const heading_slab_m = css`
  font-family: Roboto Slab;
  font-size: 3rem;
  line-height: 4rem;
  font-weight: normal;
  color: #000000;

  @media (max-width: 1279px) {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 2rem;
    color: #000000;
  }
`

const heading_slab_l = css`
  font-family: Roboto Slab;
  font-size: 4rem;
  font-weight: 300;
  line-height: 5rem;
  color: #000000;

  @media (max-width: 1279px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`

const heading_regular_s = css`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.5rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    font-size: 0.8125rem;
    line-height: 1.5rem;
  }
`

const heading_regular_m = css`
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 3rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    font-size: 1.1875rem;
    line-height: 1.5rem;
  }
`

const heading_regular_l = css`
  font-family: Roboto;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 3rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`

const subhead_regular = css`
  margin-top: 1.5rem;
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 100;
  line-height: 3rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    margin-top: 1rem;
    font-size: 1.1875rem;
    line-height: 2rem;
  }
`

const paragraph_regular = css`
  margin-top: 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  color: #4a4a4a;
`

const paragraph_strong = css`
  margin-top: 1.5rem;
  font-family: Roboto;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: #4a4a4a;
`
const paragraph_strong_s = css`
  ${paragraph_strong}

  @media (max-width: 1279px) {
    margin-top: 0.75rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`

const paragraph_strong_m = css`
  ${paragraph_strong}

  @media (max-width: 1279px) {
    margin-top: 1rem;
    font-size: 0.875rem;
    line-height: 1.1875rem;
  }
`

// const perforator = css`
// `

const perforator_s = css`
  font-family: Roboto;
  font-size: 0.625rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1rem;
  letter-spacing: 0.08125rem;
  text-transform: uppercase;
  color: #4a4a4a;
`

const perforator_m = css`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  color: #9b9b9b;

  @media (max-width: 1279px) {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

const link_list = css`
  position: relative;
  font-family: Roboto;
  font-weight: 300;
  text-decoration: underline;
  color: #0076ff;

  &[target='_blank']::after {
    position: absolute;
    display: none;
    box-sizing: border-box;
    content: '';
  }

  &:hover::after,
  &:focus::after {
    display: block;
  }

  @media (max-width: 1279px) {
    position: relative;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    text-decoration: underline;
    color: #0076ff;

    &:hover::after,
    &:focus::after {
      display: none;
    }
  }
`

const link_list_s = css`
  ${link_list}
  font-size: 1rem;
  line-height: 1.5rem;

  &[target='_blank']::after {
    bottom: 1rem;
    right: -0.3125rem;
    width: 0.25rem;
    height: 0.25rem;
    border: 0.125rem solid #0076ff;
  }
`

const link_list_m = css`
  ${link_list}
  font-size: 1.5rem;
  line-height: 2rem;

  &[target='_blank']::after {
    bottom: 1.5625rem;
    right: -0.625rem;
    width: 0.375rem;
    height: 0.375rem;
    border: 0.0625rem solid #0076ff;
  }
`

const link_list_l = css`
  ${link_list}
  position: relative;
  font-family: Roboto;
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 2.5rem;
  text-decoration: underline;
  color: #0076ff;

  &[target='_blank']::after {
    bottom: 1.9375rem;
    right: -0.625rem;
    width: 0.5rem;
    height: 0.5rem;
    border: 0.125rem solid #0076ff;
  }
`

const link_top_menu = css`
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 2rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: #0076ff;

  &:hover,
  &:focus {
    color: #0254d8;
  }
`

const link_burger = css`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: #4a4a4a;

  &:hover,
  &:focus {
    color: #000000;
  }
`

const button_label = css`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

const fontFaces = () => {
  if (typeof window === 'undefined') {
    return
  }

  return css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('${require('../static/fonts/Roboto_normal_100.woff')}') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('${require('../static/fonts/Roboto_normal_300.woff')}') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_normal_400.woff')}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_italic_400.woff')}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('${require('../static/fonts/Roboto_normal_500.woff')}') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('${require('../static/fonts/Roboto_normal_700.woff')}') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url('${require('../static/fonts/Roboto_normal_900.woff')}') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 300;
    src: url('${require('../static/fonts/Roboto_Slab_normal_300.woff')}') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_Slab_normal_400.woff')}') format('woff');
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('${require('../static/fonts/Roboto_normal_100_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('${require('../static/fonts/Roboto_normal_100_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('${require('../static/fonts/Roboto_normal_300_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('${require('../static/fonts/Roboto_normal_300_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_normal_400_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_normal_400_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_italic_400_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_italic_400_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('${require('../static/fonts/Roboto_normal_500_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('${require('../static/fonts/Roboto_normal_500_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('${require('../static/fonts/Roboto_normal_700_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('${require('../static/fonts/Roboto_normal_700_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url('${require('../static/fonts/Roboto_normal_900_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url('${require('../static/fonts/Roboto_normal_900_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 300;
    src: url('${require('../static/fonts/Roboto_Slab_normal_300_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 300;
    src: url('${require('../static/fonts/Roboto_Slab_normal_300_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_Slab_normal_400_ru.woff2')}') format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    src: url('${require('../static/fonts/Roboto_Slab_normal_400_en.woff2')}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
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
  paragraph_strong_s,
  paragraph_strong_m,
  paragraph_regular,
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
