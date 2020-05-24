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
    <div className={className}>
      <Addresses
        setHoveredAddress={setHoveredAddress}
        isMobile={isMobile}
        isIe11={isIe11}
        addresses={addresses}
      />

      <div className="map-wrapper">
        <div className="map">
          {/* TODO: заменить на более надежную ссылку */}
          <img
            className="picture"
            srcSet="http://s.csssr.ru/U31J879TR/continents1x.jpg 1x, http://s.csssr.ru/U31J879TR/continents2x.jpg 2x, http://s.csssr.ru/U31J879TR/continents3x.jpg 3x"
            src="http://s.csssr.ru/U31J879TR/continents2x.jpg"
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
