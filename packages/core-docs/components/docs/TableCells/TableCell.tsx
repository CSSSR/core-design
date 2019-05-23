import styled from '@emotion/styled'

import { paragraph_strong_m } from '@csssr/core-design'

const TD = styled.td`
  padding: 12px;
  border: 1px solid black;
  text-align: left;
  vertical-align: top;
  ${paragraph_strong_m}
`
const TH = styled(TD.withComponent('th'))`
  vertical-align: middle;
  color: white !important;
`

export { TD, TH }
