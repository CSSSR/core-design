import * as React from 'react'
import { css } from '@emotion/core'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { SubHeading } from './SubHeading'
import { Root } from '../Root'

storiesOf('SubHeading', module)
  .addDecorator(withKnobs)
  .add('SubHeading', () => {
    const knobs = {
      type: select('type', ['regular', 'slab'], 'regular'),
    }
    const children = `Подзаголовок типа — ${knobs.type}`
    const cssKnob = text('CSS', 'display: block;')

    return (
      <Root>
        <SubHeading
          {...knobs}
          css={css`
            ${cssKnob}
          `}
          children={children}
        />
      </Root>
    )
  })
