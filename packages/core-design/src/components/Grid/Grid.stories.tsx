import * as React from 'react'
import { Global, css } from '@emotion/core'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { ThemeProvider } from 'emotion-theming'
import deafultTheme from '../../themes/deafult'

import { storiesOf } from '@storybook/react'

import { normalize } from '../../styles/normalize'

import { Grid } from './Grid'

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('Grid', () => {
    const knobs = {
      withGuidelines: boolean('withGuidelines', true),
    }

    const cssKnob = text('CSS', 'height: 100vh;')

    return (
      <ThemeProvider theme={deafultTheme}>
        <Global styles={normalize} />

        <Grid
          {...knobs}
          css={css`
            ${cssKnob}
          `}
        />
      </ThemeProvider>
    )
  })
