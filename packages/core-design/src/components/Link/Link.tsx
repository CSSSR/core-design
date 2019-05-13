import * as React from 'react'
import { PropsOf } from '@emotion/styled-base/types/helper'

import styled from '@emotion/styled'
import styles from './Link.styles'

export interface Props {
  type: keyof typeof styles['font']
  size: 's' | 'm' | 'l'
  external?: boolean
}

const OriginLink = styled.a<Props>`
  ${({ type, size }) => styles.font[type][size]}
`

const Link: React.FC<PropsOf<typeof OriginLink> & Props> = props => (
  <OriginLink target={props.external ? '_blank' : undefined} rel="nooper" {...props} />
)

export { Link }
export default Link
