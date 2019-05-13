import * as React from 'react'
import { Global } from '@emotion/core'

import { storiesOf } from '@storybook/react'

import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

import { SubHeading } from './SubHeading'

storiesOf('SubHeading', module).add('SubHeading', () => {
  return (
    <React.Fragment>
      <Global styles={normalize} />
      <Global styles={fonts} />
      <SubHeading>SubHeading type - regular</SubHeading>
    </React.Fragment>
  )
})