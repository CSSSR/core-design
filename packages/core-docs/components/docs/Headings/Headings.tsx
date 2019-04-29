import styled from '@emotion/styled'
import { Heading as OriginHeading } from '@asmy/core-design'

const headingsWithFontStyle = {
  H1: props => <OriginHeading.H1 fontStyle="font_h1_slab" {...props} />,
  H2: props => <OriginHeading.H2 fontStyle="font_h2_slab" {...props} />,
  H3: props => <OriginHeading.H3 fontStyle="font_h3_slab" {...props} />,
  H4: props => <OriginHeading.H4 fontStyle="font_h3_slab" {...props} />,
  H5: props => <OriginHeading.H5 fontStyle="font_h3_slab" {...props} />,
  H6: props => <OriginHeading.H6 fontStyle="font_h3_slab" {...props} />,
}

const H1 = styled(headingsWithFontStyle.H1)`grid-column: 1 / span 12`
const H2 = styled(headingsWithFontStyle.H2)`grid-column: 1 / span 12`
const H3 = styled(headingsWithFontStyle.H3)`grid-column: 1 / span 12`
const H4 = styled(headingsWithFontStyle.H4)`grid-column: 1 / span 12`
const H5 = styled(headingsWithFontStyle.H5)`grid-column: 1 / span 12`
const H6 = styled(headingsWithFontStyle.H6)`grid-column: 1 / span 12`

export { H1, H2, H3, H4, H5, H6 }
