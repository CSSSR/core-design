import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'
import isFieldActive from '../../../../utils/isFieldActive'

import { InputLabelRegular } from '../InputLabelRegular'
import { InputRegular } from '../InputRegular'
import { Hint } from '../../Hint'

import styles from './TextareaFieldRegular.styles'

const TextareaRegular = InputRegular.withComponent('textarea')

export interface Props extends PropsOf<typeof TextareaRegular> {
  label?: string
  hint?: string
  active?: boolean
}

const TextareaFieldRegularOrigin: React.FC<Props> = props => {
  const { label, id, error, hovered, focused, value, className, success, hint, ...rest } = props
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
        success={success}
        {...rest}
      />

      {label && (
        <InputLabelRegular htmlFor={id} error={error} active={isActive} success={success}>
          {label}
        </InputLabelRegular>
      )}
      <Hint success={success} error={error} hint={hint} />
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
