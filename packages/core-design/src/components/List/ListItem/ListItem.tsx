import * as React from 'react'
import styled from '@emotion/styled'
import styles from './ListItem.styles'

export interface Props {
  size?: 's' | 'm'
}

const ListItemOrigin: React.FC<Props> = props => (
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
