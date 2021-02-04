import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import CookiesPopup from './CookiesPopup'

storiesOf('CookiesPopup', module)
  .addDecorator(withKnobs)
  .add('CookiesPopup', () => {
    const knobs = {
      preset: select('Preset', ['defaultEn', 'defaultRu', ''], 'defaultEn'),
    }

    return <CookiesPopup {...knobs} />
  })
