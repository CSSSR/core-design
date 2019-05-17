import styled from '@emotion/styled'

import { base, font, isActive, hasError } from './InputLabelRegular.styles'

export interface Props {
  active?: boolean
  error?: boolean
}

const InputLabelRegular = styled.label<Props>`
  ${base}
  ${font}
  ${isActive}
  ${hasError}
`

export { InputLabelRegular }

export default InputLabelRegular
