import React, { useRef, useState } from 'react'
import { MenuLinksProps } from '../types'
import { ThemeProps } from '../../../themes/types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Menu.styles'

import Link from '../../Link'
import Nav from './Nav'
import ClickOutside from '../../ClickOutside/ClickOutside'

export interface Props {
  className?: string
  pathname: string
  isMobile: boolean
  isIe11: boolean
  backButtonText: string
  links: MenuLinksProps[]
  theme?: ThemeProps
}

const Menu: React.FC<Props> = ({
  className,
  isMobile,
  isIe11,
  pathname,
  backButtonText,
  links,
}) => {
  const menuRef = useRef(null)
  const [activeItem, setActiveItem] = useState(null)
  const [animationDirection, setAnimationDirection] = useState(null)

  const handleMouseOver = (item: string) => (event: any) => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    const prevActiveItemIndex: number = links.findIndex(
      ({ id }: { id: string }) => id === activeItem,
    )
    const activeItemIndex: number = links.findIndex(({ id }: { id: string }) => id === item)

    setAnimationDirection(prevActiveItemIndex < activeItemIndex ? 'right' : 'left')
    setActiveItem(item)
  }

  const handleResetActiveItem = () => setActiveItem(null)

  const handleMouseOut = (event: any) => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    if (activeItem !== null && !menuRef.current.contains(event.relatedTarget)) {
      handleResetActiveItem()
    }
  }

  const handleClick = (item: string) => (event: any) => {
    if (!isMobile) {
      event.preventDefault()
      return
    }

    setActiveItem(item)
  }

  const MenuWrapperTag = isMobile ? 'div' : 'ul'

  return (
    <ClickOutside onOutsideClick={handleResetActiveItem}>
      <div
        className={cn(className, {
          with_hidden_menu: activeItem,
        })}
        onMouseOut={handleMouseOut}
        ref={menuRef}
        data-scroll-lock-scrollable
      >
        <MenuWrapperTag className="menu">
          {links.map(({ id, title, testId }) => (
            <Link
              key={title}
              className={cn('menu-item', {
                'menu-item_active': id === activeItem,
              })}
              data-testid={testId}
              as={isMobile ? 'button' : 'li'}
              type="top_menu"
              onMouseOver={handleMouseOver(id)}
              onClick={handleClick(id)}
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          ))}
        </MenuWrapperTag>

        <Nav
          activeItem={activeItem}
          animationDirection={animationDirection}
          backButton={{ text: backButtonText, onClick: handleResetActiveItem }}
          pathname={pathname}
          links={links}
          isIe11={isIe11}
          isMobile={isMobile}
        />
      </div>
    </ClickOutside>
  )
}

export default styled(Menu)`
  ${styles}
`
