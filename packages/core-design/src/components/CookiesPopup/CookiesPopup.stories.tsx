import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { dataTestIds } from '../../data/cookiesPopupPresets'

import CookiesPopup from './CookiesPopup'

storiesOf('CookiesPopup', module)
  .addDecorator(withKnobs)
  .add('CookiesPopup', () => {
    const presetSelect = select('Preset', ['defaultEn', 'defaultRu', ''], 'defaultEn')
    const knobs = {
      preset: presetSelect,
    }

    const dataTestIdGroup = 'data-testid'
    const dataTestidKnobs = {
      dataTestIds: {
        blocks: {
          main: text('Component', dataTestIds.blocks.main, dataTestIdGroup),
        },
        buttons: {
          close: text('Close button', dataTestIds.buttons.close, dataTestIdGroup),
        },
        links: {
          privacyPolicy: text(
            'Privacy Policy link',
            dataTestIds.links.privacyPolicy,
            dataTestIdGroup,
          ),
          cookiesPolicy: text(
            'Cookies Policy link',
            dataTestIds.links.cookiesPolicy,
            dataTestIdGroup,
          ),
        },
      },
    }

    return <CookiesPopup {...knobs} {...dataTestidKnobs} />
  })
