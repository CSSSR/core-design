import * as React from 'react'

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Header from './Header'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('Header', () => {
    const knobs = {
      preset: select('Preset', ['school', 'defaultEn', 'defaultRu', ''], 'defaultEn'),
      isIe11: boolean('Is IE11', false),
      isMobile: boolean('Is Mobile', false),
    }

    const actionButtonKnobs = {
      isVisible: boolean('Action Button is Visible', false),
      text: text('Action Button text', ''),
      href: text('Action Button href', ''),
      onClick: action('Action Button click'),
    }

    const logo = {
      href: text('Logo href', ''),
    }

    return (
      <Header
        {...knobs}
        logo={logo}
        actionButton={actionButtonKnobs}
        pathname={text('Pathname', '')}
      />
    )
  })
