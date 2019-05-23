import * as React from 'react'
import styled from '@emotion/styled'

import { Grid } from '@csssr/core-design'
import { css } from '@emotion/core'

import { Logo } from '../Logo'

const StyledHeader = styled.div`
  background: #ffffff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #efeaea;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5), 0 2px 24px 0 rgba(119, 122, 129, 0.05);
`

interface IHeaderProps {
  className?: string
}

const Header: React.FC<IHeaderProps> = ({ className }) => (
  <StyledHeader className={className}>
    <Grid>
      <Logo css={css` grid-column: 1 / span 2; `}/>
    </Grid>
  </StyledHeader>
)

export { Header }

export default Header
