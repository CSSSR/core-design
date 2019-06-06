import * as React from 'react'
import { css } from '@emotion/core'

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { AnimatedButton } from './AnimatedButton'
import { Root } from '../Root'

storiesOf('AnimatedButton', module)
  .addDecorator(withKnobs)
  .add('AnimatedButton', () => {
    const knobs = {
      status: select('status', ['pending', 'submiting', 'success', 'fail'], 'pending'),
      kind: select('kind', ['primary', 'secondary'], 'primary'),
      className: text('className', 'button'),
      disabled: boolean('disabled', false),
      children: text('children', 'Кнопка'),
      onClick: action('click'),
    }

    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <Root>
        <AnimatedButton
          {...knobs}
          css={css`
            ${cssKnob}
          `}
        />
      </Root>
    )
  })
