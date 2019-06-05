import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'
import styles from './TextFieldRegular.styles'
import { InputLabelRegular } from '../InputLabelRegular'
import { InputRegular } from '../InputRegular'
import isFieldActive from '../../../../utils/isFieldActive'

export interface Props extends PropsOf<typeof InputRegular> {
  label?: string
  active?: boolean
}

const TextFieldRegularOrigin: React.FC<Props> = props => {
  const { label, id, error, hovered, focused, value, className, ...rest } = props
  const isActive = isFieldActive({ value, focused })

  return (
    <div className={className}>
      <InputRegular
        id={id}
        error={error}
        hovered={hovered}
        focused={focused}
        value={value}
        {...rest}
      />

      {label && (
        <InputLabelRegular htmlFor={id} error={error} active={isActive}>
          {label}
        </InputLabelRegular>
      )}
    </div>
  )
}

const TextFieldRegular = styled(TextFieldRegularOrigin)`
  ${styles.base}
`

export { TextFieldRegular, isFieldActive }
export default TextFieldRegular
