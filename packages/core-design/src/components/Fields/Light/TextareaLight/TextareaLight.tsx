import styled from '@emotion/styled'
import { InputLight } from '../InputLight'
import { base, isHovered, hasError, isFocused, isSuccessed } from './TextareaLight.styles'
import { PropsOf } from 'emotion-theming/types/helper'

const InputLightAsTextarea = InputLight.withComponent('textarea')
const TextareaLight = styled(InputLightAsTextarea)`
  ${base}
  ${isHovered}
  ${isFocused}
  ${hasError}
  ${isSuccessed}
`

export type Props = PropsOf<typeof InputLightAsTextarea>
export { TextareaLight }
export default TextareaLight
