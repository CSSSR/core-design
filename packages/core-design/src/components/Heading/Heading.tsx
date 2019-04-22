import styled from '@emotion/styled'

import styles from './Heading.styles'

export interface Props {
  fontStyle?: keyof typeof styles['font']
}

let PureHeading = styled.h1<Props>`
  ${({ fontStyle }) => styles.font[fontStyle]}
`

const subComponents = {
  H1: PureHeading.withComponent('h1'),
  H2: PureHeading.withComponent('h2'),
  H3: PureHeading.withComponent('h3'),
  H4: PureHeading.withComponent('h4'),
  H5: PureHeading.withComponent('h5'),
}

let Heading: typeof PureHeading & typeof subComponents = PureHeading as any

for (const subComponentKey in subComponents) {
  Heading[subComponentKey] = subComponents[subComponentKey]
}

Heading.defaultProps = {
  fontStyle: 'font_h1_slab',
} as Partial<Props>

export { Heading }

export default Heading
