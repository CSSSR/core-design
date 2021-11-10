import React, { useEffect, useState } from 'react'
import Text from '../../../../Text'

export interface Props {
  id: string
  textSize: 'm'|'s'
  className?: string
  timeZone: string
}

export const Time: React.FC<Props> = ({ className, id, textSize, timeZone}) => {
  const [time, setTime] = useState(new Date())
  // Обновляем время раз в минуту
  const DELAY_TIME_UPDATE = 60000

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date())
    }, DELAY_TIME_UPDATE)

    return () => clearTimeout(timeout)
  })

  const getTime = () => {
    /* show only hours and minutes, use options with the default locale - use an empty array, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString */
    return time.toLocaleTimeString([], {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
    })
}

  return (
    <Text
      className={className}
      type="regular"
      size={textSize}
      data-testid={`Footer:text:address.time.${id}`}
    >
      {getTime()}
    </Text>
  )
}
