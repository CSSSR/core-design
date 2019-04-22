import * as React from 'react'
import { css } from '@emotion/core'
import { Button } from '@csssr/core-design'
import { ProjectLayout } from '../components/ProjectLayout'

const IndexPage = () => (
  <ProjectLayout>
    Hello world!
    
    <Button
      type="button"
      css={css`
        margin-top: 20px;
      `}
    >
      This is a button from Core Design
    </Button>
  </ProjectLayout>
)

export default IndexPage
