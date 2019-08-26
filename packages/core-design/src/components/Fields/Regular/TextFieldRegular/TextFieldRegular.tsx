import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'
import isFieldActive from '../../../../utils/isFieldActive'

import { InputLabelRegular } from '../InputLabelRegular'
import { InputRegular } from '../InputRegular'
import { Hint } from '../../Hint'

import styles from './TextFieldRegular.styles'

export interface Props extends PropsOf<typeof InputRegular> {
  label?: string
  hint?: string
  active?: boolean
  fullHeight?: boolean
  fullWidth?: boolean
}

const TextFieldRegularOrigin: React.FC<Props> = props => {
  const {
    label,
    id,
    error,
    hint,
    hovered,
    focused,
    success,
    value,
    className,
    fullHeight,
    fullWidth,
    ...rest
  } = props
  const isActive = isFieldActive({ value, focused })

  return (
    <div className={className}>
      <InputRegular
        id={id}
        error={error}
        hovered={hovered}
        focused={focused}
        success={success}
        value={value}
        fullHeight
        fullWidth
        {...rest}
      />

      {label && (
        <InputLabelRegular htmlFor={id} error={error} success={success} active={isActive}>
          {label}
        </InputLabelRegular>
      )}
      <Hint success={success} error={error} hint={hint} />
    </div>
  )
}

const TextFieldRegular = styled(TextFieldRegularOrigin)`
  ${styles.base}
`

export { TextFieldRegular, isFieldActive }
export default TextFieldRegular
