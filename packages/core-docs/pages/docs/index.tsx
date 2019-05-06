import * as React from 'react'
import { css } from '@emotion/core'
import * as coreExports from '@asmy/core-design'
import Link from 'next/link'

const componentsNames = [
  'Button',
  'ButtonLink',
  'Grid',
  'Text',
  'Heading',
  'Picture',
]

const  { Grid, Heading } = coreExports

const DocumentationPage = () => (
  <Grid
    css={css`
      margin-top: 20px;
    `}
  >
    <Heading.H1
      fontStyle='font_h1_slab'
      css={css` grid-column: 1 / span 12;`}
    >
      Компоненты
    </Heading.H1>

    <ul>
    {componentsNames.map(componentsName => 
      <li key={componentsName}>
        <Link href={`/docs/${componentsName.toLowerCase()}`}>
          <a>{componentsName}</a>
        </Link>
      </li>
    )}
    </ul>
  </Grid>
)

export default DocumentationPage
