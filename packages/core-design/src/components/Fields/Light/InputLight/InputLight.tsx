import styled from '@emotion/styled'

import { base, isHovered, isFocused, hasError, isSuccessed } from './InputLight.styles'

export interface Props {
  focused?: boolean
  hovered?: boolean
  success?: boolean
  error?: string
}

const InputLight = styled.input<Props>`
  ${base}
  ${isHovered}
  ${isFocused}
  ${hasError}
  ${isSuccessed}
`

InputLight.defaultProps = {
  type: 'text',
}

export { InputLight }

export default InputLight
