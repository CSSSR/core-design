import styled from '@emotion/styled'

import styles from './Button.styles'

export interface Props {
  kind: 'secondary' | 'primary'
}

function byKind(props: Props) {
  const { kind } = props

  switch (kind) {
    case 'primary': {
      return styles.themes.primary
    }
  }

  return styles.themes.secondary
}

const Button = styled.button<Props>`
  ${styles.base}
  ${styles.font}
  ${byKind}
`

Button.defaultProps = {
  kind: 'primary',
}

export { Button }

export default Button
