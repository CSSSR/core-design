import * as React from 'react'

import styles from './Heading.styles'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  fontStyle?: 
    'font_h1_slab' 
    | 'font_h1_regular' 
    | 'font_h2_slab' 
    | 'font_h2_regular' 
    | 'font_h3_slab' 
    | 'font_h3_regular' 
    | 'font_subhead_slab' 
    | 'font_subhead_regular',
  className?: string,
  children: React.ReactNode,
}

const Heading: React.FC<Props> = props => {
  const { children, as, fontStyle,  ...rest } = props
  const Tag = as

  return (
    <Tag
      css={styles.font[fontStyle]}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Heading.defaultProps = {
  as: 'h1',
  fontStyle: 'font_h1_slab',
}

export default Heading
