import React, { useEffect, useRef, useState } from 'react'
import useMobileStatus from '../../utils/hooks/useMobileStatus'
import useIe11Status from '../../utils/hooks/useIe11Status'
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

const Footer: React.FC<Props> = ({
  className,
  isMobile: isMobileValueFromProps,
  isIe11: isIe11ValueFromProps,
  logo: logoFromProps,
  video: videoFromProps,
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
}) => {
  const [isMessageShown, setIsMessageShown] = useState(false)
  const [IsDoubleBottomVisible, setDoubleBottomVisibility] = useState(false)
  const isMobile = useMobileStatus(isMobileValueFromProps)
  const isIe11 = useIe11Status(isIe11ValueFromProps)
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

    if (window.isSecureContext) {
      navigator.clipboard.writeText(email)
      setIsMessageShown(true)
      timerFunction()
    } else {
      emailRef.current.select() // для локальной работы копирования текста
      document.execCommand('copy')
      setIsMessageShown(true)
      timerFunction()
    }
  }

  const logo = logoFromProps || presets[preset]?.logo
  const video = videoFromProps || presets[preset]?.video
  const email = emailFromProps || presets[preset]?.email
  const actionPhrase = actionPhraseFromProps || presets[preset]?.actionPhrase
  const allianceLink = allianceLinkFromProps || presets[preset]?.allianceLink
  const languageLink = languageLinkFromProps || presets[preset]?.languageLink
  const privacyPolicyLink = privacyPolicyLinkFromProps || presets[preset]?.privacyPolicyLink
  const cookiesPolicyLink = cookiesPolicyLinkFromProps || presets[preset]?.cookiesPolicyLink
  const socialLinks = socialLinksFromProps || presets[preset]?.socialLinks
  const nav = navFromProps || presets[preset]?.nav
  const addresses = addressesFromProps || presets[preset]?.addresses

  const LinkComponent = logo.linkComponent || 'a'

  return (
    <footer className={className} ref={footerRef}>
      <div className="top-content">
        <div className="top-content-left-wrapper">
          <LinkComponent className="logo" href={logo.href}>
            <Logo />
          </LinkComponent>

          {!isMobile && video.src && (
            <video className="video" autoPlay loop muted>
              <source src={video.src} type={video.type} />

              <p>{video.errorText}</p>
            </video>
          )}

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
              <Link className="email" href={`mailto:${email}`} data-testid="Footer.link.email">
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
              onClick={copyButtonClickHandler}
            >
              <CopyIcon className="copy-icon" />
            </button>

            {isMobile && (
              <Link className="link-language" href={languageLink.href}>
                <Text
                  className="link-text"
                  dangerouslySetInnerHTML={{ __html: languageLink.text }}
                  type="perforator"
                  size="s"
                />
              </Link>
            )}
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

      {IsDoubleBottomVisible && (
        <DoubleBottom isMobile={isMobile} isIe11={isIe11} addresses={addresses} />
      )}
    </footer>
  )
}

Footer.defaultProps = {
  preset: 'defaultEn',
}

export default styled(Footer)`
  ${styles}
`
