import styled from '@emotion/styled'
import { Heading as OriginHeading } from '@asmy/core-design'

const headingsWithFontStyle = {
  H1: props => <OriginHeading.H1 type="slab" size="l" {...props} />,
  H2: props => <OriginHeading.H2 type="slab" size="m" {...props} />,
  H3: props => <OriginHeading.H3 type="slab" size="s" {...props} />,
  H4: props => <OriginHeading.H4 type="slab" size="s" {...props} />,
  H5: props => <OriginHeading.H5 type="slab" size="s" {...props} />,
  H6: props => <OriginHeading.H6 type="slab" size="s" {...props} />,
}

const H1 = styled(headingsWithFontStyle.H1)`grid-column: 1 / span 12`
const H2 = styled(headingsWithFontStyle.H2)`grid-column: 1 / span 12`
const H3 = styled(headingsWithFontStyle.H3)`grid-column: 1 / span 12`
const H4 = styled(headingsWithFontStyle.H4)`grid-column: 1 / span 12`
const H5 = styled(headingsWithFontStyle.H5)`grid-column: 1 / span 12`
const H6 = styled(headingsWithFontStyle.H6)`grid-column: 1 / span 12`

export { H1, H2, H3, H4, H5, H6 }
