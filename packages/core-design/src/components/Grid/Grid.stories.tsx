import * as React from 'react'
import { css } from '@emotion/core'

import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Grid } from './Grid'
import { Root } from '../Root'

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('Grid', () => {
    const knobs = {
      withGuidelines: boolean('withGuidelines', true),
    }

    const cssKnob = text('CSS', 'height: 100vh;')

    return (
      <Root>
        <Grid
          {...knobs}
          css={css`
            ${cssKnob}
          `}
        />
      </Root>
    )
  })
