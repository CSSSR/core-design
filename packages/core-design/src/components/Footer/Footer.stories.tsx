import * as React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Footer from './Footer'
import { socials, nav } from '../../data/footerLinks'
import footerAddresses from '../../data/footerAddresses'

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('Footer', () => {
    const knobs = {
      preset: select('Preset', ['defaultEn', 'defaultRu', ''], 'defaultEn'),
      isIe11: boolean('Is IE11', false),
      isMobile: boolean('Is Mobile', false),
      actionPhrase: text('Action phrase', 'Let’s work together!'),
      email: text('Email', 'launch@csssr.com'),
    }
    const logoKnobs = {
      href: text('Logo href', '/'),
    }
    const videoKnobs = {
      src: text('Video src', require(`../../static/video/camp.mp4`)),
      type: text('Video type', 'video/mp4'),
      errorText: text('Video error text', 'This browser does not support downloading video files'),
    }
    const languageLinkKnobs = {
      href: text('Language link href', 'https://csssr.com/ru'),
      text: text('Language link text', 'ru'),
    }

    return (
      <Footer
        {...knobs}
        logo={logoKnobs}
        video={videoKnobs}
        languageLink={languageLinkKnobs}
        socialLinks={socials}
        addresses={footerAddresses}
        nav={nav}
      />
    )
  })
