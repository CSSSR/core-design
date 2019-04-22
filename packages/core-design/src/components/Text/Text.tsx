import * as React from 'react'

import styles from './Text.styles'

interface Props {
  fontStyle?: 'font_p16_regular' | 'font_roboto_slab_light' | 'font_p24_strong',
  as?: any, //!TODO: найти подходящий тип (keyof JSX.IntrinsicElements сильно нагружают систему)
  className?: string,
  children: React.ReactNode,
}


const Text: React.FC<Props> = props => {
  const { children, fontStyle, as,  ...rest } = props
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

Text.defaultProps = {
  as: 'p',
  fontStyle: 'font_p16_regular',
}

export default Text
