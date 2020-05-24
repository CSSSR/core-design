import { ThemeProps } from '../../themes/types'

interface LinkComponentProps {
  href?: string
  className?: string
  target?: string
  rel?: string
  type?: string
  dangerouslySetInnerHTML?: any
}

export interface MenuLinksProps {
  id: string
  testId: string
  title: string
  links: Array<{
    id: string
    testId: string
    title: string
    icon: React.ComponentType<{ className?: string }>
    component?: React.ComponentType<LinkComponentProps>
    href: string
    description?: string
    target?: string
  }>
}

export interface LinksProps {
  href: string
  title: string
  testId?: string
  component?: React.ComponentType<LinkComponentProps>
  target?: string
}

export interface HeaderProps {
  className?: string
  pathname?: string
  isMobile?: boolean
  isIe11?: boolean
  logo?: {
    href?: string
    testId?: string
    linkComponent?: React.ComponentType<LinkComponentProps>
  }
  actionButton?: {
    isVisible?: boolean
    text?: string
    testId?: string
    href?: string
    onClick?: () => void
  }
  menu?: {
    links: MenuLinksProps[]
    backButtonText: string
  }
  links?: LinksProps[]
  theme?: ThemeProps
}
