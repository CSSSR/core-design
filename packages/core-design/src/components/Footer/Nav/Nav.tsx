import React from 'react'
import { NavProps } from '../types'
import styled from '@emotion/styled'
import styles from './Nav.styles'

import LinksList from './LinksList'
import Heading from '../../Heading'

export interface Props {
  className?: string
  nav: NavProps[]
}

const Nav: React.FC<Props> = ({ className, nav }) => (
  <nav className={className}>
    {nav.map(({ id, title, links }) => (
      <div key={id} className="nav-item">
        <Heading
          as="p"
          className="title"
          type="regular"
          size="s"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <LinksList links={links} />
      </div>
    ))}
  </nav>
)

export default styled(Nav)`
  ${styles}
`
