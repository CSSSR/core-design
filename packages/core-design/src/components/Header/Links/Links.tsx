import React from 'react'
import { LinksProps } from '../types'
import { ThemeProps } from '../../../themes/types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Links.styles'
import Link from '../../Link'

export interface Props {
  className?: string
  pathname?: string
  links: LinksProps[]
  theme?: ThemeProps
}

const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
const Links: React.FC<Props> = ({ className, pathname, links }) => (
  <ul className={className}>
    {links.map(({ title, href, testId, target, component: Component = Link }) => (
      <li key={title}>
        <Component
          data-testid={testId}
          className={cn('link', {
            link_active: pathname === href,
          })}
          href={href}
          type="top_menu"
          target={target || linkRegExp.test(href) ? '_blank' : '_self'}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </li>
    ))}
  </ul>
)

export default styled(Links)`
  ${styles}
`
