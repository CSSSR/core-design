import styled from '@emotion/styled'
import { InputLight } from '../InputLight'
import { base, isHovered, hasError, isFocused } from './TextareaLight.styles'
import { PropsOf } from 'emotion-theming/types/helper'

const InputLightAsTextarea = InputLight.withComponent('textarea')

export type Props = PropsOf<typeof InputLightAsTextarea>

const TextareaLight = styled(InputLightAsTextarea)`
  ${base}
  ${isHovered}
  ${isFocused}
  ${hasError}
`

export { TextareaLight }

export default TextareaLight
