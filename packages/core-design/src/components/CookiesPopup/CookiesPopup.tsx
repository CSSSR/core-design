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
}

const CookiesPopup: React.FC<Props> = ({ className, preset }) => {
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

  const links = presets[preset].links

  return (
    <div className={cn(className, { hide: isHidden })}>
      <button className="close" onClick={handleClick}>
        <CrossIcon />
      </button>
      <div className="wrap">
        <Text type="regular" size="m" className="cookies-text">
          <span dangerouslySetInnerHTML={{ __html: presets[preset].text }} />

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
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
