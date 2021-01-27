import * as React from 'react'
import { css } from '@emotion/react'

import { withKnobs, text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Heading } from './Heading'

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add('Heading', () => {
    const knobs = {
      type: select('type', ['slab', 'regular'], 'slab'),
      size: select('size', ['s', 'm', 'l'], 'l'),
    }
    const children = `Заголовок типа — ${knobs.type}, размера — ${knobs.size}`
    const cssKnob = text('CSS', 'display: block;')

    return (
      <Heading.H1
        {...knobs}
        css={css`
          ${cssKnob}
        `}
        children={children}
      />
    )
  })
