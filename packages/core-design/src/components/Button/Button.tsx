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

const Button = styled.button`
  ${styles.base}
  ${styles.font}
  ${byKind}
`

Button.defaultProps = {
  kind: 'primary',
} as Props

export { Button }

export default Button
