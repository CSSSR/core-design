import styled from '@emotion/styled'

import styles from './Text.styles'

export interface Props {
  type: keyof typeof styles['font']
  size: 's' | 'm' | 'l'
}

const Text = styled.p<Props>`
  ${({ type, size }) => styles.font[type][size]}
`

export { Text }
export default Text
