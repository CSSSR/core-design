import * as React from 'react'
import styled from '@emotion/styled'
import styles from './List.styles'

export interface Props {
  size?: 's' | 'm'
}

const ListOrigin = styled.ul<Props>`
  ${styles.base}
`

const List = props => {
  const processChild = child => React.cloneElement(child, { size: props.size })

  const children = React.Children.map(props.children, processChild)

  return (
    <ListOrigin className={props.className} {...props}>
      {children}
    </ListOrigin>
  )
}

List.defaultProps = {
  size: 's',
} as Props

export { List }
export default List
