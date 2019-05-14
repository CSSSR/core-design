import styled from '@emotion/styled'
import styles from './Heading.styles'

export interface Props {
  type: keyof typeof styles['font']
  size: 's' | 'm' | 'l'
}

const OriginHeading = styled.h1<Props>`
  ${({ type = 'regular', size = 's' }) => styles.font[type][size]}
`

const OriginHeadings = {
  H1: OriginHeading.withComponent('h1'),
  H2: OriginHeading.withComponent('h2'),
  H3: OriginHeading.withComponent('h3'),
  H4: OriginHeading.withComponent('h4'),
  H5: OriginHeading.withComponent('h5'),
  H6: OriginHeading.withComponent('h6'),
}
const Heading: typeof OriginHeading & typeof OriginHeadings = OriginHeading as any

Object.entries(OriginHeadings).forEach(([headingTag, headingComponent]) => {
  Heading[headingTag] = headingComponent
})

export { Heading }
export default Heading
