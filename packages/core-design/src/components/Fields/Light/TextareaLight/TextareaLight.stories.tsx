import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import Root from '../../../Root'

import { withValueState, withFocusedState, withHoveredState } from '../../../../hocs'

import { TextareaLight } from './TextareaLight'

const ControlledTextareaLight = withValueState()(
  withFocusedState()(withHoveredState()(TextareaLight))
)

storiesOf('TextareaLight', module)
  .addDecorator(withKnobs)

  .add('Controlled', () => {
    const actions = {
      onClick: action('onClick'),
      onBlur: action('onBlur'),
      onFocus: action('onFocus'),
      onChange: action('onChange'),
    }

    return (
      <Root>
        <ControlledTextareaLight
          value="Hello world"
          placeholder={'Type something...'}
          {...actions}
        />
      </Root>
    )
  })
  .add('Uncontrolled', () => {
    const knobs = {
      placeholder: text('placeholder', ''),
      error: boolean('error', false),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
      value: text('value', 'Awesome text'),
    }

    return (
      <Root>
        <TextareaLight {...knobs} />
      </Root>
    )
  })
