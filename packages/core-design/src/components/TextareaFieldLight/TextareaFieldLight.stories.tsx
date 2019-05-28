import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import Root from '../Root'

import { withValueState } from '../../hocs/withValueState'

import { TextareaFieldLight, UncontrolledTextareaFieldLight } from '.'

const ControlledTextareaFieldLight = withValueState()(TextareaFieldLight)

storiesOf('TextareaFieldLight', module)
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    return (
      <Root>
        <ControlledTextareaFieldLight id="awesomeField" label="Name" />
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
      error: boolean('error', false),
    }

    const actions = {
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onBlur: action('onBlur'),
    }

    return (
      <Root>
        <UncontrolledTextareaFieldLight {...knobs} {...actions} />
      </Root>
    )
  })
