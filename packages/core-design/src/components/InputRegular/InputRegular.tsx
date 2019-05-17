import styled from '@emotion/styled'

import { base, isHovered, isFocused, hasError } from './InputRegular.styles'

export interface Props {
  error?: boolean
  hovered?: boolean
  focused?: boolean
}

const InputRegular = styled.input<Props>`
  ${base}
  ${isHovered}
  ${isFocused}
  ${hasError}
`

export { InputRegular }

export default InputRegular
