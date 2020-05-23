import styled from '@emotion/styled'

import styles from './Button.styles'
import { ThemeProps } from '../../themes/types'

export interface Props {
  kind: 'secondary' | 'primary' | 'third'
}

function byKind(props: Props) {
  const { kind } = props

  switch (kind) {
    case 'primary': {
      return styles.themes.primary
    }
    case 'third': {
      return styles.themes.third
    }
  }

  return styles.themes.secondary
}

const Button = styled.button<Props & ThemeProps>`
  ${styles.base}
  ${styles.font}
  ${byKind}
`

Button.defaultProps = {
  kind: 'primary',
}

export { Button }

export default Button
