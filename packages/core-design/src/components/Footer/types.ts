export interface LinkComponentProps {
  href?: string
  className?: string
  target?: string
  rel?: string
  type?: string
  size?: string
  dangerouslySetInnerHTML?: any
}

export interface NavLinksProps {
  id: string
  title: string
  component?: React.ComponentType<LinkComponentProps>
  href: string
  target?: string
}

export interface NavProps {
  id: string
  title: string
  links: NavLinksProps[]
}

export interface SocialLinksProps {
  id: string
  href: string
  icon: React.ComponentType<LinkComponentProps>
}

export interface AddressesProps {
  id: string
  title?: string
  address: string
  phone?: string
  status?: string
  timeZone: string
}

export interface FooterProps {
  className?: string
  isMobile?: boolean
  isIe11?: boolean
  logo?: {
    href?: string
    testId?: string
    linkComponent?: React.ComponentType<LinkComponentProps>
  }
  video?: {
    src?: string
    type?: string
    errorText?: string
  }
  email?: string
  actionPhrase?: string
  languageLink?: {
    href: string
    text: string
  }
  privacyPolicyLink?: {
    href: string
    text: string
    component?: React.ComponentType<LinkComponentProps>
  }
  cookiesPolicyLink?: {
    href: string
    text: string
    component?: React.ComponentType<LinkComponentProps>
  }
  allianceLink?: {
    text: string
    title: string
    href: string
    component?: React.ComponentType<LinkComponentProps>
  }
  socialLinks?: SocialLinksProps[]
  addresses?: AddressesProps[]
  nav?: NavProps[]
  preset?: '' | 'defaultEn' | 'defaultRu'
}
