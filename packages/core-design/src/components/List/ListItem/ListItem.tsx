import styled from '@emotion/styled'
import styles from './ListItem.styles'

const ListItemOrigin = props => (
  <li className={props.className} {...props}>
    {props.children}
  </li>
)

const ListItem = styled(ListItemOrigin)`
  ${styles.base}
  ${styles.font}
`
export { ListItem }
export default ListItem
