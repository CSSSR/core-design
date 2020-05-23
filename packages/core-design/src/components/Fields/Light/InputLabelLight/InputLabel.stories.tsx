import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { InputLabelLight } from './InputLabelLight'

storiesOf('InputLabelLight', module)
  .addDecorator(withKnobs)
  .add('All (knobs)', () => {
    const knobs = {
      error: text('error', 'Something went wrong'),
    }

    return <InputLabelLight {...knobs}>Awesome Label</InputLabelLight>
  })
  .add('Default', () => {
    return <InputLabelLight>Awesome Label</InputLabelLight>
  })
  .add('Has error', () => {
    return <InputLabelLight error="Something went wrong">Awesome Label</InputLabelLight>
  })
