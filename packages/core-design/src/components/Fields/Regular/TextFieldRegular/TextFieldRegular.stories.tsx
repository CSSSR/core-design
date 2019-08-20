import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import Root from '../../../Root'

import { withValueState, withFocusedState, withHoveredState } from '../../../../hocs'

import { TextFieldRegular } from './TextFieldRegular'

const ControlledTextFieldRegular = withValueState()(
  withFocusedState()(withHoveredState()(TextFieldRegular)),
)

storiesOf('TextFieldRegular', module)
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    return (
      <Root>
        <ControlledTextFieldRegular
          id="awesomeField"
          label="Awesome field"
          value="Hello TextFieldRegular"
          focused={true}
        />
      </Root>
    )
  })
  .add('Uncontrolled', () => {
    const knobs = {
      label: text('label', 'Awesome label'),
      value: text('value', ''),
      disabled: boolean('disabled', false),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
      fullSize: boolean('disabled', false),
      error: text('error', 'Something went wrong'),
    }

    const actions = {
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onBlur: action('onBlur'),
      onChange: action('onChange'),
    }

    return (
      <Root>
        <TextFieldRegular {...knobs} {...actions} />
      </Root>
    )
  })
