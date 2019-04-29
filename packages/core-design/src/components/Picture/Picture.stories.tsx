import * as React from 'react'
import { Global, css } from '@emotion/core'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { storiesOf } from '@storybook/react'

import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

import { Picture } from './Picture'

storiesOf('Picture', module)
  .addDecorator(withKnobs)
  .add('Picture', () => {
    const knobs = {
      kind: select('theme', ['primary', 'secondary'], 'primary'),
      className: text('className', 'button'),
      disabled: boolean('disabled', false),
      children: text('children', 'Кнопка'),
      onClick: action('click'),
    }

    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <>
        <Global styles={normalize} />
        <Global styles={fonts} />
        <Picture
          {...knobs}
          css={css`
            ${cssKnob}
          `}
        />
      </>
    )
  })
