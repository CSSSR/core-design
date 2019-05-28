import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'

import { TextareaLight } from '../TextareaLight'
import { InputLabelLight } from '../InputLabelLight'

import { wrapper, label as labelStyles } from './TextareaFieldLight.styles'

export interface Props extends PropsOf<typeof TextareaLight> {
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

const Label = styled(InputLabelLight)`
  ${labelStyles}
`

const Textarea = styled(TextareaLight)`
  width: 100%;
  box-sizing: border-box;
`

const TextareaFieldLight: React.FC<Props> = props => {
  const { label, id, error, hovered, focused, className, ...rest } = props

  return (
    <Wrapper className={className}>
      <Textarea id={id} error={error} hovered={hovered} focused={focused} {...rest} />
      {label && (
        <Label htmlFor={id} error={error}>
          {label}
        </Label>
      )}
    </Wrapper>
  )
}

export { TextareaFieldLight }

export default TextareaFieldLight
