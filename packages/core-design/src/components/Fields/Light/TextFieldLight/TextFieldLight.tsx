import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'

import { InputLight } from '../InputLight'
import { InputLabelLight } from '../InputLabelLight'
import { ErrorLabel } from '../../ErrorLabel'

import styles from './TextFieldLight.styles'

export interface Props extends PropsOf<typeof InputLight> {
  label?: string
  id?: string
  error?: string
  hovered?: boolean
  focused?: boolean
  className?: string
}

const TextFieldLightOrigin: React.FC<Props> = ({
  label,
  id,
  error,
  hovered,
  focused,
  className,
  ...rest
}) => (
  <div className={className}>
    <InputLight id={id} error={error} hovered={hovered} focused={focused} {...rest} />
    {label && (
      <InputLabelLight htmlFor={id} error={error}>
        {label}
      </InputLabelLight>
    )}
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </div>
)

const TextFieldLight = styled(TextFieldLightOrigin)`
  ${styles.base}
`
export { TextFieldLight }

export default TextFieldLight
