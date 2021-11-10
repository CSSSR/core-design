import * as React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { Global, css } from '@emotion/react'
import Footer from './Footer'

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('Footer', () => {
    const knobs = {
      preset: select('Preset', ['defaultEn', 'defaultRu'], 'defaultEn'),
      isIe11: boolean('Is IE11', false),
      isMobile: boolean('Is Mobile', false),
      actionPhrase: text('Action phrase', ''),
      email: text('Email', ''),
      baseNavUrl: text('baseNavUrl', 'https://csssr.com'),
    }

    return (
      <div style={{ marginTop: 'auto' }}>
        <Footer {...knobs} />
        <Global
          styles={css`
            html,
            body {
              height: 100%;
            }

            #root {
              height: 100%;
              display: flex;
              flex-direction: column;
            }
          `}
        />
      </div>
    )
  })
