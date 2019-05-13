import styled from '@emotion/styled'
import { Text as OriginText } from '@asmy/core-design'

const Text = props => <OriginText type="strong" size="m" {...props} /> 

const Paragraph = styled(Text)`
  grid-column: 1 / span 12
`

export { Paragraph }
export default Paragraph
