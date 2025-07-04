import React, { useEffect, useRef, useState } from 'react'
import useMobileStatus from '../../utils/hooks/useMobileStatus'
import presets from '../../data/footerPresets'
import { FooterProps as Props } from './types'
import styled from '@emotion/styled'
import styles from './Footer.styles'

import SocialLinks from './SocialLinks'
import BottomLinksAndLanguages from './BottomLinksAndLanguages'
import Nav from './Nav'
import DoubleBottom from './DoubleBottom'
import Link from '../Link'
import Text from '../Text'
import Heading from '../Heading'

/* tslint:disable */
const Logo = require('../../static/icons/csssr_logo.svg')
const CopyIcon = require('../../static/icons/footer/copy.svg')
/* tslint:enable */

declare const window: any

const Footer: React.FC<Props> = ({
  className,
  isMobile: isMobileValueFromProps,
  logo: logoFromProps,
  email: emailFromProps,
  actionPhrase: actionPhraseFromProps,
  allianceLink: allianceLinkFromProps,
  languageLink: languageLinkFromProps,
  privacyPolicyLink: privacyPolicyLinkFromProps,
  cookiesPolicyLink: cookiesPolicyLinkFromProps,
  socialLinks: socialLinksFromProps,
  nav: navFromProps,
  addresses: addressesFromProps,
  preset,
  baseNavUrl = '',
}) => {
  const [isMessageShown, setIsMessageShown] = useState(false)
  const [IsDoubleBottomVisible, setDoubleBottomVisibility] = useState(false)
  const isMobile = useMobileStatus(isMobileValueFromProps)
  const footerRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef(null)

  useEffect(() => {
    if (isMobile) {
      setDoubleBottomVisibility(true)

      return
    }

    const listener = () => {
      const { top, bottom, height } = footerRef.current.getBoundingClientRect()

      if (top + height < window.innerHeight && bottom >= 0) {
        if (!IsDoubleBottomVisible) {
          setDoubleBottomVisibility(true)
        }
      } else {
        if (IsDoubleBottomVisible) {
          setDoubleBottomVisibility(false)
        }
      }
    }

    listener()

    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [isMobile, IsDoubleBottomVisible])

  const copyButtonClickHandler = () => {
    function timerFunction() {
      const timer = setTimeout(() => {
        setIsMessageShown(false)
      }, 2000)
      return () => clearTimeout(timer)
    }

    const dataLayerHandler = () => {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'footer_mail_copy' })
      }
    }

    if (window.isSecureContext) {
      dataLayerHandler()
      navigator.clipboard.writeText(email)
    } else {
      dataLayerHandler()
      emailRef.current.select() // для локальной работы копирования текста
      document.execCommand('copy')
    }
    setIsMessageShown(true)
    timerFunction()
  }

  const emailLinkClickHandler = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'footer_mail_link' })
    }
  }

  const logo = logoFromProps || presets[preset]?.logo
  const email = emailFromProps || presets[preset]?.email
  const actionPhrase = actionPhraseFromProps || presets[preset]?.actionPhrase
  const allianceLink = allianceLinkFromProps || presets[preset]?.allianceLink
  const languageLink = languageLinkFromProps || presets[preset]?.languageLink
  const privacyPolicyLink = privacyPolicyLinkFromProps || presets[preset]?.privacyPolicyLink
  const cookiesPolicyLink = cookiesPolicyLinkFromProps || presets[preset]?.cookiesPolicyLink
  const socialLinks = socialLinksFromProps || presets[preset]?.socialLinks
  const nav = navFromProps || presets[preset]?.nav(baseNavUrl)
  const addresses = addressesFromProps || presets[preset]?.addresses

  const LinkComponent = logo.linkComponent || 'a'

  return (
    <footer className={className} ref={footerRef}>
      <div className="top-content">
        <div className="top-content-left-wrapper">
          <LinkComponent className="logo" href={logo.href} data-testid="Footer:link:logo">
            <Logo />
          </LinkComponent>

          <Heading
            as="p"
            className="action-phrase"
            type="regular"
            size="s"
            dangerouslySetInnerHTML={{ __html: actionPhrase }}
          />

          <div className="email-container">
            <div className="email-wrapper">
              <input className="input-email" ref={emailRef} defaultValue={email} />
              <Link
                className="email"
                href={`mailto:${email}`}
                data-testid="Footer:link:email"
                onClick={emailLinkClickHandler}
              >
                {email}
              </Link>

              {isMessageShown && (
                <Text as="span" className="copy-message">
                  {presets[preset].copyMessage}
                </Text>
              )}
            </div>

            <button
              className="copy-icon-button"
              type="button"
              disabled={isMessageShown}
              data-testid="Footer:button:copy"
              onClick={copyButtonClickHandler}
            >
              <CopyIcon className="copy-icon" />
            </button>

          </div>

          {socialLinks && <SocialLinks links={socialLinks} />}
        </div>

        {nav && <Nav nav={nav} />}
      </div>

      <div className="bottom-content">
        <BottomLinksAndLanguages
          allianceLink={allianceLink}
          languageLink={languageLink}
          privacyPolicyLink={privacyPolicyLink}
          cookiesPolicyLink={cookiesPolicyLink}
        />
      </div>

      {IsDoubleBottomVisible && <DoubleBottom isMobile={isMobile} addresses={addresses} preset={preset}/>}
    </footer>
  )
}

Footer.defaultProps = {
  preset: 'defaultEn',
}

export default styled(Footer)`
  ${styles}
`
