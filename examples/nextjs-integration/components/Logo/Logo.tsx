import * as React from 'react'
import { Text } from '@asmy/core-design'
import {  } from '@asmy/core-design'
import { css } from '@emotion/core'
import Link from 'next/link'


interface ILogoProps {
  className?: string
}

const TextLink = Text.withComponent('a')

const Logo: React.FC<ILogoProps> = props => {
  return (
    <Link href='/docs'>
      <TextLink 
        fontStyle='font_roboto_slab_light'
        theme={{dark: {}}}
        css={css`
          margin-top: 0;
          margin-bottom: 0;
          text-transform: uppercase;
          font-size: 32px;
          line-height: 28px;
          font-weight: 600;
          cursor: pointer;
          transition: color 200ms ease-out;

          :hover {
            color: rgba(0, 0, 0, 0.7);

          ${({ theme }) => theme.dark && css`
            color: white;
            background-color: black;
          `}
          }
        `}
        {...props}
      >
        Core Design
      </TextLink>
    </Link>
  )
}

export { Logo }

export default Logo
