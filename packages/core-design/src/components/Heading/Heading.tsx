import styled from '@emotion/styled'

import styles from './Heading.styles'

export interface Props {
  fontStyle?: keyof typeof styles['font']
}

const PureHeading = styled.h1<Props>`
  ${({ fontStyle }) => styles.font[fontStyle]}
`

const subComponents = {
  H1: PureHeading.withComponent('h1'),
  H2: PureHeading.withComponent('h2'),
  H3: PureHeading.withComponent('h3'),
  H4: PureHeading.withComponent('h4'),
  H5: PureHeading.withComponent('h5'),
  H6: PureHeading.withComponent('h6'),
}

const Heading: typeof PureHeading & typeof subComponents = PureHeading as any

Object.entries(subComponents).forEach(([key, value]) => {
  Heading[key] = value
})

Heading.defaultProps = {
  fontStyle: 'font_h1_slab',
} as Partial<Props>

export { Heading }

export default Heading
