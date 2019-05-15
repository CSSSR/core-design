import * as React from 'react'
import { withRouter } from 'next/router'

import { Link } from '@asmy/core-design'
import NextLink from 'next/link'

const OriginNavItem = ({ componentsName, router}) => {
  const href =`/docs/${componentsName.toLowerCase()}`

  return (
    <li key={componentsName}>
      <NextLink href={href}>
        <Link type='burger' size='m' isActive={router.pathname === href}>{componentsName}</Link>
      </NextLink>
    </li>
  )
}

const NavItem = withRouter(OriginNavItem)

export { NavItem }
export default NavItem
