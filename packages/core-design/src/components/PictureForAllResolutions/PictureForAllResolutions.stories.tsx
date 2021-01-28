import * as React from 'react'
import { css } from '@emotion/react'

import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { PictureForAllResolutions } from './PictureForAllResolutions'
const test = 'test'
storiesOf('PictureForAllResolutions', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const cssKnob = text('CSS', 'width: 200px; background-color: grey;')
    const image = {
      pathToImagesFolder: require.context('../../static/images/imagesForStories'),
      imageName: 'ultramarine',
      alt: 'Сержант Ультрамаринов',
      test,
    }

    return (
      <PictureForAllResolutions
        image={image}
        css={css`
          ${cssKnob}
        `}
      />
    )
  })
