import * as React from 'react'

import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Header from './Header'
import { menu, links } from '../../data/headerLinks'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('Header', () => {
    const knobs = {
      isIe11: boolean('Is IE11', false),
      isMobile: boolean('Is Mobile', false),
    }
    const logoKnobs = {
      href: text('Logo href', '/'),
      testId: text('Logo test id', 'Header:link.logo'),
    }
    const actionButtonKnobs = {
      isVisible: boolean('Action Button is Visible', true),
      text: text('Action Button text', 'Default text'),
      href: text('Action Button href', '/'),
      testId: text('Action Button test id', 'Header:button.contactUs'),
      onClick: action('Action Button click'),
    }

    return (
      <Header
        {...knobs}
        logo={logoKnobs}
        actionButton={actionButtonKnobs}
        pathname="https://csssr.com/en/service/mvp-development"
        menu={{ links: menu, backButtonText: 'Our services' }}
        links={links}
      />
    )
  })
