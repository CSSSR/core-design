import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'
import { css } from '@emotion/core'

import { InputLabelRegular } from '../InputLabelRegular'
import { InputRegular } from '../InputRegular'

export interface Props extends PropsOf<typeof InputRegular> {
  label?: string
  active?: boolean
}

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FloatLabel = styled(InputLabelRegular)`
  position: absolute;
  pointer-events: none;
  user-select: none;
  left: 1rem;

  ${({ active }) =>
    active &&
    css`
      top: 0.5rem;
    `}
`

const TextFieldRegular: React.FC<Props> = props => {
  const { label, id, error, hovered, focused, value, ...rest } = props

  const active = (value !== '' && value !== undefined) || focused

  return (
    <Wrapper>
      <InputRegular
        id={id}
        error={error}
        hovered={hovered}
        focused={focused}
        value={value}
        {...rest}
      />
      {label && (
        <FloatLabel htmlFor={id} error={error} active={active}>
          {label}
        </FloatLabel>
      )}
    </Wrapper>
  )
}

export { TextFieldRegular }

export default TextFieldRegular
