import React from 'react'
import styled from '@emotion/styled'
import { LinkComponentProps } from '../types'
import { ThemeProps } from '../../../themes/types'
import styles from './PrivacyAndLanguageLinks.styles'
import Link from '../../Link'
import Text from '../../Text'

export interface Props {
  className?: string
  languageLink: {
    href: string
    text: string
  }
  privacyPolicyLink?: {
    href: string
    text: string
    component?: React.ComponentType<LinkComponentProps>
  }
  cookiesPolicyLink?: {
    href: string
    text: string
    component?: React.ComponentType<LinkComponentProps>
  }
  theme?: ThemeProps
}

const PrivacyAndLanguageLinks: React.FC<Props> = ({
  className,
  languageLink,
  privacyPolicyLink,
  cookiesPolicyLink,
}) => {
  const PrivacyPolicyLinkComponent = (privacyPolicyLink && privacyPolicyLink.component) || Link
  const CookiesPolicyLinkComponent = (cookiesPolicyLink && cookiesPolicyLink.component) || Link

  return (
    <ul className={className}>
      <li>
        <Link className="link lng-link" href={languageLink.href}>
          <Text
            className="link-text"
            dangerouslySetInnerHTML={{ __html: languageLink.text }}
            type="perforator"
            size="s"
          />
        </Link>
      </li>

      <li>
        {privacyPolicyLink && (
          <PrivacyPolicyLinkComponent className="link" href={privacyPolicyLink.href}>
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: privacyPolicyLink.text }}
              type="perforator"
              size="s"
            />
          </PrivacyPolicyLinkComponent>
        )}

        {cookiesPolicyLink && (
          <CookiesPolicyLinkComponent className="link policy-link" href={cookiesPolicyLink.href}>
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: cookiesPolicyLink.text }}
              type="perforator"
              size="s"
            />
          </CookiesPolicyLinkComponent>
        )}
      </li>
    </ul>
  )
}

export default styled(PrivacyAndLanguageLinks)`
  ${styles}
`
