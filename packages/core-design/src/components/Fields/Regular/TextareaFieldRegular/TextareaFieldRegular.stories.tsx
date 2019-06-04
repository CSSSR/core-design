import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import Root from '../../../Root'

import { withValueState } from '../../../../hocs'

import { TextareaFieldRegular, UncontrolledTextareaFieldRegular } from '.'

const ControlledTextFieldRegular = withValueState()(TextareaFieldRegular)

storiesOf('TextareaFieldRegular', module)
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    return (
      <Root>
        <ControlledTextFieldRegular id="awesomeField" label="Name" />
      </Root>
    )
  })
  .add('Uncontrolled', () => {
    const knobs = {
      label: text('label', 'Awesome label'),
      value: text('value', 'Awesome value'),
      disabled: boolean('disabled', false),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
      error: boolean('error', false),
    }

    const actions = {
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onBlur: action('onBlur'),
    }

    return (
      <Root>
        <UncontrolledTextareaFieldRegular {...knobs} {...actions} />
      </Root>
    )
  })
