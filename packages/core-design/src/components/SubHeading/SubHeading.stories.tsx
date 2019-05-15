import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { SubHeading } from './SubHeading'
import { Root } from '../Root'

storiesOf('SubHeading', module).add('SubHeading', () => {
  return (
    <Root>
      <SubHeading>SubHeading type - regular</SubHeading>
    </Root>
  )
})
