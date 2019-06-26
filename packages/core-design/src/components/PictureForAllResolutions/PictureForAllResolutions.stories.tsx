import * as React from 'react'
import { css } from '@emotion/core'

import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { PictureForAllResolutions } from './PictureForAllResolutions'
import { Root } from '../Root'

storiesOf('PictureForAllResolutions', module)
  .addDecorator(withKnobs)
  .add('PictureForAllResolutions', () => {
    const cssKnob = text('CSS', 'width: 200px; background-color: grey;')
    const image = {
      pathToImagesFolder: './imagesForStories',
      imageName: 'ultramarine',
      alt: 'Сержант Ультрамаринов',
    }

    return (
      <Root>
        <PictureForAllResolutions
          image={image}
          css={css`
            ${cssKnob}
          `}
        />
      </Root>
    )
  })
