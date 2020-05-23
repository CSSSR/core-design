import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { InputLight } from './InputLight'

import { withValueState, withFocusedState, withHoveredState } from '../../../../hocs'

const ControllerInputLight = withValueState()(withFocusedState()(withHoveredState()(InputLight)))

storiesOf('InputLight', module)
  .addDecorator(withKnobs)
  .add('Empty', () => {
    const knobs = {
      error: text('error', 'Something went wrong'),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
    }

    return <InputLight {...knobs} placeholder={'Type something...'} />
  })
  .add('Filled', () => {
    const knobs = {
      error: text('error', 'Something went wrong'),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
      success: boolean('success', false),
      value: text('value', 'Awesome text'),
    }

    return <InputLight {...knobs} />
  })
  .add('With focus and hover', () => {
    return (
      <ControllerInputLight
        value="Hello world"
        placeholder={'Type something...'}
        onChange={action('onChange')}
        onFocus={action('onFocus')}
        onBlur={action('onBlur')}
      />
    )
  })
