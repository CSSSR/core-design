import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import { withValueState } from '../../../../hocs'

import { TextareaFieldRegular, UncontrolledTextareaFieldRegular } from '.'

const ControlledTextareaRegular = withValueState()(TextareaFieldRegular)

storiesOf('TextareaFieldRegular', module)
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    return (
      <ControlledTextareaRegular
        id="awesomeField"
        label="Name"
        value="Hello TextareaRegular"
        focused={true}
      />
    )
  })
  .add('Uncontrolled', () => {
    const knobs = {
      label: text('label', 'Awesome label'),
      value: text('value', 'Awesome value'),
      disabled: boolean('disabled', false),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
      error: text('error', 'Something went wrong'),
      success: boolean('success', false),
      hint: text('hint', 'Some hint'),
    }

    const actions = {
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onBlur: action('onBlur'),
    }

    return <UncontrolledTextareaFieldRegular {...knobs} {...actions} />
  })
