import React from 'react'
import { NavLinksProps } from '../../types'
import { ThemeProps } from '../../../../themes/types'
import styled from '@emotion/styled'
import styles from './LinksList.styles'

import Link from '../../../Link'

export interface Props {
  className?: string
  links: NavLinksProps[]
  theme?: ThemeProps
}

const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
const LinksList: React.FC<Props> = ({ className, links }) => (
  <ul className={className}>
    {links.map(({ id, href, component: Component = Link, target, title }) => (
      <li key={id}>
        <Component
          href={href}
          className="link"
          type="list"
          size="s"
          target={target || linkRegExp.test(href) ? '_blank' : '_self'}
          rel="noopener nofollow"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </li>
    ))}
  </ul>
)

export default styled(LinksList)`
  ${styles}
`
