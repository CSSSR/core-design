import * as React from 'react'
import { css } from '@emotion/react'

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Link } from './Link'

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('Link', () => {
    const knobs = {
      type: select('type', ['list', 'top_menu', 'burger'], 'list'),
      size: select('size', ['s', 'm', 'l'], 's'),
      href: text('href', 'https://csssr.com/ru'),
      external: boolean('external', false),
      isActive: boolean('isActive', false),
    }
    const children = `Ссылка типа — ${knobs.type}, размера — ${knobs.size}`
    const cssKnob = text('CSS', 'display: inline-block;')

    return (
      <Link
        {...knobs}
        css={css`
          ${cssKnob}
        `}
        children={children}
      />
    )
  })
