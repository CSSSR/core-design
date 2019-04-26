import styled from '@emotion/styled'
import { Text as OriginText } from '@asmy/core-design'

const Text = props => <OriginText fontStyle="font_p24_strong" {...props} /> 

const Paragraph = styled(Text)`
  margin-top: 20px;
  grid-column: 1 / span 12
`

export { Paragraph }
export default Paragraph
