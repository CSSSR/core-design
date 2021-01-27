import * as React from 'react'
import { css } from '@emotion/react'

import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Grid } from './Grid'

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('Grid', () => {
    const knobs = {
      withGuidelines: boolean('withGuidelines', true),
    }

    const cssKnob = text('CSS', 'height: 100vh;')

    return (
      <Grid
        {...knobs}
        css={css`
          ${cssKnob}
        `}
      />
    )
  })
