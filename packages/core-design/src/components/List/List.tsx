import styled from '@emotion/styled'
import styles from './List.styles'

const ListOrigin = props => (
  <ul className={props.className} {...props}>
    {props.children}
  </ul>
)

const List = styled(ListOrigin)`
  ${styles.base}
`

export { List }
export default List
