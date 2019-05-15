import * as React from 'react'
import styled from '@emotion/styled'

import { Grid } from '@asmy/core-design'
import Nav from '../Nav'

const OriginProjectLayout: React.FC<{}> = props => (
  <Grid {...props}>
    <Nav />
    {props.children}
  </Grid>
)

const ProjectLayout = styled(OriginProjectLayout)`
  height: 100%;
`

export { ProjectLayout }
export default ProjectLayout
