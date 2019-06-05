import styled from '@emotion/styled'

import { base, hasError } from './InputLabelLight.styles'

export interface Props {
  error?: boolean
}

const InputLabelLight = styled.label<Props>`
  ${base}
  ${hasError}
`

export { InputLabelLight }

export default InputLabelLight
