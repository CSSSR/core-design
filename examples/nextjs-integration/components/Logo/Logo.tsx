import * as React from 'react'
import styled from '@emotion/styled'

const StyledLogo = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #2f2f2f;
`

interface ILogoProps {
  className?: string
}

const Logo: React.FC<ILogoProps> = props => {
  const { className } = props

  return <StyledLogo className={className}>Core Design</StyledLogo>
}

export { Logo }

export default Logo
