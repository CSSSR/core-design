import React, { useState } from 'react'
import { AddressesProps } from '../types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './DoubleBottom.styles'
import { ThemeProps } from '../../../themes/types'

import Addresses from './Addresses'

const pins = [
  {
    id: 'singapore',
  },
  {
    id: 'russia',
  },
  {
    id: 'russia_2',
  },
  {
    id: 'estonia',
  },
]

export interface Props {
  className?: string
  isMobile: boolean
  isIe11: boolean
  addresses: AddressesProps[]
  theme?: ThemeProps
}

const DoubleBottom: React.FC<Props> = ({ className, isMobile, isIe11, addresses }) => {
  const [hoveredAddress, setHoveredAddress] = useState(null)

  return (
    <div className={className} data-testid="Footer:block:DoubleBottom">
      <Addresses
        setHoveredAddress={setHoveredAddress}
        isMobile={isMobile}
        isIe11={isIe11}
        addresses={addresses}
      />

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
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default styled(DoubleBottom)`
  ${styles}
`
