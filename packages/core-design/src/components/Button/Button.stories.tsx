import * as React from 'react'
import { Global, css } from '@emotion/core'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'emotion-theming'
import deafultTheme from '../../themes/deafult'

import { storiesOf } from '@storybook/react'

import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

import { Button } from './Button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const knobs = {
      kind: select('theme', ['primary', 'secondary'], 'primary'),
      className: text('className', 'button'),
      disabled: boolean('disabled', false),
      children: text('children', 'Кнопка'),
      onClick: action('click'),
    }

    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <ThemeProvider theme={deafultTheme}>
        <Global styles={normalize} />
        <Global styles={fonts} />

        <Button
          {...knobs}
          css={css`
            ${cssKnob}
          `}
        />
      </ThemeProvider>
    )
  })
