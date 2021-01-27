import * as React from 'react'
import { css } from '@emotion/react'

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { AnimatedButton } from './AnimatedButton'

storiesOf('AnimatedButton', module)
  .addDecorator(withKnobs)
  .add('AnimatedButton', () => {
    const knobs = {
      status: select('status', ['pending', 'submitting', 'success', 'fail'], 'pending'),
      kind: select('kind', ['primary', 'secondary'], 'primary'),
      className: text('className', 'button'),
      testId: text('testId', 'Button:test'),
      successImgTestId: text('successImgTestId', 'Button:test.success'),
      failImgTestId: text('failImgTestId', 'Button:test.fail'),
      submittingImgTestId: text('submittingImgTestId', 'Button:test.submitting'),
      disabled: boolean('disabled', false),
      children: text('children', 'Кнопка'),
      onClick: action('click'),
    }

    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <div style={{ margin: 10 }}>
        <AnimatedButton
          {...knobs}
          css={css`
            ${cssKnob}
          `}
        />
      </div>
    )
  })
