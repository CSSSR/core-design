import { css } from '@emotion/core'

const base = css`
  .header {
    padding-bottom: 4rem;
  }

  .logo {
    grid-column: 2 / span 2;
    margin-top: 5.25rem;
    width: 11.5rem;
    height: 2.875rem;
    color: black;
  }

  .title {
    margin-top: 3.875rem;
    grid-column: 2 / span 7;
    grid-row: 1;
  }

  .subtitle {
    grid-column: 9 / span 4;
    margin-top: -3.1875rem;
    grid-row: 2;
  }

  .link {
    color: #345eff;
  }

  .code-wrapper {
    grid-column: 2 / span 6;
    grid-row: 2 / span 10;
    margin-top: 2.5rem;
    width: calc(100% + 1rem);
    height: 25rem;
  }

  .picture {
    grid-column: 2 / span 7;
    grid-row: 2 / span 10;
    margin-top: 1.5rem;
    z-index: -1;
    height: 51.5rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .code-wrapper {
      margin-top: 3.5rem;
      width: 41.75rem;
      height: 18.625rem;
    }

    .picture {
      height: 38.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .code-wrapper {
      margin-top: 2.5rem;
      width: 41.75rem;
      height: 18.625rem;
    }

    .picture {
      height: 35.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .title {
      margin-top: 5.6875rem;
    }

    .subtitle {
      margin-top: -2.375rem;
    }

    .code-wrapper {
      margin-top: 2.5rem;
      width: 30.5rem;
      height: 13.625rem;
    }

    .picture {
      height: 27rem;
    }
  }

  @media (max-width: 767px) {
    .header {
      padding-bottom: 2.875rem;
    }

    .error-code_500 .subtitle {
      grid-column: 1 / span 4;
    }

    .error-code_500 .code-wrapper {
      margin-top: 0;
      margin-left: 0;
      width: 17.875rem;
      height: 8.5rem;
      width: 18.75rem;
      height: 8.9375rem;
    }

    .logo {
      grid-column: 1 / span 3;
      margin-top: 3.625rem;
      width: 10rem;
      height: 2.5rem;
      color: black;
    }

    .title {
      grid-column: 1 / span 6;
      grid-row: 1;
      margin-top: 3.6875rem;
    }

    .subtitle {
      margin-top: 2.625rem;
      grid-column: 1 / span 2;
      grid-row: 3;
    }

    .code-wrapper {
      grid-column: 1 / span 5;
      grid-row: 2;
      margin-top: 3.5625rem;
      margin-left: 0.1875rem;
      width: 16.125rem;
      height: 7.25rem;
    }

    .picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      height: 16.5rem;
    }
  }
`

export default () => css`
  ${base}
`
