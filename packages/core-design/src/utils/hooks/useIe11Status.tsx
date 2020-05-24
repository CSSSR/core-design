import { useEffect, useState } from 'react'

const useIe11Status = (isIe11ValueFromProps: boolean): boolean => {
  const [isIe11, setIsIe11Value] = useState(false)

  useEffect(() => {
    if (!isIe11ValueFromProps) {
      setIsIe11Value(/(MSIE|Trident)/.test(window.navigator.userAgent))
    } else {
      setIsIe11Value(isIe11ValueFromProps)
    }
  })

  return isIe11
}

export default useIe11Status
