import * as React from 'react'

import styles from './ButtonLink.styles'

import { IntrinsicPropsOf } from '../../utils/types'

interface Props extends IntrinsicPropsOf<'a'> {
  theme: 'primary' | 'secondary',
  href: string,
  className?: string,
  children: React.ReactNode,
  disabled?: boolean,
  external?: boolean,

  onClick?: (event?: React.MouseEvent) => void,
}


const ButtonLink: React.FC<Props> = props => {
  const { children, external, ...rest } = props

  return (
    <a
      css={[
        styles.base, 
        styles.font, 
        styles.themes[props.theme]
      ]}
      target={external ? '_blank' : undefined}
      rel='noopener'
      {...rest}
    >
      {children}
    </a>
  )
}

ButtonLink.defaultProps = {
  theme: 'primary',
}

export default ButtonLink
