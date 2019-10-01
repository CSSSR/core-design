import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import Root from '../../../Root'

import { withValueState } from '../../../../hocs'

import { TextFieldLight, UncontrolledTextFieldLight } from '.'

const ControlledTextField = withValueState()(TextFieldLight)

storiesOf('TextFieldLight', module)
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    return (
      <Root>
        <ControlledTextField placeholder="Placeholder" id="awesomeField" label="Label" />
      </Root>
    )
  })
  .add('Uncontrolled', () => {
    const knobs = {
      label: text('label', 'Awesome label'),
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

    return (
      <Root>
        <UncontrolledTextFieldLight {...knobs} {...actions} />
      </Root>
    )
  })
