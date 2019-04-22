import styled from '@emotion/styled'

import styles from './Text.styles'

export interface Props {
  fontStyle?: keyof typeof styles['font']
}

const Text = styled.div<Props>`
  ${({ fontStyle }) => styles.font[fontStyle]}
`

Text.defaultProps = {
  fontStyle: 'font_p16_regular',
} as Partial<Props>

export { Text }

export default Text
