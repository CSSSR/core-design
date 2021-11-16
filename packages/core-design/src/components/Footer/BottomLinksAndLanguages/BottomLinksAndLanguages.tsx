import React from 'react'
import styled from '@emotion/styled'
import { LinkComponentProps } from '../types'
import { ThemeProps } from '../../../themes/types'
import styles from './BottomLinksAndLanguages.styles'
import Link from '../../Link'
import Text from '../../Text'

/* tslint:disable */
const Icon = require('../../../static/icons/footer/alliance.svg')
/* tslint:enable */

export interface Props {
  className?: string
  allianceLink?: {
    text: string
    title: string
    href: string
  }
  preset?: string
  languageLink: {
    text: string
    href: string
  }
  privacyPolicyLink?: {
    text: string
    href: string
    component?: React.ComponentType<LinkComponentProps>
  }
  cookiesPolicyLink?: {
    text: string
    href: string
    component?: React.ComponentType<LinkComponentProps>
  }
  theme?: ThemeProps
}

const PrivacyAndLanguageLinks: React.FC<Props> = ({
  className,
  allianceLink,
  languageLink,
  privacyPolicyLink,
  cookiesPolicyLink,
}) => {
  const PrivacyPolicyComponent = (privacyPolicyLink && privacyPolicyLink.component) || Link
  const CookiesPolicyComponent = (cookiesPolicyLink && cookiesPolicyLink.component) || Link

  return (
    <ul className={className}>
      <li>
        <Link className="link lng-link" href={languageLink.href} data-testid="Footer:link.language-link">
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
          <PrivacyPolicyComponent
            className="link"
            href={privacyPolicyLink.href}
            data-testid="Footer:link:privacyPolicy"
          >
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: privacyPolicyLink.text }}
              type="perforator"
              size="s"
            />
          </PrivacyPolicyComponent>
        )}

        {allianceLink && (
          <a
            className="link alliance"
            href="https://frontend.digital"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="Footer:link.allianceDigital"
          >
            <Text
              className="link-text alliance-text"
              dangerouslySetInnerHTML={{ __html: allianceLink.text }}
              type="perforator"
              size="s"
            />
            <Icon className="alliance-icon" />
            <Text
              className="link-text alliance-link"
              dangerouslySetInnerHTML={{ __html: allianceLink.title }}
              type="perforator"
              size="s"
            />
          </a>
        )}

        {cookiesPolicyLink && (
          <CookiesPolicyComponent
            className="link cookies-link"
            href={cookiesPolicyLink.href}
            data-testid="Footer:link:cookiesPolicy"
          >
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: cookiesPolicyLink.text }}
              type="perforator"
              size="s"
            />
          </CookiesPolicyComponent>
        )}
      </li>
    </ul>
  )
}

export default styled(PrivacyAndLanguageLinks)`
  ${styles}
`
