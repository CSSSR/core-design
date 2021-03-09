import React, { Fragment, useEffect, useState } from 'react'
import useIe11Status from '../../utils/hooks/useIe11Status'
import useMobileStatus from '../../utils/hooks/useMobileStatus'
import presets from '../../data/headerPresets'
import { HeaderProps as Props } from './types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from 'scroll-lock'
import styles from './Header.styles'

import Menu from './Menu'
import Links from './Links'
import Button from '../Button'
import ButtonLink from '../ButtonLink'

/* tslint:disable */
const Logo = require('../../static/icons/csssr_logo.svg')
const LogoSchool = require('../../static/icons/csssr_logo_school.svg')
const Burger = require('../../static/icons/header/burger.svg')
const Cross = require('../../static/icons/header/close.svg')
/* tslint:enable */

const logoHashMap = {
  default: <Logo className="logo" />,
  school: <LogoSchool className="logo logo_school" />,
}

const Header: React.FC<Props> = ({
  className,
  pathname,
  isMobile: isMobileValueFromProps,
  isIe11: isIe11ValueFromProps,
  menu: menuFromProps,
  links: linksFromProps,
  actionButton,
  logo,
  preset,
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
  const menu = menuFromProps || presets[preset]?.menu
  const links = linksFromProps || presets[preset]?.links
  const CommonHeaderContent = () => (
    <Fragment>
      {menu && <Menu isMobile={isMobile} isIe11={isIe11} pathname={pathname} menu={menu} />}
      {links && <Links links={links} pathname={pathname} />}
      {(actionButton?.isVisible || presets[preset]?.actionButton?.isVisible) &&
        (isIe11 || actionButton.href || presets[preset]?.actionButton.href ? (
          <ButtonLink
            kind="primary"
            className="button_action"
            data-testid={actionButton.testId || presets[preset]?.actionButton.testId}
            href={actionButton.href || presets[preset]?.actionButton.href}
            dangerouslySetInnerHTML={{
              __html: actionButton.text || presets[preset]?.actionButton.text,
            }}
          />
        ) : (
          <Button
            kind="primary"
            className="button_action"
            data-testid={actionButton.testId || presets[preset]?.actionButton.testId}
            onClick={actionButton.onClick}
            dangerouslySetInnerHTML={{
              __html: actionButton.text || presets[preset]?.actionButton.text,
            }}
          />
        ))}
    </Fragment>
  )

  return (
    <header data-testid="Header:block" className={className}>
      <LinkComponent
        href={logo.href || presets[preset]?.logo.href}
        className="logo-wrapper"
        data-testid={logo.testId || presets[preset]?.logo.testId}
      >
        {logoHashMap[logo.type] || logoHashMap[presets[preset]?.logo.type]}
      </LinkComponent>

      {isReady && isMobile && (
        <Fragment>
          <button
            className="burger"
            onClick={() => toggleDropdown(!isDropdownOpened)}
            data-testid="Header:button:burger"
          >
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
  preset: 'defaultEn',
}

export default styled(Header)`
  ${styles}
`
