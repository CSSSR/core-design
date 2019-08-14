import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'
import isFieldActive from '../../../../utils/isFieldActive'

import { InputLabelRegular } from '../InputLabelRegular'
import { InputRegular } from '../InputRegular'
import { ErrorLabel } from '../../ErrorLabel'

import styles from './TextareaFieldRegular.styles'

const TextareaRegular = InputRegular.withComponent('textarea')

export interface Props extends PropsOf<typeof TextareaRegular> {
  label?: string
  active?: boolean
}

const TextareaFieldRegularOrigin: React.FC<Props> = props => {
  const { label, id, error, hovered, focused, value, className, ...rest } = props
  const isActive = isFieldActive({ value, focused })

  return (
    <div className={className}>
      <TextareaRegular
        id={id}
        className="textarea-regular"
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
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </div>
  )
}

const TextareaFieldRegular = styled(TextareaFieldRegularOrigin)`
  ${styles.base}
  ${styles.state.active}
  ${styles.state.error}
`

export { TextareaFieldRegular }
export default TextareaFieldRegular
