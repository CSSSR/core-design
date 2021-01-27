import styled from '@emotion/styled'
// import { PropsOf } from '@emotion/styled/base/types/helper'
import { PropsOf } from '@emotion/react'

import { TextareaLight } from '../TextareaLight'
import { InputLabelLight } from '../InputLabelLight'
import { Hint } from '../../Hint'

import styles from './TextareaFieldLight.styles'

export interface Props extends PropsOf<typeof TextareaLight> {
  label?: string
  id?: string
  error?: string
  hovered?: boolean
  focused?: boolean
  success?: boolean
  className?: string
  hint?: string
}

const TextareaFieldLightOrigin: React.FC<Props> = ({
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
    <TextareaLight
      id={id}
      className="textarea-light"
      error={error}
      success={success}
      hovered={hovered}
      focused={focused}
      {...rest}
    />
    {label && (
      <InputLabelLight htmlFor={id} error={error} success={success}>
        {label}
      </InputLabelLight>
    )}
    <Hint success={success} error={error} hint={hint} />
  </div>
)

const TextareaFieldLight = styled(TextareaFieldLightOrigin)`
  ${styles.base}
`

export { TextareaFieldLight }

export default TextareaFieldLight
