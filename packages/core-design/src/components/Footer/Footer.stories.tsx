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

    const videoKnobs = {
      src: text('Video src', require(`../../static/video/camp.mp4`).default),
      type: text('Video type', 'video/mp4'),
      errorText: text('Video error text', 'This browser does not support downloading video files'),
    }

    return (
      <div style={{ marginTop: 'auto' }}>
        <Footer {...knobs} video={videoKnobs} />
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
