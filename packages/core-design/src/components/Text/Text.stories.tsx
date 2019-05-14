import * as React from 'react'
import { Global, css } from '@emotion/core'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { ThemeProvider } from 'emotion-theming'
import deafultTheme from '../../themes/deafult'

import { storiesOf } from '@storybook/react'
import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

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
      <ThemeProvider theme={deafultTheme}>
        <Global styles={normalize} />
        <Global styles={fonts} />
        <Text
          {...knobs}
          css={css`
            ${cssKnob}
          `}
          children={children}
        />
      </ThemeProvider>
    )
  })
