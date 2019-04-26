import { css } from '@emotion/core'

export default {
  base: css`
    margin-right: auto;
    margin-left: auto;
    display: grid;
    align-content: start;
    grid-template-columns: repeat(12, 120px);
    grid-gap: 0 32px;
    width: 1792px;

    @media (min-width: 1360px) and (max-width: 1919px) {
      grid-template-columns: repeat(12, 96px);
      grid-gap: 0 16px;
      width: 1328px;
    }

    @media (min-width: 1280px) and (max-width: 1359px) {
      grid-template-columns: repeat(12, 88px);
      grid-gap: 0 16px;
      width: 1232px;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      grid-template-columns: repeat(12, 64px);
      grid-gap: 0 16px;
      width: 944px;

      @media (max-width: 1023px) {
        grid-template-columns: repeat(12, 4rem);
        grid-gap: 0 1rem;
        width: 59rem;
      }
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(6, 3rem);
      grid-gap: 0 0.5rem;
      width: 20.5rem;
    }
  `,
  guidelines: css`
    background-size: 152px;
    background-image: linear-gradient(
      90deg,
      rgba(246, 211, 195, 0.5) 120px,
      transparent 120px,
      transparent 32px
    );

    @media (min-width: 1360px) and (max-width: 1919px) {
      background-size: 112px;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 96px,
        transparent 96px,
        transparent 16px
      );
    }
    @media (min-width: 1280px) and (max-width: 1359px) {
      background-size: 104px;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 88px,
        transparent 88px,
        transparent 16px
      );
    }
    @media (min-width: 1024px) and (max-width: 1279px) {
      background-size: 80px;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 64px,
        transparent 64px,
        transparent 16px
      );
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      background-size: 5rem;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 4rem,
        transparent 4rem,
        transparent 1rem
      );
    }

    @media (max-width: 767px) {
      background-size: 3.5rem;
      background-image: linear-gradient(
        90deg,
        rgba(246, 211, 195, 0.5) 3rem,
        transparent 3rem,
        transparent 0.5rem
      );
    }
  `,
}
