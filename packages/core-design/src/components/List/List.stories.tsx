import * as React from 'react'
import { css } from '@emotion/core'

import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { List } from './List'
import { ListItem } from './ListItem'
import { Root } from '../Root'

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('One item', () => {
    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <Root>
        <List
          css={css`
            ${cssKnob}
          `}
        >
          <ListItem>Item 1</ListItem>
        </List>
      </Root>
    )
  })
  .add('Three items', () => {
    const cssKnob = text('CSS', 'width: 120px;')

    return (
      <Root>
        <List
          css={css`
            ${cssKnob}
          `}
        >
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
      </Root>
    )
  })
  .add('Big items', () => {
    const cssKnob = text('CSS', 'width: 240px;')

    return (
      <Root>
        <List
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
      </Root>
    )
  })
