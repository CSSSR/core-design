import * as React from 'react'
import { css } from '@emotion/core'

import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { PictureForAllResolutions } from './PictureForAllResolutions'
import { Root } from '../Root'

import ultramarine_desktop_all from '../../static/images/imagesForStories/desktop.all/ultramarine.png'
import ultramarine_desktop_m from '../../static/images/imagesForStories/desktop.m/ultramarine.png'
import ultramarine_desktop_s from '../../static/images/imagesForStories/desktop.s/ultramarine.png'
import ultramarine_tablet_all from '../../static/images/imagesForStories/tablet.all/ultramarine.png'
import ultramarine_mobile_all from '../../static/images/imagesForStories/mobile.all/ultramarine.png'

storiesOf('PictureForAllResolutions', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const cssKnob = text('CSS', 'width: 200px; background-color: grey;')

    return (
      <Root>
        <PictureForAllResolutions
          images={{
            'desktop.all': ultramarine_desktop_all,
            'desktop.m': ultramarine_desktop_m,
            'desktop.s': ultramarine_desktop_s,
            'tablet.all': ultramarine_tablet_all,
            'mobile.all': ultramarine_mobile_all,
          }}
          alt="Сержант Ультрамаринов"
          // image={image}
          css={css`
            ${cssKnob}
          `}
        />
      </Root>
    )
  })
