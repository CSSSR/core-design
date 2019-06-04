import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'
import { InputLabelRegular } from '../InputLabelRegular'
import { InputRegular } from '../InputRegular'
import styles from './TextareaFieldRegular.styles'
import isFieldActive from '../../../../utils/isFieldActive'

const Textarea = InputRegular.withComponent('textarea')

export interface Props extends PropsOf<typeof Textarea> {
  label?: string
  active?: boolean
}

const TextareaFieldRegularOrigin: React.FC<Props> = props => {
  const { label, id, error, hovered, focused, value, className, ...rest } = props
  const isActive = isFieldActive({ value, focused })

  return (
    <div className={className}>
      <Textarea id={id} error={error} hovered={hovered} focused={focused} value={value} {...rest} />

      {label && (
        <InputLabelRegular htmlFor={id} error={error} active={isActive}>
          {label}
        </InputLabelRegular>
      )}
    </div>
  )
}

const TextareaFieldRegular = styled(TextareaFieldRegularOrigin)`
  ${styles.base}
  ${styles.state.active}
`

export { TextareaFieldRegular, Textarea }
export default TextareaFieldRegular
