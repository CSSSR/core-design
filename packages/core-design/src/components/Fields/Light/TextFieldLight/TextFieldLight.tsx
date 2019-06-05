import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'

import { InputLight as Input } from '../InputLight'
import { InputLabelLight } from '../InputLabelLight'

import { wrapper, input, label as labelStyles } from './TextFieldLight.styles'

export interface Props extends PropsOf<typeof InputLight> {
  label?: string
  id?: string
  error?: boolean
  hovered?: boolean
  focused?: boolean
  className?: string
}

const Wrapper = styled.div`
  ${wrapper}
`

const InputLight = styled(Input)`
  ${input}
`

const Label = styled(InputLabelLight)`
  ${labelStyles}
`

const TextFieldLight: React.FC<Props> = props => {
  const { label, id, error, hovered, focused, className, ...rest } = props

  return (
    <Wrapper className={className}>
      <InputLight id={id} error={error} hovered={hovered} focused={focused} {...rest} />
      {label && (
        <Label htmlFor={id} error={error}>
          {label}
        </Label>
      )}
    </Wrapper>
  )
}

export { TextFieldLight }

export default TextFieldLight
