import styled from '@emotion/styled'
import styles from './InputRegular.styles'

export interface Props {
  error?: string
  hovered?: boolean
  focused?: boolean
  success?: boolean
  fullHeight?: boolean
  fullWidth?: boolean
}

const InputRegular = styled.input<Props>`
  ${styles.base}
  ${styles.state.hovered}
  ${styles.state.focused}
  ${styles.state.error}
  ${styles.state.success}
`

export { InputRegular }
export default InputRegular
