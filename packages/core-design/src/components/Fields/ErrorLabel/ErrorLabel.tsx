import styled from '@emotion/styled'
import styles from './ErrorLabel.styles'
import { ThemeProps } from '../../../themes/types'

export interface Props {
  theme?: ThemeProps
}

const ErrorLabel = styled.span<Props>`
  ${styles.base}
`

export { ErrorLabel }
export default ErrorLabel
