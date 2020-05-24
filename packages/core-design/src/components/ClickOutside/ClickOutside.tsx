import React, { Fragment, PureComponent } from 'react'
import { findDOMNode } from 'react-dom'

export interface Props {
  className?: string
  onOutsideClick: (event: MouseEvent | KeyboardEvent) => void
}

export default class ClickOutside extends PureComponent<Props> {
  public componentDidMount() {
    window.document.addEventListener('click', this.handleClick)
    window.document.addEventListener('touchstart', this.handleClick)
    window.document.addEventListener('keydown', this.handleKeypress)
  }

  public componentWillUnmount() {
    window.document.removeEventListener('click', this.handleClick)
    window.document.removeEventListener('touchstart', this.handleClick)
    window.document.removeEventListener('keydown', this.handleKeypress)
  }

  public handleClick = (event: MouseEvent) => {
    const target: any = event.target
    const domNode = findDOMNode(this)

    // tslint:disable-next-line
    if (target !== domNode && !domNode.contains(target)) {
      this.props.onOutsideClick(event)
    }
  }

  public handleKeypress = (event: KeyboardEvent) => {
    const TABKEY = 9
    const ESCKEY = 27

    if (event.keyCode === TABKEY || event.keyCode === ESCKEY) {
      this.props.onOutsideClick(event)
    }
  }

  public render() {
    const args = { className: this.props.className }

    return React.cloneElement(<Fragment />, args, this.props.children)
  }
}
