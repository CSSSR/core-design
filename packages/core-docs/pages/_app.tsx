import React from 'react'
import App, { Container } from 'next/app'

import { H1, H2, H3, H4, H5, H6 } from '../components/docs/Headings'
import { Paragraph } from '../components/docs/Paragraph'
import { Table } from '../components/docs/Table'
import { TableRow } from '../components/docs/TableRow'
import { Pre } from '../components/docs/Pre'
import { TD, TH } from '../components/docs/TableCells'
import { ProjectLayout } from '../components/ProjectLayout'

import { Grid } from '@asmy/core-design'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  table: Table,
  tr: TableRow,
  td: TD,
  th: TH,
  pre: Pre,
  wrapper: Grid,
}

interface Props {
  pageProps: {
    isDocsPage: boolean
  }
}

class MyApp extends App<Props> {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps: Partial<Props['pageProps']> = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    if (ctx.pathname.slice(0, 5) === '/docs') {
      pageProps.isDocsPage = true
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ProjectLayout>
          <Component components={pageProps.isDocsPage ? components : null} {...pageProps} />
        </ProjectLayout>
      </Container>
    )
  }
}

export default MyApp
