import * as React from 'react'
import styled from '@emotion/styled'
import styles from './List.styles'
import ListItem, { Props } from './ListItem'

const ListOrigin = styled.ul`
  ${styles.base}
`

const List: React.FC<Props> = props => {
  const processChild = child => {
    if (typeof child === 'object' && child.type.isDesignCoreListItem) {
      return React.cloneElement(child, { size: child.props.size || props.size })
    }

    return child
  }

  const children = React.Children.map(props.children, processChild)

  return <ListOrigin {...props}>{children}</ListOrigin>
}

List.defaultProps = {
  size: 's',
} as Props

export { List, ListItem }
export default List
