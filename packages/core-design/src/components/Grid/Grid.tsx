import * as React from 'react'

import styles from './Grid.styles'

import { IntrinsicPropsOf } from '../../utils/types'

interface Props extends IntrinsicPropsOf<'div'> {
  children: React.ReactNode,
  className?: string,
  withGuidelines?: boolean,
}


const Grid: React.FC<Props> = props => {
  const { children, withGuidelines, ...rest } = props

  return (
    <div
      css={[
        styles.base,
        withGuidelines && styles.guidelines,
      ]}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Grid
