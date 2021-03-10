import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'

import Text from '../Text'
import localStorageAvailable from '../../utils/client/localStorageAvailable'
import styles from './CookiesPopup.styles'

import presets from '../../data/cookiesPopupPresets'

/* tslint:disable */
const CrossIcon = require('../../static/icons/cookiesPopup/cross_white.svg')
/* tslint:enable */

const COOKIES_POLICY_ALERT_HIDDEN = 'hidden'

export interface Props {
  className?: string
  preset?: string
  text?: string
  links?: {
    id: string
    title: string
    href: string
  }[]
  dataTestIds?: {
    blocks: {
      main: string
    }
    buttons: {
      close: string
    }
    links: {
      privacyPolicy: string
      cookiesPolicy: string
    }
  }
}

const CookiesPopup: React.FC<Props> = ({
  className,
  preset,
  links: linksFromProps,
  dataTestIds: dataTestIdsFromProps,
  text: textFromProps,
}) => {
  const [isHidden, setIsHidden] = useState(true)

  const handleClick = () => {
    if (localStorageAvailable()) {
      localStorage.setItem('cookies_policy', COOKIES_POLICY_ALERT_HIDDEN)
    }
    setIsHidden(true)
  }

  useEffect(() => {
    if (localStorageAvailable()) {
      setIsHidden(localStorage.getItem('cookies_policy') === COOKIES_POLICY_ALERT_HIDDEN)
    } else {
      setIsHidden(false)
    }
  }, [])

  const links = linksFromProps || presets[preset].links
  const dataTestIds = dataTestIdsFromProps || presets[preset].dataTestIds
  const text = textFromProps || presets[preset].text

  return (
    <div className={cn(className, { hide: isHidden })} data-testid={dataTestIds.blocks.main}>
      <button className="close" onClick={handleClick} data-testid={dataTestIds.buttons.close}>
        <CrossIcon />
      </button>
      <div className="wrap">
        <Text type="regular" size="m" className="cookies-text">
          <span dangerouslySetInnerHTML={{ __html: text }} />

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={dataTestIds.links[link.id]}
              className="cookies-link"
              dangerouslySetInnerHTML={{
                __html: link.title,
              }}
            />
          ))}
        </Text>
      </div>
    </div>
  )
}

export default styled(CookiesPopup)`
  ${styles}
`
