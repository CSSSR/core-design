import styled from '@emotion/styled'

import { base, isHovered, isFocused, hasError } from './InputLight.styles'

export interface Props {
  focused?: boolean
  hovered?: boolean
  error?: string
}

const InputLight = styled.input<Props>`
  ${base}
  ${isHovered}
  ${isFocused}
  ${hasError}
`

InputLight.defaultProps = {
  type: 'text',
}

export { InputLight }

export default InputLight
