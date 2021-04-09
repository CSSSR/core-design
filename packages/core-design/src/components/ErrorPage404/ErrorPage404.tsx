import React from 'react'

import styled from '@emotion/styled'
import Grid from '../Grid'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import { ErrorPage404Props as Props } from './types'

import styles from './ErrorPage404.styles'

const ErrorPage404: React.FC<Props> = ({ className, title, subTitle, Img, children }) => {
  return (
    <Grid className={className}>
      <div className="sticky">
        <Heading
          as="h1"
          className="title"
          type="slab"
          size="l"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {Img && <Img className="picture" />}
      </div>

      <div className="content">
        <SubHeading
          as="p"
          className="subTitle"
          type="regular"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />

        <div className="children">{children}</div>
      </div>
    </Grid>
  )
}

export default styled(ErrorPage404)`
  ${styles}
`
