import styled from '@emotion/styled'
import { PropsOf } from '@emotion/styled-base/types/helper'

import { TextareaLight } from '../TextareaLight'
import { InputLabelLight } from '../InputLabelLight'
import { ErrorLabel } from '../../ErrorLabel'

import styles from './TextareaFieldLight.styles'

export interface Props extends PropsOf<typeof TextareaLight> {
  label?: string
  id?: string
  error?: string
  hovered?: boolean
  focused?: boolean
  className?: string
}

const TextareaFieldLightOrigin: React.FC<Props> = ({
  label,
  id,
  error,
  hovered,
  focused,
  className,
  ...rest
}) => (
  <div className={className}>
    <TextareaLight
      id={id}
      className="textarea-light"
      error={error}
      hovered={hovered}
      focused={focused}
      {...rest}
    />
    {label && (
      <InputLabelLight htmlFor={id} error={error}>
        {label}
      </InputLabelLight>
    )}
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </div>
)

const TextareaFieldLight = styled(TextareaFieldLightOrigin)`
  ${styles.base}
`

export { TextareaFieldLight }

export default TextareaFieldLight
