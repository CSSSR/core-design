import * as React from 'react'
import { css } from '@emotion/core'

import { withKnobs, text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Text } from './Text'

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Text', () => {
    const knobs = {
      type: select('type', ['regular', 'strong', 'perforator'], 'regular'),
      size: select('size', ['s', 'm'], 's'),
    }
    const children = `Параграф типа — ${knobs.type}, размера — ${knobs.size}`
    const cssKnob = text('CSS', 'display: block;')

    return (
      <Text
        {...knobs}
        css={css`
          ${cssKnob}
        `}
        children={children}
      />
    )
  })
