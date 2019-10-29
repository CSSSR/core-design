import * as React from 'react'
import styled from '@emotion/styled'
import { defaultTheme } from '@csssr/core-design'

import NavItem from './NavItem'
import Logo from '../Logo'

import componentsNames from '../../data/componentsNames'

export type Theme = typeof defaultTheme
export interface ThemeProps {
  theme: Theme
}

const OriginNav = props => (
  <nav {...props }>
    <Logo />
    <ul>
      {componentsNames.map(componentsName => <NavItem key={componentsName} componentsName={componentsName} />)}
    </ul>
  </nav>
)

const Nav = styled(OriginNav)`
  grid-column: 1 / span 3;
  height: 100vh;
  border-right: 0.0625rem solid ${(props: ThemeProps) => props.theme.colors.secondary.origin};

  ${Logo} {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    height: 5rem;
  }

  ${Logo}::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: calc(100% + 1.5rem);
    left: 0;
    display: block;
    width: 100%;
    height: 1.5rem;
    background-image: linear-gradient(to top, transparent, white);
  }

  ul {
    padding-bottom: 20rem;
    height: calc(100% - 9rem);
    overflow-y: auto;
    box-sizing: border-box;
  }
`

export { Nav }
export default Nav
