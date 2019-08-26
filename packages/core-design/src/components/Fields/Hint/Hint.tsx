import styled from '@emotion/styled'
import styles from './Hint.styles'
import { ThemeProps } from '../../../themes/types'

export interface Props {
  error?: string
  className?: string
  hint?: string
  success?: boolean
  theme?: ThemeProps
}

const HintOrigin: React.FC<Props> = props => {
  const currentHint = props.error || props.hint

  return currentHint ? <div className={props.className}>{currentHint}</div> : null
}

const Hint = styled(HintOrigin)`
  ${styles.base}
  ${styles.state.error}
  ${styles.state.hint}
  ${styles.state.success}
`

export { Hint }
export default Hint
