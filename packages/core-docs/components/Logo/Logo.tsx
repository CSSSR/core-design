import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

interface ILogoProps {
  className?: string
}

const OriginLogo: React.FC<ILogoProps> = props => {
  return (
    <Link href="/">
      <a {...props}>
        Core
        <br />
        Design
      </a>
    </Link>
  )
}

const Logo = styled(OriginLogo)`
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  font-family: 'Roboto Slab', 'Georgia', serif;
  font-size: 2rem;
  line-height: 1.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 200ms ease-out;
  color: black;

  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
`

export { Logo }
export default Logo
