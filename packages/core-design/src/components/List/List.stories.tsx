import * as React from 'react'
import { css } from '@emotion/react'

import { withKnobs, text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { List } from './List'
import { ListItem } from './ListItem'

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('Child not <ListItem />', () => {
    const sizeKnob = select('size', ['s', 'm'], 's')
    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <List
        size={sizeKnob}
        css={css`
          ${cssKnob}
        `}
      >
        <li>¯\_(ツ)_/¯</li>
      </List>
    )
  })
  .add('Three items', () => {
    const sizeKnob = select('size', ['s', 'm'], 's')
    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <List
        size={sizeKnob}
        css={css`
          ${cssKnob}
        `}
      >
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    )
  })
  .add('Big items', () => {
    const sizeKnob = select('size', ['s', 'm'], 's')
    const cssKnob = text('CSS', 'width: 240px;')

    return (
      <List
        size={sizeKnob}
        css={css`
          ${cssKnob}
        `}
      >
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus augue. Integer
          at sagittis sem.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus augue. Integer
          at sagittis sem.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus augue. Integer
          at sagittis sem.
        </ListItem>
      </List>
    )
  })
