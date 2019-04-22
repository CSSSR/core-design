import * as React from 'react'
import { Text } from '@csssr/core-design'
import {  } from '@csssr/core-design'
import { css } from '@emotion/core'


interface ILogoProps {
  className?: string
}

const Logo: React.FC<ILogoProps> = props => {
  return (
    <Text 
      fontStyle='font_roboto_slab_light'
      css={css`
        margin-top: 0;
        margin-bottom: 0;
        text-transform: uppercase;
        font-size: 32px;
        line-height: 28px;
        font-weight: 600;
      `}
      {...props}
    >
      Core Design
    </Text>
  )
}

export { Logo }

export default Logo
