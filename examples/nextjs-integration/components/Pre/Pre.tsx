import * as React from 'react'
import styled from '@emotion/styled'

const StyledPre = styled.pre`
  margin-top: 0;
  grid-column: 1 / span 12;
  background-color: #f2f2f2;
`

interface IPreProps {
  className?: string,
}

const Pre: React.FC<IPreProps> = props => {
  return (
    <StyledPre {...props}>
      {props.children}
    </StyledPre>
  )
}

export { Pre }

export default Pre
