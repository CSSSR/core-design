import React, { Fragment } from 'react'
import { MenuLinksProps } from '../../types'
import { ThemeProps } from '../../../../themes/types'
import cn from 'classnames'
import Fade from 'react-reveal/Fade'
import styled from '@emotion/styled'
import styles from './Nav.styles'

import Link from '../../../Link'
import Heading from '../../../Heading'
import Text from '../../../Text'

const Back: React.FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="ic-back">
      <path
        id="Path"
        d="M5.63445 12C5.77655 11.9936 5.90228 11.9043 5.95736 11.7707C6.01243 11.6371 5.987 11.4831 5.89204 11.3752L0.807862 6.19558C0.761042 6.1486 0.734678 6.08445 0.734678 6.01751C0.734678 5.95056 0.761042 5.88641 0.807862 5.83944L5.89204 0.641074C6.03599 0.494419 6.03599 0.256645 5.89204 0.109991C5.74808 -0.0366636 5.51469 -0.0366636 5.37074 0.109991L0.286566 5.28961C-0.0955219 5.67982 -0.0955219 6.31146 0.286566 6.70167L5.37687 11.8875C5.44481 11.9582 5.53739 11.9986 5.63445 12Z"
        fill="#7E8FA4"
      />
    </g>
  </svg>
)

export interface Props {
  className?: string
  pathname: string
  isMobile: boolean
  isIe11: boolean
  activeItem: string
  onBackButtonClick: () => void
  animationDirection: 'right' | 'left'
  menu: MenuLinksProps[]
  theme?: ThemeProps
}

const Nav: React.FC<Props> = ({
  className,
  pathname,
  isMobile,
  isIe11,
  activeItem,
  onBackButtonClick,
  animationDirection,
  menu,
}) => {
  const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
  const Wrapper = isIe11 ? Fragment : Fade
  const animationProps = isIe11
    ? {}
    : isMobile
    ? {
        right: true,
        duration: 200,
      }
    : {
        left: animationDirection === 'left',
        right: animationDirection === 'right',
        duration: 200,
        distance: '20px',
      }
  const activeItemLinks = menu.find(({ id }) => id === activeItem)?.links
  const activeItemLinksNumber = activeItemLinks && activeItemLinks.length

  return (
    <div
      className={cn(className, {
        visible: activeItem,
      })}
    >
      {isMobile && (
        <button
          className="button_back"
          onClick={onBackButtonClick}
          data-testid="Header:button:menu.back"
        >
          <Back className="icon_back" />

          {activeItem !== null && (
            <span
              dangerouslySetInnerHTML={{
                __html: menu.find(({ id }) => id === activeItem)?.title,
              }}
            />
          )}
        </button>
      )}

      <nav
        data-testid="Header:nav.dropdown"
        className={cn('nav', `nav_${activeItem}`, {
          [`nav_${activeItem}_children_number_${activeItemLinksNumber}`]: activeItemLinksNumber,
        })}
      >
        <ul>
          {activeItem &&
            activeItemLinks.map(
              ({
                id,
                testId,
                icon: Icon,
                component: Component = Link,
                title,
                description,
                href,
                target,
              }) => (
                <Wrapper key={id} {...animationProps}>
                  <li
                    className={cn('nav-item', `nav-item_${id}`, {
                      'nav-item_active': pathname === href,
                    })}
                  >
                    <div style={{ position: 'relative' }}>
                      {id === 'mediaAndMarketing' && (
                        <Heading.H3
                          type="regular"
                          dangerouslySetInnerHTML={{
                            __html: menu.find((item) => item.id === activeItem)?.listTitle,
                          }}
                          className="industry-title"
                        />
                      )}
                      <Component
                        data-testid={testId}
                        className="link"
                        href={href}
                        target={target || linkRegExp.test(href) ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                      >
                        <Icon className={cn('icon', `icon_${id}`)} />

                        <Heading
                          className="title"
                          as="div"
                          type="regular"
                          size="m"
                          dangerouslySetInnerHTML={{
                            __html: title,
                          }}
                        />

                        {description && (
                          <Text
                            className="description"
                            as="p"
                            type="regular"
                            size="m"
                            dangerouslySetInnerHTML={{ __html: description }}
                          />
                        )}
                      </Component>
                    </div>
                  </li>
                </Wrapper>
              ),
            )}
        </ul>
      </nav>
    </div>
  )
}

export default styled(Nav)`
  ${styles}
`
