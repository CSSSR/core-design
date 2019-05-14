import * as React from 'react'

import styled from '@emotion/styled'

import { Global } from '../Global'
import { Header } from '../Header'

const StyledProjectLayout = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectLayout: React.FC<{}> = props => (
  <StyledProjectLayout {...props}>
    <Global />
    <Header />
    {props.children}
  </StyledProjectLayout>
)

export { ProjectLayout }

export default ProjectLayout
