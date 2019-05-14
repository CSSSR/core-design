import * as React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import deafultTheme from '../../themes/deafult'

import { storiesOf } from '@storybook/react'

import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

import { SubHeading } from './SubHeading'

storiesOf('SubHeading', module).add('SubHeading', () => {
  return (
    <ThemeProvider theme={deafultTheme}>
      <Global styles={normalize} />
      <Global styles={fonts} />
      <SubHeading>SubHeading type - regular</SubHeading>
    </ThemeProvider>
  )
})
