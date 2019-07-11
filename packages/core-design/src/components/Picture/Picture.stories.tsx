import * as React from 'react'
import { css } from '@emotion/core'

import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Picture } from './Picture'
import { Root } from '../Root'

storiesOf('Picture', module)
  .addDecorator(withKnobs)
  .add('Picture', () => {
    const knobs = {
      src: text(
        'src',
        'https://i.pinimg.com/originals/34/97/32/349732bbec7c5e2a9a55996f84a5bde1.png',
      ),
    }

    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <Root>
        <Picture
          {...knobs}
          css={css`
            ${cssKnob}
          `}
        />
      </Root>
    )
  })
