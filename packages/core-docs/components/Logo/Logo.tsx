import * as React from 'react'
import { Text } from '@asmy/core-design'
import { css } from '@emotion/core'
import Link from 'next/link'

interface ILogoProps {
  className?: string
}

const TextLink = Text.withComponent('a')

const Logo: React.FC<ILogoProps> = props => {
  return (
    <Link href="/">
      <TextLink
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
