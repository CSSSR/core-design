import * as React from 'react'

interface EventWithTargetAndValue<V = any> {
  target: {
    value: V
  }
}

interface BaseComponentProps<V = any> {
  onChange?: (event: EventWithTargetAndValue<V>) => any
  value?: V
}

interface EnhancedComponentState<V = any> {
  value: V
}

const withValueState = () => <V, BP extends BaseComponentProps<V>>(
  BaseComponent: React.ComponentType<BP>
): React.ComponentClass<BP> => {
  class WithValueState extends React.PureComponent<BP, EnhancedComponentState<V>> {
    public state = {
      value: this.props.value,
    }

    public handleChange = (event: EventWithTargetAndValue<V>) => {
      const { onChange } = this.props

      const newValue: V = event.target.value

      if (onChange) {
        onChange(event)
      }

      this.setState(state => ({ ...state, value: newValue }))
    }

    public render() {
      const { value } = this.state

      return React.createElement(BaseComponent, {
        ...this.props,
        value,
        onChange: this.handleChange,
      })
    }
  }

  return WithValueState
}

export { withValueState }
