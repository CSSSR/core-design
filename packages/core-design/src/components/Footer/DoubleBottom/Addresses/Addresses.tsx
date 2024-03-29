import React from 'react'
import styled from '@emotion/styled'
import styles from './Addresses.styles'
import { ThemeProps } from '../../../../themes/types'
import { AddressesProps } from '../../types'

import Heading from '../../../Heading'
import Text from '../../../Text'
import Link from '../../../Link'
import ClickOutside from '../../../ClickOutside'
import {Time} from './Time'

export interface Props {
  className?: string
  isMobile: boolean
  addresses: AddressesProps[]
  setHoveredAddress: (address: string) => void
  theme?: ThemeProps
}

const Addresses: React.FC<Props> = ({ className, isMobile, addresses, setHoveredAddress }) => {
  const handleResetHoveredAddress = () => setHoveredAddress(null)

  const handleMouseOver = (address: string) => (event: any) => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    setHoveredAddress(address)
  }

  const handleMouseOut = (event: any) => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    setHoveredAddress(null)
  }

  const textSize = isMobile ? 'm' : 's'

  return (
    <ClickOutside onOutsideClick={handleResetHoveredAddress}>
      <div className={className}>
        {addresses.map(({ id, title, address, phone, status, timeZone }, index) => (
          <div
            className={`address-item address_${id}`}
            key={`${id}_${index}`}
            onMouseOver={handleMouseOver(id)}
            onMouseLeave={handleMouseOut}
          >
            <Heading
              as="p"
              className="title"
              type="regular"
              size="s"
              dangerouslySetInnerHTML={{ __html: title }}
              data-testid={`Footer:text:address.title.${id}`}
            />

            <Text
              className="address"
              dangerouslySetInnerHTML={{ __html: address }}
              size={textSize}
              type="regular"
              data-testid={`Footer:text:address.${id}`}
            />

            {phone && (
              <Link
                className="phone"
                dangerouslySetInnerHTML={{ __html: phone }}
                href={`tel:${phone}`}
                size={textSize}
                type="list"
                data-testid={`Footer:link:address.phone.${id}`}
              />
            )}

            {status && (
              <Text
                className="status"
                dangerouslySetInnerHTML={{ __html: status }}
                type="regular"
                size={textSize}
                data-testid={`Footer:text:address.status.${id}`}
              />
            )}

            <Time
              className="time"
              timeZone={timeZone}
              textSize={textSize}
              id={id}
            />

          </div>
        ))}
      </div>
    </ClickOutside>
  )
}

export default styled(Addresses)`
  ${styles}
`
