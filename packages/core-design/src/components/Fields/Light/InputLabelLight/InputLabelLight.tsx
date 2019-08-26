import styled from '@emotion/styled'

import { base, hasError, isSuccessed } from './InputLabelLight.styles'

export interface Props {
  error?: string
  success?: boolean
}

const InputLabelLight = styled.label<Props>`
  ${base}
  ${hasError}
  ${isSuccessed}
`

export { InputLabelLight }

export default InputLabelLight
