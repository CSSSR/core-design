import { useEffect, useState } from 'react'

const useMobileStatus = (isMobileValueFromProps: boolean): boolean => {
  const [isMobile, setIsMobileValue] = useState(false)

  useEffect(() => {
    if (!isMobileValueFromProps) {
      const handleMobileMediaMatch = ({ matches }: { matches: boolean }) =>
        setIsMobileValue(matches)
      const mobileMediaQuery = window.matchMedia('(max-width: 767px)')

      handleMobileMediaMatch(mobileMediaQuery)
      mobileMediaQuery.addListener(handleMobileMediaMatch)

      return () => mobileMediaQuery.removeListener(handleMobileMediaMatch)
    }

    setIsMobileValue(isMobileValueFromProps)
  })

  return isMobile
}

export default useMobileStatus
