import styled from '@emotion/styled'
import { entries } from '../../utils/typesafe-lib'
import { DefaultProps } from '../../utils/react'
import styles from './Heading.styles'

export interface Props {
  type?: keyof typeof styles['font']
  size?: 's' | 'm' | 'l'
}

const OriginHeading = styled.h1<Props>`
  ${({ type, size }) => type && size && styles.font[type][size]}
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
const HeadingsDefaultProps: DefaultProps<Props> = {
  type: 'slab',
  size: 's',
}

entries(OriginHeadings).forEach(([headingTag, headingComponent]) => {
  Heading[headingTag] = headingComponent
  Heading[headingTag].defaultProps = HeadingsDefaultProps
})

Heading.defaultProps = HeadingsDefaultProps

export { Heading }
export default Heading
