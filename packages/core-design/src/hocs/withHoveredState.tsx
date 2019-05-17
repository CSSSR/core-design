import { PureComponent } from 'react'

export type MouseEventHandler = (
  event:
    | React.MouseEvent<HTMLInputElement, MouseEvent>
    | React.MouseEvent<HTMLTextAreaElement, MouseEvent>
) => void

export interface State {
  hovered: boolean
}

export interface BaseComponentProps {
  hovered?: boolean
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}

export const withHoveredState = () => <BP extends BaseComponentProps>(
  BaseComponent: React.ComponentType<BP>
): React.ComponentClass<BP> => {
  class ComponentWithHoveredState extends PureComponent<BP, State> {
    public static defaultProps = {
      hovered: false,
    } as Partial<BP>

    public state = {
      hovered: this.props.hovered,
    }

    public handleMouseLeave: MouseEventHandler = event => {
      const onMouseLeave = this.props.onMouseLeave ? this.props.onMouseLeave : null

      this.setState(state => ({ ...state, hovered: false }))

      if (onMouseLeave) {
        onMouseLeave(event)
      }
    }

    public handleMouseEnter: MouseEventHandler = event => {
      const onMouseEnter = this.props.onMouseEnter ? this.props.onMouseEnter : null

      this.setState(state => ({ ...state, hovered: true }))

      if (onMouseEnter) {
        onMouseEnter(event)
      }
    }

    public render() {
      return (
        <BaseComponent
          {...this.props}
          hovered={this.state.hovered}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      )
    }
  }

  return ComponentWithHoveredState
}

export default withHoveredState
