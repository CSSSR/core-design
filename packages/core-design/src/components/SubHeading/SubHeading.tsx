import styled from '@emotion/styled'
import styles from './SubHeading.styles'

export interface Props {
  type?: keyof typeof styles['font']
}

const SubHeading = styled.span<Props>`
  ${styles.base}
  ${({ type }) => type && styles.font[type]}
`

SubHeading.defaultProps = {
  type: 'regular',
}

export { SubHeading }
export default SubHeading
