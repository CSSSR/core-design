import * as React from 'react'
import styled from '@emotion/styled'
import styles from './List.styles'

export interface Props {
  size?: 's' | 'm'
}

const ListOrigin: React.FC<Props> = props => {
  const processChild = child => React.cloneElement(child, { size: props.size })

  const children = React.Children.map(props.children, processChild)

  return (
    <ul className={props.className} {...props}>
      {children}
    </ul>
  )
}

const List = styled(ListOrigin)`
  ${styles.base}
`

List.defaultProps = {
  size: 's',
} as Props

export { List }
export default List
