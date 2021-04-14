import React from 'react'

import styled from '@emotion/styled'
import Grid from '../Grid'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import { ErrorPage404Props as Props } from './types'

import styles from './ErrorPage404.styles'

const ErrorPage404: React.FC<Props> = ({ className, title, subTitle, leftContent, children }) => {
  return (
    <Grid className={className} data-testid="ErrorPage404:block">
      <div className="sticky" data-testid="ErrorPage404:block:sticky">
        <Heading
          as="h1"
          className="title"
          type="slab"
          size="l"
          dangerouslySetInnerHTML={{ __html: title }}
          data-testid="ErrorPage404:text:title"
        />

        {leftContent && <div className="left-content">{leftContent}</div>}
      </div>

      <div className="content" data-testid="ErrorPage404:block:content">
        <SubHeading
          as="p"
          className="subTitle"
          type="regular"
          dangerouslySetInnerHTML={{ __html: subTitle }}
          data-testid="ErrorPage404:text:subTitle"
        />

        <div className="children" data-testid="ErrorPage404:block:children">
          {children}
        </div>
      </div>
    </Grid>
  )
}

export default styled(ErrorPage404)`
  ${styles}
`
