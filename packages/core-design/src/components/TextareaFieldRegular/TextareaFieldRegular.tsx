import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'

import { InputLabelRegular } from '../InputLabelRegular'
import { TextareaRegular } from '../TextareaRegular'

import { wrapper, floatLabel, isLabelActive } from './TextareaFieldRegular.styles'

export interface Props extends PropsOf<typeof TextareaRegular> {
  label?: string
  active?: boolean
}

const Wrapper = styled.div`
  ${wrapper}
`

const FloatLabel = styled(InputLabelRegular)`
  ${floatLabel}
  ${isLabelActive}
`

const TextareaFieldRegular: React.FC<Props> = props => {
  const { label, id, error, hovered, focused, value, ...rest } = props

  return (
    <Wrapper>
      <TextareaRegular
        id={id}
        error={error}
        hovered={hovered}
        focused={focused}
        value={value}
        {...rest}
      />
      {label && (
        <FloatLabel
          htmlFor={id}
          error={error}
          active={(value !== '' && value !== undefined) || focused}
        >
          {label}
        </FloatLabel>
      )}
    </Wrapper>
  )
}

export { TextareaFieldRegular }

export default TextareaFieldRegular
