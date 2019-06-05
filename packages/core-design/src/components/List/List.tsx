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

List.defaultProps = {
  kind: 'primary',
} as Props

export { List }
export default List
