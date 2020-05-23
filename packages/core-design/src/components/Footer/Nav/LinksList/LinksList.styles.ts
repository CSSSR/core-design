import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

export default () => css`
  & {
    margin-top: ${calcRem(18)};
  }

  li:not(:first-of-type) {
    margin-top: ${calcRem(14)};
  }

  .link {
    line-height: ${calcRem(16)} !important;
  }
`
