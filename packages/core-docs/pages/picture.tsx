/* tslint:disable: no-var-requires */

import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Wrapper = styled.div`
  width: 256px;
`

const image = require('./sample/Rectangle.png?resize&sizes[]=256&sizes[]=512&sizes[]=1024')

const PicturePage = () => (
  <Wrapper>
    <pre>
      {JSON.stringify(image, null, '  ')}
    </pre>
    <img
      srcSet={image.srcSet}
      css={css`
        max-width: 100%;
        display: inline-block;
      `}
    />
  </Wrapper>
)

export { PicturePage }

export default PicturePage
