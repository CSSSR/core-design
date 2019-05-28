import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Root from '../Root'

import { InputRegular } from './InputRegular'

import { withValueState, withFocusedState, withHoveredState } from '../../hocs'

const ControllerInputRegular = withValueState()(
  withFocusedState()(withHoveredState()(InputRegular))
)

storiesOf('InputRegular', module)
  .addDecorator(withKnobs)
  .add('Empty', () => {
    const knobs = {
      error: boolean('error', false),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
    }

    return (
      <Root>
        <InputRegular {...knobs} placeholder={'Type something...'} />
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
        <InputRegular {...knobs} />
      </Root>
    )
  })
  .add('With focus and hover', () => {
    return (
      <Root>
        <ControllerInputRegular
          value="Hello world"
          placeholder={'Type something...'}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </Root>
    )
  })
