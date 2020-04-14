import * as React from 'react'
import { css } from '@emotion/core'

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Button } from './Button'
import { Root } from '../Root'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const knobs = {
      kind: select('theme', ['primary', 'secondary', 'third'], 'primary'),
      className: text('className', 'button'),
      disabled: boolean('disabled', false),
      children: text('children', 'Кнопка'),
      onClick: action('click'),
    }

    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <Root>
        <Button
          {...knobs}
          css={css`
            ${cssKnob}
          `}
        />
      </Root>
    )
  })
