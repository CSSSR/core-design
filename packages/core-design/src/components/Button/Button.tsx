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
        color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 0px;
      `}
    >
      {children}
    </button>
  )
}

export default Button
