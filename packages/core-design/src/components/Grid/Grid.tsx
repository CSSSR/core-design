import styled from '@emotion/styled'

import styles from './Grid.styles'

export interface Props {
  withGuidelines?: boolean
}

const Grid = styled.div<Props>`
  ${styles.base}
  ${({ withGuidelines }) => withGuidelines && styles.guidelines}
`

Grid.defaultProps = {
  withGuidelines: false,
} as Partial<Props>

export { Grid }

export default Grid
