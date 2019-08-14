import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Root from '../../../Root'
import { InputLabelLight } from './InputLabelLight'

storiesOf('InputLabelLight', module)
  .addDecorator(withKnobs)
  .add('All (knobs)', () => {
    const knobs = {
      error: text('error', 'Something went wrong'),
    }

    return (
      <Root>
        <InputLabelLight {...knobs}>Awesome Label</InputLabelLight>
      </Root>
    )
  })
  .add('Default', () => {
    return (
      <Root>
        <InputLabelLight>Awesome Label</InputLabelLight>
      </Root>
    )
  })
  .add('Has error', () => {
    return (
      <Root>
        <InputLabelLight error="Something went wrong">Awesome Label</InputLabelLight>
      </Root>
    )
  })
