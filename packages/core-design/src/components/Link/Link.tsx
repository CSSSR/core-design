import * as React from 'react'
// import { PropsOf } from '@emotion/styled/base/types/helper'
import { PropsOf } from '@emotion/react'

import styled from '@emotion/styled'
import styles from './Link.styles'

export interface Props {
  type?: keyof typeof styles['font']
  size?: 's' | 'm' | 'l'
  as?: string
  isActive?: boolean
  external?: boolean
}

const OriginLink = styled.a<Props>`
  ${({ type, size }) => type && size && styles.font[type][size]}
`

const Link: React.FC<PropsOf<typeof OriginLink> & Props> = (props) => (
  <OriginLink
    target={props.external ? '_blank' : undefined}
    rel={props.external ? 'noopener noreferrer' : undefined}
    {...props}
  />
)

Link.defaultProps = {
  type: 'list',
  size: 's',
}

export { Link }
export default Link
