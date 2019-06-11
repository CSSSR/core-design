import styled from '@emotion/styled'
import styles from './ListItem.styles'

export interface Props {
  size?: 's' | 'm'
}

const ListItem = styled.li<Props>`
  ${styles.base}
  ${styles.font}
`
export { ListItem }
export default ListItem
