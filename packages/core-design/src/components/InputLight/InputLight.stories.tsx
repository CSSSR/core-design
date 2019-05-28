import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Root from '../Root'

import { InputLight } from './InputLight'

import { withValueState, withFocusedState, withHoveredState } from '../../hocs'

const ControllerInputLight = withValueState()(withFocusedState()(withHoveredState()(InputLight)))

storiesOf('InputLight', module)
  .addDecorator(withKnobs)
  .add('Empty', () => {
    const knobs = {
      error: boolean('error', false),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
    }

    return (
      <Root>
        <InputLight {...knobs} placeholder={'Type something...'} />
      </Root>
    )
  })
  .add('Filled', () => {
    const knobs = {
      error: boolean('error', false),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
      value: text('value', 'Awesome text'),
    }

    return (
      <Root>
        <InputLight {...knobs} />
      </Root>
    )
  })
  .add('With focus and hover', () => {
    return (
      <Root>
        <ControllerInputLight
          value="Hello world"
          placeholder={'Type something...'}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </Root>
    )
  })
