import React, { useState } from 'react'
import { AddressesProps } from '../types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './DoubleBottom.styles'
import { ThemeProps } from '../../../themes/types'

/* tslint:disable */
const PinSingapore = require('../../../static/icons/footer/pin_singapore.svg')
const Pin = require('../../../static/icons/footer/pin.svg')
/* tslint:enable */

import Addresses from './Addresses'

export interface Props {
  className?: string
  isMobile: boolean
  addresses: AddressesProps[]
  theme?: ThemeProps
  preset?: '' | 'defaultEn' | 'defaultRu'
}

const DoubleBottom: React.FC<Props> = ({
  className,
  isMobile,
  addresses,
  preset = 'defaultEn',
}) => {
  const [hoveredAddress, setHoveredAddress] = useState(null)

  const pins =
    preset === 'defaultEn'
      ? [
          {
            id: 'singapore',
          },
          {
            id: 'estonia',
          },
        ]
      : [
          {
            id: 'russia',
          },
          {
            id: 'russia_2',
          },
        ]

  return (
    <div className={className} data-testid="Footer:block:DoubleBottom">
      <Addresses setHoveredAddress={setHoveredAddress} isMobile={isMobile} addresses={addresses} />

      <div className="map-wrapper">
        <div className="map">
          <img
            className="picture"
            srcSet="https://static.csssr.com/continents-dd5d4604@1x.png 1x, https://static.csssr.com/continents-8bb9850d@2x.png 2x, https://static.csssr.com/continents-8556bd8f@3x.png 3x"
            src="https://static.csssr.com/continents-dd5d4604@1x.png"
          />

          {pins.map(({ id }, index) => (
            <span
              key={`${id}_${index}`}
              className={cn(`pin pin_${id}`, {
                pin_hovered: id === hoveredAddress,
              })}
            >
              {id === 'singapore' ? <PinSingapore /> : <Pin />}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default styled(DoubleBottom)`
  ${styles}
`
