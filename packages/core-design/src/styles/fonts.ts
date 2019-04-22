import { css } from '@emotion/core'

const font_button_label = css`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

const font_h1_slab = css`
  font-family: Roboto Slab;
  font-size: 4rem;
  font-weight: 300;
  line-height: 5rem;
  color: #000000;

  @media (max-width: 1279px) {
    /* margin-top: -0.1875rem;
    padding-bottom: 0.1875rem; */
    font-size: 2rem;
    line-height: 3rem;
  }
`

const font_h1_regular = css`
  font-family: Roboto;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 3.5rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    /* margin-top: -0.375rem;
    padding-bottom: 0.375rem; */
    font-size: 2rem;
    line-height: 2.5rem;
  }
`

const font_h2_slab = css`
  /* margin-top: -0.0625rem;
  padding-bottom: 0.0625rem; */
  font-family: Roboto Slab;
  font-size: 3rem;
  line-height: 4rem;
  font-weight: normal;
  color: #000000;

  @media (max-width: 1279px) {
    /* margin-top: 0;
    padding-bottom: 0; */
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 2rem;
    color: #000000;
  }
`
const font_h2_regular = css`
  /* margin-top: -0.4375rem;
  padding-bottom: 0.4375rem; */
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 2rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    /* margin-top: -0.09375rem;
    padding-bottom: 0.09375rem; */
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`

const font_h3_slab = css`
  /* margin-top: -0.3125rem;
  padding-bottom: 0.3125rem; */
  font-family: Roboto Slab;
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 2rem;
  letter-spacing: normal;
  color: #4a4a4a;
`

const font_h3_regular = css`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.5rem;
  color: #4a4a4a;
  @media (max-width: 1279px) {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

const font_subhead_slab = css`
  /* margin-top: -0.1875rem;
  padding-bottom: 0.1875rem; */
  font-family: Roboto Slab;
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    /* margin-top: -0.375rem;
    padding-bottom: 0.375rem; */
    font-size: 1.125rem;
    line-height: 2rem;
  }
`

const font_subhead_regular = css`
  /* margin-top: -0.125rem;
  padding-bottom: 0.125rem; */
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 100;
  line-height: 3rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    /* margin-top: -0.375rem;
    padding-bottom: 0.375rem; */
    font-size: 1.25rem;
    line-height: 2rem;
  }
`

const font_p16_regular = css`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    /* margin-top: -0.1875rem;
    padding-bottom: 0.1875rem; */
    font-size: 0.75rem;
    line-height: 1rem;
  }
`

const font_roboto_slab_light = css`
  /* margin-top: -4px;
  padding-bottom: 4px; */
  font-family: Roboto Slab;
  font-size: 1rem;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 3.125rem;
  letter-spacing: 0.03125rem;
  color: #000000;
`

const font_p24_strong = css`
  /* margin-top: -0.1875rem;
    padding-bottom: 0.1875rem; */
  font-family: Roboto;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: #4a4a4a;

  @media (max-width: 1279px) {
    font-family: Roboto;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #4a4a4a;
  }
`

const fontFaces = css`
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

export {
  font_button_label,
  font_h1_slab,
  font_h1_regular,
  font_h2_slab,
  font_h2_regular,
  font_h3_slab,
  font_h3_regular,
  font_subhead_slab,
  font_subhead_regular,
  font_p16_regular,
  font_roboto_slab_light,
  font_p24_strong,
}

export default fontFaces
