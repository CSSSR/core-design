import styled from '@emotion/styled'
import styles from './InputLabelRegular.styles'

export interface Props {
  active?: boolean
  success?: boolean
  error?: string
}

const InputLabelRegular = styled.label<Props>`
  ${styles.base}
  ${styles.state.active}
  ${styles.state.error}
  ${styles.state.success}
`

export { InputLabelRegular }
export default InputLabelRegular
