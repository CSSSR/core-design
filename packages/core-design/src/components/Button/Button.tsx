import * as React from 'react'

import { css } from '@emotion/core'

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
    something?: string
  }

const Button: React.FC<IProps> = props => {
  const { children, ...rest } = props

  return (
    <button
      {...rest}
      css={css`
        background-color: #0072bc;
        border: none;
        box-sizing: border-box;
        outline: none;
        color: white;
        padding: .5rem 1.5rem;
      `}
    >
      {children}
    </button>
  )
}

export { Button }

export default Button
