import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import { withValueState } from '../../../../hocs/withValueState'

import { TextareaFieldLight, UncontrolledTextareaFieldLight } from '.'

const ControlledTextareaFieldLight = withValueState()(TextareaFieldLight)

storiesOf('TextareaFieldLight', module)
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    return <ControlledTextareaFieldLight id="awesomeField" label="Name" />
  })
  .add('Uncontrolled', () => {
    const knobs = {
      label: text('label', 'Awesome label'),
      value: text('value', 'Awesome text'),
      placeholder: text('placeholder', 'Placeholder'),
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

    return <UncontrolledTextareaFieldLight {...knobs} {...actions} />
  })
