import styled from '@emotion/styled'

import { font_p24_strong } from '@asmy/core-design'

const TD = styled.td`
  padding: 12px;
  border: 1px solid black;
  text-align: left;
  vertical-align: top;
  ${font_p24_strong}
`
const TH = styled(TD.withComponent('th'))`
  vertical-align: middle;
  color: white !important;
`

export { TD, TH }
