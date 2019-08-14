import styled from '@emotion/styled'
import styles from './InputLabelRegular.styles'

export interface Props {
  active?: boolean
  error?: string
}

const InputLabelRegular = styled.label<Props>`
  ${styles.base}
  ${styles.state.active}
  ${styles.state.error}
`

export { InputLabelRegular }
export default InputLabelRegular
