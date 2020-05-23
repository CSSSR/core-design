import React, { Fragment, useEffect, useRef, useState } from 'react'
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
  pathname = '',
  isMobile: isMobileValueFromProps,
  isIe11: isIe11ValueFromProps,
  menu = { links: defaultMenu, backButtonText: 'Our services' },
  links = defaultLinks,
  actionButton,
  logo,
}) => {
  const lastScrollTopValue = useRef(0)
  const [isDropdownOpened, toggleDropdown] = useState(false)
  const [isHeaderVisible, toggleHeaderVisibility] = useState(true)
  const isIe11 = useIe11Status(isIe11ValueFromProps)
  const isMobile = useMobileStatus(isMobileValueFromProps)

  useEffect(() => {
    const getVhSize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    getVhSize()
    window.addEventListener('resize', getVhSize)

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

    const handleScroll = (event: any) => {
      const headerHeight = 64
      const {
        target: { scrollingElement },
      } = event

      const isScrollingElementHtmlOrBodyNode =
        scrollingElement === document.documentElement || scrollingElement === document.body
      const scrollTopValue = isScrollingElementHtmlOrBodyNode && scrollingElement.scrollTop
      const isScrollingDown =
        scrollTopValue > lastScrollTopValue.current && scrollTopValue > headerHeight

      if (isScrollingDown) {
        if (isMobile && isDropdownOpened) {
          toggleHeaderVisibility(true)
        } else if (isHeaderVisible) {
          toggleHeaderVisibility(false)
        }
      } else {
        if (!isHeaderVisible) {
          toggleHeaderVisibility(true)
          toggleDropdown(false)
        }
      }

      lastScrollTopValue.current =
        scrollTopValue === lastScrollTopValue.current ? scrollTopValue - 1 : scrollTopValue
    }

    if (!isIe11) {
      document.addEventListener('scroll', handleScroll)

      return () => document.removeEventListener('scroll', handleScroll)
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
    <header
      data-testid="Header:block"
      className={cn(className, {
        visible: isHeaderVisible,
        invisible: !isHeaderVisible,
      })}
    >
      <LinkComponent href={logo.href} className="logo-wrapper" data-testid={logo.testId}>
        <Logo className="logo" />
      </LinkComponent>

      {isMobile ? (
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
      ) : (
        <CommonHeaderContent />
      )}
    </header>
  )
}

Header.defaultProps = {
  logo: {
    testId: 'Header:link.logo',
  },
  actionButton: {
    isVisible: true,
    text: 'Default text',
    testId: 'Header:button.contactUs',
  },
}

export default styled(Header)`
  ${styles}
`
