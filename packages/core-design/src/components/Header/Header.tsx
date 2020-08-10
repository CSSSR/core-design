import React, { Fragment, useEffect, useState } from 'react'
import useIe11Status from '../../utils/hooks/useIe11Status'
import useMobileStatus from '../../utils/hooks/useMobileStatus'
import { HeaderProps as Props } from './types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from 'scroll-lock'
import { menu as defaultMenu, links as defaultLinks } from '../../data/headerLinks'
import styles from './Header.styles'

import Menu from './Menu'
import Links from './Links'
import Button from '../Button'
import ButtonLink from '../ButtonLink'

/* tslint:disable */
const Logo = require('../../static/icons/csssr_logo.svg')
// import Logo from '../../static/icons/csssr_logo.svg'
const Burger = require('../../static/icons/header/burger.svg')
const Cross = require('../../static/icons/header/close.svg')
/* tslint:enable */

const Header: React.FC<Props> = ({
  className,
  pathname,
  isMobile: isMobileValueFromProps,
  isIe11: isIe11ValueFromProps,
  menu,
  links,
  actionButton,
  logo,
}) => {
  const [isDropdownOpened, toggleDropdown] = useState(false)
  const [isReady, toggleIsReady] = useState(false)
  const isIe11 = useIe11Status(isIe11ValueFromProps)
  const isMobile = useMobileStatus(isMobileValueFromProps)

  useEffect(() => {
    const getVhSize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    getVhSize()
    window.addEventListener('resize', getVhSize)
    toggleIsReady(true)

    return () => window.removeEventListener('resize', getVhSize)
  })

  useEffect(() => {
    if (isMobile) {
      if (isDropdownOpened) {
        clearQueueScrollLocks()
        disablePageScroll(document.body)
      } else {
        enablePageScroll(document.body)
      }
    }
  })

  const Icon = isDropdownOpened ? Cross : Burger
  const LinkComponent = logo.linkComponent || 'a'
  const CommonHeaderContent = () => (
    <Fragment>
      {menu && (
        <Menu
          isMobile={isMobile}
          isIe11={isIe11}
          pathname={pathname}
          links={menu.links}
          backButtonText={menu.backButtonText}
        />
      )}
      {links && <Links links={links} pathname={pathname} />}
      {actionButton.isVisible &&
        (isIe11 ? (
          <ButtonLink
            kind="primary"
            className="button_action"
            data-testid={actionButton.testId}
            href={actionButton.href}
            dangerouslySetInnerHTML={{
              __html: actionButton.text,
            }}
          />
        ) : (
          <Button
            kind="primary"
            className="button_action"
            data-testid={actionButton.testId}
            onClick={actionButton.onClick}
            dangerouslySetInnerHTML={{
              __html: actionButton.text,
            }}
          />
        ))}
    </Fragment>
  )

  return (
    <header data-testid="Header:block" className={className}>
      <LinkComponent href={logo.href} className="logo-wrapper" data-testid={logo.testId}>
        <Logo className="logo" />
      </LinkComponent>

      {isReady && isMobile && (
        <Fragment>
          <button className="burger" onClick={() => toggleDropdown(!isDropdownOpened)}>
            <Icon />
          </button>

          <div
            className={cn('dropdown', {
              dropdown_closed: !isDropdownOpened,
            })}
            data-scroll-lock-scrollable
          >
            <CommonHeaderContent />
          </div>
        </Fragment>
      )}

      {isReady && !isMobile && <CommonHeaderContent />}
    </header>
  )
}

Header.defaultProps = {
  logo: {
    testId: 'Header:link.logo',
    href: 'https://csssr.com/en',
  },
  actionButton: {
    isVisible: true,
    text: 'Default text',
    testId: 'Header:button.contactUs',
  },
  menu: { links: defaultMenu, backButtonText: 'Our services' },
  links: defaultLinks,
  pathname: '',
}

export default styled(Header)`
  ${styles}
`
