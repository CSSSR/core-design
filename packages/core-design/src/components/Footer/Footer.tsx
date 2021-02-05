import React, { useEffect, useRef, useState } from 'react'
import useMobileStatus from '../../utils/hooks/useMobileStatus'
import useIe11Status from '../../utils/hooks/useIe11Status'
import presets from '../../data/footerPresets'
import { FooterProps as Props } from './types'
import styled from '@emotion/styled'
// import styled from '../../utils/emotion/styled'
import styles from './Footer.styles'

import SocialLinks from './SocialLinks'
import PrivacyAndLanguageLinks from './PrivacyAndLanguageLinks'
import Nav from './Nav'
import DoubleBottom from './DoubleBottom'
import Link from '../Link'
import Text from '../Text'
import Heading from '../Heading'

import { socials, nav as defaultNav } from '../../data/footerLinks'
import footerAddresses from '../../data/footerAddresses'

/* tslint:disable */
const Logo = require('../../static/icons/csssr_logo.svg')
const CopyIcon = require('../../static/icons/footer/copy.svg')
/* tslint:enable */

const Footer: React.FC<Props> = ({
  className,
  isMobile: isMobileValueFromProps,
  isIe11: isIe11ValueFromProps,
  logo,
  video,
  email,
  actionPhrase,
  languageLink,
  privacyPolicyLink,
  cookiesPolicyLink,
  socialLinks,
  nav,
  addresses,
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
              <input className="input-email" ref={emailRef} value={email} />
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
        <PrivacyAndLanguageLinks
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
  logo: {
    href: 'https://csssr.com/en',
  },
  actionPhrase: 'Let’s work together!',
  email: 'sales@csssr.com',
  video: {
    src: 'https://static.csssr.com/camp-e1d4f932.mp4',
    type: 'video/mp4',
    errorText: 'This browser does not support downloading video files',
  },
  languageLink: {
    href: 'https://csssr.com/ru',
    text: 'ru',
  },
  privacyPolicyLink: {
    href: 'https://csssr.com/en/privacy-policy',
    text: 'Privacy policy',
  },
  cookiesPolicyLink: {
    href: 'https://csssr.com/en/cookies-policy',
    text: 'Website cookie policy',
  },
  socialLinks: socials,
  addresses: footerAddresses,
  nav: defaultNav,
  preset: '',
}

export default styled(Footer)`
  ${styles}
`
