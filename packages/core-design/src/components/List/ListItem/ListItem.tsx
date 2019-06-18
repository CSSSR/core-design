import styled from '@emotion/styled'
import styles from './ListItem.styles'

export interface Props {
  size?: 's' | 'm'
}

const ListItem = styled.li<Props>`
    ${styles.base}
    ${styles.font}
  `

  // Нужно для проверки является ли этот компонент ListItem из CoreDesign.
  // https://overreacted.io/how-does-react-tell-a-class-from-a-function/
;(ListItem as any).isDesignCoreListItem = true

export { ListItem }
export default ListItem
