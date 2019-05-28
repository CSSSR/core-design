import styled from '@emotion/styled'

import { InputRegular } from '../InputRegular'

import { base } from './TextareaRegular.styles'

const InputRegularAsTextarea = InputRegular.withComponent('textarea')

const TextareaRegular = styled(InputRegularAsTextarea)`
  ${base}
`

export { TextareaRegular }

export default TextareaRegular
