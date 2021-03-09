import React from 'react'
import { SocialLinksProps } from '../types'
import { ThemeProps } from '../../../themes/types'
import styled from '@emotion/styled'
import styles from './SocialLinks.styles'

export interface Props {
  className?: string
  links: SocialLinksProps[]
  theme?: ThemeProps
}

const SocialLinks: React.FC<Props> = ({ className, links }) => (
  <ul className={className}>
    {links.map(({ id, href, icon: Icon }) => (
      <li key={id}>
        <a href={href} target="_blank" rel="noopener nofollow" data-testid={`Footer:link:${id}`}>
          <Icon />
        </a>
      </li>
    ))}
  </ul>
)

export default styled(SocialLinks)`
  ${styles}
`
