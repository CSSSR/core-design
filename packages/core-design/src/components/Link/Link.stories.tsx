import * as React from 'react'
import { Global, css } from '@emotion/core'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { ThemeProvider } from 'emotion-theming'
import defaultTheme from '../../themes/default'

import { storiesOf } from '@storybook/react'
import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

import { Link } from './Link'

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('Link', () => {
    const knobs = {
      type: select('type', ['list', 'top_menu', 'burger'], 'list'),
      size: select('size', ['s', 'm', 'l'], 's'),
      href: text('href', 'https://csssr.com/ru'),
      external: boolean('external', false),
    }
    const children = `Ссылка типа — ${knobs.type}, размера — ${knobs.size}`
    const cssKnob = text('CSS', 'display: inline-block;')

    return (
      <ThemeProvider theme={defaultTheme}>
        <Global styles={normalize} />
        <Global styles={fonts} />
        <Link
          {...knobs}
          css={css`
            ${cssKnob}
          `}
          children={children}
        />
      </ThemeProvider>
    )
  })
