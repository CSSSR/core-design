import { PureComponent } from 'react'

export type FocusEventHandler = (
  event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>
) => void

export interface State {
  focused: boolean
}

export interface BaseComponentProps {
  focused?: boolean
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
}

export const withFocusedState = () => <BP extends BaseComponentProps>(
  BaseComponent: React.ComponentType<BP>
): React.ComponentClass<BP> => {
  class ComponentWithFocusedState extends PureComponent<BP, State> {
    public static defaultProps = {
      focused: false,
    } as Partial<BP>

    public state = {
      focused: this.props.focused,
    }

    public handleFocus: FocusEventHandler = event => {
      const onFocus = this.props.onFocus ? this.props.onFocus : null

      this.setState(state => ({ ...state, focused: true }))

      if (onFocus) {
        onFocus(event)
      }
    }

    public handleBlur: FocusEventHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      const onBlur = this.props.onBlur ? this.props.onBlur : null

      this.setState(state => ({ ...state, focused: false }))

      if (onBlur) {
        onBlur(event)
      }
    }

    public render() {
      return (
        <BaseComponent
          {...this.props}
          focused={this.state.focused}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      )
    }
  }

  return ComponentWithFocusedState
}

export default withFocusedState
