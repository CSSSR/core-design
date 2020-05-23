import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import { withValueState, withFocusedState, withHoveredState } from '../../../../hocs'

import { TextFieldRegular } from './TextFieldRegular'

const ControlledTextFieldRegular = withValueState()(
  withFocusedState()(withHoveredState()(TextFieldRegular)),
)

storiesOf('TextFieldRegular', module)
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    return (
      <ControlledTextFieldRegular
        id="awesomeField"
        label="Awesome field"
        value="Hello TextFieldRegular"
        focused={true}
      />
    )
  })
  .add('Uncontrolled', () => {
    const knobs = {
      label: text('label', 'Awesome label'),
      value: text('value', ''),
      disabled: boolean('disabled', false),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
      fullWidth: boolean('fullWidth', false),
      fullHeight: boolean('fullHeight', false),
      error: text('error', 'Something went wrong'),
      success: boolean('success', false),
      hint: text('hint', 'Some hint'),
    }

    const actions = {
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onBlur: action('onBlur'),
      onChange: action('onChange'),
    }

    return <TextFieldRegular {...knobs} {...actions} />
  })
