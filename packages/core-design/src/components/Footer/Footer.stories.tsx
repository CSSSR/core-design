import * as React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Footer from './Footer'

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('Footer', () => {
    const knobs = {
      preset: select('Preset', ['defaultEn', 'defaultRu', ''], 'defaultEn'),
      isIe11: boolean('Is IE11', false),
      isMobile: boolean('Is Mobile', false),
      actionPhrase: text('Action phrase', ''),
      email: text('Email', ''),
    }

    const videoKnobs = {
      src: text('Video src', require(`../../static/video/camp.mp4`).default),
      type: text('Video type', 'video/mp4'),
      errorText: text('Video error text', 'This browser does not support downloading video files'),
    }

    return <Footer {...knobs} video={videoKnobs} />
  })
