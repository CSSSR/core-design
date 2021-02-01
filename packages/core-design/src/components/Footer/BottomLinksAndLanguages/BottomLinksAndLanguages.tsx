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
  alliance?: {
    text: string
    title: string
    href: string
  }
  preset?: string
  languageLink: {
    text: string
    href: string
  }
  privacyPolicy?: {
    text: string
    href: string
    component?: React.ComponentType<LinkComponentProps>
  }
  cookiesPolicy?: {
    text: string
    href: string
    component?: React.ComponentType<LinkComponentProps>
  }
  theme?: ThemeProps
}

const PrivacyAndLanguageLinks: React.FC<Props> = ({
  className,
  alliance,
  languageLink,
  privacyPolicy,
  cookiesPolicy,
}) => {
  const PrivacyPolicyComponent = (privacyPolicy && privacyPolicy.component) || Link
  const CookiesPolicyComponent = (cookiesPolicy && cookiesPolicy.component) || Link

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
        {privacyPolicy && (
          <PrivacyPolicyComponent className="link" href={privacyPolicy.href}>
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: privacyPolicy.text }}
              type="perforator"
              size="s"
            />
          </PrivacyPolicyComponent>
        )}

        {alliance && (
          <a
            className="link alliance"
            href="https://frontend.digital"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="Footer:link.aliance-digital"
          >
            <Text
              className="link-text alliance-text"
              dangerouslySetInnerHTML={{ __html: alliance.text }}
              type="perforator"
              size="s"
            />
            <Icon className="alliance-icon" />
            <Text
              className="link-text alliance-link"
              dangerouslySetInnerHTML={{ __html: alliance.title }}
              type="perforator"
              size="s"
            />
          </a>
        )}

        {cookiesPolicy && (
          <CookiesPolicyComponent className="link policy-link" href={cookiesPolicy.href}>
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: cookiesPolicy.text }}
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
