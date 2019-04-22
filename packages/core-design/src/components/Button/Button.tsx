import * as React from 'react'

import styles from './Button.styles'

import { IntrinsicPropsOf } from '../../utils/types'

interface Props extends IntrinsicPropsOf<'button'> {
  theme: 'primary' | 'secondary',
  children: React.ReactNode,
  className?: string,
  disabled?: boolean,
  onClick?: (event?: React.MouseEvent) => void,
}


const Button: React.FC<Props> = props => {
  const { children, ...rest } = props

  return (
    <button
      css={[
        styles.base, 
        styles.font, 
        styles.themes[props.theme]
      ]}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  theme: 'primary',
}

export { Button }
export default Button
