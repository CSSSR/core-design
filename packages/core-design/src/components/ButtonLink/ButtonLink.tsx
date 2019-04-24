import * as React from 'react'
import { PropsOf } from '@emotion/styled-base/types/helper'

import { Button, Props as ButtonProps } from '../Button'

export interface Props extends ButtonProps {
  href: string
  external?: boolean
}

const ButtonA = Button.withComponent('a')

const ButtonLink: React.FC<PropsOf<typeof ButtonA> & Props> = props => (
  <ButtonA 
    target={props.external ? '_blank' : undefined} 
    rel="nooper" 
    {...props} 
  />
)

export { ButtonLink }

export default ButtonLink
