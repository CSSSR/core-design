import styled from '@emotion/styled'
// import { PropsOf } from '@emotion/styled/base/types/helper'
import { PropsOf } from '@emotion/react'

import { InputLight } from '../InputLight'
import { InputLabelLight } from '../InputLabelLight'
import { Hint } from '../../Hint'

import styles from './TextFieldLight.styles'

export interface Props extends PropsOf<typeof InputLight> {
  label?: string
  id?: string
  error?: string
  hovered?: boolean
  focused?: boolean
  success?: boolean
  className?: string
  hint?: string
}

const TextFieldLightOrigin: React.FC<Props> = ({
  label,
  id,
  error,
  hovered,
  focused,
  success,
  hint,
  className,
  ...rest
}) => (
  <div className={className}>
    <InputLight id={id} error={error} hovered={hovered} focused={focused} {...rest} />
    {label && (
      <InputLabelLight htmlFor={id} error={error} success={success}>
        {label}
      </InputLabelLight>
    )}
    <Hint success={success} error={error} hint={hint} />
  </div>
)

const TextFieldLight = styled(TextFieldLightOrigin)`
  ${styles.base}
`
export { TextFieldLight }

export default TextFieldLight
