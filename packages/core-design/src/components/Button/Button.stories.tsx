import * as React from 'react'
import { Global } from '@emotion/core'

import { storiesOf } from '@storybook/react'

import { normalize } from '../../utils/normalize'

import { Button } from './Button'

storiesOf('Button', module)
  .add('with text', () => (
    <>
      <Global styles={normalize} />
      <Button>Hello Button</Button>
    </>
  ))
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
